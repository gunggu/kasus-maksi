# Deployment Kelas — Repo Source Private, Situs Mahasiswa Publik

## Kondisi saat ini
Repo `gunggu/kasus-maksi` bersifat **private**. Perubahan dari public ke private dapat membuat GitHub Pages lama otomatis tidak dipublikasikan, terutama pada akun yang tidak mendukung Pages dari private repository.

## Opsi A — Tetap memakai repo private yang sama
Gunakan opsi ini hanya jika akun GitHub mendukung GitHub Pages dari private repository (misalnya GitHub Pro/Team/Enterprise).

1. Buka **Settings → Pages** pada repo `kasus-maksi`.
2. Pada **Build and deployment**, pilih sumber deployment dari branch `main` / root sesuai konfigurasi sebelumnya.
3. Simpan dan tunggu deployment baru selesai.
4. Uji URL kelas tanpa login/incognito.

Jika menu Pages tidak mengizinkan publikasi dari private repo atau situs tetap memerlukan autentikasi, gunakan Opsi B.

## Opsi B — Rekomendasi: repo source private + repo deployment public
Buat repo publik baru, misalnya `kasus-maksi-pages`.

Repo publik deployment hanya boleh berisi file runtime yang diperlukan untuk kelas:

- `index.html`
- `portal.css`
- `panduan-mahasiswa/`
- `kasus-1-citibank/` (file aplikasi mahasiswa/runtime)
- `kasus-2-coretax/` (file aplikasi mahasiswa/runtime)
- `area-dosen/` hanya jika tetap ingin Area Dosen tersedia dari situs kelas; isinya sudah terenkripsi dan tidak menyimpan sandi plaintext.

Jangan menyalin:

- riwayat Git repo `kasus-maksi`;
- file audit internal yang tidak diperlukan mahasiswa;
- dokumentasi pengembangan internal;
- plaintext panduan dosen;
- file sementara atau artefak lain yang tidak diperlukan runtime.

Aktifkan GitHub Pages pada repo publik deployment dari `main` / root.

## Model akses yang disarankan

- **`kasus-maksi` (private)** = source/master, audit, pengembangan, riwayat, materi pengajar.
- **`kasus-maksi-pages` (public)** = salinan runtime bersih untuk mahasiswa.
- **Panduan Mahasiswa** = terbuka tanpa sandi.
- **Area Dosen** = tetap terenkripsi dan menggunakan sandi lokal di browser.

## Catatan keamanan
Repo deployment publik harus dibuat sebagai repo baru agar tidak membawa riwayat lama yang pernah memuat panduan dosen plaintext. Jangan mengubah repo `kasus-maksi` kembali menjadi public hanya demi mengaktifkan URL kelas.
