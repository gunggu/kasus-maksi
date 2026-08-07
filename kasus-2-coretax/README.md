# Kasus 2 — Coretax DJP: 1 Januari, Go Live

## Status
**Kandidat v1.0 — siap untuk uji runtime live dan pilot kelas terbatas 120 menit.**

## Tujuan
Kasus ini adalah aplikasi imersif Sistem Informasi Akuntansi untuk mahasiswa Magister Akuntansi semester 1. Fokusnya adalah **pengembangan, implementasi, dan stabilisasi sistem**, bukan fraud dan bukan substansi pajak.

Mahasiswa bertindak sebagai tim assurance yang melapor kepada Steering Committee.

## Pertanyaan utama
> Berdasarkan bukti pasca-go-live, apa **hipotesis akar penyebab** yang paling masuk akal untuk masalah implementasi Coretax, risiko SIA apa yang ditimbulkannya, dan strategi stabilisasi apa yang paling dapat dipertanggungjawabkan?

## Arsitektur aplikasi
1. Briefing Proyek
2. Timeline & Arsitektur
3. Role & Impersonation
4. Incident Board
5. Dashboard Kinerja
6. Matriks Assurance
7. Keputusan Stabilisasi

## Staged release
- Tahap 1 → analisis minimal **2 artefak desain/cutover**;
- Tahap 2 → klasifikasi minimal **4 insiden** dengan alasan;
- Tahap 3 → analisis Dashboard Kinerja wajib diselesaikan, kemudian minimal **3 baris Matriks Assurance**;
- Tahap 4 → Keputusan Steering Committee.

Gate dibuat berbasis aktivitas analitis, bukan sekadar klik.

## Bukti autentik yang digunakan
### Pemilik sistem / DJP
- pengumuman praimplementasi;
- ketentuan implementasi 1 Januari 2025;
- portal reformasi/Coretax;
- PIC, impersonation, drafter/signer;
- dokumentasi XML;
- pembaruan pascaimplementasi;
- capacity/throughput;
- latency dan volume transaksi.

### Evidence triangulation
- **Komisi XI DPR RI** sebagai evidence oversight resmi;
- **pengalaman pengguna/bisnis yang dilaporkan Reuters** sebagai bukti dampak operasional;
- bukti penggunaan **parallel/fallback** selama stabilisasi.

## Prinsip metodologis
- gejala tidak sama dengan akar penyebab;
- remediasi tidak otomatis membuktikan penyebab awal;
- kategori Incident Board merupakan struktur analitis pembelajaran, bukan klasifikasi resmi DJP;
- setiap hipotesis harus menyebut bukti pendukung, keterbatasan, dan bukti tambahan yang masih diperlukan;
- aplikasi tidak mengklaim memiliki source code, internal defect register, UAT scripts, production logs, atau migration exception files yang tidak dipublikasikan.

## Desain kelas — 120 menit
- 0–10 pembukaan;
- 10–25 deskripsi kasus dan orientasi;
- 25–30 pembagian peran;
- 30–60 analisis desain & insiden;
- 60–75 dashboard kinerja;
- 75–95 Matriks Assurance & keputusan;
- 95–105 persiapan presentasi;
- 105–117 satu kelompok presentasi;
- 117–120 debrief.

Dokumentasi:
- `PANDUAN_MAHASISWA.md`
- `PANDUAN_DOSEN.md`
- `AUDIT_KESIAPAN_PILOT.md`

## Teknologi
Static HTML/CSS/JavaScript untuk GitHub Pages. Progres disimpan lokal dengan `localStorage`. Ekspor tersedia dalam CSV/Markdown.