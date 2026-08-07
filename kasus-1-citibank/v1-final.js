// Finalisasi pedagogis v1.0: unlock berbasis aktivitas nyata, glosarium, dan istilah SIA.
// Dimuat paling akhir agar dapat memperkuat perilaku inti tanpa mengubah dataset autentik.

function analyzedTransactionCount(){
  return CASE_DATA.transactions.filter((_,i)=>String(state['txanalysis-'+i]||'').trim().length>=15).length;
}
function analyzedControlCount(){
  return CASE_DATA.controls.filter((_,i)=>String(state['controlnote-'+i]||'').trim().length>=15).length;
}
function interviewedWitnessCount(){
  return CASE_DATA.witnesses.filter((_,i)=>state['witqa-'+i]).length;
}

// Tahap bukti kini bergantung pada aktivitas analitis, bukan sekadar klik artefak.
currentStage=function(){
  const tx=analyzedTransactionCount();
  const ct=analyzedControlCount();
  const wt=interviewedWitnessCount();
  if(wt>=3)return 4;
  if(ct>=2)return 3;
  if(tx>=3)return 2;
  return 1;
};

// Transaksi baru dianggap dianalisis setelah ada catatan substantif singkat.
openTx=function(i){
  const t=CASE_DATA.transactions[i];
  state['tx-'+i]=true;save();
  $('#modalTitle').textContent=`${t.id} — ${t.amount}`;
  $('#modalBody').innerHTML=`${tag(t.prov)}<span class="quality">Keyakinan ekstraksi: ${t.confidence}</span>
  <div class="detail-grid"><b>Tanggal</b><span>${t.date}</span><b>No. formulir</b><span>${t.form}</span><b>Pengirim</b><span>${t.sender} • ${t.senderAcc}</span><b>Penerima</b><span>${t.beneficiary} • ${t.beneficiaryAcc}</span><b>Bank</b><span>${t.bank}</span><b>Narasi</b><span>${t.narrative}</span><b>Sumber</b><span>${t.source}</span></div>
  <p class="evidence-note">${t.note}</p>${sourceLink(t.sourceUrl)}
  <div class="prompt"><b>Catatan analisis wajib:</b> tulis singkat apa risiko/kontrol SIA yang relevan dan bukti tambahan apa yang masih diperlukan. Minimal 15 karakter agar transaksi dihitung sebagai telah dianalisis.</div>
  <textarea class="modal-note" id="txAnalysis-${i}" placeholder="Contoh: perlu konfirmasi genuine authorization dan audit trail pemrosesan...">${state['txanalysis-'+i]||''}</textarea>
  <button onclick="saveTxAnalysis(${i})">Simpan analisis transaksi</button>`;
  $('#modal').classList.add('open');updateProgress();
};
function saveTxAnalysis(i){
  const el=document.querySelector('#txAnalysis-'+i);
  state['txanalysis-'+i]=el?el.value:'';save();updateProgress();
  const n=String(state['txanalysis-'+i]||'').trim().length;
  alert(n>=15?'Analisis transaksi tersimpan.':'Catatan masih terlalu singkat untuk dihitung sebagai analisis.');
}

// Catatan kontrol harus substantif agar membuka tahap wawancara.
const openControlV1Dasar=openControl;
openControl=function(i){
  openControlV1Dasar(i);
  const ta=document.querySelector('.modal-note');
  if(ta){
    ta.removeAttribute('onchange');
    ta.addEventListener('input',()=>{state['controlnote-'+i]=ta.value;save();updateProgress();});
    const helper=document.createElement('small');
    helper.className='analysis-helper';
    helper.textContent='Kontrol dihitung telah dianalisis setelah catatan berisi minimal 15 karakter.';
    ta.insertAdjacentElement('afterend',helper);
  }
};

// Membuka kartu saksi saja tidak cukup; minimal satu jawaban harus benar-benar dibaca.
const showWitnessAnswerV1Dasar=showWitnessAnswer;
showWitnessAnswer=function(i,j){
  showWitnessAnswerV1Dasar(i,j);
  state['witqa-'+i]=true;
  state['witqa-last-'+i]=j;
  save();updateProgress();
};

// Status tahap dibuat transparan agar mahasiswa tahu apa yang masih dibutuhkan.
const stageBoxV1Dasar=stageBox;
stageBox=function(){
  const base=stageBoxV1Dasar();
  const s=currentStage();
  const req=s===1?`${analyzedTransactionCount()}/3 transaksi dianalisis`:s===2?`${analyzedControlCount()}/2 kontrol dianalisis`:s===3?`${interviewedWitnessCount()}/3 sumber wawancara ditelaah`:'Syarat pelepasan bukti terpenuhi';
  return base+`<div class="stage-requirement"><b>Syarat tahap berikutnya:</b> ${req}</div>`;
};

// Istilah antarmuka difokuskan pada SIA, bukan forensik.
const renderNotebookV1Dasar=renderNotebook;
renderNotebook=function(){
  renderNotebookV1Dasar();
  const h=document.querySelector('#content .section-head h3');
  const p=document.querySelector('#content .section-head p');
  if(h)h.textContent='Berkas Kerja Analisis SIA';
  if(p)p.textContent='Pisahkan fakta, inferensi, risiko, kontrol, bukti, dan keterbatasan sebelum menyimpulkan.';
};

// Glosarium ringkas untuk mahasiswa semester 1; sengaja ditempatkan di Briefing, bukan menu baru.
CASE_DATA.glossary=[
  ['TPS','Transaction Processing System: sistem yang menangkap, memvalidasi, memproses, dan mencatat transaksi rutin.'],
  ['Transaction validity','Apakah transaksi memang sah/nyata dan layak diproses, bukan hanya apakah perhitungannya benar.'],
  ['Genuine authorization','Otorisasi yang benar-benar berasal dari pihak yang berhak, bukan sekadar adanya tanda approval.'],
  ['Input control','Kontrol atas validitas, kelengkapan, dan keakuratan data sebelum diproses.'],
  ['Segregation of duties (SoD)','Pemisahan tugas agar satu pihak tidak menguasai seluruh rangkaian input, approval, dan monitoring.'],
  ['Audit trail','Jejak yang memungkinkan transaksi ditelusuri dari dokumen sumber sampai posting dan pihak yang memprosesnya.'],
  ['Exception report','Laporan transaksi/kondisi yang menyimpang dari aturan atau pola normal dan membutuhkan review.'],
  ['Override','Tindakan melewati atau menonaktifkan kontrol yang normalnya berlaku.'],
  ['Operating effectiveness','Apakah kontrol yang dirancang benar-benar dijalankan secara konsisten dan memadai.'],
  ['Continuous monitoring','Pemantauan berbasis data secara berkala/berkelanjutan untuk mendeteksi anomali atau pola risiko.']
];

const renderBriefingV1Dasar=renderBriefing;
renderBriefing=function(){
  renderBriefingV1Dasar();
  const root=document.querySelector('#content');if(!root)return;
  const glossary=document.createElement('section');
  glossary.className='glossary-block';
  glossary.innerHTML=`<div class="section-head"><div><h3>Glosarium Singkat SIA</h3><p>Gunakan istilah ini saat berdiskusi. Anda tidak perlu menghafal definisi; fokus pada penerapannya dalam kasus.</p></div></div><div class="glossary-grid">${CASE_DATA.glossary.map(([term,def])=>`<details><summary>${term}</summary><p>${def}</p></details>`).join('')}</div>`;
  root.appendChild(glossary);
};

// Progress tambahan merefleksikan aktivitas analisis, bukan jumlah klik.
const updateProgressV1Dasar=updateProgress;
updateProgress=function(){
  updateProgressV1Dasar();
  const base=parseInt($('#progressText').textContent)||0;
  const activity=Math.min(12, analyzedTransactionCount()*2 + analyzedControlCount()*2 + interviewedWitnessCount());
  const pct=Math.min(100,base+activity);
  $('#progressText').textContent=pct+'%';$('#progressBar').style.width=pct+'%';
};
