# Panduan Dosen — Kasus 2 Coretax DJP: 1 Januari, Go Live

## Framing utama
Kasus ini adalah **kasus pengembangan, implementasi, dan stabilisasi Sistem Informasi Akuntansi**, bukan studi pajak substantif dan bukan debat kebijakan.

Fokusnya:
**business process redesign → data & identity → access/role → interface → processing → output → performance → stabilization.**

Pertanyaan sentral:
> Berdasarkan bukti pasca-go-live, bagaimana membangun **hipotesis akar penyebab** yang defensible untuk masalah requirement, data/IAM, integration, application control, capacity, dan user/process issue; lalu strategi stabilisasi apa yang paling dapat dipertanggungjawabkan?

Gunakan kalimat kunci:
> **Symptom ≠ root cause. Remediation evidence ≠ proof of original cause.**

## Tujuan pembelajaran
Mahasiswa semester 1 diharapkan mampu:
- memahami cutover dan post-implementation review;
- memetakan perubahan proses, data, role, dan interface;
- membedakan gejala, klasifikasi masalah, dan hipotesis akar penyebab;
- menilai role PIC/impersonation/drafter/signer dari perspektif SoD;
- menggunakan latency, throughput, capacity, dan volume sebagai bukti tanpa overclaiming;
- melakukan evidence triangulation antara pemilik sistem, oversight, dan pengguna;
- membangun Matriks Assurance masalah → hipotesis akar penyebab → risiko → kontrol → bukti → tindakan;
- membuat keputusan implementasi berbasis bukti dan keterbatasan.

## Desain kelas — 120 menit
### 0–10 Pembukaan
Perkenalkan SDLC, cutover, post-implementation review, dan peran Steering Committee. Tegaskan bahwa tidak semua masalah pasca-go-live merupakan software bug.

### 10–25 Deskripsi kasus & aplikasi
Jelaskan Coretax sebagai transformasi proses bisnis, TI, dan basis data. Tunjukkan satu timeline, satu artefak role/interface, serta perbedaan **gejala vs hipotesis akar penyebab**. Jangan buka Incident Board lebih awal.

### 25–30 Pembagian peran
Navigator, analis proses/data, analis kontrol/risiko, penyaji.

### 30–60 Analisis desain & insiden
Mahasiswa menulis dua analisis desain untuk membuka insiden, lalu mengklasifikasikan minimal empat insiden dengan alasan. Minta mereka membandingkan bukti DJP dengan bukti oversight/pengguna yang tersedia pada aplikasi.

### 60–75 Dashboard kinerja
Mahasiswa membaca latency, capacity, throughput, volume, serta **periode** pengukuran. Minta tiga temuan berbasis angka dan satu keterbatasan untuk setiap temuan utama. Dashboard harus dianalisis sebelum Matriks Assurance terbuka.

### 75–95 Matriks Assurance & keputusan
Minimal tiga baris lengkap. Kolom “akar penyebab” harus diperlakukan sebagai **hipotesis**, bukan fakta final. Mahasiswa memilih strategi stabilisasi dan tindakan prioritas.

### 95–105 Persiapan presentasi
Maksimum lima slide.

### 105–117 Presentasi satu kelompok
8 menit presentasi + 4 menit tanggapan.

### 117–120 Debrief
Tegaskan lima pesan:
1. implementasi sistem adalah kombinasi people–process–data–technology;
2. symptom tidak sama dengan root cause;
3. capacity improvement tidak otomatis membuktikan initial design failure;
4. role flexibility harus diseimbangkan dengan accountability/SoD;
5. post-implementation review membutuhkan triangulasi bukti teknis dan bisnis.

## Empat pertanyaan kelompok
1. Apa yang sebenarnya berubah ketika Coretax go-live?
2. Apa **hipotesis akar penyebab** dari insiden yang tersedia?
3. Apa yang dikatakan data kinerja, dan apa yang tidak dapat disimpulkan?
4. Apa keputusan Steering Committee?

## Ekspektasi jawaban kuat
- klasifikasi insiden tidak sekadar memilih label;
- menggunakan istilah “hipotesis” jika bukti kausal belum cukup;
- setiap klaim memiliki bukti atau dinyatakan sebagai inferensi;
- menyebut bukti tambahan yang diperlukan untuk menguji hipotesis;
- membedakan bukti pemilik sistem, oversight, dan pengguna;
- membedakan kontrol sistem dengan kontrol organisasi pengguna;
- menggunakan angka performance dengan periode dan keterbatasan yang benar;
- keputusan akhir mempertimbangkan continuity, reliability, compliance, operational risk, dan reversibility.

## Rubrik 100 poin
- Peta perubahan sistem & konteks SDLC: **15**
- Klasifikasi insiden & kualitas hipotesis akar penyebab: **20**
- Evidence triangulation & kebutuhan bukti tambahan: **10**
- Analisis role/data/interface controls: **10**
- Analisis performance evidence: **15**
- Matriks Assurance: **20**
- Keputusan & keterbatasan: **10**

## Debrief yang disarankan
- Mengapa perbaikan validasi XML belum membuktikan apakah akar masalah awal berada pada requirement, konfigurasi, data pengguna, atau kombinasi?
- Apakah peningkatan kapasitas berarti sizing awal salah? Bukti apa yang diperlukan?
- Apakah sistem harus memaksa SoD drafter–signer untuk semua organisasi?
- Kapan parallel/fallback meningkatkan business continuity tetapi sekaligus menambah risiko konsistensi data?
- Mengapa laporan DJP dan pengalaman pengguna perlu dibaca bersama?

## Batas metodologis
- tidak ada source code, internal defect register, UAT scripts, production logs, atau migration exception file asli;
- angka inti berasal dari publikasi resmi DJP;
- bukti DPR merupakan evidence oversight, bukan defect log;
- pengalaman pengguna yang dilaporkan Reuters merupakan sumber sekunder dan tidak mewakili seluruh populasi;
- kategori masalah dalam aplikasi adalah alat pembelajaran, bukan label resmi DJP;
- jangan menyimpulkan kegagalan proyek secara keseluruhan hanya dari satu jenis metrik atau satu kelompok pengguna.