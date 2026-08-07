// Finalisasi hasil audit pedagogis dan epistemik Kasus 2 Coretax.

function stakeholderTag(p){return `<span class="tag ${p==='primary'?'primary':'secondaryTag'}">${p==='primary'?'Primer autentik':'Sekunder autentik'}</span>`}

// Incident Board: tambahkan evidence triangulation lintas pemangku kepentingan.
const renderIncidentsAuditDasar=renderIncidents;
renderIncidents=function(){
  renderIncidentsAuditDasar();
  if(stage()<2)return;
  const root=document.querySelector('#content');if(!root)return;
  const sec=document.createElement('section');
  sec.className='stakeholder-evidence';
  sec.innerHTML=`<div class="section-head"><div><h3>Perspektif Pemangku Kepentingan</h3><p>Triangulasikan laporan pemilik sistem dengan oversight dan pengalaman pengguna. Perspektif berbeda bukan otomatis lebih benar; nilai relevansi dan keterbatasannya.</p></div></div>
  <div class="evidence-grid">${CORE_DATA.stakeholders.map(x=>`<article class="evidence-card"><div>${stakeholderTag(x.prov)}<span class="quality">${x.type}</span><h4>${x.id} — ${x.source}</h4><small>${x.date}</small><p>${x.fact}</p><p><b>Kegunaan:</b> ${x.use}</p><p><b>Keterbatasan:</b> ${x.limitation}</p>${sourceLink(x.url)}</div></article>`).join('')}</div>`;
  root.appendChild(sec);
};

// Dashboard: tampilkan periode agar mahasiswa tidak memperlakukan before/after sebagai eksperimen terkontrol.
const renderPerformanceAuditDasar=renderPerformance;
renderPerformance=function(){
  renderPerformanceAuditDasar();
  if(stage()<3)return;
  const table=document.querySelector('#content .table-wrap table');
  if(table){
    const head=table.querySelector('thead tr');
    if(head&&!head.textContent.includes('Periode')){
      const th=document.createElement('th');th.textContent='Periode';head.appendChild(th);
      table.querySelectorAll('tbody tr').forEach((tr,i)=>{const td=document.createElement('td');td.textContent=CORE_DATA.performance[i]?.period||'Tidak dirinci';tr.appendChild(td)});
    }
  }
  const note=document.querySelector('#content .card textarea');
  if(note)note.placeholder='Tuliskan minimal tiga temuan berbasis angka, hipotesis implikasinya, dan apa yang TIDAK dapat disimpulkan dari data publik (min. 60 karakter)...';
};

// Matriks: gunakan istilah hipotesis akar penyebab, bukan klaim kausal final.
const renderMatrixAuditDasar=renderMatrix;
renderMatrix=function(){
  renderMatrixAuditDasar();
  const root=document.querySelector('#content');if(!root||root.querySelector('.locked'))return;
  const heads=root.querySelectorAll('table.matrix thead th');
  if(heads[2])heads[2].textContent='Hipotesis akar penyebab';
  const desc=root.querySelector('.section-head p');
  if(desc)desc.textContent='Hubungkan masalah dengan hipotesis akar penyebab, risiko SIA, kontrol, bukti, dan tindakan. Jangan menyatakan sebab sebagai fakta bila bukti publik hanya mendukung hipotesis.';
};

// Briefing: tegaskan triangulasi dan status hipotesis.
const renderBriefingAuditDasar=renderBriefing;
renderBriefing=function(){
  renderBriefingAuditDasar();
  const root=document.querySelector('#content');if(!root)return;
  const tip=document.createElement('section');tip.className='card evidence-tip';
  tip.innerHTML='<h3>Aturan penting dalam kasus ini</h3><p><b>Gejala ≠ akar penyebab.</b> Perbaikan yang dilakukan DJP memberi petunjuk tentang area masalah, tetapi tidak selalu membuktikan penyebab awal. Gunakan istilah <b>hipotesis akar penyebab</b>, nyatakan bukti pendukung, dan sebutkan bukti tambahan yang masih diperlukan.</p><p><b>Triangulasi.</b> Bandingkan sumber DJP dengan perspektif DPR dan pengalaman pengguna sebelum membuat keputusan.</p>';
  const q=root.querySelector('.questions');root.insertBefore(tip,q);
};

if(view==='briefing')render();