# Audit Kesiapan Pilot — Kasus 2 Coretax DJP

## Status
**Versi pilot awal — layak untuk pengujian browser dan audit pedagogis lanjutan.**

## Yang sudah kuat
- framing jelas sebagai kasus pengembangan/implementasi SIA;
- bukti inti berasal dari sumber resmi DJP;
- staged release hierarkis;
- gate berbasis aktivitas analitis;
- 120 menit dan empat pertanyaan kelompok sudah terstruktur;
- glosarium tersedia untuk mahasiswa semester 1;
- pengalaman berbeda dari Kasus 1 Citibank;
- ekspor Matriks Assurance dan briefing keputusan tersedia.

## Kekuatan SIA
Kasus memaksa mahasiswa membedakan:
- requirement/process fit;
- master data & IAM;
- role design/SoD;
- interface validation;
- application/output control;
- capacity/throughput/latency;
- symptom vs root cause;
- go-live vs stabilization;
- system control vs organizational control.

## Risiko yang masih perlu diuji
1. **Runtime GitHub Pages** — semua menu, localStorage, reset, staged release, ekspor.
2. **Beban 120 menit** — perlu pilot untuk memastikan empat insiden + performance + matriks realistis.
3. **Incident classification** — mahasiswa mungkin menganggap ada satu label benar; dosen harus menekankan multiple plausible causes dan evidence requirement.
4. **Role & Impersonation** — skenario SoD perlu diuji apakah cukup jelas untuk mahasiswa semester 1.
5. **Performance metrics** — mahasiswa harus dicegah menyimpulkan causal failure hanya dari before/after public metrics.
6. **Aksesibilitas** — keyboard, focus, responsive laptop, modal tidak digunakan tetapi tabel horizontal perlu diuji.

## Batas bukti
Jangan mengarang:
- defect log internal;
- hasil UAT;
- source code;
- production transaction log;
- migration exception list;
- vendor/internal interview transcript.

## Kriteria menuju v1.0
- runtime live tanpa blocker;
- satu pilot kelompok kecil selesai dalam 120 menit;
- tidak ada misleading provenance;
- instruksi dan questions dipahami mahasiswa semester 1;
- decision gate tidak dapat dibypass;
- ekspor CSV/Markdown teruji.

## Kesimpulan
Secara desain, Kasus 2 sudah memiliki fondasi kuat untuk menjadi pasangan Kasus 1: Citibank mengajarkan **AIS operation/control**, sedangkan Coretax mengajarkan **AIS development/implementation/stabilization**.