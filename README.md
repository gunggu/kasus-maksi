# Kasus Imersif Sistem Informasi Akuntansi — Magister Akuntansi

Repositori ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi.

## Struktur kasus

### Kasus 1 — Citibank Indonesia: 117 Transfer
Aplikasi analisis Sistem Informasi Akuntansi berbasis bukti publik mengenai pemrosesan transfer, otorisasi, pemisahan tugas, verifikasi, jejak audit, kualitas bukti, dan pengawasan transaksi.

Status: **kandidat v1.0; layak untuk pilot kelas terbatas setelah uji browser live**.

Fitur utama:
- staged evidence release empat tahap;
- subset transaksi autentik yang dapat diverifikasi;
- network view pengirim–beneficiary;
- artefak kontrol dan formulir rekonstruksi;
- wawancara berbasis sumber publik;
- evidence provenance dan reliability labels;
- Berkas Kerja Analisis SIA;
- Matriks Risiko–Kontrol–Bukti (R-K-B) interaktif;
- ekspor berkas kerja ke Markdown;
- ekspor R-K-B ke Markdown dan CSV;
- decision gate berbasis aktivitas analitis;
- legal nuance yang memisahkan analisis SIA/kontrol dari tanggung jawab pidana.

Dokumentasi:
- [README Kasus 1](kasus-1-citibank/README.md)
- [Panduan Mahasiswa](kasus-1-citibank/PANDUAN_MAHASISWA.md)
- [Panduan Dosen](kasus-1-citibank/PANDUAN_DOSEN.md)
- [Audit Pedagogis](kasus-1-citibank/AUDIT_PEDAGOGIS.md)
- [Audit Kesiapan v1.0](kasus-1-citibank/AUDIT_KESIAPAN_V1.md)

### Kasus 2 — Coretax DJP: 1 Januari, Go Live
Aplikasi assurance pengembangan, implementasi, dan stabilisasi Sistem Informasi Akuntansi mengenai business process redesign, cutover, role/PIC/impersonation, XML/interface, incident management, capacity, latency, throughput, stabilisasi, evidence triangulation, dan keputusan Steering Committee.

Status: **kandidat v1.0; layak untuk pilot kelas 120 menit setelah uji runtime live**.

Fitur utama:
- Ruang Kendali Implementasi SIA yang berbeda dari aplikasi Citibank;
- staged release empat tahap berbasis aktivitas analitis;
- timeline cutover autentik;
- role & impersonation analysis;
- Incident Board dengan **hipotesis akar penyebab**, bukan klaim sebab final;
- evidence triangulation antara DJP, oversight DPR, dan perspektif pengguna/bisnis;
- dashboard latency, capacity, throughput, volume, dan periode pengukuran;
- Dashboard Kinerja wajib dianalisis sebelum Matriks Assurance;
- Matriks Assurance masalah → hipotesis akar penyebab → risiko → kontrol → bukti → tindakan;
- decision gate untuk strategi stabilisasi;
- ekspor Matriks Assurance ke CSV dan briefing Steering Committee ke Markdown;
- scaffolding pertemuan 120 menit dan glosarium semester 1.

Dokumentasi:
- [README Kasus 2](kasus-2-coretax/README.md)
- [Panduan Mahasiswa Kasus 2](kasus-2-coretax/PANDUAN_MAHASISWA.md)
- [Panduan Dosen Kasus 2](kasus-2-coretax/PANDUAN_DOSEN.md)
- [Audit Kesiapan Kasus 2](kasus-2-coretax/AUDIT_KESIAPAN_PILOT.md)

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