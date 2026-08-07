# Panduan Dosen — Kasus 1 Citibank Indonesia: 117 Transfer

## Tujuan pembelajaran tingkat Magister
Kasus ini dirancang untuk mahasiswa semester 1. Scaffolding dibuat eksplisit agar mahasiswa dapat fokus pada penalaran Sistem Informasi Akuntansi, bukan pada kompleksitas navigasi aplikasi.

Mahasiswa diharapkan mampu:
- merekonstruksi alur transaksi dan titik kontrol dalam SIA;
- membedakan desain kontrol, operating effectiveness, override, dan kegagalan monitoring;
- mengevaluasi kualitas dan keterbatasan bukti;
- membangun traceability melalui Matriks Risiko–Kontrol–Bukti (R-K-B);
- memisahkan fakta, indikator, inferensi, dan kesimpulan;
- memisahkan kesimpulan audit/kontrol dari kesimpulan hukum;
- menyusun rekomendasi perbaikan sistem yang realistis.

## Desain kelas — 120 menit

### 1. Pembukaan — 0–10 menit
Dosen:
- menjelaskan tujuan pembelajaran;
- membagi mahasiswa ke dalam kelompok;
- menegaskan bahwa kasus bukan kuis mencari “siapa yang salah”;
- menjelaskan empat jenis provenance: primer autentik, sekunder autentik, data turunan, rekonstruksi;
- menjelaskan bahwa setiap kelompok harus menghasilkan jawaban yang dapat dipresentasikan.

### 2. Deskripsi kasus dan orientasi aplikasi — 10–25 menit
Dosen menjelaskan secara ringkas:
- konteks Citibank private banking dan peran Relationship Manager;
- adanya transaksi yang dipersoalkan dan bukti publik yang tersedia;
- peran mahasiswa sebagai tim review forensik independen;
- batas penting: aplikasi tidak memiliki raw core-banking log dan tidak memuat seluruh 117 transfer;
- cara membuka satu transaksi, satu bukti, dan cara membaca label sumber.

Jangan membuka seluruh bukti pada tahap ini.

### 3. Petunjuk tugas dan pembagian peran — 25–30 menit
Setiap kelompok membaca empat pertanyaan kasus. Disarankan pembagian peran:
- **navigator aplikasi** — membuka transaksi dan bukti;
- **pencatat bukti** — mencatat ID sumber dan keterbatasannya;
- **analis kontrol** — memetakan risiko dan kontrol;
- **penyaji** — menyiapkan struktur presentasi kelompok.

Jika anggota kelompok lebih banyak, fungsi dapat dibagi lagi.

### 4. Investigasi dan diskusi kelompok — 30–70 menit
Kelompok menggunakan aplikasi untuk menjawab empat pertanyaan kasus. Mahasiswa tidak diwajibkan membuka semua artefak. Mereka harus memilih bukti yang paling relevan.

Dosen berkeliling dan hanya memberi arahan proses, bukan jawaban substantif.

### 5. Matriks R-K-B dan simpulan kelompok — 70–90 menit
Kelompok wajib mengisi minimal tiga baris lengkap Matriks Risiko–Kontrol–Bukti.

Minimal mencakup:
1. otorisasi transaksi;
2. pemisahan tugas/verifikasi;
3. monitoring atau deteksi pola transaksi.

Setiap baris harus menunjukkan:
**isu/fakta → risiko/assertion → kontrol → bukti → keterbatasan → kesimpulan/tindakan.**

### 6. Persiapan presentasi — 90–105 menit
Semua kelompok menyiapkan maksimum **5 slide**:
1. alur transaksi dan titik kontrol;
2. tiga bukti/indikator utama;
3. analisis kontrol dan ringkasan R-K-B;
4. tiga rekomendasi prioritas;
5. kesimpulan profesional dan keterbatasan.

Dosen memilih **satu kelompok** untuk presentasi. Pemilihan dapat dilakukan secara acak atau berdasarkan kualitas diskusi yang terlihat selama kelas.

### 7. Presentasi satu kelompok — 105–117 menit
- **8 menit** presentasi kelompok terpilih;
- **4 menit** pertanyaan/tanggapan dari mahasiswa lain.

Kelompok lain diminta membandingkan hasil presentasi dengan hasil diskusinya sendiri dan menyampaikan paling banyak satu perbedaan penting atau satu pertanyaan.

### 8. Penutup dosen — 117–120 menit
Dosen menegaskan lima pesan utama:
1. sistem dapat memproses transaksi secara teknis benar tetapi tetap gagal pada genuine authorization;
2. keberadaan SOP tidak sama dengan operating effectiveness;
3. approval evidence tidak selalu sama dengan authorization evidence;
4. monitoring pola transaksi dapat sama pentingnya dengan kontrol per transaksi;
5. kelemahan kontrol tidak boleh langsung disamakan dengan kesalahan pidana individu.

## Empat pertanyaan kasus untuk seluruh kelompok

### P1 — Bagaimana transaksi seharusnya diproses?
**Pertanyaan:** Rekonstruksikan alur instruksi transfer dari nasabah sampai dana diterima beneficiary. Pada titik mana saja seharusnya terdapat pengendalian?

**Output minimum:** satu diagram/alur singkat dan sedikitnya tiga titik kontrol.

### P2 — Apa bukti terkuat yang menunjukkan adanya masalah pengendalian?
**Pertanyaan:** Pilih tiga bukti atau indikator paling penting dari aplikasi. Jelaskan mana yang merupakan fakta terverifikasi, mana yang baru indikator, dan apa keterbatasannya.

**Output minimum:** tiga bukti/indikator dengan alasan pemilihan dan keterbatasan.

### P3 — Kontrol apa yang bermasalah?
**Pertanyaan:** Nilai apakah masalah utama lebih berkaitan dengan desain kontrol, pelaksanaan kontrol, override, atau monitoring. Gunakan bukti spesifik untuk mendukung penilaian.

**Output minimum:** minimal tiga baris R-K-B lengkap.

### P4 — Apa yang seharusnya dilakukan bank?
**Pertanyaan:** Berikan tiga rekomendasi prioritas yang realistis untuk mencegah atau mendeteksi kejadian serupa lebih dini. Nyatakan pula kesimpulan profesional kelompok dan apa yang masih belum dapat disimpulkan.

**Output minimum:** tiga rekomendasi prioritas + satu kesimpulan dengan keterbatasan.

## Pertanyaan debrief tambahan bila waktu memungkinkan
- Kapan evidence of approval berbeda dari evidence of genuine authorization?
- Apakah beneficiary berulang merupakan bukti fraud atau indikator investigasi?
- Bukti tambahan apa yang paling bernilai jika hanya boleh meminta tiga item?
- Bagaimana continuous monitoring dapat mendeteksi pola lebih awal?

## Ekspektasi jawaban yang kuat
Jawaban kuat harus:
- menggunakan bukti autentik secara tepat;
- menyebut keterbatasan sumber;
- tidak menggeneralisasi dua formulir ke seluruh populasi;
- membedakan indikator dan bukti konklusif;
- menghubungkan risiko → kontrol → bukti → keterbatasan → kesimpulan;
- menunjukkan sedikitnya tiga rantai alasan lengkap pada matriks R-K-B;
- mengusulkan kontrol preventif, detective, dan monitoring yang realistis.

## Contoh rekomendasi kontrol yang dapat muncul
- independent callback/confirmation untuk transfer berisiko tinggi;
- rule-based monitoring atas beneficiary yang menerima dana dari banyak nasabah tidak terkait;
- threshold review yang mempertimbangkan pola kumulatif, bukan hanya nilai per transaksi;
- pembatasan hak akses dan pemisahan RM dari pemrosesan/verifikasi;
- exception report berdasarkan kombinasi RM–teller–supervisor–beneficiary;
- periodic review atas transaksi private banking dengan outlier behaviour;
- penguatan evidence retention dan traceability.

## Rubrik singkat (100 poin)
- Rekonstruksi proses dan risiko: 15
- Pemilihan dan evaluasi bukti: 20
- Analisis kontrol: 20
- Matriks Risiko–Kontrol–Bukti: 20
- Rekomendasi: 15
- Kesimpulan profesional dan keterbatasan: 10

### Rubrik khusus matriks R-K-B (20 poin)
- ketepatan isu dan risiko: 4
- ketepatan kontrol: 4
- bukti spesifik dan relevan: 5
- keterbatasan bukti: 3
- kesimpulan/tindakan konsisten dengan bukti: 4

## Berkas yang dapat dikumpulkan
Aplikasi dapat mengekspor secara lokal:
- `Berkas_Kerja_Citibank_117_Transfer.md`;
- `Matriks_Risiko_Kontrol_Bukti_Citibank.md`;
- `Matriks_Risiko_Kontrol_Bukti_Citibank.csv`.

Tidak ada data mahasiswa yang dikirim ke server oleh fitur ekspor tersebut.

## Batas metodologis untuk dosen
- Aplikasi tidak mengklaim memiliki raw core-banking log Citibank.
- Subset transaksi bukan seluruh 117 transaksi yang diberitakan.
- Formulir visual adalah rekonstruksi pembelajaran.
- Respons wawancara adalah parafrasa pembelajaran berbasis sumber publik, bukan transkrip verbatim.
- Putusan PK 99 PK/Pid.Sus/2016 harus disampaikan secara akurat dan tidak boleh dihapus dari debrief.
