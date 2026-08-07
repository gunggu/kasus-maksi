# Audit Ulang Kesiapan v1.0 — Kasus 1 Citibank Indonesia: 117 Transfer

## Keputusan
**Status: kandidat v1.0 — layak untuk pilot kelas 120 menit, tetapi belum saya rekomendasikan dikunci sebagai v1.0 final.**

Secara konseptual, aplikasi sudah jelas sebagai **kasus Sistem Informasi Akuntansi**, bukan sekadar kasus fraud/perbankan. Framing utama sudah berpusat pada TPS, input, validasi, genuine authorization, pemrosesan, posting, audit trail, exception monitoring, information quality, dan human–process–technology interaction.

Dua koreksi substantif masih direkomendasikan sebelum penguncian v1.0:
1. memperkuat gate agar tidak hanya berbasis membuka/klik artefak;
2. menambahkan glosarium SIA ringkas untuk mahasiswa semester 1.

## 1. Audit framing Sistem Informasi Akuntansi — LULUS

### Sudah konsisten
- Header aplikasi: **Laboratorium Sistem Informasi Akuntansi**.
- Peran mahasiswa: tim review SIA dan pengendalian.
- Misi: menganalisis input → validasi → otorisasi → pemrosesan → posting → monitoring.
- Pertanyaan utama: bagaimana transaksi dapat diproses ketika keabsahan otorisasinya dipersoalkan.
- Empat pertanyaan kelompok sudah berfokus pada:
  1. alur SIA transaksi;
  2. kegagalan kualitas informasi;
  3. kontrol SIA;
  4. redesign SIA.
- Panduan dosen dan mahasiswa konsisten dengan framing SIA.

### Pesan pembelajaran utama
- processing accuracy ≠ transaction validity;
- evidence of approval ≠ evidence of genuine authorization;
- struktur jabatan ≠ segregation of duties yang efektif;
- pencatatan transaksi saja tidak cukup tanpa audit trail dan exception monitoring;
- kualitas informasi merupakan hasil people–process–technology–control.

## 2. Audit desain pertemuan 120 menit — LULUS BERSYARAT

### Alokasi saat ini
- 0–10: pembukaan;
- 10–25: deskripsi kasus dan konteks SIA;
- 25–30: petunjuk tugas/pembagian peran;
- 30–70: investigasi dan diskusi kelompok;
- 70–90: Matriks R-K-B dan simpulan;
- 90–105: persiapan presentasi;
- 105–117: satu kelompok presentasi (8 menit) + tanggapan (4 menit);
- 117–120: penutup dosen.

### Penilaian
Alokasi realistis **jika mahasiswa tidak diwajibkan membuka seluruh artefak** dan dosen memberi orientasi aplikasi singkat pada menit 10–25.

### Risiko beban kognitif
Mahasiswa semester 1 menerima cukup banyak istilah sekaligus: TPS, transaction validity, genuine authorization, SoD, threshold control, audit trail, exception monitoring, information quality, override, dan operating effectiveness.

**Rekomendasi prioritas:** tambahkan glosarium 8–10 istilah dengan definisi satu kalimat dan contoh sederhana di Briefing.

## 3. Audit pertanyaan kasus — LULUS

Empat pertanyaan sudah jelas, dapat didiskusikan dalam kelompok, dan dapat dipresentasikan:

1. Bagaimana transaksi seharusnya diproses oleh SIA?
2. Di mana kualitas informasi dapat rusak?
3. Kontrol SIA apa yang bermasalah?
4. Bagaimana SIA seharusnya diperbaiki?

Output maksimum lima slide juga konsisten dengan empat pertanyaan tersebut.

## 4. Audit evidence provenance — LULUS

Aplikasi membedakan:
- primer autentik;
- sekunder autentik;
- data turunan;
- rekonstruksi pembelajaran.

Batas penting sudah dinyatakan:
- tidak memiliki raw core-banking log Citibank;
- subset transaksi bukan seluruh 117 transaksi;
- formulir visual bukan dokumen Citibank asli;
- respons wawancara merupakan parafrasa pembelajaran, bukan transkrip verbatim;
- kesimpulan SIA/kontrol tidak sama dengan penetapan tanggung jawab hukum.

## 5. Audit staged evidence release — PERLU REVISI MODERAT

### Kekuatan
Urutan bukti mengurangi hindsight bias:
- tahap 1: transaksi;
- tahap 2: proses/kontrol;
- tahap 3: wawancara/bukti;
- tahap 4: kesimpulan.

### Kelemahan
Gate saat ini terutama menghitung apakah artefak **dibuka**:
- minimal 3 transaksi dibuka;
- minimal 2 kontrol dibuka;
- minimal 3 saksi/wawancara dibuka.

Membuka kartu/modal sudah dapat dihitung sebagai “ditelaah”, meskipun mahasiswa belum menulis analisis atau menggunakan jawaban wawancara.

**Risiko:** mahasiswa dapat melakukan click-through untuk membuka tahap berikutnya tanpa benar-benar melakukan evidence reasoning.

### Rekomendasi
Untuk v1.0 final, ubah minimal salah satu gate menjadi substantif, misalnya:
- satu catatan analisis wajib pada dua kontrol; dan/atau
- minimal satu pertanyaan wawancara benar-benar dibuka untuk setiap saksi yang dihitung; dan/atau
- minimal tiga bukti dipilih ke berkas kerja sebelum Kesimpulan.

Tidak perlu membuat gate terlalu berat; tujuannya hanya mencegah bypass berbasis klik.

## 6. Audit Matriks Risiko–Kontrol–Bukti — LULUS

Matriks R-K-B merupakan komponen pedagogis terkuat karena memaksa hubungan:

**isu/fakta → risiko/assertion → kontrol → bukti → keterbatasan → kesimpulan/tindakan.**

Kesimpulan akhir mensyaratkan minimal tiga baris lengkap. Ini tepat untuk tingkat Magister dan membantu mengubah eksplorasi menjadi argumentasi profesional.

Catatan untuk semester 1: dosen sebaiknya menunjukkan satu contoh baris R-K-B yang **tidak menggunakan fakta kasus**, agar tidak membocorkan jawaban.

## 7. Audit bahasa dan konsistensi — LULUS DENGAN CATATAN KECIL

Bahasa utama sudah Indonesia. Beberapa istilah Inggris dipertahankan karena merupakan terminologi profesional SIA.

Catatan kecil:
- teks internal seperti **“MISI INVESTIGASI”** dan **“Notebook Investigasi”** masih memberi nuansa forensik, tetapi tidak lagi mendominasi framing aplikasi;
- jika ingin konsistensi penuh, dapat diganti menjadi “Misi Analisis SIA” dan “Berkas Kerja Analisis”.

Ini bukan blocker v1.0.

## 8. Audit teknis statis — LULUS BERSYARAT

### Struktur script
Urutan pemuatan sudah logis:
`data-kasus.js → data-tambahan.js → sia-meta.js → app.js → extensions.js → matrix.js → class-plan.js → sia-context.js`.

Metadata SIA dimuat sebelum `app.js`, sehingga briefing menggunakan framing terbaru.

### Arsitektur
Aplikasi statis tanpa backend sesuai untuk GitHub Pages. Progres disimpan di `localStorage`; notebook/R-K-B diekspor secara lokal.

### Yang masih perlu diuji manual pada laman live
- refresh setelah progres tersimpan;
- reset kasus;
- unlock tahap 1–4;
- pengisian dan penyimpanan R-K-B;
- ekspor Markdown dan CSV;
- tampilan pada laptop 1366×768;
- keyboard/focus/modal accessibility.

## 9. Audit kesiapan presentasi kelompok — LULUS

Format lima slide sudah cukup fokus:
1. alur SIA dan titik kontrol;
2. tiga titik kegagalan kualitas informasi;
3. analisis kontrol + R-K-B;
4. tiga rekomendasi desain SIA;
5. kesimpulan profesional + keterbatasan.

Satu kelompok presentasi 8 menit + 4 menit diskusi adalah realistis untuk pertemuan 120 menit.

## Prioritas revisi sebelum v1.0 final

### Prioritas 1 — substansikan unlock
Jangan menghitung sekadar klik sebagai analisis selesai.

### Prioritas 2 — glosarium semester 1
Tambahkan 8–10 istilah SIA dengan definisi singkat dan contoh umum.

### Prioritas 3 — uji runtime live
Pastikan seluruh alur berjalan pada browser kelas.

### Prioritas 4 — kosmetik bahasa
Opsional: ganti “Misi Investigasi” dan “Notebook Investigasi” menjadi istilah yang lebih SIA-oriented.

## Hal yang tidak boleh dilakukan untuk melengkapi kasus
- mengarang raw core-banking logs;
- mengarang timestamp, user ID, IP address, atau approval record lalu menyebutnya autentik;
- mengarang transkrip wawancara sebagai verbatim;
- menutupi putusan PK;
- mengubah rekonstruksi menjadi klaim historis.

## Kriteria penguncian v1.0
Kasus dapat dikunci sebagai **v1.0 final** setelah:
1. gate utama tidak dapat dilewati hanya dengan click-through;
2. glosarium semester 1 tersedia;
3. satu putaran uji browser live selesai tanpa blocker;
4. ekspor notebook dan R-K-B teruji;
5. satu pilot kecil menunjukkan alur **120 menit** realistis;
6. tidak ditemukan misleading provenance.

## Kesimpulan audit
**Secara konten SIA: kuat dan layak.**  
**Secara pedagogis semester 1: layak dengan scaffolding yang sudah ada, tetapi glosarium akan sangat membantu.**  
**Secara desain imersif: kuat, namun gate perlu dibuat sedikit lebih substantif.**  
**Status keseluruhan: kandidat v1.0, revisi moderat terakhir direkomendasikan sebelum dikunci.**
