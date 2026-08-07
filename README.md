# Kasus Dunia Nyata Sistem Informasi Akuntansi — Magister Akuntansi

Repositori ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi.

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

Dokumentasi:
- [README Kasus 1](kasus-1-citibank/README.md)
- [Panduan Mahasiswa](kasus-1-citibank/PANDUAN_MAHASISWA.md)
- [Panduan Dosen](kasus-1-citibank/PANDUAN_DOSEN.md)
- [Audit Pedagogis](kasus-1-citibank/AUDIT_PEDAGOGIS.md)
- [Audit Kesiapan v1.0](kasus-1-citibank/AUDIT_KESIAPAN_V1.md)

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
- Dashboard Kinerja wajib dianalisis sebelum Matriks Evaluasi SIA;
- Matriks Evaluasi: masalah → hipotesis akar penyebab → risiko → pengendalian → bukti → tindakan;
- gerbang keputusan untuk strategi stabilisasi;
- ekspor Matriks Evaluasi ke CSV dan briefing Komite Pengarah ke Markdown;
- scaffolding pertemuan 120 menit dan glosarium semester 1.

Dokumentasi:
- [README Kasus 2](kasus-2-coretax/README.md)
- [Panduan Mahasiswa Kasus 2](kasus-2-coretax/PANDUAN_MAHASISWA.md)
- [Panduan Dosen Kasus 2](kasus-2-coretax/PANDUAN_DOSEN.md)
- [Audit Kesiapan Kasus 2](kasus-2-coretax/AUDIT_KESIAPAN_PILOT.md)

## Audit gabungan
- [Audit Konten dan Visual Dua Kasus — 7 Agustus 2026](AUDIT_KONTEN_VISUAL_DUA_KASUS_2026-08-07.md)

## Prinsip bukti
Setiap artefak kasus dibedakan menurut provenance:

- **Bukti primer autentik** — putusan pengadilan, dokumen regulator, dokumen resmi instansi.
- **Bukti sekunder autentik** — peliputan kontemporer yang kredibel.
- **Data turunan** — data terstruktur yang diekstrak dari bukti autentik.
- **Rekonstruksi pembelajaran** — antarmuka, formulir, kategori analitis, atau field tambahan yang dibuat untuk pembelajaran dan tidak diklaim sebagai dokumen asli.

## Privasi dan integritas akademik
Nomor rekening dan data pribadi ditampilkan secara terbatas atau dimasking bila relevan. Rekonstruksi pembelajaran tidak boleh disajikan sebagai dokumen historis asli.

## Teknologi
Kedua aplikasi dirancang sebagai situs statis HTML/CSS/JavaScript untuk GitHub Pages tanpa backend. Progres mahasiswa disimpan hanya di browser melalui `localStorage`.