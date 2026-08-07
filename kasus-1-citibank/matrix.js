// Matriks Risiko–Kontrol–Bukti (RKB) untuk menghubungkan temuan dengan dasar profesional.
const renderUtamaCitibank=render;
render=function(){
  if(view==='matrix'){
    $('#viewTitle').textContent='Matriks Risiko–Kontrol–Bukti';
    renderMatrixRKB();
    updateProgress();
    return;
  }
  renderUtamaCitibank();
};

function matrixRows(){
  if(!Array.isArray(state.rkbRows)||!state.rkbRows.length){
    state.rkbRows=[
      {id:'RKB-01',isu:'',risiko:'',kontrol:'',bukti:'',keterbatasan:'',kesimpulan:''},
      {id:'RKB-02',isu:'',risiko:'',kontrol:'',bukti:'',keterbatasan:'',kesimpulan:''},
      {id:'RKB-03',isu:'',risiko:'',kontrol:'',bukti:'',keterbatasan:'',kesimpulan:''}
    ];
    save();
  }
  return state.rkbRows;
}

function renderMatrixRKB(){
  const rows=matrixRows();
  const body=rows.map((r,i)=>`<tr>
    <td><b>${r.id}</b></td>
    <td><textarea data-rkb="isu" data-i="${i}" placeholder="Fakta/indikator yang relevan">${r.isu||''}</textarea></td>
    <td><textarea data-rkb="risiko" data-i="${i}" placeholder="Risiko, assertion, atau tujuan kontrol">${r.risiko||''}</textarea></td>
    <td><textarea data-rkb="kontrol" data-i="${i}" placeholder="Kontrol yang ada/diharapkan">${r.kontrol||''}</textarea></td>
    <td><textarea data-rkb="bukti" data-i="${i}" placeholder="ID transaksi, putusan, wawancara, artefak">${r.bukti||''}</textarea></td>
    <td><textarea data-rkb="keterbatasan" data-i="${i}" placeholder="Apa yang belum diketahui?">${r.keterbatasan||''}</textarea></td>
    <td><textarea data-rkb="kesimpulan" data-i="${i}" placeholder="Penilaian sementara / prosedur berikutnya">${r.kesimpulan||''}</textarea></td>
    <td><button class="danger-mini" onclick="hapusBarisRKB(${i})" aria-label="Hapus ${r.id}">×</button></td>
  </tr>`).join('');
  $('#content').innerHTML=`${stageBox()}
  <div class="section-head"><div><h3>Matriks Risiko–Kontrol–Bukti</h3><p>Hubungkan setiap isu dengan risiko, kontrol, bukti, keterbatasan, dan kesimpulan. Matriks ini adalah jembatan antara investigasi dan memo profesional.</p></div></div>
  <div class="rkb-guidance"><b>Aturan kualitas:</b><span>Jangan menulis kesimpulan tanpa bukti spesifik.</span><span>Pisahkan bukti primer dari inferensi.</span><span>Nyatakan keterbatasan sebelum memberi penilaian.</span></div>
  <div class="table-wrap rkb-wrap"><table class="rkb-table"><thead><tr><th>ID</th><th>Isu / fakta</th><th>Risiko / assertion</th><th>Kontrol</th><th>Bukti</th><th>Keterbatasan</th><th>Kesimpulan / tindakan</th><th></th></tr></thead><tbody>${body}</tbody></table></div>
  <div class="rkb-actions"><button onclick="tambahBarisRKB()">+ Tambah baris</button><button class="secondary" onclick="simpanRKB()">Simpan matriks</button><button class="secondary" onclick="exportRKBMarkdown()">Ekspor .md</button><button class="secondary" onclick="exportRKBCsv()">Ekspor .csv</button></div>
  <div class="prompt"><b>Target minimum:</b> isi sekurang-kurangnya tiga baris yang mewakili (1) otorisasi transaksi, (2) pemisahan/verifikasi tugas, dan (3) monitoring atau deteksi pola transaksi.</div>`;
  document.querySelectorAll('[data-rkb]').forEach(el=>el.addEventListener('input',()=>{
    const i=Number(el.dataset.i),field=el.dataset.rkb;
    state.rkbRows[i][field]=el.value;
  }));
}

function simpanRKB(){
  save();updateProgress();
  alert('Matriks Risiko–Kontrol–Bukti tersimpan di browser ini.');
}
function tambahBarisRKB(){
  const rows=matrixRows();
  rows.push({id:`RKB-${String(rows.length+1).padStart(2,'0')}`,isu:'',risiko:'',kontrol:'',bukti:'',keterbatasan:'',kesimpulan:''});
  save();renderMatrixRKB();
}
function hapusBarisRKB(i){
  const rows=matrixRows();
  if(rows.length<=1)return alert('Minimal satu baris harus dipertahankan.');
  rows.splice(i,1);rows.forEach((r,j)=>r.id=`RKB-${String(j+1).padStart(2,'0')}`);save();renderMatrixRKB();
}
function rkbFilledCount(){
  return matrixRows().filter(r=>r.isu&&r.risiko&&r.kontrol&&r.bukti&&r.keterbatasan&&r.kesimpulan).length;
}
function exportRKBMarkdown(){
  simpanRKB();
  const lines=['# Matriks Risiko–Kontrol–Bukti — Kasus Citibank','',`Tanggal ekspor: ${new Date().toLocaleString('id-ID')}`,''];
  matrixRows().forEach(r=>{
    lines.push(`## ${r.id}`,'',`**Isu/fakta:** ${r.isu||'-'}`,'',`**Risiko/assertion:** ${r.risiko||'-'}`,'',`**Kontrol:** ${r.kontrol||'-'}`,'',`**Bukti:** ${r.bukti||'-'}`,'',`**Keterbatasan:** ${r.keterbatasan||'-'}`,'',`**Kesimpulan/tindakan:** ${r.kesimpulan||'-'}`,'');
  });
  unduhTeks('Matriks_Risiko_Kontrol_Bukti_Citibank.md',lines.join('\n'),'text/markdown;charset=utf-8');
}
function exportRKBCsv(){
  simpanRKB();
  const esc=v=>`"${String(v||'').replaceAll('"','""')}"`;
  const lines=[['ID','Isu/Fakta','Risiko/Assertion','Kontrol','Bukti','Keterbatasan','Kesimpulan/Tindakan'].map(esc).join(',')];
  matrixRows().forEach(r=>lines.push([r.id,r.isu,r.risiko,r.kontrol,r.bukti,r.keterbatasan,r.kesimpulan].map(esc).join(',')));
  unduhTeks('Matriks_Risiko_Kontrol_Bukti_Citibank.csv','\ufeff'+lines.join('\n'),'text/csv;charset=utf-8');
}
function unduhTeks(nama,isi,tipe){
  const blob=new Blob([isi],{type:tipe}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=nama;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}

// Integrasikan kelengkapan RKB ke progress bar tanpa mengubah logika inti kasus.
const updateProgressDasarRKB=updateProgress;
updateProgress=function(){
  updateProgressDasarRKB();
  const base=parseInt($('#progressText').textContent)||0;
  const bonus=Math.min(8,rkbFilledCount()*2);
  const pct=Math.min(100,base+bonus);
  $('#progressText').textContent=pct+'%';$('#progressBar').style.width=pct+'%';
};
