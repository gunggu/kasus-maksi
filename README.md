# Kasus Dunia Nyata Sistem Informasi Akuntansi — Magister Akuntansi

Repositori privat ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi.

## Struktur kasus

### Kasus 1 — Citibank Indonesia: 117 Transfer
Aplikasi analisis Sistem Informasi Akuntansi berbasis bukti publik mengenai pemrosesan transfer, otorisasi yang sah, pemisahan tugas, verifikasi, jejak audit, kualitas informasi, dan pemantauan transaksi.

Status: **kandidat v1.0; layak untuk pilot kelas 120 menit setelah uji runtime live**.

Fitur utama:
- pelepasan bukti bertahap empat tahap;
- subset transaksi autentik yang dapat diverifikasi;
- jaringan pengirim–penerima;
- artefak pengendalian dan formulir rekonstruksi;
- wawancara berbasis sumber publik;
- provenance dan tingkat keandalan bukti;
- Berkas Kerja Analisis SIA;
- Matriks Risiko–Kontrol–Bukti (R-K-B) interaktif;
- ekspor berkas kerja ke Markdown;
- ekspor R-K-B ke Markdown dan CSV;
- gerbang keputusan berbasis aktivitas analitis;
- pemisahan yang jelas antara analisis SIA/pengendalian dan tanggung jawab hukum.

### Kasus 2 — Coretax DJP: 1 Januari, Go Live
Aplikasi evaluasi pengembangan, implementasi, dan stabilisasi Sistem Informasi Akuntansi mengenai desain ulang proses bisnis, cutover, hak akses/PIC/impersonasi, XML/antarmuka, insiden produksi, kapasitas, latensi, throughput, triangulasi bukti, dan keputusan stabilisasi.

Status: **kandidat v1.0; layak untuk pilot kelas 120 menit setelah uji runtime live**.

Fitur utama:
- Ruang Kendali Implementasi SIA yang berbeda dari aplikasi Citibank;
- pelepasan bukti bertahap empat tahap berbasis aktivitas analitis;
- timeline cutover autentik;
- analisis hak akses dan impersonasi;
- Papan Insiden dengan **hipotesis akar penyebab**, bukan klaim sebab final;
- triangulasi bukti antara DJP, pengawasan DPR, dan perspektif pengguna/bisnis;
- dashboard latensi, kapasitas, throughput, volume, dan periode pengukuran;
- Matriks Evaluasi: masalah → hipotesis akar penyebab → risiko → pengendalian → bukti → tindakan;
- gerbang keputusan untuk strategi stabilisasi.

## Panduan pembelajaran

- **Panduan Mahasiswa:** tersedia terbuka melalui `panduan-mahasiswa/index.html` dan tidak memerlukan sandi.
- **Area Dosen:** tersedia melalui `area-dosen/index.html`. Panduan dosen untuk kedua kasus disimpan sebagai ciphertext AES-GCM dan didekripsi di browser menggunakan sandi dosen. Sandi tidak disimpan di source code maupun dikirim ke server.

File `PANDUAN_DOSEN.md` plaintext tetap tidak disimpan pada branch `main`.

## Model akses dan keamanan

Repositori sekarang **private**. Karena itu, source code dan riwayat Git hanya dapat diakses oleh akun GitHub yang secara eksplisit diberi akses ke repositori.

Untuk penggunaan kelas:
- mahasiswa cukup menerima URL GitHub Pages dan tidak perlu diberi akses ke repositori;
- Panduan Mahasiswa tetap dapat dibuka tanpa sandi;
- Area Dosen tetap diproteksi dengan sandi dan enkripsi lokal sebagai lapisan tambahan apabila situs Pages dapat diakses mahasiswa;
- jangan menambahkan mahasiswa sebagai collaborator repositori kecuali memang diperlukan;
- bila akses repo suatu saat diberikan kepada pihak lain, anggap mereka dapat membaca seluruh riwayat Git yang dapat dijangkau oleh repo tersebut.

Karena repo sudah privat dan panduan dosen plaintext telah dihapus dari `main`, rewrite history tidak lagi diperlukan untuk skenario penggunaan kelas normal. Enkripsi Area Dosen tetap dipertahankan untuk pemisahan peran pada lapisan aplikasi.

## Audit gabungan
- [Audit Konten dan Visual Dua Kasus — 7 Agustus 2026](AUDIT_KONTEN_VISUAL_DUA_KASUS_2026-08-07.md)

## Prinsip bukti
Setiap artefak kasus dibedakan menurut provenance:
- **Bukti primer autentik** — putusan pengadilan, dokumen regulator, dokumen resmi instansi.
- **Bukti sekunder autentik** — peliputan kontemporer yang kredibel.
- **Data turunan** — data terstruktur yang diekstrak dari bukti autentik.
- **Rekonstruksi pembelajaran** — antarmuka, formulir, kategori analitis, atau field tambahan yang dibuat untuk pembelajaran dan tidak diklaim sebagai dokumen asli.

## Teknologi
Kedua aplikasi menggunakan static HTML/CSS/JavaScript untuk GitHub Pages tanpa backend. Progres mahasiswa disimpan hanya di browser melalui `localStorage`. Area Dosen menggunakan Web Crypto API dengan PBKDF2-SHA256 dan AES-GCM untuk dekripsi lokal.