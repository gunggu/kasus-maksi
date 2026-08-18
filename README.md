# Kasus Dunia Nyata Sistem Informasi Akuntansi — Magister Akuntansi

Repositori publik ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi. Source code dikelola di GitHub dan runtime kelas dilayani melalui Cloudflare Worker `kasus-maksi` pada domain `kasus-maksi.gunggu.my.id`.

## Struktur kasus

### Kasus 1 — Citibank Indonesia: 117 Transfer
Aplikasi analisis Sistem Informasi Akuntansi berbasis bukti publik mengenai pemrosesan transfer, otorisasi yang sah, pemisahan tugas, verifikasi, jejak audit, kualitas informasi, dan pemantauan transaksi.

Status: **kandidat v1.0; layak untuk pilot kelas 120 menit**.

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

Status: **kandidat v1.0; default nonaktif sampai dosen mengaktifkannya untuk seluruh kelas**.

Fitur utama:
- Ruang Kendali Implementasi SIA yang berbeda dari aplikasi Citibank;
- pelepasan bukti bertahap empat tahap berbasis aktivitas analitis;
- timeline cutover autentik;
- analisis hak akses dan impersonasi;
- Papan Insiden dengan **hipotesis akar penyebab**, bukan klaim sebab final;
- triangulasi bukti antara DJP, pengawasan DPR, dan perspektif pengguna/bisnis;
- dashboard latensi, kapasitas, throughput, volume, dan periode pengukuran;
- Matriks Evaluasi: masalah → hipotesis akar penyebab → risiko → pengendalian → bukti → tindakan;
- gerbang keputusan untuk strategi stabilisasi;
- aktivasi global melalui Cloudflare Worker + Durable Object.

## Aktivasi global Kasus 2

Kasus 2 tidak lagi memakai `localStorage` untuk menentukan aktif/tidak aktif. Portal membaca status global melalui API Worker:

- `GET /api/case2-status`
- `POST /api/case2-activate`
- `POST /api/case2-deactivate`

Status disimpan di Durable Object `CaseState`. Sandi aktivasi dosen disimpan sebagai Cloudflare Secret bernama `CASE2_ACTIVATION_SECRET`, bukan di repo.

Saat dosen mengaktifkan Kasus 2 sekali, seluruh mahasiswa akan melihat Kasus 2 aktif. Worker juga memblokir akses langsung ke `/kasus-2-coretax/` selama status masih nonaktif.

## Panduan pembelajaran

- **Panduan Mahasiswa:** tersedia terbuka melalui `panduan-mahasiswa/index.html` dan tidak memerlukan sandi.
- **Area Dosen:** tersedia melalui `area-dosen/index.html`. Versi aktif panduan dosen disimpan sebagai ciphertext AES-GCM dan didekripsi di browser menggunakan sandi dosen.
- File `PANDUAN_DOSEN.md` plaintext tidak lagi ada pada branch `main`.

## Model akses dan keamanan

Repositori ini tetap **publik** sebagai source code. Runtime kelas dilayani Cloudflare Worker.

Untuk penggunaan kelas:
- mahasiswa cukup menerima `https://kasus-maksi.gunggu.my.id`;
- Panduan Mahasiswa dapat dibuka tanpa sandi;
- Kasus 1 selalu tersedia;
- Kasus 2 tersedia hanya setelah aktivasi global dosen;
- Area Dosen menggunakan password + dekripsi lokal sebagai pemisahan antarmuka;
- jangan menaruh secret, API key, atau data pribadi dalam source repo.

### Batas keamanan Area Dosen
Panduan dosen pernah tersimpan sebagai plaintext pada commit historis sebelum mekanisme enkripsi dibuat. Karena repositori publik, pengguna yang cukup teknis dapat mencoba menelusuri riwayat Git lama. Password Area Dosen merupakan pemisahan akses pada aplikasi, bukan jaminan kerahasiaan terhadap seluruh history Git historis.

## Deployment kelas

Cloudflare Worker menggunakan:
- `wrangler.jsonc`
- `cloudflare/worker.js`
- `.assetsignore`

Lihat `DEPLOYMENT_KELAS.md` untuk konfigurasi secret, Durable Object, dan checklist runtime.

## Audit gabungan
- [Audit Konten dan Visual Dua Kasus — 7 Agustus 2026](AUDIT_KONTEN_VISUAL_DUA_KASUS_2026-08-07.md)

## Prinsip bukti
Setiap artefak kasus dibedakan menurut provenance:
- **Bukti primer autentik** — putusan pengadilan, dokumen regulator, dokumen resmi instansi.
- **Bukti sekunder autentik** — peliputan kontemporer yang kredibel.
- **Data turunan** — data terstruktur yang diekstrak dari bukti autentik.
- **Rekonstruksi pembelajaran** — antarmuka, formulir, kategori analitis, atau field tambahan yang dibuat untuk pembelajaran dan tidak diklaim sebagai dokumen asli.

## Teknologi
Frontend menggunakan HTML/CSS/JavaScript. Progres analisis mahasiswa tetap disimpan lokal melalui `localStorage`, sedangkan **status aktivasi Kasus 2 disimpan global di Cloudflare Durable Object**. Area Dosen menggunakan Web Crypto API dengan PBKDF2-SHA256 dan AES-GCM untuk dekripsi lokal.