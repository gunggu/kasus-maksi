// Audit konten final: selaraskan istilah mahasiswa dengan framing SIA.
const renderAuditKasus1Dasar=render;
render=function(){
  renderAuditKasus1Dasar();
  const titleMap={
    briefing:'Briefing Kasus',transaksi:'Eksplorasi Transaksi',jaringan:'Jaringan Rekening',formulir:'Formulir & Pengendalian',
    wawancara:'Wawancara & Bukti',notebook:'Berkas Kerja Analisis SIA',matrix:'Matriks Risiko–Kontrol–Bukti',keputusan:'Kesimpulan Profesional'
  };
  if(document.querySelector('#viewTitle'))document.querySelector('#viewTitle').textContent=titleMap[view]||document.querySelector('#viewTitle').textContent;
};

// Istilah glosarium ditampilkan Indonesia dahulu, istilah Inggris tetap diperkenalkan sebagai padanan profesional.
CASE_DATA.glossary=[
  ['Sistem Pemrosesan Transaksi (TPS)','Sistem yang menangkap, memvalidasi, memproses, dan mencatat transaksi rutin.'],
  ['Validitas transaksi','Menilai apakah transaksi memang sah/nyata dan layak diproses, bukan hanya apakah perhitungannya benar.'],
  ['Otorisasi yang sah','Otorisasi yang benar-benar berasal dari pihak yang berhak, bukan sekadar adanya tanda persetujuan.'],
  ['Pengendalian input','Kontrol atas validitas, kelengkapan, dan keakuratan data sebelum diproses.'],
  ['Pemisahan tugas (SoD)','Pemisahan tanggung jawab agar satu pihak tidak menguasai seluruh rangkaian input, persetujuan, dan pemantauan.'],
  ['Jejak audit','Jejak yang memungkinkan transaksi ditelusuri dari dokumen sumber sampai posting dan pihak yang memprosesnya.'],
  ['Laporan pengecualian','Laporan transaksi/kondisi yang menyimpang dari aturan atau pola normal dan membutuhkan penelaahan.'],
  ['Override','Tindakan melewati atau menonaktifkan kontrol yang normalnya berlaku.'],
  ['Efektivitas operasional kontrol','Menilai apakah kontrol yang dirancang benar-benar dijalankan secara konsisten dan memadai.'],
  ['Pemantauan berkelanjutan','Pemantauan berbasis data secara berkala/berkelanjutan untuk mendeteksi anomali atau pola risiko.']
];

// Render ulang jika pengguna sedang berada di briefing agar glosarium terbaru tampil.
if(view==='briefing')render();