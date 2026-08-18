import { DurableObject } from 'cloudflare:workers';

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store, no-cache, must-revalidate',
    'x-content-type-options': 'nosniff'
  }
});

export class CaseState extends DurableObject {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/status') {
      const enabled = (await this.ctx.storage.get('case2_enabled')) === true;
      const activatedAt = await this.ctx.storage.get('case2_activated_at');
      return json({ enabled, activatedAt: activatedAt || null });
    }

    if (request.method === 'POST' && url.pathname === '/enable') {
      const now = new Date().toISOString();
      await this.ctx.storage.put({ case2_enabled: true, case2_activated_at: now });
      return json({ enabled: true, activatedAt: now });
    }

    if (request.method === 'POST' && url.pathname === '/disable') {
      await this.ctx.storage.put({ case2_enabled: false, case2_activated_at: null });
      return json({ enabled: false, activatedAt: null });
    }

    return json({ error: 'Not found' }, 404);
  }
}

function stateStub(env) {
  const id = env.CASE_STATE.idFromName('kasus-2-global');
  return env.CASE_STATE.get(id);
}

async function sameSecret(input, expected) {
  if (typeof input !== 'string' || typeof expected !== 'string' || !expected) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(input)),
    crypto.subtle.digest('SHA-256', enc.encode(expected))
  ]);
  const aa = new Uint8Array(a), bb = new Uint8Array(b);
  if (aa.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < aa.length; i++) diff |= aa[i] ^ bb[i];
  return diff === 0;
}

async function readPassword(request) {
  const type = request.headers.get('content-type') || '';
  if (!type.includes('application/json')) return null;
  const body = await request.json().catch(() => null);
  return body && typeof body.password === 'string' ? body.password : null;
}

async function getStatus(env) {
  const response = await stateStub(env).fetch('https://case-state/status');
  if (!response.ok) return { enabled: false, activatedAt: null };
  return response.json();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/case2-status' && request.method === 'GET') {
      return stateStub(env).fetch('https://case-state/status');
    }

    if (url.pathname === '/api/case2-activate' && request.method === 'POST') {
      if (!env.CASE2_ACTIVATION_SECRET) {
        return json({ error: 'Secret aktivasi belum dikonfigurasi pada Cloudflare Worker.' }, 503);
      }
      const password = await readPassword(request);
      if (!(await sameSecret(password, env.CASE2_ACTIVATION_SECRET))) {
        return json({ error: 'Sandi aktivasi tidak sesuai.' }, 401);
      }
      return stateStub(env).fetch('https://case-state/enable', { method: 'POST' });
    }

    if (url.pathname === '/api/case2-deactivate' && request.method === 'POST') {
      if (!env.CASE2_ACTIVATION_SECRET) {
        return json({ error: 'Secret aktivasi belum dikonfigurasi pada Cloudflare Worker.' }, 503);
      }
      const password = await readPassword(request);
      if (!(await sameSecret(password, env.CASE2_ACTIVATION_SECRET))) {
        return json({ error: 'Sandi aktivasi tidak sesuai.' }, 401);
      }
      return stateStub(env).fetch('https://case-state/disable', { method: 'POST' });
    }

    if (url.pathname === '/kasus-2-coretax' || url.pathname.startsWith('/kasus-2-coretax/')) {
      const { enabled } = await getStatus(env);
      if (!enabled) {
        const home = new URL('/', request.url);
        home.searchParams.set('kasus2', 'belum-aktif');
        return Response.redirect(home.toString(), 302);
      }
    }

    return env.ASSETS.fetch(request);
  }
};
