# Konfigurasi Unggah Presentasi Kelompok — Cloudflare

Fitur runtime sudah tersedia pada repo. Agar unggah dan unduh berfungsi, Worker `kasus-maksi` memerlukan dua binding Cloudflare.

## 1. R2 bucket

Buat bucket R2, disarankan bernama:

`kasus-maksi-presentasi`

Kemudian pada Worker `kasus-maksi` tambahkan binding:

- Type: **R2 bucket**
- Variable name: `PRESENTATIONS`
- R2 bucket: `kasus-maksi-presentasi`

Berkas mahasiswa tidak diberi public bucket URL. Semua akses unduh dilakukan melalui Worker.

## 2. Secrets Store untuk akses dosen

Buat account secret:

- Secret name: `INSTRUCTOR_ACCESS_SECRET`
- Secret value: gunakan sandi Area Dosen yang sama

Kemudian bind ke Worker:

- Type: **Secrets Store**
- Variable name: `INSTRUCTOR_ACCESS_SECRET`
- Secret name: `INSTRUCTOR_ACCESS_SECRET`

Worker membaca secret dengan `.get()` dan menukar sandi yang benar dengan token sesi dosen yang berlaku 2 jam.

## 3. Endpoint runtime

- `POST /api/submissions/upload` — unggah mahasiswa; hanya `.ppt/.pptx`, maksimum 25 MB.
- `POST /api/instructor-login` — membuat sesi dosen sementara.
- `GET /api/submissions/list` — daftar seluruh unggahan, memerlukan sesi dosen.
- `GET /api/submissions/download?key=...` — unduh file, memerlukan sesi dosen.

## 4. Perilaku Kasus 2

Jika Kasus 2 belum diaktifkan secara global:
- mahasiswa tidak dapat memilih Kasus 2 pada formulir unggah;
- Worker juga menolak unggahan dengan `caseId=case2`.

Setelah Kasus 2 diaktifkan, pilihan unggah Kasus 2 otomatis tersedia.

## 5. Pengujian

1. Buka `/unggah-presentasi/`.
2. Unggah satu file `.pptx` kecil untuk Kasus 1.
3. Buka Area Dosen dengan sandi dosen.
4. Pilih menu **Berkas Kelompok**.
5. Pastikan file muncul dengan kasus, kelompok, nama file, ukuran, dan waktu unggah.
6. Tekan **Unduh** dan pastikan file yang diterima sama dengan file yang diunggah.
7. Sebelum Kasus 2 aktif, pastikan pilihan Kasus 2 disabled.
8. Setelah aktivasi global Kasus 2, pastikan pilihan tersebut menjadi aktif.

## Catatan keamanan

- Bucket R2 tidak perlu dibuat public.
- Jangan memakai public development URL R2 untuk pengumpulan.
- Upload mahasiswa tidak memberikan akses baca/list bucket.
- Daftar dan unduhan hanya melalui token sesi dosen.
- File dibatasi ke ekstensi PowerPoint dan 25 MB per unggahan.
