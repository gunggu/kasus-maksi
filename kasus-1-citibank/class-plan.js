// Scaffolding pertemuan 120 menit untuk mahasiswa semester 1.
CASE_DATA.meetingPlan=[
  {time:'0–10 menit',title:'Pembukaan',desc:'Dosen menjelaskan tujuan pembelajaran SIA, pembagian kelompok, aturan bukti, dan output akhir.'},
  {time:'10–25 menit',title:'Deskripsi kasus & konteks SIA',desc:'Dosen menjelaskan bahwa fokus bukan sekadar fraud, tetapi bagaimana transaksi masuk, divalidasi, diotorisasi, diproses, dicatat, dan dimonitor dalam SIA perbankan.'},
  {time:'25–30 menit',title:'Petunjuk tugas',desc:'Kelompok membaca empat pertanyaan kasus dan membagi peran: navigator aplikasi, pencatat bukti, analis kontrol, dan penyaji.'},
  {time:'30–70 menit',title:'Investigasi & diskusi kelompok',desc:'Kelompok menelaah transaksi, jaringan rekening, kontrol, dan wawancara untuk menjawab empat pertanyaan SIA.'},
  {time:'70–90 menit',title:'Matriks R-K-B & simpulan kelompok',desc:'Kelompok mengisi minimal tiga baris R-K-B dan menghubungkan isu dengan risiko, kontrol, bukti, keterbatasan, serta tindakan.'},
  {time:'90–105 menit',title:'Persiapan presentasi',desc:'Semua kelompok menyiapkan presentasi maksimum lima slide. Dosen memilih satu kelompok untuk presentasi.'},
  {time:'105–117 menit',title:'Presentasi satu kelompok',desc:'8 menit presentasi + 4 menit tanggapan/pertanyaan dari kelas.'},
  {time:'117–120 menit',title:'Penutup dosen',desc:'Dosen menegaskan pelajaran SIA: processing accuracy ≠ transaction validity; pentingnya input control, genuine authorization, segregation of duties, audit trail, exception monitoring, dan information quality.'}
];
CASE_DATA.caseQuestions=[
  {id:'P1',title:'Bagaimana transaksi seharusnya diproses oleh Sistem Informasi Akuntansi?',question:'Rekonstruksikan alur instruksi transfer dari nasabah sampai posting ke rekening beneficiary: dokumen sumber → input → validasi → otorisasi → pemrosesan → posting → monitoring. Pada titik mana seharusnya ada kontrol?',output:'Satu diagram alur SIA dan sedikitnya tiga titik kontrol.'},
  {id:'P2',title:'Di mana kualitas informasi dapat rusak?',question:'Pilih tiga fakta atau indikator terpenting dari aplikasi. Jelaskan bagaimana input yang tidak valid, otorisasi yang tidak memadai, atau monitoring yang lemah dapat membuat transaksi tetap tercatat. Bedakan fakta, indikator, dan keterbatasan bukti.',output:'Tiga titik kegagalan informasi beserta bukti dan keterbatasannya.'},
  {id:'P3',title:'Kontrol SIA apa yang bermasalah?',question:'Nilai kontrol yang relevan sebagai preventive, detective, atau monitoring. Jelaskan apakah masalah utamanya berada pada desain kontrol, pelaksanaan, override, segregation of duties, audit trail, atau exception monitoring.',output:'Minimal tiga baris Matriks Risiko–Kontrol–Bukti yang lengkap.'},
  {id:'P4',title:'Bagaimana Sistem Informasi Akuntansi seharusnya diperbaiki?',question:'Berikan tiga rekomendasi prioritas yang memperbaiki sistem dan proses, bukan hanya perilaku individu. Pertimbangkan independent confirmation, role segregation, audit trail, rule-based exception monitoring, dan analitik pola transaksi.',output:'Tiga rekomendasi desain SIA + satu kesimpulan profesional dengan keterbatasan.'}
];

const renderBriefingSebelumRencana=renderBriefing;
renderBriefing=function(){
  renderBriefingSebelumRencana();
  const root=document.querySelector('#content');
  if(!root)return;
  const box=document.createElement('div');
  box.className='class-scaffold';
  box.innerHTML=`<div class="section-head"><div><h3>Petunjuk Pertemuan — 120 Menit</h3><p>Ikuti urutan ini. Anda tidak perlu membuka seluruh bukti; pilih bukti yang paling relevan untuk menjawab pertanyaan kasus dalam konteks Sistem Informasi Akuntansi.</p></div></div>
  <div class="meeting-plan">${CASE_DATA.meetingPlan.map(x=>`<div class="plan-step"><b>${x.time}</b><h4>${x.title}</h4><p>${x.desc}</p></div>`).join('')}</div>
  <div class="section-head case-q-head"><div><h3>Empat Pertanyaan Kasus untuk Diskusi Kelompok</h3><p>Semua kelompok menjawab pertanyaan yang sama. Jawaban harus menunjukkan hubungan antara transaksi, informasi, kontrol, bukti, dan kualitas SIA.</p></div></div>
  <div class="case-questions">${CASE_DATA.caseQuestions.map(q=>`<div class="case-question"><span>${q.id}</span><div><h4>${q.title}</h4><p>${q.question}</p><small><b>Output:</b> ${q.output}</small></div></div>`).join('')}</div>
  <div class="presentation-brief"><b>Format presentasi kelompok</b><p>Semua kelompok menyiapkan maksimum 5 slide: (1) alur SIA transaksi & titik kontrol, (2) tiga titik kegagalan kualitas informasi, (3) analisis kontrol/R-K-B, (4) rekomendasi desain SIA, (5) kesimpulan & keterbatasan. Satu kelompok dipilih untuk presentasi 8 menit, dilanjutkan 4 menit tanggapan kelas.</p></div>`;
  root.appendChild(box);
};
