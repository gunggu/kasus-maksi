const files=['data/kasus-1.txt','data/kasus-2.txt'];
const $=s=>document.querySelector(s);
let case2Enabled=false;
function inline(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')}
function md(x){let h='',u=false,o=false,q=false;for(const raw of x.replace(/\r/g,'').split('\n')){const l=raw.trimEnd();const close=()=>{if(u){h+='</ul>';u=false}if(o){h+='</ol>';o=false}if(q){h+='</blockquote>';q=false}};let m;if(!l.trim()){close();continue}if((m=l.match(/^(#{1,3})\s+(.+)$/))){close();h+=`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`;continue}if(l.startsWith('> ')){if(u||o)close();if(!q){h+='<blockquote>';q=true}h+=`<p>${inline(l.slice(2))}</p>`;continue}else if(q){h+='</blockquote>';q=false}if((m=l.match(/^[-*]\s+(.+)$/))){if(o){h+='</ol>';o=false}if(!u){h+='<ul>';u=true}h+=`<li>${inline(m[1])}</li>`;continue}if((m=l.match(/^\d+\.\s+(.+)$/))){if(u){h+='</ul>';u=false}if(!o){h+='<ol>';o=true}h+=`<li>${inline(m[1])}</li>`;continue}close();h+=`<p>${inline(l)}</p>`}return h}
async function getCase2Status(){try{const r=await fetch('../api/case2-status',{cache:'no-store'});if(!r.ok)return false;const j=await r.json();return j.enabled===true}catch{return false}}
function syncTabs(){const tabs=document.querySelectorAll('.tabs button');const b=tabs[1];if(!b)return;b.classList.toggle('locked',!case2Enabled);b.setAttribute('aria-disabled',String(!case2Enabled));b.textContent=case2Enabled?'Kasus 2 — Coretax':'Kasus 2 — Coretax 🔒';}
async function show(i){
  if(i===1&&!case2Enabled){
    document.querySelectorAll('.tabs button').forEach((b,j)=>b.classList.toggle('active',i===j));
    $('#guide').innerHTML='<div class="locked-guide"><h2>Kasus 2 belum diaktifkan</h2><p>Panduan mahasiswa Kasus 2 akan tersedia secara otomatis setelah dosen mengaktifkan Kasus 2 untuk seluruh kelas.</p><p>Silakan fokus pada Kasus 1 sampai ada instruksi dari dosen.</p></div>';
    return;
  }
  document.querySelectorAll('.tabs button').forEach((b,j)=>b.classList.toggle('active',i===j));
  const r=await fetch(files[i],{cache:'no-store'});
  $('#guide').innerHTML=r.ok?md(await r.text()):'<p>Panduan tidak dapat dimuat.</p>';
}
async function init(){case2Enabled=await getCase2Status();syncTabs();document.querySelectorAll('.tabs button').forEach((b,i)=>b.onclick=()=>show(i));await show(0)}
init();
