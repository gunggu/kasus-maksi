# Konfigurasi Unggah Presentasi Kelompok — Cloudflare Workers KV

Fitur runtime sudah tersedia pada repo. Agar unggah dan unduh berfungsi tanpa R2, Worker `kasus-maksi` memakai **Workers KV**.

## 1. Buat KV namespace

Pada Cloudflare Dashboard:

1. Buka **Workers & Pages**.
2. Pilih **KV** / **Workers KV**.
3. Buat namespace baru, disarankan bernama:

`kasus-maksi-presentasi`

4. Kembali ke Worker `kasus-maksi` → **Bindings** → **Add binding** → **KV namespace**.
5. Isi:
   - Variable name: `PRESENTATIONS`
   - KV namespace: `kasus-maksi-presentasi`
6. Deploy Worker.

Workers KV Free saat ini mendukung maksimum 25 MiB per value dan 1 GB total storage. Aplikasi membatasi file PowerPoint menjadi maksimum **20 MB** agar tetap aman di bawah batas value KV.

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

- `POST /api/submissions/upload` — unggah mahasiswa; hanya `.ppt/.pptx`, maksimum 20 MB.
- `POST /api/instructor-login` — membuat sesi dosen sementara.
- `GET /api/submissions/list` — daftar seluruh unggahan, memerlukan sesi dosen.
- `GET /api/submissions/download?key=...` — unduh file, memerlukan sesi dosen.

## 4. Cara data disimpan

Setiap file disimpan sebagai satu key KV dengan prefix `submission:`. Metadata KV menyimpan:
- kasus;
- kelompok;
- nama anggota/penyaji;
- nama file asli;
- ukuran file;
- content type;
- waktu unggah.

Mahasiswa hanya dapat melakukan upload melalui endpoint Worker. Daftar file dan isi file tidak diekspos secara publik.

## 5. Perilaku Kasus 2

Jika Kasus 2 belum diaktifkan secara global:
- mahasiswa tidak dapat memilih Kasus 2 pada formulir unggah;
- Worker juga menolak unggahan dengan `caseId=case2`.

Setelah Kasus 2 diaktifkan, pilihan unggah Kasus 2 otomatis tersedia.

## 6. Pengujian

1. Buka `/unggah-presentasi/`.
2. Unggah satu file `.pptx` kecil untuk Kasus 1.
3. Buka Area Dosen dengan sandi dosen.
4. Pilih menu **Berkas Kelompok**.
5. Pastikan file muncul dengan kasus, kelompok, nama file, ukuran, dan waktu unggah.
6. Tekan **Unduh** dan pastikan file yang diterima sama dengan file yang diunggah.
7. Sebelum Kasus 2 aktif, pastikan pilihan Kasus 2 disabled.
8. Setelah aktivasi global Kasus 2, pastikan pilihan tersebut menjadi aktif.

## Catatan kapasitas Free plan

- Maksimum satu value KV: 25 MiB; aplikasi membatasi unggahan ke 20 MB.
- Total storage KV Free: 1 GB.
- Untuk kelas kecil/menengah ini umumnya cukup. Contoh 40 file rata-rata 10 MB menggunakan sekitar 400 MB.
- Jika penggunaan mendekati 1 GB, unduh arsip lama lalu hapus key yang tidak diperlukan sebelum semester berikutnya.

## Catatan keamanan

- KV namespace tidak mempunyai URL publik untuk file mahasiswa.
- Upload mahasiswa tidak memberikan akses baca/list KV.
- Daftar dan unduhan hanya melalui token sesi dosen.
- File dibatasi ke ekstensi PowerPoint dan 20 MB per unggahan.
