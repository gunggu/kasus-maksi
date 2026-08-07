# Kasus Imersif Sistem Informasi Akuntansi — Magister Akuntansi

Repositori ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi.

## Struktur kasus

### Kasus 1 — Citibank Indonesia: 117 Transfer
Aplikasi investigasi forensik berbasis bukti publik mengenai pemrosesan transfer, otorisasi, pemisahan tugas, verifikasi, jejak audit, kualitas bukti, dan pengawasan transaksi.

Status: **kandidat v1.0; layak untuk pilot kelas terbatas setelah uji browser live**.

Fitur utama:
- staged evidence release empat tahap;
- subset transaksi autentik yang dapat diverifikasi;
- network view pengirim–beneficiary;
- artefak kontrol dan formulir rekonstruksi;
- wawancara berbasis sumber publik;
- evidence provenance dan reliability labels;
- notebook fakta vs inferensi;
- prosedur investigasi lanjutan;
- Matriks Risiko–Kontrol–Bukti (R-K-B) interaktif;
- ekspor notebook ke Markdown;
- ekspor R-K-B ke Markdown dan CSV;
- decision gate yang mensyaratkan minimal tiga baris R-K-B lengkap;
- legal nuance yang memisahkan analisis kontrol dari tanggung jawab pidana.

Dokumentasi:
- [README Kasus 1](kasus-1-citibank/README.md)
- [Panduan Mahasiswa](kasus-1-citibank/PANDUAN_MAHASISWA.md)
- [Panduan Dosen](kasus-1-citibank/PANDUAN_DOSEN.md)
- [Audit Pedagogis](kasus-1-citibank/AUDIT_PEDAGOGIS.md)
- [Audit Kesiapan v1.0](kasus-1-citibank/AUDIT_KESIAPAN_V1.md)

### Kasus 2 — Coretax DJP: 1 Januari, Go Live
Aplikasi assurance pengembangan sistem dan pascaimplementasi mengenai requirement, integrasi, role access, XML, kapasitas, insiden, stabilisasi, dan keputusan implementasi.

Status: **menu dan arsitektur kasus telah disiapkan; pengembangan penuh dilakukan setelah pilot Kasus 1 stabil**.

## Prinsip bukti
Setiap artefak kasus diberi klasifikasi sumber:

- **Bukti primer autentik** — putusan pengadilan, dokumen regulator, dokumen resmi instansi.
- **Bukti sekunder autentik** — peliputan kontemporer yang kredibel.
- **Data turunan** — data terstruktur yang diekstrak dari bukti autentik.
- **Rekonstruksi pembelajaran** — antarmuka, formulir, atau field tambahan yang dibuat untuk simulasi dan tidak diklaim sebagai dokumen asli.

## Privasi dan integritas akademik
Nomor rekening dan data pribadi ditampilkan secara terbatas atau dimasking pada antarmuka mahasiswa. Rekonstruksi pembelajaran tidak boleh disajikan sebagai dokumen historis asli.

## Teknologi
Aplikasi dirancang sebagai situs statis HTML/CSS/JavaScript agar dapat dijalankan melalui GitHub Pages tanpa backend. Progres mahasiswa disimpan hanya di browser melalui `localStorage`.