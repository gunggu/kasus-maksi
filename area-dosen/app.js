const payloads=['data/kasus-1.enc.json','data/kasus-2.enc.json'];
let guides=[];
const $=s=>document.querySelector(s);
const enc=new TextEncoder(),dec=new TextDecoder();
function b64(s){const b=atob(s),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a}
async function decryptPayload(payload,password){
  const material=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:b64(payload.salt),iterations:payload.iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
  const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64(payload.iv)},key,b64(payload.ciphertext));
  return dec.decode(plain);
}
function inline(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')}
function markdown(md){
  const lines=md.replace(/\r/g,'').split('\n');let html='',ul=false,ol=false,quote=false;
  const close=()=>{if(ul){html+='</ul>';ul=false}if(ol){html+='</ol>';ol=false}if(quote){html+='</blockquote>';quote=false}};
  for(const raw of lines){const line=raw.trimEnd();
    if(!line.trim()){close();continue}
    let m;
    if((m=line.match(/^(#{1,3})\s+(.+)$/))){close();const n=m[1].length;html+=`<h${n}>${inline(m[2])}</h${n}>`;continue}
    if(line.startsWith('> ')){if(ul||ol){close()}if(!quote){html+='<blockquote>';quote=true}html+=`<p>${inline(line.slice(2))}</p>`;continue}else if(quote){html+='</blockquote>';quote=false}
    if((m=line.match(/^[-*]\s+(.+)$/))){if(ol){html+='</ol>';ol=false}if(!ul){html+='<ul>';ul=true}html+=`<li>${inline(m[1])}</li>`;continue}
    if((m=line.match(/^\d+\.\s+(.+)$/))){if(ul){html+='</ul>';ul=false}if(!ol){html+='<ol>';ol=true}html+=`<li>${inline(m[1])}</li>`;continue}
    close();html+=`<p>${inline(line)}</p>`;
  }close();return html
}
async function unlock(password){
  const data=await Promise.all(payloads.map(p=>fetch(p,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Materi terenkripsi tidak dapat dimuat.');return r.json()})));
  const first=await decryptPayload(data[0],password);
  const second=await decryptPayload(data[1],password);
  guides=[first,second];
}
function showGuide(i){document.querySelectorAll('.tabs button').forEach((b,j)=>b.classList.toggle('active',i===j));$('#guide').innerHTML=markdown(guides[i]||'')}
$('#unlockForm').addEventListener('submit',async e=>{e.preventDefault();const status=$('#status'),btn=e.submitter,p=$('#password').value;status.textContent='Membuka materi…';status.className='status';btn.disabled=true;try{await unlock(p);$('#login').hidden=true;$('#teacherArea').hidden=false;showGuide(0);$('#password').value=''}catch(err){guides=[];status.textContent='Sandi tidak sesuai atau materi gagal didekripsi.';status.className='status error'}finally{btn.disabled=false}});
$('#togglePassword').onclick=()=>{const p=$('#password');p.type=p.type==='password'?'text':'password';$('#togglePassword').textContent=p.type==='password'?'Lihat':'Sembunyikan'};
document.querySelectorAll('.tabs button').forEach((b,i)=>b.onclick=()=>showGuide(i));
$('#lock').onclick=()=>{guides=[];$('#guide').replaceChildren();$('#teacherArea').hidden=true;$('#login').hidden=false;$('#status').textContent='';$('#password').focus()};