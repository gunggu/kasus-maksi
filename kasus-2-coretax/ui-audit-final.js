// Audit konten final: utamakan bahasa Indonesia pada antarmuka mahasiswa.
const renderUiCoretaxDasar=render;
render=function(){
  renderUiCoretaxDasar();
  const titleMap={
    briefing:'Briefing Proyek',timeline:'Timeline & Arsitektur Sistem',roles:'Hak Akses & Impersonasi',incidents:'Papan Insiden',
    performance:'Dashboard Kinerja',matrix:'Matriks Evaluasi SIA',decision:'Keputusan Stabilisasi'
  };
  const vt=document.querySelector('#viewTitle');if(vt)vt.textContent=titleMap[view]||vt.textContent;

  if(view==='briefing'){
    const eye=document.querySelector('#content .hero .eyebrow');if(eye)eye.textContent='MISI EVALUASI IMPLEMENTASI SIA';
    const q=document.querySelector('#content .questions');
    if(q){q.querySelectorAll('article b').forEach(b=>{b.textContent=b.textContent.replace('Steering Committee','Komite Pengarah')});}
  }
  if(view==='roles'){
    const h=document.querySelector('#content .section-head h3');if(h)h.textContent='Hak Akses, Impersonasi & Antarmuka';
    const p=document.querySelector('#content .section-head p');if(p)p.textContent='Analisis apakah pengendalian seharusnya berada pada Coretax, pada organisasi wajib pajak, atau pada keduanya.';
  }
  if(view==='incidents'){
    const h=document.querySelector('#content .section-head h3');if(h)h.textContent='Papan Insiden';
    const p=document.querySelector('#content .section-head p');if(p)p.textContent='Klasifikasikan sedikitnya empat insiden. Fokus pada hipotesis akar penyebab dan bukti yang masih diperlukan, bukan mencari satu label yang dianggap pasti benar.';
  }
  if(view==='matrix'){
    const h=document.querySelector('#content .section-head h3');if(h)h.textContent='Matriks Evaluasi SIA';
    document.querySelectorAll('#content table.matrix th').forEach(th=>{if(th.textContent==='Tindakan')th.textContent='Tindakan prioritas';});
  }
  if(view==='decision'){
    const h=document.querySelector('#content .section-head h3');if(h)h.textContent='Keputusan Komite Pengarah';
    const p=document.querySelector('#content .section-head p');if(p)p.textContent='Pilih strategi stabilisasi berdasarkan bukti dan keterbatasannya, bukan berdasarkan hasil sejarah yang sudah diketahui.';
  }
};

// Glosarium: istilah Indonesia didahulukan, padanan profesional tetap diperkenalkan.
CORE_DATA.glossary=[
  ['Siklus Pengembangan Sistem (SDLC)','Siklus perencanaan, analisis, desain, pengembangan/konfigurasi, pengujian, implementasi, dan pemeliharaan sistem.'],
  ['Cutover','Perpindahan dari sistem/proses lama ke sistem baru pada saat implementasi.'],
  ['Tinjauan pascaimplementasi','Evaluasi setelah go-live untuk menilai apakah sistem mencapai tujuan dan risiko telah dikendalikan.'],
  ['Manajemen Identitas & Akses (IAM)','Pengelolaan identitas, autentikasi, peran, dan hak akses.'],
  ['Impersonasi','Mekanisme pengguna personal bertindak mewakili entitas/badan yang berhak diwakilinya.'],
  ['Validasi antarmuka','Kontrol yang memastikan data antar sistem/format memenuhi aturan sebelum diterima.'],
  ['Latensi','Waktu tunggu yang dibutuhkan sistem untuk merespons suatu fungsi.'],
  ['Throughput','Jumlah transaksi/dokumen yang dapat diproses dalam satu satuan waktu.'],
  ['Kapasitas','Kemampuan infrastruktur/aplikasi menangani beban tertentu.'],
  ['Stabilisasi','Periode perbaikan dan penyetelan setelah sistem baru masuk produksi.'],
  ['Hipotesis akar penyebab','Penjelasan sementara tentang penyebab suatu gejala yang masih harus diuji dengan bukti tambahan.'],
  ['Triangulasi bukti','Membandingkan beberapa jenis/sumber bukti sebelum mengambil kesimpulan.']
];

if(view==='briefing')render();