# Deployment Kelas — Cloudflare Workers + GitHub

## Arsitektur saat ini
- **Source code:** repo publik `gunggu/kasus-maksi`.
- **Runtime utama:** Cloudflare Worker `kasus-maksi`.
- **Custom domain:** `https://kasus-maksi.gunggu.my.id`.
- **GitHub:** source-of-truth dan pemicu deployment dari branch `main`.
- **Cloudflare:** menyajikan static assets, API aktivasi global Kasus 2, dan state global melalui Durable Object.

## Aktivasi Kasus 2
Kasus 2 default **nonaktif** untuk seluruh kelas.

Frontend menggunakan endpoint:
- `GET /api/case2-status` — membaca status global.
- `POST /api/case2-activate` — mengaktifkan Kasus 2 untuk seluruh kelas.
- `POST /api/case2-deactivate` — menonaktifkan kembali Kasus 2.

Status global disimpan pada Durable Object `CaseState` melalui binding `CASE_STATE`.

### Secret yang wajib dikonfigurasi di Cloudflare
Pada Worker `kasus-maksi`, buka **Bindings / Variables and Secrets** dan tambahkan:

- Type: **Secret**
- Name: `CASE2_ACTIVATION_SECRET`
- Value: sandi aktivasi dosen yang telah ditentukan.

Nilai secret **jangan** ditulis di repo GitHub atau `wrangler.jsonc`.

Setelah secret disimpan/deploy, dosen dapat menekan kartu Kasus 2 pada portal dan memasukkan sandi. Aktivasi berlaku global untuk seluruh mahasiswa, bukan hanya browser dosen.

## Perlindungan akses langsung
Worker menjalankan kode terlebih dahulu untuk:
- `/api/*`
- `/kasus-2-coretax/*`

Jika Kasus 2 belum aktif, permintaan langsung ke URL Kasus 2 dialihkan kembali ke portal. Jadi mahasiswa tidak dapat melewati gate hanya dengan mengetik URL langsung.

## Konfigurasi Worker
File utama:
- `wrangler.jsonc`
- `cloudflare/worker.js`
- `.assetsignore`

Static assets disajikan melalui binding `ASSETS`. File Worker, konfigurasi Wrangler, file Markdown, dan metadata Git tidak diunggah sebagai static assets publik.

## Area Dosen
- Panduan Mahasiswa terbuka tanpa sandi.
- Area Dosen tetap menggunakan payload AES-GCM yang didekripsi lokal di browser.
- File `PANDUAN_DOSEN.md` plaintext tidak disimpan pada branch `main`.
- Repo pernah menyimpan panduan dosen plaintext pada commit historis; jangan gunakan Area Dosen untuk secret, API key, data pribadi, atau materi sangat sensitif.

## Checklist deployment
- [ ] Cloudflare Worker `kasus-maksi` terhubung ke branch `main`.
- [ ] Deployment terbaru membaca `wrangler.jsonc`.
- [ ] Durable Object `CaseState` berhasil diprovision.
- [ ] Binding `CASE_STATE` tersedia.
- [ ] Secret `CASE2_ACTIVATION_SECRET` telah dibuat pada Cloudflare.
- [ ] `GET /api/case2-status` menghasilkan JSON.
- [ ] Kasus 2 tampil `BELUM DIAKTIFKAN` pada kondisi awal.
- [ ] URL langsung `/kasus-2-coretax/` ditolak saat nonaktif.
- [ ] Sandi salah gagal mengaktifkan Kasus 2.
- [ ] Sandi benar mengaktifkan Kasus 2 secara global.
- [ ] Browser/perangkat mahasiswa lain melihat Kasus 2 aktif tanpa memasukkan sandi.
- [ ] Kasus 1 tetap dapat dibuka tanpa gate.
- [ ] Panduan Mahasiswa tetap terbuka.
- [ ] Area Dosen tetap meminta sandi.
