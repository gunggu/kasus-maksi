# Kasus 1 — Citibank Indonesia: 117 Transfer

## Framing utama Sistem Informasi Akuntansi
Kasus ini **bukan terutama dipelajari sebagai kasus fraud atau kriminalitas perbankan**. Dalam mata kuliah Sistem Informasi Akuntansi, fokusnya adalah memahami bagaimana transaksi keuangan masuk ke sistem, divalidasi, diotorisasi, diproses, dicatat, dipantau, dan akhirnya menjadi informasi akuntansi yang dipercaya.

Pertanyaan utama kasus adalah:

> **Bagaimana suatu transaksi dapat tercatat dan diproses oleh sistem perbankan ketika keabsahan otorisasinya dipersoalkan, dan kontrol informasi apa yang seharusnya mencegah atau mendeteksinya?**

Model proses yang digunakan mahasiswa:

**instruksi nasabah → dokumen sumber → input → validasi → otorisasi → pemrosesan → posting → output → monitoring**

## Fakta kasus yang relevan untuk SIA
Bukti publik yang digunakan dalam aplikasi menunjukkan adanya elemen-elemen proses berikut:

- rekening nasabah dan beneficiary sebagai data akun/master;
- formulir/instruksi transfer sebagai dokumen sumber transaksi;
- Relationship Manager sebagai bagian dari titik masuk informasi nasabah;
- Cash Officer dan Cash Supervisor sebagai bagian dari pemrosesan/verifikasi;
- SOP Transaction Verification No. 30 Revision 2007 sebagai aturan pengendalian proses;
- transaksi bernilai besar yang memerlukan verifikasi tambahan;
- account summary dan banking relationship summary sebagai output/catatan sistem;
- guest logbook sebagai bukti non-akuntansi untuk corroboration;
- formulir transfer yang diperiksa secara forensik sebagai bukti input/otorisasi;
- beneficiary berulang dan pola lintas rekening sebagai dasar exception monitoring.

Kasus **tidak memiliki raw core-banking log Citibank**. Kekurangan ini dipakai sebagai bagian pembelajaran: mahasiswa harus menentukan data sistem apa yang seharusnya diminta untuk menguji user ID, timestamp, verifier/approver, override, authentication event, exception, dan audit trail.

## Tujuan pembelajaran
Setelah kasus, mahasiswa diharapkan mampu:

1. merekonstruksi **Transaction Processing System (TPS)** untuk transfer perbankan;
2. menjelaskan hubungan **input quality → processing → output information quality**;
3. membedakan **approval evidence** dari **genuine authorization**;
4. menilai **segregation of duties**, threshold control, dan operating effectiveness;
5. menjelaskan fungsi **audit trail**, evidence retention, dan traceability;
6. menggunakan **exception reporting** dan continuous monitoring untuk mendeteksi pola transaksi;
7. membedakan preventive, detective, monitoring, manual, application, dan IT-dependent controls;
8. memisahkan fakta, indikator, inferensi, serta keterbatasan bukti;
9. membangun hubungan **risiko → kontrol → bukti → keterbatasan → tindakan** melalui Matriks R-K-B;
10. menyusun rekomendasi perbaikan **sistem dan proses**, bukan hanya perilaku individu.

Pesan inti:

> **Processing accuracy tidak sama dengan transaction validity. SIA yang baik bukan hanya mencatat transaksi dengan benar, tetapi membantu memastikan transaksi valid, diotorisasi secara sah, dapat ditelusuri, dan dapat dimonitor.**

## Pertanyaan kasus kelompok
Semua kelompok menjawab empat pertanyaan yang sama:

1. **Bagaimana transaksi seharusnya diproses oleh Sistem Informasi Akuntansi?**  
   Rekonstruksi dokumen sumber → input → validasi → otorisasi → pemrosesan → posting → monitoring.

2. **Di mana kualitas informasi dapat rusak?**  
   Identifikasi tiga titik di mana input tidak valid, otorisasi tidak memadai, atau monitoring lemah dapat membuat transaksi tetap tercatat.

3. **Kontrol SIA apa yang bermasalah?**  
   Nilai preventive/detective/monitoring control, segregation of duties, override, audit trail, dan exception monitoring menggunakan bukti spesifik.

4. **Bagaimana SIA seharusnya diperbaiki?**  
   Berikan tiga rekomendasi desain sistem/proses seperti independent confirmation, role segregation, stronger audit trail, rule-based exception monitoring, atau behavioral analytics.

## Mode aplikasi
Aplikasi dirancang sebagai lingkungan investigasi forensik berbasis SIA, bukan kuis linear.

Urutan kerja:
1. Briefing & konteks SIA;
2. Eksplorasi transaksi;
3. Jaringan rekening;
4. Formulir & pengendalian;
5. Wawancara & bukti;
6. Notebook investigasi;
7. Matriks Risiko–Kontrol–Bukti;
8. Kesimpulan profesional.

## Desain pertemuan
Pertemuan dirancang untuk **120 menit** bagi mahasiswa Magister Akuntansi semester 1, termasuk pembukaan, penjelasan konteks, orientasi aplikasi, diskusi kelompok, penyusunan R-K-B, persiapan presentasi, presentasi satu kelompok, dan debrief dosen.

## Dokumentasi
- [Konteks Sistem Informasi Akuntansi](SIA_KONTEKS.md)
- [Panduan Mahasiswa](PANDUAN_MAHASISWA.md)
- [Panduan Dosen](PANDUAN_DOSEN.md)
- [Audit Pedagogis](AUDIT_PEDAGOGIS.md)
- [Audit Kesiapan v1](AUDIT_KESIAPAN_V1.md)

## Prinsip sumber
- Putusan pengadilan = **Primer autentik**.
- Peliputan kontemporer = **Sekunder autentik**.
- Struktur data hasil ekstraksi = **Data turunan**.
- Formulir/screen yang dibuat untuk pembelajaran = **Rekonstruksi**.

## Batas penting
Aplikasi belum mengklaim memuat seluruh 117 transfer. Hanya field yang dapat diverifikasi dari sumber publik yang dimasukkan sebagai fakta autentik.

Putusan PK 99 PK/Pid.Sus/2016 harus diperlakukan secara akurat. Bukti tentang fungsi kontrol atau proses transaksi tidak boleh disamakan dengan kesalahan pidana individu.

## Penyimpanan
Progres mahasiswa disimpan pada browser lokal (`localStorage`) dan tidak dikirim ke server.
