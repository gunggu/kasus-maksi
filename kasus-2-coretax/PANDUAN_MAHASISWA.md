# Panduan Mahasiswa — Kasus 2 Coretax DJP: 1 Januari, Go Live

## Peran Anda
Anda adalah **tim assurance Sistem Informasi Akuntansi** yang melapor kepada Steering Committee implementasi Coretax DJP.

Tugas Anda bukan mencari siapa yang salah dan bukan menilai politik kebijakan. Fokus Anda adalah **sistem informasi**: proses, data, akses, interface, controls, capacity, evidence, dan keputusan stabilisasi.

## Pertanyaan utama
> Berdasarkan bukti yang tersedia setelah go-live, apa akar masalah implementasi Coretax, risiko SIA apa yang ditimbulkannya, dan strategi stabilisasi apa yang paling dapat dipertanggungjawabkan?

## Empat pertanyaan kelompok
1. **Apa yang berubah ketika Coretax go-live?** Buat peta proses/data/access/interface dan empat area perubahan.
2. **Apa akar masalah insiden?** Klasifikasikan minimal empat insiden dan jelaskan mengapa tidak semua kendala adalah software bug.
3. **Apa yang dikatakan data kinerja?** Gunakan latency, capacity, throughput, dan volume untuk menghasilkan tiga temuan berbasis angka beserta keterbatasannya.
4. **Apa keputusan Steering Committee?** Pilih strategi stabilisasi, tiga tindakan prioritas, dan tiga indikator monitoring.

## Waktu 120 menit
- 0–10: pembukaan;
- 10–25: deskripsi Coretax dan orientasi aplikasi;
- 25–30: petunjuk dan pembagian peran;
- 30–65: analisis desain dan insiden;
- 65–82: dashboard kinerja;
- 82–95: matriks assurance dan keputusan;
- 95–105: persiapan presentasi;
- 105–117: satu kelompok presentasi 8 menit + 4 menit tanggapan;
- 117–120: debrief dosen.

## Pembagian peran kelompok
- navigator aplikasi;
- analis proses/data;
- analis kontrol/risiko;
- penyaji.

## Format presentasi — maksimum 5 slide
1. peta perubahan sistem;
2. klasifikasi empat insiden;
3. tiga temuan kinerja;
4. keputusan dan tindakan prioritas;
5. risiko, monitoring, dan keterbatasan.

## Aturan penalaran
- Jangan menyebut setiap kendala sebagai **bug** tanpa bukti akar penyebab.
- Data latency yang membaik tidak membuktikan seluruh sistem telah stabil.
- Penambahan kapasitas dapat berarti sizing awal kurang memadai, perubahan beban, atau normal tuning; bukti tambahan tetap diperlukan.
- Bedakan kontrol yang berada pada Coretax dari kontrol organisasi wajib pajak.
- Bedakan fakta resmi DJP dari inferensi kelompok.
- Jangan mengarang defect register, UAT result, source code, atau production log yang tidak tersedia publik.

## Output aplikasi
Anda dapat mengekspor:
- `Matriks_Assurance_Coretax.csv`;
- `Briefing_Steering_Committee_Coretax.md`.

Semua progres disimpan lokal pada browser.