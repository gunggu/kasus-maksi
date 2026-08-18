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

async function getSecretBinding(binding) {
  if (!binding) return null;
  if (typeof binding === 'string') return binding;
  if (typeof binding.get === 'function') {
    try {
      const value = await binding.get();
      return typeof value === 'string' ? value : null;
    } catch { return null; }
  }
  return null;
}

const b64url = bytes => {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
};

async function hmac(secret, text) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64url(new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(text))));
}

async function makeInstructorToken(secret) {
  const payload = btoa(JSON.stringify({ exp: Date.now() + 2 * 60 * 60 * 1000, role: 'instructor' }))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  return `${payload}.${await hmac(secret, payload)}`;
}

async function verifyInstructorToken(request, secret) {
  if (!secret) return false;
  const auth = request.headers.get('authorization') || '';
  if (!auth.startsWith('Bearer ')) return false;
  const token = auth.slice(7);
  const [payload, sig] = token.split('.');
  if (!payload || !sig || sig !== await hmac(secret, payload)) return false;
  try {
    const padded = payload.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - payload.length % 4) % 4);
    const data = JSON.parse(atob(padded));
    return data.role === 'instructor' && Number(data.exp) > Date.now();
  } catch { return false; }
}

function safeText(value, max = 80) {
  return String(value || '').trim().replace(/[<>\x00-\x1F]/g, '').slice(0, max);
}

function safeFilename(name) {
  return safeText(name, 120).replace(/[^A-Za-z0-9._()\- ]/g, '_').replace(/\s+/g, '_');
}

function contentDisposition(name) {
  const fallback = safeFilename(name) || 'presentasi.pptx';
  return `attachment; filename="${fallback.replace(/"/g, '')}"`;
}

async function handleUpload(request, env) {
  if (!env.PRESENTATIONS) return json({ error: 'Workers KV untuk presentasi belum dikonfigurasi.' }, 503);
  const form = await request.formData().catch(() => null);
  if (!form) return json({ error: 'Form unggahan tidak valid.' }, 400);
  const caseId = safeText(form.get('caseId'), 12);
  const group = safeText(form.get('group'), 80);
  const members = safeText(form.get('members'), 240);
  const file = form.get('file');
  if (!['case1', 'case2'].includes(caseId)) return json({ error: 'Kasus tidak valid.' }, 400);
  if (!group) return json({ error: 'Nama/nomor kelompok wajib diisi.' }, 400);
  if (!(file instanceof File)) return json({ error: 'Berkas presentasi wajib dipilih.' }, 400);
  const lower = file.name.toLowerCase();
  if (!(lower.endsWith('.ppt') || lower.endsWith('.pptx'))) return json({ error: 'Hanya berkas .ppt atau .pptx yang diizinkan.' }, 400);
  if (file.size > 20 * 1024 * 1024) return json({ error: 'Ukuran maksimum berkas adalah 20 MB.' }, 413);
  if (caseId === 'case2') {
    const { enabled } = await getStatus(env);
    if (!enabled) return json({ error: 'Kasus 2 belum diaktifkan.' }, 403);
  }
  const uploadedAt = new Date().toISOString();
  const originalName = safeFilename(file.name);
  const key = `submission:${caseId}:${uploadedAt.replace(/[:.]/g, '-')}:${safeFilename(group)}:${crypto.randomUUID()}`;
  const metadata = { originalName, group, members, caseId, uploadedAt, size: file.size, contentType: file.type || 'application/octet-stream' };
  const bytes = await file.arrayBuffer();
  await env.PRESENTATIONS.put(key, bytes, { metadata });
  return json({ ok: true, key, uploadedAt, filename: originalName });
}

async function listSubmissions(env) {
  if (!env.PRESENTATIONS) return json({ error: 'Workers KV untuk presentasi belum dikonfigurasi.' }, 503);
  let cursor;
  const items = [];
  do {
    const result = await env.PRESENTATIONS.list({ prefix: 'submission:', limit: 1000, cursor });
    for (const k of result.keys) {
      const m = k.metadata || {};
      items.push({ key: k.name, ...m });
    }
    cursor = result.list_complete ? undefined : result.cursor;
  } while (cursor && items.length < 5000);
  items.sort((a, b) => new Date(b.uploadedAt || 0) - new Date(a.uploadedAt || 0));
  return json({ items, truncated: Boolean(cursor) });
}

async function downloadSubmission(request, env) {
  if (!env.PRESENTATIONS) return json({ error: 'Workers KV untuk presentasi belum dikonfigurasi.' }, 503);
  const key = new URL(request.url).searchParams.get('key');
  if (!key || !key.startsWith('submission:')) return json({ error: 'Key berkas tidak valid.' }, 400);
  const data = await env.PRESENTATIONS.getWithMetadata(key, { type: 'arrayBuffer' });
  if (!data.value) return json({ error: 'Berkas tidak ditemukan.' }, 404);
  const m = data.metadata || {};
  const headers = new Headers();
  headers.set('content-type', m.contentType || 'application/octet-stream');
  headers.set('content-disposition', contentDisposition(m.originalName || 'presentasi.pptx'));
  headers.set('content-length', String(m.size || data.value.byteLength));
  headers.set('cache-control', 'private, no-store');
  headers.set('x-content-type-options', 'nosniff');
  return new Response(data.value, { headers });
}

async function deleteSubmission(request, env) {
  if (!env.PRESENTATIONS) return json({ error: 'Workers KV untuk presentasi belum dikonfigurasi.' }, 503);
  const key = new URL(request.url).searchParams.get('key');
  if (!key || !key.startsWith('submission:')) return json({ error: 'Key berkas tidak valid.' }, 400);
  const existing = await env.PRESENTATIONS.get(key, { type: 'arrayBuffer' });
  if (!existing) return json({ error: 'Berkas tidak ditemukan atau sudah dihapus.' }, 404);
  await env.PRESENTATIONS.delete(key);
  return json({ ok: true, deleted: key });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/case2-status' && request.method === 'GET') {
      return stateStub(env).fetch('https://case-state/status');
    }

    if (url.pathname === '/api/case2-activate' && request.method === 'POST') {
      const activationSecret = await getSecretBinding(env.CASE2_ACTIVATION_SECRET);
      if (!activationSecret) return json({ error: 'Secret aktivasi belum dikonfigurasi pada Cloudflare Worker.' }, 503);
      const password = await readPassword(request);
      if (!(await sameSecret(password, activationSecret))) return json({ error: 'Sandi aktivasi tidak sesuai.' }, 401);
      return stateStub(env).fetch('https://case-state/enable', { method: 'POST' });
    }

    if (url.pathname === '/api/case2-deactivate' && request.method === 'POST') {
      const activationSecret = await getSecretBinding(env.CASE2_ACTIVATION_SECRET);
      if (!activationSecret) return json({ error: 'Secret aktivasi belum dikonfigurasi pada Cloudflare Worker.' }, 503);
      const password = await readPassword(request);
      if (!(await sameSecret(password, activationSecret))) return json({ error: 'Sandi aktivasi tidak sesuai.' }, 401);
      return stateStub(env).fetch('https://case-state/disable', { method: 'POST' });
    }

    if (url.pathname === '/api/submissions/upload' && request.method === 'POST') return handleUpload(request, env);

    if (url.pathname === '/api/instructor-login' && request.method === 'POST') {
      const instructorSecret = await getSecretBinding(env.INSTRUCTOR_ACCESS_SECRET);
      if (!instructorSecret) return json({ error: 'Secret akses dosen belum dikonfigurasi.' }, 503);
      const password = await readPassword(request);
      if (!(await sameSecret(password, instructorSecret))) return json({ error: 'Sandi dosen tidak sesuai.' }, 401);
      return json({ token: await makeInstructorToken(instructorSecret), expiresIn: 7200 });
    }

    if (url.pathname === '/api/submissions/list' && request.method === 'GET') {
      const secret = await getSecretBinding(env.INSTRUCTOR_ACCESS_SECRET);
      if (!(await verifyInstructorToken(request, secret))) return json({ error: 'Akses dosen diperlukan.' }, 401);
      return listSubmissions(env);
    }

    if (url.pathname === '/api/submissions/download' && request.method === 'GET') {
      const secret = await getSecretBinding(env.INSTRUCTOR_ACCESS_SECRET);
      if (!(await verifyInstructorToken(request, secret))) return json({ error: 'Akses dosen diperlukan.' }, 401);
      return downloadSubmission(request, env);
    }

    if (url.pathname === '/api/submissions/delete' && request.method === 'DELETE') {
      const secret = await getSecretBinding(env.INSTRUCTOR_ACCESS_SECRET);
      if (!(await verifyInstructorToken(request, secret))) return json({ error: 'Akses dosen diperlukan.' }, 401);
      return deleteSubmission(request, env);
    }

    if (url.pathname === '/panduan-mahasiswa/data/kasus-2.txt') {
      const { enabled } = await getStatus(env);
      if (!enabled) return json({ error: 'Panduan Kasus 2 belum diaktifkan.' }, 403);
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
