CORE_DATA.meetingPlan=[
{time:'0–10 menit',title:'Pembukaan',desc:'Dosen menjelaskan tujuan SIA, peran steering committee, aturan bukti, kelompok, dan output presentasi.'},
{time:'10–25 menit',title:'Deskripsi Coretax & orientasi aplikasi',desc:'Pahami transformasi proses, go-live 1 Januari 2025, provenance bukti, dan cara membaca timeline/incident board.'},
{time:'25–30 menit',title:'Petunjuk tugas & pembagian peran',desc:'Tentukan navigator, analis proses/data, analis kontrol, dan penyaji.'},
{time:'30–65 menit',title:'Analisis desain & insiden',desc:'Analisis dua artefak desain lalu klasifikasikan minimal empat insiden dengan alasan.'},
{time:'65–82 menit',title:'Dashboard kinerja',desc:'Gunakan latency, capacity, throughput, dan volume untuk menguji hipotesis tentang akar masalah dan stabilisasi.'},
{time:'82–95 menit',title:'Matriks Assurance & keputusan',desc:'Isi minimal tiga baris matriks dan tentukan keputusan Steering Committee.'},
{time:'95–105 menit',title:'Persiapan presentasi',desc:'Semua kelompok menyiapkan maksimum lima slide; dosen memilih satu kelompok.'},
{time:'105–117 menit',title:'Presentasi satu kelompok',desc:'8 menit presentasi + 4 menit tanggapan/pertanyaan kelas.'},
{time:'117–120 menit',title:'Penutup dosen',desc:'Tegaskan pelajaran SIA tentang implementasi, root cause, controls, evidence, capacity, dan post-implementation review.'}
];
const renderBriefingCoreDasar=renderBriefing;
renderBriefing=function(){
  renderBriefingCoreDasar();
  const root=document.querySelector('#content');if(!root)return;
  const s=document.createElement('section');s.className='class-plan';
  s.innerHTML=`<h3>Petunjuk Pertemuan — 120 Menit</h3><p>Anda tidak perlu membuka seluruh artefak. Fokus pada bukti yang diperlukan untuk menjawab empat pertanyaan kelompok.</p><div class="plan-grid">${CORE_DATA.meetingPlan.map(x=>`<article><b>${x.time}</b><h4>${x.title}</h4><p>${x.desc}</p></article>`).join('')}</div>`;
  root.insertBefore(s,root.querySelector('.questions'));
};
if(view==='briefing')render();