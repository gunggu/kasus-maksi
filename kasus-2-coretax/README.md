# Kasus 2 — Coretax DJP: 1 Januari, Go Live

## Tujuan
Kasus ini adalah aplikasi imersif Sistem Informasi Akuntansi untuk mahasiswa Magister Akuntansi semester 1. Fokusnya adalah **pengembangan, implementasi, dan stabilisasi sistem**, bukan fraud.

Mahasiswa bertindak sebagai tim assurance yang melapor kepada Steering Committee.

## Pertanyaan utama
> Berdasarkan bukti pasca-go-live, apa akar masalah implementasi Coretax, risiko SIA apa yang ditimbulkannya, dan strategi stabilisasi apa yang paling dapat dipertanggungjawabkan?

## Arsitektur aplikasi
1. Briefing Proyek
2. Timeline & Arsitektur
3. Role & Impersonation
4. Incident Board
5. Dashboard Kinerja
6. Matriks Assurance
7. Keputusan Stabilisasi

## Staged release
- Tahap 1 → analisis minimal 2 artefak desain/cutover;
- Tahap 2 → klasifikasi minimal 4 insiden dengan alasan;
- Tahap 3 → lengkapi minimal 3 baris Matriks Assurance;
- Tahap 4 → Keputusan Steering Committee.

Gate dibuat berbasis aktivitas analitis, bukan sekadar klik.

## Bukti autentik yang digunakan
- pengumuman praimplementasi DJP;
- ketentuan implementasi 1 Januari 2025;
- portal reformasi/Coretax;
- FAQ PIC, impersonation, drafter/signer;
- pembaruan pascaimplementasi Januari 2025;
- data capacity/throughput;
- data latency dan volume Maret 2025;
- dokumentasi XML Coretax.

## Prinsip metodologis
Aplikasi tidak mengklaim memiliki source code, internal defect register, UAT scripts, production logs, atau migration exception files yang tidak dipublikasikan.

Kategori akar masalah dalam Incident Board adalah struktur analitis pembelajaran, bukan klasifikasi resmi DJP.

## Desain kelas
Pertemuan dirancang untuk **120 menit**, termasuk pembukaan, deskripsi kasus, orientasi aplikasi, diskusi kelompok, penyusunan hasil, satu presentasi kelompok, dan debrief.

Dokumentasi:
- `PANDUAN_MAHASISWA.md`
- `PANDUAN_DOSEN.md`
- `AUDIT_KESIAPAN_PILOT.md`

## Teknologi
Static HTML/CSS/JavaScript untuk GitHub Pages. Progres disimpan lokal dengan `localStorage`. Ekspor tersedia dalam CSV/Markdown.