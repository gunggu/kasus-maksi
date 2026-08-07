// Bukti tambahan yang diverifikasi pada putaran pengembangan berikutnya.
// File terpisah menjaga jejak perubahan dan memudahkan audit provenance.
CASE_DATA.evidence.push(
  {
    id:'E-07',releaseStage:3,
    title:'Guest logbook dan account/banking relationship summary',
    desc:'Putusan PK mencantumkan guest logbook serta sejumlah ringkasan rekening dan banking relationship atas nama Rohli Pateni untuk beberapa periode 2010 sebagai barang bukti.',
    use:'Menguji hubungan kunjungan/relasi nasabah dengan aktivitas rekening dan menyediakan sumber corroboration longitudinal.',
    limitation:'Inventaris barang bukti tidak sama dengan raw core-banking transaction log dan tidak otomatis membuktikan otorisasi atau ketidakotorisasian setiap transfer.',
    sourceUrl:'https://putusan3.mahkamahagung.go.id/direktori/putusan/403cf367970d94f69c977b72679fb80e.html',
    prov:'primary',reliability:'Tinggi'
  },
  {
    id:'E-08',releaseStage:3,
    title:'Skala aliran dana pada tahap penyidikan',
    desc:'Peliputan ANTARA pada April 2011 menyebut penyidik menelusuri aliran dana ke sekitar 30 rekening, menyita 29 formulir transfer, dan pada tahap tersebut baru memperoleh data tiga nasabah dengan kerugian sementara Rp16,6 miliar.',
    use:'Memberi konteks skala dan menunjukkan bahwa informasi investigasi berkembang bertahap.',
    limitation:'Angka ini adalah snapshot penyidikan dan sumber sekunder; jangan diperlakukan sebagai populasi final perkara atau daftar transaksi lengkap.',
    sourceUrl:'https://www.antaranews.com/berita/253344/polri-baru-diberi-tiga-data-nasabah-citibank',
    prov:'secondary',reliability:'Sedang-Tinggi'
  }
);
CASE_DATA.controls.push({
  id:'C-07',releaseStage:3,title:'Corroboration lintas periode rekening',
  fact:'Putusan PK mencantumkan account summary dan banking relationship summary Rohli Pateni untuk beberapa periode 2010 serta guest logbook terkait.',
  objective:'Menguji pola transaksi dan hubungan nasabah secara longitudinal, bukan menilai satu transaksi secara terisolasi.',
  question:'Jika Anda memperoleh seluruh account summary tersebut, analitik apa yang akan dilakukan untuk membedakan transaksi normal, outlier, dan perubahan perilaku?',
  source:'Putusan 99 PK/Pid.Sus/2016',sourceUrl:'https://putusan3.mahkamahagung.go.id/direktori/putusan/403cf367970d94f69c977b72679fb80e.html',
  prov:'primary',reliability:'Tinggi'
});