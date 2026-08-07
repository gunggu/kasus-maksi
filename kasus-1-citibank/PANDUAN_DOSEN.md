# Panduan Dosen — Kasus 1 Citibank Indonesia: 117 Transfer

## Framing utama: ini kasus Sistem Informasi Akuntansi
Kasus ini harus diperkenalkan sebagai **kasus SIA**, bukan terutama sebagai kasus kriminal atau fraud. Fokus kelas adalah memahami bagaimana transaksi keuangan:

**masuk ke sistem → divalidasi → diotorisasi → diproses → diposting → menghasilkan output → dimonitor.**

Pertanyaan sentralnya:

> **Bagaimana suatu transaksi dapat tercatat dan diproses oleh sistem perbankan ketika keabsahan otorisasinya dipersoalkan, dan kontrol informasi apa yang seharusnya mencegah atau mendeteksinya?**

Kalimat kunci untuk mahasiswa semester 1:

> **Processing accuracy tidak sama dengan transaction validity.**

Sebuah sistem dapat memproses dan mencatat transaksi secara akurat secara teknis, tetapi informasi akuntansi tetap tidak dapat dipercaya bila transaksi yang masuk tidak valid atau tidak benar-benar diotorisasi.

## Fakta kasus yang relevan untuk SIA
Gunakan fakta publik berikut sebagai jembatan dari kasus ke teori SIA:
- rekening nasabah dan beneficiary sebagai account/master data;
- formulir/instruksi transfer sebagai source document;
- Relationship Manager sebagai titik masuk instruksi/relasi nasabah;
- Cash Officer dan Cash Supervisor sebagai bagian dari transaction-processing dan verification workflow;
- SOP Transaction Verification No. 30 Revision 2007 sebagai business/control rule;
- transaksi bernilai besar yang memerlukan verifikasi tambahan sebagai threshold control;
- account summary dan banking relationship summary sebagai system/accounting output;
- guest logbook sebagai sumber non-akuntansi untuk corroboration;
- beneficiary berulang sebagai contoh data yang dapat menjadi dasar exception reporting/continuous monitoring;
- tidak tersedianya raw core-banking log sebagai kesempatan untuk mendiskusikan audit trail dan bukti sistem yang idealnya diperlukan.

## Konsep SIA yang harus ditekankan
1. **Transaction Processing System (TPS)** — beda antara processing accuracy dan transaction validity.
2. **Input controls** — validitas dokumen sumber, identitas, beneficiary, nilai, dan tujuan transaksi.
3. **Authorization controls** — genuine authorization vs sekadar approval evidence.
4. **Segregation of duties** — penerimaan instruksi, input, verifikasi, approval, dan monitoring.
5. **Business rules/threshold controls** — kelemahan kontrol yang hanya melihat nilai satu transaksi dan bukan pola kumulatif.
6. **Audit trail** — siapa, kapan, apa, berdasarkan bukti apa, dan apakah ada override/exception.
7. **Exception reporting & continuous monitoring** — beneficiary berulang, outlier, pola RM–teller–supervisor, perubahan perilaku nasabah.
8. **Information quality** — validity, completeness, accuracy, timeliness, traceability, relevance.
9. **Human–system interaction** — SIA efektif bergantung pada desain, konfigurasi, manusia, dan governance.

## Tujuan pembelajaran tingkat Magister
Mahasiswa semester 1 diharapkan mampu:
- merekonstruksi alur transaksi sebagai proses SIA;
- mengidentifikasi input, process, output, dan control points;
- membedakan transaction validity dan processing accuracy;
- membedakan desain kontrol, operating effectiveness, override, dan kegagalan monitoring;
- mengevaluasi kualitas dan keterbatasan bukti;
- membangun traceability melalui Matriks Risiko–Kontrol–Bukti (R-K-B);
- menyusun rekomendasi yang memperbaiki desain sistem dan proses, bukan hanya perilaku individu;
- memisahkan kesimpulan SIA/kontrol dari kesimpulan hukum.

## Desain kelas — 120 menit

### 1. Pembukaan — 0–10 menit
Dosen:
- menjelaskan bahwa tujuan utama adalah memahami SIA, bukan mencari pelaku;
- mengenalkan konsep sederhana **input → process → output → control**;
- memberi kalimat kunci: **processing accuracy ≠ transaction validity**;
- membagi kelompok dan menjelaskan output akhir.

### 2. Deskripsi kasus dan konteks SIA — 10–25 menit
Gunakan diagram sederhana:

**nasabah → transfer form → input/pemrosesan → verifikasi/otorisasi → core banking → posting → account summary → monitoring.**

Kemudian tunjukkan fakta kasus yang dapat ditempatkan pada tiap bagian alur tersebut. Tekankan bahwa tidak semua data sistem tersedia dan itu sendiri merupakan bagian dari latihan evidence evaluation.

### 3. Petunjuk tugas dan pembagian peran — 25–30 menit
Peran kelompok:
- navigator aplikasi;
- pencatat bukti;
- analis SIA/kontrol;
- penyaji.

### 4. Investigasi dan diskusi kelompok — 30–70 menit
Mahasiswa menjawab empat pertanyaan SIA. Mereka tidak perlu membuka semua bukti. Dorong mereka memilih bukti yang paling relevan untuk menjelaskan proses dan kualitas informasi.

### 5. Matriks R-K-B dan simpulan kelompok — 70–90 menit
Minimal tiga baris yang mewakili:
1. input/authorization;
2. segregation/verification;
3. monitoring/audit trail/exception detection.

### 6. Persiapan presentasi — 90–105 menit
Maksimum lima slide:
1. alur SIA transaksi dan titik kontrol;
2. tiga titik kegagalan kualitas informasi;
3. analisis kontrol dan R-K-B;
4. rekomendasi desain SIA;
5. kesimpulan dan keterbatasan.

### 7. Presentasi satu kelompok — 105–117 menit
- 8 menit presentasi;
- 4 menit tanggapan kelas.

### 8. Penutup dosen — 117–120 menit
Tegaskan:
1. TPS yang bekerja tidak menjamin transaksi valid;
2. approval tidak selalu berarti genuine authorization;
3. SIA harus mendukung prevention **dan** detection;
4. audit trail dan exception monitoring adalah bagian inti sistem;
5. kualitas informasi dipengaruhi manusia, proses, kontrol, dan teknologi.

## Empat pertanyaan kasus dalam konteks SIA

### P1 — Bagaimana transaksi seharusnya diproses oleh Sistem Informasi Akuntansi?
Rekonstruksikan:

**dokumen sumber → input → validasi → otorisasi → pemrosesan → posting → monitoring.**

**Output:** satu diagram SIA dan sedikitnya tiga titik kontrol.

### P2 — Di mana kualitas informasi dapat rusak?
Pilih tiga fakta/indikator dan jelaskan bagaimana input tidak valid, otorisasi tidak memadai, atau monitoring lemah dapat membuat transaksi tetap tercatat.

**Output:** tiga titik kegagalan informasi + bukti + keterbatasan.

### P3 — Kontrol SIA apa yang bermasalah?
Klasifikasikan kontrol sebagai preventive, detective, atau monitoring. Nilai desain, pelaksanaan, override, segregation of duties, audit trail, dan exception monitoring.

**Output:** minimal tiga baris R-K-B lengkap.

### P4 — Bagaimana Sistem Informasi Akuntansi seharusnya diperbaiki?
Mintalah tiga rekomendasi sistem/proses. Contoh yang dapat muncul:
- independent customer confirmation;
- stronger role segregation;
- complete immutable audit trail;
- rule-based exception monitoring;
- behavioral/outlier analytics;
- cumulative threshold monitoring;
- beneficiary relationship monitoring.

**Output:** tiga rekomendasi desain SIA + kesimpulan profesional dengan keterbatasan.

## Fakta vs hal yang perlu dipelajari

### Fakta yang dapat digunakan
- terdapat source document/formulir transfer;
- terdapat peran personel yang berbeda dalam workflow;
- terdapat SOP verifikasi;
- terdapat transaksi yang memerlukan verifikasi tambahan;
- terdapat output/catatan rekening dan evidence tambahan;
- terdapat pola beneficiary yang dapat dianalisis;
- terdapat keterbatasan bukti karena raw system log tidak tersedia.

### Hal yang **tidak boleh diasumsikan sebagai fakta**
- bentuk sebenarnya layar core banking Citibank;
- user ID dan timestamp internal yang tidak tersedia publik;
- rule engine yang secara pasti digunakan sistem;
- bahwa setiap transaksi dalam populasi 117 mempunyai karakteristik yang sama;
- bahwa satu kelemahan kontrol membuktikan kesalahan pidana individu tertentu.

### Hal yang harus dipelajari mahasiswa
- bagaimana merancang SIA agar transaksi valid, bukan hanya tercatat;
- bagaimana application/manual controls saling melengkapi;
- bagaimana sistem menghasilkan audit trail yang dapat diuji;
- bagaimana data historis digunakan untuk exception monitoring;
- mengapa information quality adalah hasil kombinasi people–process–technology–control.

## Rubrik singkat (100 poin)
- Rekonstruksi proses SIA dan titik kontrol: 20
- Analisis kualitas informasi dan bukti: 20
- Analisis kontrol SIA: 20
- Matriks Risiko–Kontrol–Bukti: 20
- Rekomendasi desain SIA: 10
- Kesimpulan profesional dan keterbatasan: 10

## Batas metodologis untuk dosen
- aplikasi tidak memiliki raw core-banking log Citibank;
- subset transaksi bukan seluruh 117 transaksi;
- formulir visual adalah rekonstruksi pembelajaran;
- respons wawancara adalah parafrasa pembelajaran berbasis sumber publik;
- putusan PK 99 PK/Pid.Sus/2016 harus diperlakukan secara akurat;
- kasus harus digunakan untuk mengajar SIA dan evidence reasoning, bukan untuk menyederhanakan tanggung jawab hukum individu.
