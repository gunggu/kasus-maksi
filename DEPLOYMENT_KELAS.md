# Deployment Kelas — GitHub Pages dari Repo Publik

## Kondisi saat ini
Repo `gunggu/kasus-maksi` bersifat **public** agar GitHub Pages dapat diakses mahasiswa tanpa biaya tambahan dan tanpa login GitHub.

## Aktivasi GitHub Pages
1. Buka **Settings → Pages** pada repo `kasus-maksi`.
2. Pada **Build and deployment**, pilih deployment dari branch.
3. Gunakan branch `main` dan folder `/ (root)`.
4. Simpan konfigurasi.
5. Buka URL GitHub Pages dari browser incognito untuk memastikan mahasiswa dapat mengakses tanpa login.

URL kelas yang diharapkan:

- Portal: `https://gunggu.github.io/kasus-maksi/`
- Kasus 1: `https://gunggu.github.io/kasus-maksi/kasus-1-citibank/`
- Kasus 2: `https://gunggu.github.io/kasus-maksi/kasus-2-coretax/`
- Panduan Mahasiswa: `https://gunggu.github.io/kasus-maksi/panduan-mahasiswa/`
- Area Dosen: `https://gunggu.github.io/kasus-maksi/area-dosen/`

## Model akses
- **Panduan Mahasiswa**: terbuka tanpa sandi.
- **Aplikasi Kasus 1 & 2**: terbuka tanpa sandi.
- **Area Dosen**: menggunakan password dan dekripsi AES-GCM lokal di browser.
- File panduan dosen plaintext tidak disimpan pada branch `main`.

## Catatan keamanan penting
Repo ini pernah menyimpan panduan dosen plaintext pada commit historis sebelum enkripsi diterapkan. Karena repo sekarang publik, riwayat lama secara teknis dapat ditelusuri oleh pengguna yang memahami Git/GitHub.

Karena itu:
- jangan menaruh informasi rahasia, data pribadi, kunci API, atau materi sensitif di Area Dosen;
- jangan menganggap password Area Dosen sebagai perlindungan terhadap commit historis lama;
- password hanya berfungsi sebagai pemisahan akses pada antarmuka GitHub Pages saat ini;
- materi baru untuk dosen harus tetap disimpan hanya dalam payload terenkripsi.

Untuk eliminasi historis penuh dibutuhkan rewrite Git history atau repo deployment publik baru dengan history bersih.

## Checklist setelah perubahan visibility
- [ ] repo menunjukkan visibility **Public**;
- [ ] GitHub Pages aktif dari `main` / root;
- [ ] portal terbuka melalui incognito;
- [ ] Kasus 1 terbuka;
- [ ] Kasus 2 terbuka;
- [ ] Panduan Mahasiswa terbuka tanpa sandi;
- [ ] Area Dosen meminta sandi;
- [ ] sandi salah gagal membuka panduan;
- [ ] sandi benar membuka kedua panduan dosen;
- [ ] tombol **Kunci kembali** bekerja;
- [ ] refresh tidak menampilkan plaintext panduan dosen sebelum login;
- [ ] source branch `main` tidak memiliki `PANDUAN_DOSEN.md` plaintext.
