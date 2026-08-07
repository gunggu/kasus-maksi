# Kasus Imersif Sistem Informasi Akuntansi — Magister Akuntansi

Repositori ini berisi dua aplikasi kasus dunia nyata untuk pembelajaran Sistem Informasi Akuntansi pada tingkat Magister Akuntansi.

## Struktur kasus

### Kasus 1 — Citibank Indonesia: 117 Transfer
Aplikasi investigasi forensik berbasis bukti publik mengenai pemrosesan transfer, otorisasi, pemisahan tugas, verifikasi, jejak audit, dan pengawasan transaksi.

Status: **aktif dikembangkan**.

### Kasus 2 — Coretax DJP: 1 Januari, Go Live
Aplikasi assurance pengembangan sistem dan pascaimplementasi mengenai requirement, integrasi, role access, XML, kapasitas, insiden, stabilisasi, dan keputusan implementasi.

Status: **menu disiapkan; pengembangan penuh menyusul setelah Kasus 1 selesai**.

## Prinsip bukti
Setiap artefak kasus diberi klasifikasi sumber:

- **Bukti primer autentik** — putusan pengadilan, dokumen regulator, dokumen resmi instansi.
- **Bukti sekunder autentik** — peliputan kontemporer yang kredibel.
- **Data turunan** — data terstruktur yang diekstrak dari bukti autentik.
- **Rekonstruksi pembelajaran** — antarmuka, formulir, atau field tambahan yang dibuat untuk simulasi dan tidak diklaim sebagai dokumen asli.

## Privasi dan integritas akademik
Nomor rekening dan data pribadi ditampilkan secara terbatas atau dimasking pada antarmuka mahasiswa. Aplikasi tidak boleh mengubah rekonstruksi pembelajaran menjadi klaim historis.

## Teknologi
Aplikasi dirancang sebagai situs statis HTML/CSS/JavaScript agar dapat dijalankan melalui GitHub Pages tanpa backend. Progres mahasiswa disimpan hanya di browser melalui `localStorage`.
