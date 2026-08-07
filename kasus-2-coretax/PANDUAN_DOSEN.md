# Panduan Dosen — Kasus 2 Coretax DJP: 1 Januari, Go Live

## Framing utama
Kasus ini adalah **kasus pengembangan dan implementasi Sistem Informasi Akuntansi**, bukan studi tentang pajak secara substantif dan bukan debat kebijakan.

Fokusnya:
**business process redesign → data & identity → access/role → interface → processing → output → performance → stabilization.**

Pertanyaan sentral:
> Berdasarkan bukti pasca-go-live, bagaimana membedakan masalah requirement, data/IAM, integration, application control, capacity, dan user/process issue; lalu strategi stabilisasi apa yang paling defensible?

## Tujuan pembelajaran
Mahasiswa semester 1 diharapkan mampu:
- memahami cutover dan post-implementation review;
- memetakan perubahan proses, data, role, dan interface;
- membedakan jenis akar masalah insiden;
- menilai role PIC/impersonation/drafter/signer dari perspektif SoD;
- menggunakan latency, throughput, capacity, dan volume sebagai bukti;
- membangun Matriks Assurance masalah → akar penyebab → risiko → kontrol → bukti → tindakan;
- membuat keputusan implementasi berbasis bukti dan keterbatasan.

## Desain kelas — 120 menit
### 0–10 Pembukaan
Perkenalkan konsep sederhana SDLC, cutover, post-implementation review, dan peran Steering Committee. Tegaskan bahwa tidak semua masalah pasca go-live merupakan software bug.

### 10–25 Deskripsi kasus & aplikasi
Jelaskan Coretax sebagai transformasi proses bisnis, TI, dan basis data. Tunjukkan satu timeline dan satu artefak role/interface. Jangan buka incident board lebih awal.

### 25–30 Pembagian peran
Navigator, analis proses/data, analis kontrol, penyaji.

### 30–65 Analisis desain & insiden
Mahasiswa menulis dua analisis desain untuk membuka insiden, lalu mengklasifikasikan minimal empat insiden dengan alasan.

### 65–82 Dashboard kinerja
Mahasiswa membaca latency, capacity, throughput, dan volume. Dorong mereka mencari lebih dari satu penjelasan alternatif.

### 82–95 Matriks Assurance & keputusan
Minimal tiga baris lengkap. Mahasiswa memilih strategi stabilisasi.

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
5. post-implementation review membutuhkan bukti teknis dan bisnis.

## Empat pertanyaan kelompok
1. Apa yang berubah ketika Coretax go-live?
2. Apa akar masalah dari insiden yang tersedia?
3. Apa yang dikatakan data kinerja?
4. Apa keputusan Steering Committee?

## Ekspektasi jawaban kuat
- klasifikasi insiden tidak sekadar label;
- setiap klaim memiliki bukti resmi atau dinyatakan sebagai inferensi;
- menyebut keterbatasan bukti internal yang tidak tersedia;
- membedakan kontrol sistem dengan kontrol organisasi pengguna;
- menggunakan angka performance secara hati-hati;
- keputusan akhir mempertimbangkan continuity, reliability, compliance, dan operational risk.

## Rubrik 100 poin
- Peta perubahan sistem & konteks SDLC: 15
- Klasifikasi/root-cause insiden: 25
- Analisis role/data/interface controls: 15
- Analisis performance evidence: 15
- Matriks Assurance: 20
- Keputusan & keterbatasan: 10

## Batas metodologis
- tidak ada source code, internal defect register, UAT scripts, production logs, atau migration exception file asli;
- angka inti di aplikasi berasal dari publikasi resmi DJP;
- kategori akar penyebab dalam aplikasi adalah alat pembelajaran, bukan label resmi DJP;
- jangan menyimpulkan kegagalan proyek secara keseluruhan hanya dari satu jenis metrik.