const payloads=['data/kasus-1.enc.json?v=20260807-2','data/kasus-2.enc.json?v=20260807-2'];
let guides=[];
let instructorToken=null;
let instructorSessionError='';
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
  for(const raw of lines){const line=raw.trimEnd();if(!line.trim()){close();continue}let m;
    if((m=line.match(/^(#{1,3})\s+(.+)$/))){close();const n=m[1].length;html+=`<h${n}>${inline(m[2])}</h${n}>`;continue}
    if(line.startsWith('> ')){if(ul||ol)close();if(!quote){html+='<blockquote>';quote=true}html+=`<p>${inline(line.slice(2))}</p>`;continue}else if(quote){html+='</blockquote>';quote=false}
    if((m=line.match(/^[-*]\s+(.+)$/))){if(ol){html+='</ol>';ol=false}if(!ul){html+='<ul>';ul=true}html+=`<li>${inline(m[1])}</li>`;continue}
    if((m=line.match(/^\d+\.\s+(.+)$/))){if(ul){html+='</ul>';ul=false}if(!ol){html+='<ol>';ol=true}html+=`<li>${inline(m[1])}</li>`;continue}
    close();html+=`<p>${inline(line)}</p>`;
  }close();return html
}
async function unlockGuides(password){
  const data=await Promise.all(payloads.map(p=>fetch(p,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Materi terenkripsi tidak dapat dimuat.');return r.json()})));
  guides=[await decryptPayload(data[0],password),await decryptPayload(data[1],password)];
}
async function createInstructorSession(password){
  const r=await fetch('../api/instructor-login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({password})});
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw new Error(data.error||'Sesi berkas dosen belum tersedia.');
  instructorToken=data.token;
  instructorSessionError='';
}
function setActive(el){document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b===el))}
function showGuide(i){const btn=document.querySelector(`[data-guide="${i}"]`);setActive(btn);$('#guide').className='guide';$('#guide').innerHTML=markdown(guides[i]||'')}
function formatSize(n){if(n<1024)return`${n} B`;if(n<1024*1024)return`${(n/1024).toFixed(1)} KB`;return`${(n/1024/1024).toFixed(1)} MB`}
function formatDate(s){try{return new Intl.DateTimeFormat('id-ID',{dateStyle:'medium',timeStyle:'short'}).format(new Date(s))}catch{return s||'-'}}
function caseLabel(id){return id==='case2'?'Kasus 2 — Coretax':'Kasus 1 — Citibank'}
async function showSubmissions(){
  setActive($('#submissionsTab'));const box=$('#guide');box.className='guide submissions-view';
  box.innerHTML='<div class="files-head"><div><h1>Berkas Presentasi Kelompok</h1><p>Seluruh unggahan PowerPoint mahasiswa tersimpan di Cloudflare Workers KV dan hanya dapat diunduh melalui sesi dosen.</p></div><button id="refreshFiles" class="secondary">Muat ulang</button></div><div id="filesBody"><p>Memuat daftar berkas…</p></div>';
  $('#refreshFiles').onclick=()=>showSubmissions();
  if(!instructorToken){$('#filesBody').innerHTML=`<div class="file-warning"><b>Akses penyimpanan belum tersedia.</b><p>${inline(instructorSessionError||'Secret akses dosen atau binding Workers KV belum dikonfigurasi pada Cloudflare.')}</p></div>`;return}
  try{
    const r=await fetch('../api/submissions/list',{headers:{authorization:`Bearer ${instructorToken}`},cache:'no-store'});
    const data=await r.json().catch(()=>({}));
    if(r.status===401){instructorToken=null;throw new Error('Sesi akses berkas telah berakhir. Kunci Area Dosen lalu masuk kembali.')}
    if(!r.ok)throw new Error(data.error||'Daftar berkas tidak dapat dimuat.');
    const items=data.items||[];
    if(!items.length){$('#filesBody').innerHTML='<div class="empty-files"><b>Belum ada berkas yang diunggah.</b><p>Setelah kelompok mengunggah presentasi, file akan muncul di sini.</p></div>';return}
    const rows=items.map((x,i)=>`<tr><td>${i+1}</td><td><span class="case-pill ${x.caseId==='case2'?'case2':''}">${inline(caseLabel(x.caseId))}</span></td><td><b>${inline(x.group||'-')}</b><small>${inline(x.members||'')}</small></td><td>${inline(x.originalName||x.key.split('/').pop())}</td><td>${formatSize(Number(x.size||0))}</td><td>${formatDate(x.uploadedAt||x.uploaded)}</td><td><button class="download-file" data-key="${encodeURIComponent(x.key)}" data-name="${encodeURIComponent(x.originalName||'presentasi.pptx')}">Unduh</button></td></tr>`).join('');
    $('#filesBody').innerHTML=`<div class="file-summary"><b>${items.length} berkas</b><span>${data.truncated?'Daftar dibatasi pada 1.000 entri per batch.':'Semua unggahan yang tersedia.'}</span></div><div class="table-scroll"><table class="files-table"><thead><tr><th>No.</th><th>Kasus</th><th>Kelompok</th><th>Berkas</th><th>Ukuran</th><th>Waktu unggah</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`;
    document.querySelectorAll('.download-file').forEach(btn=>btn.onclick=()=>downloadFile(decodeURIComponent(btn.dataset.key),decodeURIComponent(btn.dataset.name),btn));
  }catch(err){$('#filesBody').innerHTML=`<div class="file-warning"><b>Daftar berkas belum dapat dimuat.</b><p>${inline(err.message)}</p></div>`}
}
async function downloadFile(key,name,btn){
  const old=btn.textContent;btn.disabled=true;btn.textContent='Mengunduh…';
  try{
    const r=await fetch(`../api/submissions/download?key=${encodeURIComponent(key)}`,{headers:{authorization:`Bearer ${instructorToken}`}});
    if(!r.ok){const d=await r.json().catch(()=>({}));throw new Error(d.error||'Unduhan gagal.')}
    const blob=await r.blob();const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }catch(err){alert(err.message)}finally{btn.disabled=false;btn.textContent=old}
}
$('#unlockForm').addEventListener('submit',async e=>{
  e.preventDefault();const status=$('#status'),btn=e.submitter,p=$('#password').value;status.textContent='Membuka materi…';status.className='status';btn.disabled=true;
  try{
    await unlockGuides(p);
    try{await createInstructorSession(p)}catch(sessionErr){instructorToken=null;instructorSessionError=sessionErr.message}
    $('#login').hidden=true;$('#teacherArea').hidden=false;showGuide(0);$('#password').value='';
  }catch(err){guides=[];instructorToken=null;status.textContent='Sandi tidak sesuai atau materi terenkripsi belum termuat dengan benar. Coba muat ulang halaman.';status.className='status error'}finally{btn.disabled=false}
});
$('#togglePassword').onclick=()=>{const p=$('#password');p.type=p.type==='password'?'text':'password';$('#togglePassword').textContent=p.type==='password'?'Lihat':'Sembunyikan'};
document.querySelectorAll('[data-guide]').forEach((b,i)=>b.onclick=()=>showGuide(i));
$('#submissionsTab').onclick=()=>showSubmissions();
$('#lock').onclick=()=>{guides=[];instructorToken=null;instructorSessionError='';$('#guide').replaceChildren();$('#teacherArea').hidden=true;$('#login').hidden=false;$('#status').textContent='';$('#password').focus()};
