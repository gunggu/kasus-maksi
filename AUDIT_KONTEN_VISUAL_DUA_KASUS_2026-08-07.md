# Audit Konten dan Visual Dua Kasus SIA — 7 Agustus 2026

## Keputusan umum
**Status: kedua kasus layak untuk pilot kelas 120 menit dan dapat diperlakukan sebagai kandidat v1.0 setelah uji runtime live terakhir.**

Audit mencakup portal utama, Kasus 1 Citibank, Kasus 2 Coretax, konsistensi bahasa, struktur pembelajaran, provenance bukti, staged release, kepadatan visual, responsif laptop, tabel/matriks, dan aksesibilitas dasar.

---

## 1. Portal utama

### Temuan konten
- Framing lama yang bernuansa investigatif/forensik tidak lagi tepat untuk portal mata kuliah SIA.
- Portal perlu menegaskan perbedaan pedagogis dua kasus: operasi/pengendalian versus pengembangan/implementasi.

### Revisi
- Judul diubah menjadi **Laboratorium Kasus SIA Dunia Nyata**.
- Kasus 1 diberi label **Operasi & Pengendalian SIA**.
- Kasus 2 diberi label **Pengembangan & Implementasi SIA**.
- Deskripsi Kasus 1 tidak lagi memakai framing investigatif; fokus pada pemrosesan, otorisasi, kualitas informasi, jejak audit, dan monitoring.
- Deskripsi Kasus 2 menggunakan bahasa Indonesia pada label utama.
- Badge waktu **2 × 120 menit** ditambahkan.

### Temuan visual
- Dua kartu sudah seimbang, tetapi perlu hierarchy status yang lebih jelas.
- Pada layar sempit, header dan kartu perlu stacking yang lebih stabil.

### Revisi visual
- Status chip per kasus.
- Tinggi kartu diseimbangkan dengan CTA di bagian bawah.
- Focus-visible untuk keyboard.
- Spacing dan line-height diperbaiki.
- Breakpoint tablet/mobile diperhalus.

**Status portal: LULUS.**

---

## 2. Kasus 1 — Citibank Indonesia: 117 Transfer

### Audit konten
**Kekuatan**
- Framing jelas sebagai kasus Sistem Informasi Akuntansi.
- Fokus utama: TPS, input, validasi, otorisasi, pemrosesan, posting, audit trail, exception monitoring, dan information quality.
- Bukti primer/sekunder/turunan/rekonstruksi dibedakan.
- Staged release berbasis aktivitas analitis, bukan sekadar klik.
- Kesimpulan mensyaratkan tiga baris Matriks Risiko–Kontrol–Bukti.
- Batas antara analisis SIA dan tanggung jawab hukum dinyatakan jelas.

**Temuan**
- Beberapa istilah sisa pada ekspor/glosarium masih terlalu berbahasa Inggris atau bernuansa investigasi.
- Istilah profesional perlu tetap diperkenalkan, tetapi bahasa Indonesia harus menjadi label utama untuk mahasiswa semester 1.

**Revisi**
- `Notebook Investigasi`/framing lama diganti menjadi **Berkas Kerja Analisis SIA**.
- `clue` → **petunjuk** pada ekspor.
- `assertion` → **asersi**.
- Glosarium kini mendahulukan istilah Indonesia: validitas transaksi, otorisasi yang sah, pengendalian input, pemisahan tugas, jejak audit, laporan pengecualian, efektivitas operasional kontrol, dan pemantauan berkelanjutan.

### Audit visual
**Temuan**
- Delapan menu sidebar cukup padat pada laptop 1366×768.
- Matriks R-K-B tujuh kolom memerlukan horizontal scroll dan sebelumnya terlalu lebar.
- Header tabel tidak sticky sehingga konteks kolom mudah hilang saat scroll.
- Focus state belum konsisten.

**Revisi visual**
- Sidebar dipadatkan tanpa mengurangi keterbacaan.
- Content padding dan hierarchy heading diperhalus.
- Header tabel dibuat sticky.
- Kolom ID Matriks R-K-B dibuat sticky.
- Lebar minimum matriks dikurangi secara aman; textarea lebih ringkas.
- Focus-visible ditambahkan.
- Modal close diberi target klik yang lebih jelas.
- Breakpoint 1180px ditambahkan untuk laptop kecil.

**Status Kasus 1: LULUS, kandidat v1.0.**

---

## 3. Kasus 2 — Coretax DJP: 1 Januari, Go Live

### Audit konten
**Kekuatan**
- Pengalaman berbeda dari Kasus 1: ruang kendali implementasi, bukan analisis transaksi.
- Bukti mencakup DJP, DPR, dan perspektif pengguna/eksternal.
- Fokus pada SDLC, cutover, role/access, XML/interface, incident classification, capacity, latency, throughput, volume, dan stabilization.
- Mahasiswa diwajibkan menggunakan istilah **hipotesis akar penyebab**, bukan mengklaim sebab final tanpa bukti.
- Staged release sudah hierarkis dan mencakup analisis kinerja sebelum keputusan.

**Temuan**
- UI masih mencampur bahasa Indonesia dan Inggris: `Incident Board`, `Role & Impersonation`, `Matriks Assurance`, `Steering Committee`, dan beberapa opsi keputusan.
- Istilah Inggris teknis tetap berguna, tetapi tidak seharusnya menjadi label utama.

**Revisi**
- `Incident Board` → **Papan Insiden**.
- `Role & Impersonation` → **Hak Akses & Impersonasi**.
- `Matriks Assurance` → **Matriks Evaluasi SIA**.
- `Steering Committee` → **Komite Pengarah** pada tampilan mahasiswa.
- Opsi keputusan `phased/parallel/rollback` diterjemahkan ke bahasa Indonesia dengan padanan profesional tetap dapat dijelaskan dosen.
- Nama file ekspor menjadi `Matriks_Evaluasi_SIA_Coretax.csv`.
- Glosarium mendahulukan istilah Indonesia.

### Audit visual
**Temuan**
- Sidebar tujuh menu cukup padat tetapi masih aman.
- Timeline lima kolom terlalu sempit pada laptop menengah.
- Matriks tujuh kolom memerlukan horizontal scroll.
- Dashboard angka cukup padat dan perlu menjaga hierarchy.

**Revisi visual**
- Sidebar dan topbar dipadatkan.
- Timeline berubah menjadi tiga kolom pada laptop menengah.
- Header tabel dan kolom ID matriks dibuat sticky.
- Textarea matriks diperkecil secara aman.
- Metric cards dan evidence cards dibuat lebih ringkas.
- Focus-visible dan hover states diperkuat.
- Responsive breakpoint diperbaiki.

**Status Kasus 2: LULUS, kandidat v1.0.**

---

## 4. Konsistensi antar kasus

### Yang sengaja dibuat sama
- bahasa utama Indonesia;
- durasi 120 menit;
- pembukaan dan orientasi sebelum analisis;
- staged release;
- provenance bukti;
- keputusan berbasis bukti;
- satu kelompok presentasi di akhir;
- penyimpanan lokal browser;
- ekspor hasil kerja.

### Yang sengaja dibuat berbeda
- **Kasus 1:** operasi SIA, transaction processing, authorization, audit trail, controls.
- **Kasus 2:** development/implementation SIA, cutover, IAM, interface, performance, stabilization.
- Kasus 1 terasa seperti laboratorium transaksi/pengendalian.
- Kasus 2 terasa seperti command center implementasi.

Perbedaan ini harus dipertahankan agar dua pertemuan tidak terasa sebagai pengulangan mekanik.

---

## 5. Risiko residual sebelum v1.0 final

1. **Uji runtime live** masih perlu dilakukan oleh pengguna pada GitHub Pages untuk memastikan deployment terbaru sudah tampil dan cache lama hilang.
2. Uji khusus pada Chrome/Edge laptop 1366×768:
   - seluruh menu;
   - staged release;
   - localStorage + refresh;
   - reset;
   - ekspor CSV/Markdown;
   - scroll matriks;
   - modal Kasus 1;
   - focus keyboard.
3. Lakukan satu pilot kelompok kecil untuk menguji apakah 120 menit realistis.
4. Jangan menambah data sintetis yang dapat disalahpahami sebagai raw data historis.

## Kesimpulan
**Konten:** kedua kasus kuat dan saling melengkapi sebagai dua perspektif utama SIA.

**Visual:** setelah pass final, hierarchy, kepadatan, responsif, tabel, matriks, dan aksesibilitas dasar sudah lebih konsisten.

**Bahasa:** framing investigatif pada portal telah dihilangkan; istilah UI utama sekarang berbahasa Indonesia. Istilah Inggris dipertahankan hanya bila merupakan terminologi profesional yang perlu diperkenalkan.

**Rekomendasi:** lakukan refresh keras pada GitHub Pages dan uji runtime. Bila versi terbaru sudah tampil tanpa blocker, kunci kedua kasus sebagai **v1.0** dan hindari penambahan fitur besar sebelum penggunaan kelas pertama.
