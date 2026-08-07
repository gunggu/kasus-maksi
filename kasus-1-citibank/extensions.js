// Ekstensi non-server untuk kebutuhan kelas: ekspor notebook mahasiswa ke Markdown.
const renderNotebookDasar=renderNotebook;
renderNotebook=function(){
  renderNotebookDasar();
  const card=document.querySelector('#content .notebook-grid .card');
  if(card){
    const wrap=document.createElement('div');
    wrap.className='export-actions';
    wrap.innerHTML='<button class="secondary export-btn" onclick="exportNotebookMarkdown()">Ekspor notebook (.md)</button><small>File dibuat di perangkat Anda; tidak ada data yang dikirim ke server.</small>';
    card.appendChild(wrap);
  }
};
function exportNotebookMarkdown(){
  if(document.querySelector('#facts')) saveNotebookSilently();
  const selectedClues=CASE_DATA.transactions.filter((_,i)=>state['clue-'+i]);
  const selectedProcedures=CASE_DATA.procedures.filter((_,i)=>state['proc-'+i]);
  const selectedEvidence=CASE_DATA.evidence.filter((_,i)=>state['ev-'+i]);
  const lines=[
    '# Berkas Kerja Investigasi — Citibank Indonesia: 117 Transfer','',
    `Tanggal ekspor: ${new Date().toLocaleString('id-ID')}`,'',
    '## Fakta terverifikasi',state.facts||'_Belum diisi_','',
    '## Inferensi / hipotesis',state.inference||'_Belum diisi_','',
    '## Risiko / assertion',state.risk||'_Belum diisi_','',
    '## Kontrol yang diharapkan',state.expectedControl||'_Belum diisi_','',
    '## Bukti dan keterbatasan',state.evidenceNote||'_Belum diisi_','',
    '## Clue transaksi',...(selectedClues.length?selectedClues.map(t=>`- ${t.id}: ${t.sender} → ${t.beneficiary} — ${t.amount}`):['_Belum ada clue dipilih_']),'',
    '## Prosedur lanjutan',...(selectedProcedures.length?selectedProcedures.map(p=>`- ${p.id}: ${p.title} — ${p.desc}`):['_Belum ada prosedur dipilih_']),'',
    '## Bukti dalam berkas kerja',...(selectedEvidence.length?selectedEvidence.map(e=>`- ${e.id}: ${e.title} [${e.prov}]`):['_Belum ada bukti dipilih_']),'',
    '## Kesimpulan profesional',state.decision||'_Belum dipilih_','',
    '### Dasar kesimpulan',state.decisionWhy||'_Belum diisi_','',
    '---','Catatan metodologis: aplikasi menggabungkan bukti publik autentik dan rekonstruksi pembelajaran. Rekonstruksi bukan dokumen historis asli.'
  ];
  const blob=new Blob([lines.join('\n')],{type:'text/markdown;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='Berkas_Kerja_Citibank_117_Transfer.md';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
function saveNotebookSilently(){
  ['facts','inference','risk','expectedControl','evidenceNote'].forEach(k=>{const el=document.querySelector('#'+k);if(el)state[k]=el.value});
  save();updateProgress();
}