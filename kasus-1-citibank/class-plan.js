// Scaffolding pertemuan 120 menit untuk mahasiswa semester 1.
CASE_DATA.meetingPlan=[
  {time:'0–10 menit',title:'Pembukaan',desc:'Dosen menjelaskan tujuan pembelajaran, pembagian kelompok, aturan bukti, dan output akhir.'},
  {time:'10–25 menit',title:'Deskripsi kasus & orientasi aplikasi',desc:'Dosen menjelaskan konteks Citibank, peran mahasiswa, batas data, provenance, serta mendemonstrasikan cara membuka satu transaksi dan satu bukti.'},
  {time:'25–30 menit',title:'Petunjuk tugas',desc:'Kelompok membaca empat pertanyaan kasus dan membagi peran: navigator aplikasi, pencatat bukti, analis kontrol, dan penyaji.'},
  {time:'30–70 menit',title:'Investigasi & diskusi kelompok',desc:'Kelompok menelaah transaksi, jaringan rekening, kontrol, dan wawancara untuk menjawab empat pertanyaan kasus.'},
  {time:'70–90 menit',title:'Matriks R-K-B & simpulan kelompok',desc:'Kelompok mengisi minimal tiga baris R-K-B dan merumuskan jawaban singkat untuk setiap pertanyaan.'},
  {time:'90–105 menit',title:'Persiapan presentasi',desc:'Semua kelompok menyiapkan presentasi maksimum lima slide. Dosen memilih satu kelompok untuk presentasi.'},
  {time:'105–117 menit',title:'Presentasi satu kelompok',desc:'8 menit presentasi + 4 menit tanggapan/pertanyaan dari kelas.'},
  {time:'117–120 menit',title:'Penutup dosen',desc:'Dosen menegaskan pelajaran SIA: otorisasi, pemisahan tugas, bukti, monitoring, dan batas kesimpulan hukum.'}
];
CASE_DATA.caseQuestions=[
  {id:'P1',title:'Bagaimana transaksi seharusnya diproses?',question:'Rekonstruksikan alur instruksi transfer dari nasabah sampai dana diterima beneficiary. Pada titik mana saja seharusnya terdapat pengendalian?',output:'Satu diagram/alur singkat dan sedikitnya tiga titik kontrol.'},
  {id:'P2',title:'Apa bukti terkuat yang menunjukkan adanya masalah pengendalian?',question:'Pilih tiga bukti atau indikator paling penting dari aplikasi. Jelaskan mana yang merupakan fakta terverifikasi, mana yang baru indikator, dan apa keterbatasannya.',output:'Tiga bukti/indikator dengan alasan pemilihan dan keterbatasan.'},
  {id:'P3',title:'Kontrol apa yang bermasalah?',question:'Nilai apakah masalah utama lebih berkaitan dengan desain kontrol, pelaksanaan kontrol, override, atau monitoring. Gunakan bukti spesifik untuk mendukung penilaian.',output:'Minimal tiga baris Matriks Risiko–Kontrol–Bukti.'},
  {id:'P4',title:'Apa yang seharusnya dilakukan bank?',question:'Berikan tiga rekomendasi prioritas yang realistis untuk mencegah atau mendeteksi kejadian serupa lebih dini. Nyatakan pula kesimpulan profesional kelompok dan apa yang masih belum dapat disimpulkan.',output:'Tiga rekomendasi prioritas + satu kesimpulan dengan keterbatasan.'}
];

const renderBriefingSebelumRencana=renderBriefing;
renderBriefing=function(){
  renderBriefingSebelumRencana();
  const root=document.querySelector('#content');
  if(!root)return;
  const box=document.createElement('div');
  box.className='class-scaffold';
  box.innerHTML=`<div class="section-head"><div><h3>Petunjuk Pertemuan — 120 Menit</h3><p>Ikuti urutan ini. Anda tidak perlu membuka seluruh bukti; pilih bukti yang paling relevan untuk menjawab pertanyaan kasus.</p></div></div>
  <div class="meeting-plan">${CASE_DATA.meetingPlan.map(x=>`<div class="plan-step"><b>${x.time}</b><h4>${x.title}</h4><p>${x.desc}</p></div>`).join('')}</div>
  <div class="section-head case-q-head"><div><h3>Empat Pertanyaan Kasus untuk Diskusi Kelompok</h3><p>Semua kelompok menjawab pertanyaan yang sama. Jawaban harus berbasis bukti dari aplikasi.</p></div></div>
  <div class="case-questions">${CASE_DATA.caseQuestions.map(q=>`<div class="case-question"><span>${q.id}</span><div><h4>${q.title}</h4><p>${q.question}</p><small><b>Output:</b> ${q.output}</small></div></div>`).join('')}</div>
  <div class="presentation-brief"><b>Format presentasi kelompok</b><p>Semua kelompok menyiapkan maksimum 5 slide: (1) alur transaksi & titik kontrol, (2) tiga bukti utama, (3) analisis kontrol/R-K-B, (4) rekomendasi, (5) kesimpulan & keterbatasan. Satu kelompok dipilih untuk presentasi 8 menit, dilanjutkan 4 menit tanggapan kelas.</p></div>`;
  root.appendChild(box);
};
