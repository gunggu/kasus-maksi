# Audit Ulang Kesiapan — Kasus 2 Coretax DJP

## Keputusan
**Status: kandidat v1.0 — layak untuk pilot kelas 120 menit setelah uji runtime live.**

Kasus sudah jelas sebagai **kasus pengembangan, implementasi, dan stabilisasi Sistem Informasi Akuntansi**. Revisi audit telah memperkuat evidence triangulation, guard hierarkis, analisis Dashboard Kinerja, dan penggunaan istilah **hipotesis akar penyebab** agar mahasiswa tidak mengklaim causal certainty dari bukti publik yang terbatas.

## 1. Framing SIA — LULUS
Fokus konsisten pada:
- business process redesign;
- data/master data;
- IAM, PIC, impersonation, drafter/signer;
- interface XML;
- application/output controls;
- capacity, latency, throughput, volume;
- cutover, stabilization, dan post-implementation review.

Kasus bukan studi pajak substantif dan bukan evaluasi politik kebijakan.

## 2. Bukti dunia nyata & provenance — LULUS
Bukti utama mencakup:
- timeline dan dokumentasi resmi DJP;
- role/PIC/impersonation dan XML dari dokumentasi DJP;
- incident/remediation dan performance metrics dari publikasi DJP;
- perspektif oversight resmi Komisi XI DPR;
- perspektif pengguna/bisnis dari peliputan Reuters;
- bukti penggunaan parallel/fallback pada periode stabilisasi.

Aplikasi membedakan **primer autentik** dan **sekunder autentik**. Artefak UI tetap merupakan rekonstruksi pembelajaran.

### Kekuatan setelah revisi
Kasus tidak lagi bergantung pada narasi pemilik sistem saja. Mahasiswa diminta melakukan **evidence triangulation** dan menilai keterbatasan masing-masing sumber.

## 3. Kejelasan epistemik — LULUS
Istilah “akar masalah” direvisi menjadi **hipotesis akar penyebab**.

Mahasiswa harus membedakan:
- fakta;
- gejala;
- klasifikasi masalah;
- hipotesis akar penyebab;
- bukti tambahan yang diperlukan;
- keputusan assurance.

Pesan kunci:
> **Symptom ≠ root cause. Remediation evidence ≠ proof of original cause.**

## 4. Staged release — LULUS
Urutan efektif:
1. minimal 2 artefak desain dianalisis;
2. minimal 4 insiden diklasifikasikan dengan alasan;
3. Dashboard Kinerja harus dianalisis secara substantif;
4. minimal 3 baris Matriks Assurance lengkap;
5. Keputusan Stabilisasi terbuka.

`stage-guard.js` sekarang benar-benar dimuat oleh `index.html`, sehingga guard tidak lagi hanya ada di repo tanpa dieksekusi.

## 5. Dashboard Kinerja — LULUS
Dashboard menampilkan:
- latency;
- capacity;
- throughput;
- volume;
- periode pengukuran.

Periode ditampilkan untuk mencegah mahasiswa memperlakukan before/after public metrics sebagai eksperimen terkontrol. Analisis kinerja menjadi prasyarat membuka Matriks Assurance.

## 6. Pertanyaan kasus — LULUS
1. Apa yang sebenarnya berubah ketika Coretax go-live?
2. Apa hipotesis akar penyebab dari insiden yang tersedia?
3. Apa yang dikatakan data kinerja, dan apa yang tidak dapat disimpulkan?
4. Apa keputusan Steering Committee?

Pertanyaan dapat didiskusikan kelompok dan dipresentasikan dalam maksimum lima slide.

## 7. Desain 120 menit — LULUS BERSYARAT PILOT
Alokasi terbaru:
- 0–10 pembukaan;
- 10–25 deskripsi kasus dan orientasi;
- 25–30 pembagian peran;
- 30–60 desain & insiden;
- 60–75 dashboard kinerja;
- 75–95 matriks & keputusan;
- 95–105 persiapan presentasi;
- 105–117 presentasi satu kelompok;
- 117–120 debrief.

Alokasi lebih realistis daripada versi awal karena memberi 20 menit untuk sintesis matriks dan keputusan.

## 8. Tingkat kesulitan semester 1 — LULUS
Glosarium mencakup SDLC, cutover, post-implementation review, IAM, impersonation, interface validation, latency, throughput, capacity, stabilization, root-cause hypothesis, dan evidence triangulation.

Dosen perlu menunjukkan satu contoh umum (bukan jawaban Coretax) tentang perbedaan gejala dan akar penyebab sebelum diskusi kelompok.

## 9. Matriks Assurance — LULUS
Rantai penalaran:
**masalah → hipotesis akar penyebab → risiko SIA → kontrol → bukti → tindakan.**

Matriks merupakan jembatan dari incident classification menuju keputusan Steering Committee.

## 10. Keputusan Stabilisasi — LULUS
Pilihan:
- lanjut penuh dengan remediasi terkontrol;
- phased functionality / pembatasan fitur;
- parallel/fallback terbatas;
- rollback lebih luas.

Tidak ada satu opsi yang dipaksakan sebagai jawaban benar. Nilai didasarkan pada bukti, trade-off, risiko, dan monitoring.

## 11. Audit teknis statis — LULUS BERSYARAT
Urutan script sekarang:
`data-coretax.js → evidence-plus.js → app-coretax.js → stage-guard.js → class-plan-coretax.js → audit-final.js`.

Secara statis dependensi tersedia dalam urutan yang benar.

Masih perlu uji live:
- semua menu;
- localStorage dan refresh;
- reset;
- gate 2 desain → 4 insiden → dashboard → matriks → keputusan;
- ekspor CSV dan Markdown;
- layout laptop 1366×768;
- scroll tabel Matriks Assurance;
- keyboard/focus accessibility.

## 12. Batas bukti yang harus dipertahankan
Jangan mengarang:
- defect log internal;
- hasil UAT;
- source code;
- production transaction log;
- migration exception list;
- vendor/internal interview transcript.

Jangan menyimpulkan penyebab awal hanya karena jenis remediasi tertentu dilakukan.

## Kriteria mengunci v1.0
1. runtime live tanpa blocker;
2. gate tidak dapat dibypass;
3. export CSV/Markdown teruji;
4. satu pilot kecil menunjukkan alur 120 menit realistis;
5. tidak ada misleading provenance;
6. mahasiswa semester 1 memahami perbedaan gejala, hipotesis akar penyebab, dan fakta.

## Kesimpulan
**Konten SIA: kuat.**  
**Evidence design: kuat setelah triangulasi.**  
**Pedagogi semester 1: layak dengan scaffolding.**  
**Status keseluruhan: kandidat v1.0, menunggu uji runtime live dan pilot terbatas.**