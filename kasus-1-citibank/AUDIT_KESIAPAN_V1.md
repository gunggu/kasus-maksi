# Audit Kesiapan v1.0 — Kasus 1 Citibank Indonesia: 117 Transfer

## Keputusan
**Status: kandidat v1.0 — layak untuk pilot kelas terbatas.**

Aplikasi sudah memiliki struktur pedagogis dan fungsional yang memadai untuk digunakan pada satu pertemuan Magister Akuntansi, dengan syarat dosen memahami batas bukti dan melakukan debrief terstruktur.

## Komponen yang sudah siap

### 1. Arsitektur kasus
- Briefing tanpa membocorkan hasil akhir.
- Eksplorasi transaksi.
- Jaringan rekening.
- Formulir dan pengendalian.
- Wawancara dan ruang bukti.
- Notebook investigasi.
- Matriks Risiko–Kontrol–Bukti (R-K-B).
- Kesimpulan profesional.

### 2. Pelepasan bukti bertahap
- Tahap 1: transaksi.
- Tahap 2: proses/kontrol setelah minimal tiga transaksi ditelaah.
- Tahap 3: wawancara/bukti setelah minimal dua kontrol ditelaah.
- Tahap 4: kesimpulan setelah minimal tiga sumber wawancara ditelaah.
- Kesimpulan profesional juga mensyaratkan minimal tiga baris R-K-B lengkap.

### 3. Evidence provenance
Setiap bukti dibedakan sebagai:
- primer autentik;
- sekunder autentik;
- data turunan;
- rekonstruksi pembelajaran.

### 4. Penalaran profesional
Aplikasi memaksa mahasiswa membedakan:
- fakta terverifikasi;
- inferensi/hipotesis;
- risiko/assertion;
- kontrol;
- bukti;
- keterbatasan;
- prosedur lanjutan;
- kesimpulan kontrol;
- disposisi hukum.

### 5. Berkas kerja
Mahasiswa dapat mengekspor secara lokal:
- Notebook Investigasi (.md);
- Matriks R-K-B (.md);
- Matriks R-K-B (.csv).

Tidak ada data mahasiswa yang dikirim ke backend.

## Kekuatan pedagogis utama
1. **Hindsight bias dikurangi** melalui pelepasan bukti bertahap.
2. **Traceability diwajibkan** melalui matriks R-K-B.
3. **AIS-specific reasoning** muncul pada otorisasi, segregation of duties, verification, audit trail, monitoring, dan exception detection.
4. **Legal nuance dipertahankan**: bukti kelemahan proses tidak otomatis menjadi penetapan kesalahan pidana individu.
5. **Authenticity boundary jelas**: aplikasi tidak mengklaim raw core-banking logs atau populasi lengkap 117 transaksi.

## Risiko yang masih tersisa

### Prioritas 1 — uji browser nyata
Perlu uji pada:
- Chrome desktop;
- Edge desktop;
- Safari/iPad bila digunakan di kelas;
- layar laptop 1366×768;
- tampilan mobile sebagai fallback.

Uji khusus:
- semua menu;
- localStorage;
- reset kasus;
- unlock tahap 1–4;
- penyimpanan matriks R-K-B;
- export Markdown;
- export CSV;
- refresh browser setelah progres tersimpan.

### Prioritas 2 — perluasan bukti autentik
Dataset saat ini adalah subset terverifikasi, bukan populasi lengkap 117 transfer. Perluasan hanya boleh dilakukan bila detail dapat diverifikasi dari sumber publik yang dapat dipertanggungjawabkan.

### Prioritas 3 — aksesibilitas
Masih perlu audit khusus:
- keyboard navigation;
- focus states;
- kontras warna;
- label form untuk screen reader;
- penggunaan modal tanpa mouse.

## Hal yang tidak boleh dilakukan untuk “melengkapi” kasus
- Mengarang raw core-banking logs.
- Mengarang timestamp, user ID, IP address, atau approval record dan menyebutnya autentik.
- Mengarang transkrip wawancara seolah verbatim.
- Menutupi putusan PK atau mencampur legal disposition dengan analisis kontrol.
- Mengubah angka atau nama agar narasi lebih dramatis.

## Kriteria untuk mengunci v1.0
Kasus dapat ditandai **v1.0** setelah:
1. satu putaran uji browser live selesai tanpa blocker;
2. export notebook dan R-K-B teruji;
3. minimal satu pilot dosen/kelompok kecil membuktikan alur 150 menit realistis;
4. tidak ditemukan misleading provenance;
5. tidak ada bug yang memungkinkan melewati gate utama tanpa memenuhi syarat.

## Rekomendasi
Setelah uji browser dan pilot terbatas, kunci Kasus 1 sebagai v1.0. Pengembangan fitur baru setelah itu sebaiknya masuk ke v1.1 agar Kasus 2 Coretax dapat mulai dibangun tanpa membuat Kasus 1 terus berubah.