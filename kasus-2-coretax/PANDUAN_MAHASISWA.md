# Panduan Mahasiswa — Kasus 2 Coretax DJP: 1 Januari, Go Live

## Peran Anda
Anda adalah **tim assurance Sistem Informasi Akuntansi** yang melapor kepada Steering Committee implementasi Coretax DJP.

Tugas Anda bukan mencari siapa yang salah, bukan menilai politik kebijakan, dan bukan menebak satu label teknis yang dianggap pasti benar. Fokus Anda adalah **sistem informasi**: proses, data, akses, interface, kontrol, kapasitas, bukti, dan keputusan stabilisasi.

## Pertanyaan utama
> Berdasarkan bukti yang tersedia setelah go-live, apa **hipotesis akar penyebab** yang paling masuk akal untuk masalah implementasi Coretax, risiko SIA apa yang ditimbulkannya, dan strategi stabilisasi apa yang paling dapat dipertanggungjawabkan?

**Penting:** gejala tidak sama dengan akar penyebab. Jika bukti publik belum cukup untuk memastikan penyebab, tuliskan hipotesis dan sebutkan bukti tambahan yang masih diperlukan.

## Empat pertanyaan kelompok
1. **Apa yang berubah ketika Coretax go-live?** Buat peta proses/data/access/interface dan empat area perubahan.
2. **Apa hipotesis akar penyebab insiden?** Klasifikasikan minimal empat insiden, jelaskan alasan, dan nyatakan bukti tambahan yang diperlukan. Tidak semua kendala adalah software bug.
3. **Apa yang dikatakan data kinerja?** Gunakan latency, capacity, throughput, volume, dan periodenya untuk menghasilkan tiga temuan berbasis angka beserta keterbatasannya.
4. **Apa keputusan Steering Committee?** Pilih strategi stabilisasi, tiga tindakan prioritas, dan tiga indikator monitoring.

## Waktu 120 menit
- **0–10:** pembukaan;
- **10–25:** deskripsi Coretax, konteks SIA, dan orientasi aplikasi;
- **25–30:** petunjuk dan pembagian peran;
- **30–60:** analisis desain dan minimal empat insiden;
- **60–75:** dashboard kinerja;
- **75–95:** Matriks Assurance dan keputusan;
- **95–105:** persiapan presentasi;
- **105–117:** satu kelompok presentasi 8 menit + 4 menit tanggapan;
- **117–120:** debrief dosen.

## Pembagian peran kelompok
- **Navigator aplikasi** — membuka bukti yang diperlukan;
- **Analis proses/data** — memetakan perubahan dan masalah data/interface;
- **Analis kontrol/risiko** — menilai IAM, SoD, application controls, capacity, dan bukti;
- **Penyaji** — menyatukan argumen dan menyiapkan presentasi.

## Evidence triangulation
Aplikasi menggunakan lebih dari satu perspektif:
- **DJP** sebagai pemilik sistem dan sumber utama data teknis publik;
- **DPR/oversight** sebagai bukti pengawasan resmi;
- **pengguna/bisnis** dari peliputan kredibel sebagai bukti dampak operasional.

Tidak ada satu perspektif yang otomatis cukup. Bandingkan sumber, tujuan sumber, dan keterbatasannya.

## Format presentasi — maksimum 5 slide
1. peta perubahan sistem;
2. empat insiden + hipotesis akar penyebab;
3. tiga temuan kinerja + keterbatasan;
4. keputusan dan tindakan prioritas;
5. risiko, monitoring, bukti tambahan, dan keterbatasan.

## Aturan penalaran
- Jangan menyebut setiap kendala sebagai **bug** tanpa bukti akar penyebab.
- Gunakan istilah **hipotesis akar penyebab** bila bukti belum konklusif.
- Data latency yang membaik tidak membuktikan seluruh sistem telah stabil.
- Penambahan kapasitas dapat berarti sizing awal kurang memadai, perubahan beban, normal tuning, atau kombinasi; bukti tambahan tetap diperlukan.
- Bedakan kontrol yang berada pada Coretax dari kontrol organisasi wajib pajak.
- Bedakan fakta, gejala, inferensi, dan kesimpulan.
- Perhatikan periode setiap metrik before/after; data publik bukan eksperimen terkontrol.
- Jangan mengarang defect register, UAT result, source code, production log, atau migration exception file yang tidak tersedia publik.

## Gate aplikasi
- analisis minimal **2 artefak desain**;
- klasifikasikan **4 insiden** dengan alasan;
- tuliskan analisis Dashboard Kinerja sebelum Matriks Assurance dibuka;
- lengkapi **3 baris Matriks Assurance** sebelum keputusan akhir.

## Output aplikasi
Anda dapat mengekspor:
- `Matriks_Assurance_Coretax.csv`;
- `Briefing_Steering_Committee_Coretax.md`.

Semua progres disimpan lokal pada browser.