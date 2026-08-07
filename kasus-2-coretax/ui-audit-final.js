// Audit konten final: utamakan bahasa Indonesia pada antarmuka mahasiswa.
const decisionMap={
  'Lanjut penuh dengan remediasi terkontrol':'Lanjut penuh dengan remediasi terkontrol',
  'Phased functionality / pembatasan fitur tertentu':'Penerapan bertahap atau pembatasan fitur tertentu',
  'Parallel atau fallback terbatas untuk proses kritis':'Operasi paralel atau jalur cadangan terbatas untuk proses kritis',
  'Rollback lebih luas':'Pengembalian lebih luas ke sistem/proses sebelumnya'
};
if(state.decision&&decisionMap[state.decision]&&state.decision!==decisionMap[state.decision]){state.decision=decisionMap[state.decision];save();}

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
    const desc=document.querySelector('#content .section-head p');if(desc)desc.textContent='Hubungkan masalah dengan hipotesis akar penyebab, risiko SIA, pengendalian, bukti, dan tindakan. Jangan menyatakan sebab sebagai fakta bila bukti publik hanya mendukung hipotesis.';
    document.querySelectorAll('#content table.matrix th').forEach(th=>{
      th.textContent=th.textContent.replace('Kontrol','Pengendalian').replace('Tindakan','Tindakan prioritas');
    });
  }
  if(view==='decision'){
    const h=document.querySelector('#content .section-head h3');if(h)h.textContent='Keputusan Komite Pengarah';
    const p=document.querySelector('#content .section-head p');if(p)p.textContent='Pilih strategi stabilisasi berdasarkan bukti dan keterbatasannya, bukan berdasarkan hasil sejarah yang sudah diketahui.';
    const inputs=document.querySelectorAll('#content .decision-options label input');
    inputs.forEach(input=>{const old=input.value;if(decisionMap[old])input.value=decisionMap[old];if(state.decision===input.value)input.checked=true;});
    document.querySelectorAll('#content .decision-options label').forEach(label=>{const input=label.querySelector('input'),span=label.querySelector('span');if(input&&span)span.textContent=input.value;});
  }
};

CORE_DATA.glossary=[
  ['Siklus Pengembangan Sistem (SDLC)','Siklus perencanaan, analisis, desain, pengembangan/konfigurasi, pengujian, implementasi, dan pemeliharaan sistem.'],
  ['Cutover','Perpindahan dari sistem/proses lama ke sistem baru pada saat implementasi.'],
  ['Tinjauan pascaimplementasi','Evaluasi setelah go-live untuk menilai apakah sistem mencapai tujuan dan risiko telah dikendalikan.'],
  ['Manajemen Identitas & Akses (IAM)','Pengelolaan identitas, autentikasi, peran, dan hak akses.'],
  ['Impersonasi','Mekanisme pengguna personal bertindak mewakili entitas/badan yang berhak diwakilinya.'],
  ['Validasi antarmuka','Pengendalian yang memastikan data antar sistem/format memenuhi aturan sebelum diterima.'],
  ['Latensi','Waktu tunggu yang dibutuhkan sistem untuk merespons suatu fungsi.'],
  ['Throughput','Jumlah transaksi/dokumen yang dapat diproses dalam satu satuan waktu.'],
  ['Kapasitas','Kemampuan infrastruktur/aplikasi menangani beban tertentu.'],
  ['Stabilisasi','Periode perbaikan dan penyetelan setelah sistem baru masuk produksi.'],
  ['Hipotesis akar penyebab','Penjelasan sementara tentang penyebab suatu gejala yang masih harus diuji dengan bukti tambahan.'],
  ['Triangulasi bukti','Membandingkan beberapa jenis/sumber bukti sebelum mengambil kesimpulan.']
];

exportMatrix=function(){
  const esc=v=>'"'+String(v||'').replaceAll('"','""')+'"';
  const lines=[['ID','Masalah','Hipotesis Akar Penyebab','Risiko SIA','Pengendalian','Bukti','Tindakan Prioritas'].map(esc).join(',')];
  matrixRows().forEach(r=>lines.push([r.id,r.issue,r.cause,r.risk,r.control,r.evidence,r.action].map(esc).join(',')));
  download('Matriks_Evaluasi_SIA_Coretax.csv','\ufeff'+lines.join('\n'),'text/csv;charset=utf-8');
};

if(view==='briefing')render();