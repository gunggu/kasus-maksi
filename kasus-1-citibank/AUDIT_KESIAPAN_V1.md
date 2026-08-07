# Audit Kesiapan v1.0 — Kasus 1 Citibank Indonesia: 117 Transfer

## Keputusan
**Status: kandidat v1.0 final — siap untuk uji browser live dan pilot kelas 120 menit.**

Revisi prioritas audit sebelumnya telah dilaksanakan:
1. gate tidak lagi dapat dilewati hanya dengan membuka artefak;
2. glosarium SIA semester 1 telah tersedia di Briefing;
3. istilah antarmuka utama telah diselaraskan menjadi SIA-oriented.

## 1. Framing Sistem Informasi Akuntansi — LULUS
Aplikasi secara konsisten diposisikan sebagai **Laboratorium Sistem Informasi Akuntansi**.

Fokus pembelajaran:
- Transaction Processing System (TPS);
- input controls;
- transaction validity vs processing accuracy;
- genuine authorization;
- segregation of duties;
- business/threshold rules;
- audit trail;
- exception reporting;
- continuous monitoring;
- information quality;
- human–process–technology interaction.

## 2. Desain pertemuan 120 menit — LULUS BERSYARAT PILOT
Alokasi:
- 0–10: pembukaan;
- 10–25: deskripsi kasus dan konteks SIA;
- 25–30: petunjuk tugas dan pembagian peran;
- 30–70: analisis kelompok;
- 70–90: Matriks R-K-B dan simpulan;
- 90–105: persiapan presentasi;
- 105–117: satu kelompok presentasi 8 menit + tanggapan 4 menit;
- 117–120: penutup dosen.

Alokasi realistis selama mahasiswa tidak diwajibkan membuka seluruh artefak.

## 3. Scaffolding semester 1 — LULUS
Briefing menyediakan glosarium singkat dengan istilah:
- TPS;
- transaction validity;
- genuine authorization;
- input control;
- segregation of duties;
- audit trail;
- exception report;
- override;
- operating effectiveness;
- continuous monitoring.

Glosarium ditempatkan dalam panel yang dapat dibuka-tutup sehingga tidak menambah menu baru.

## 4. Pertanyaan kasus — LULUS
Empat pertanyaan kelompok tetap menjadi pusat kegiatan:
1. bagaimana transaksi diproses oleh SIA;
2. di mana kualitas informasi dapat rusak;
3. kontrol SIA apa yang bermasalah;
4. bagaimana SIA seharusnya diperbaiki.

Output presentasi maksimum lima slide tetap konsisten dengan pertanyaan tersebut.

## 5. Evidence provenance — LULUS
Aplikasi membedakan:
- primer autentik;
- sekunder autentik;
- data turunan;
- rekonstruksi pembelajaran.

Batas metodologis tetap dipertahankan: tidak ada klaim memiliki raw core-banking log Citibank atau populasi lengkap 117 transfer.

## 6. Staged evidence release — LULUS SECARA DESAIN
Gate kini berbasis aktivitas substantif:
- **Tahap 2:** minimal 3 transaksi memiliki catatan analisis ≥15 karakter;
- **Tahap 3:** minimal 2 kontrol memiliki catatan analisis ≥15 karakter;
- **Tahap 4:** minimal 3 sumber wawancara memiliki setidaknya satu jawaban yang benar-benar dibuka;
- **Kesimpulan:** tetap memerlukan minimal 3 baris Matriks R-K-B lengkap.

Dengan demikian membuka kartu/modal saja tidak lagi cukup untuk maju.

## 7. Matriks Risiko–Kontrol–Bukti — LULUS
Matriks mewajibkan hubungan:

**isu/fakta → risiko/assertion → kontrol → bukti → keterbatasan → kesimpulan/tindakan.**

Dapat disimpan lokal dan diekspor ke Markdown/CSV.

## 8. Berkas Kerja SIA — LULUS
Istilah “Notebook Investigasi” telah diganti pada navigasi menjadi **Berkas Kerja SIA**.

Ekspor juga memakai judul/filename:
`Berkas_Kerja_Analisis_SIA_Citibank_117_Transfer.md`.

## 9. Audit teknis statis — LULUS BERSYARAT UJI LIVE
Urutan script utama:
`data-kasus.js → data-tambahan.js → sia-meta.js → app.js → extensions.js → matrix.js → class-plan.js → sia-context.js → v1-final.js`.

`v1-final.js` dimuat terakhir agar memperkuat gate dan scaffolding tanpa mengubah dataset autentik.

Masih perlu diuji manual pada laman GitHub Pages:
- transaksi tidak membuka tahap 2 tanpa catatan ≥15 karakter;
- kontrol tidak membuka tahap 3 tanpa catatan ≥15 karakter;
- membuka kartu saksi saja tidak dihitung; minimal satu jawaban harus dibuka;
- kesimpulan tetap membutuhkan 3 baris R-K-B lengkap;
- localStorage setelah refresh;
- reset kasus;
- ekspor Berkas Kerja SIA;
- ekspor R-K-B Markdown/CSV;
- tampilan laptop 1366×768;
- keyboard/focus/modal accessibility.

## 10. Hal yang tidak boleh dilakukan
- mengarang raw core-banking logs;
- mengarang timestamp, user ID, IP address, atau approval record sebagai data autentik;
- mengarang transkrip wawancara sebagai verbatim;
- menutupi disposisi hukum yang relevan;
- mengubah rekonstruksi menjadi klaim historis.

## Kriteria penguncian v1.0
Kasus dapat dikunci sebagai **v1.0 final** setelah:
1. uji runtime live membuktikan gate baru bekerja;
2. ekspor Berkas Kerja SIA dan R-K-B berjalan;
3. refresh/reset/localStorage tidak bermasalah;
4. satu pilot kecil menunjukkan alur 120 menit realistis;
5. tidak ditemukan misleading provenance.

## Kesimpulan
**Konten SIA: kuat.**  
**Scaffolding semester 1: memadai.**  
**Staged evidence release: sudah substantif dan tidak lagi click-through.**  
**Status keseluruhan: kandidat v1.0 final, menunggu uji runtime live dan pilot kelas terbatas.**
