# Kasus Dunia Nyata Sistem Informasi Akuntansi — Magister Akuntansi

Repositori publik ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi dan dipublikasikan melalui GitHub Pages.

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
- **Area Dosen:** tersedia melalui `area-dosen/index.html`. Versi aktif panduan dosen disimpan sebagai ciphertext AES-GCM dan didekripsi di browser menggunakan sandi dosen. Sandi tidak ditulis di source code dan tidak dikirim ke server.
- File `PANDUAN_DOSEN.md` plaintext tidak lagi ada pada branch `main`.

## Model akses dan keamanan

Repositori ini **publik** agar GitHub Pages dapat dipakai tanpa biaya tambahan dan dapat diakses mahasiswa tanpa akun GitHub.

Untuk penggunaan kelas:
- mahasiswa cukup menerima URL GitHub Pages;
- Panduan Mahasiswa dapat dibuka tanpa sandi;
- Area Dosen menggunakan password + dekripsi lokal sebagai pemisahan antarmuka;
- jangan membagikan sandi Area Dosen kepada mahasiswa;
- jangan menambahkan materi dosen baru dalam plaintext ke branch publik.

### Batas keamanan yang harus diketahui
Panduan dosen pernah tersimpan sebagai plaintext pada commit historis sebelum mekanisme enkripsi dibuat. Karena repositori kembali publik, pengguna yang cukup teknis dapat mencoba menelusuri riwayat Git lama. Karena itu, **password Area Dosen merupakan pemisahan akses pada aplikasi, bukan jaminan kerahasiaan terhadap seluruh riwayat Git historis**.

Untuk benar-benar menghilangkan paparan historis diperlukan rewrite Git history atau repositori deployment publik baru dengan sejarah bersih. Sampai itu dilakukan, jangan menaruh informasi rahasia/sensitif di Area Dosen; gunakan area ini untuk panduan pengajaran, rubrik, dan debrief yang sifatnya instructional.

## Deployment kelas

Gunakan GitHub Pages dari branch `main` / root. Lihat `DEPLOYMENT_KELAS.md` untuk checklist aktivasi dan pengujian setelah perubahan visibility repository.

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