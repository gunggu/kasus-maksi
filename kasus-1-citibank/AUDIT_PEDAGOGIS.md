# Audit Pedagogis — Kasus 1 Citibank Indonesia: 117 Transfer

## Status
**Layak untuk pilot terbatas setelah pengujian browser.** Konten dan mekanisme kasus telah cukup kuat untuk sesi Magister, tetapi masih ada batas pada kelengkapan transaksi primer.

## Kekuatan utama
1. **Objek analisis benar-benar SIA.** Mahasiswa menilai alur transaksi, otorisasi, pemisahan tugas, verifikasi, bukti, dan monitoring.
2. **Evidence-first.** Kesimpulan tidak diberikan pada briefing.
3. **Pelepasan bukti bertahap.** Kontrol, wawancara, dan disposisi hukum tidak tersedia sejak awal.
4. **Provenance eksplisit.** Primer autentik, sekunder autentik, data turunan, dan rekonstruksi dipisahkan.
5. **Hindsight bias dikurangi.** Mahasiswa harus membentuk hipotesis sebelum bukti lanjutan dibuka.
6. **Legal nuance dipertahankan.** Bukti proses/kontrol tidak disamakan dengan kesalahan pidana individu.
7. **Professional judgment lebih penting daripada jawaban pilihan ganda.** Notebook dan decision gate meminta rantai alasan.

## Risiko pedagogis yang masih ada
### 1. Subset transaksi masih kecil
Aplikasi belum memiliki seluruh 117 transaksi yang diberitakan. Akibatnya, network analytics belum boleh diposisikan sebagai analisis populasi.

**Mitigasi:** UI menyatakan secara eksplisit bahwa dataset adalah subset dan menahan field yang belum terverifikasi.

### 2. Tidak ada raw system log asli
Tidak tersedia user-ID, timestamp sistem lengkap, device/IP, override log, atau audit trail core banking yang autentik.

**Mitigasi:** jangan membuat field tersebut seolah-olah asli. Jika ditambahkan untuk latihan, beri label REKONSTRUKSI.

### 3. Wawancara bukan transkrip verbatim
Respons aplikasi adalah parafrasa berbasis fakta publik.

**Mitigasi:** label metodologis muncul di aplikasi dan panduan.

### 4. Mahasiswa dapat mengandalkan pengetahuan historis di luar aplikasi
Kasus Citibank cukup dikenal.

**Mitigasi:** nilai proses penalaran dan evidence citation, bukan apakah mahasiswa mengetahui hasil kasus.

## Audit keselarasan pembelajaran
| Sasaran | Mekanisme aplikasi | Status |
|---|---|---|
| Rekonstruksi proses | transaksi, formulir, role, workflow | Kuat |
| Analisis kontrol | artefak kontrol bertahap | Kuat |
| Evaluasi bukti | provenance, reliability, limitation | Kuat |
| Analitik jaringan | beneficiary network | Cukup; dibatasi subset |
| Professional skepticism | hipotesis, staged evidence | Kuat |
| Prosedur lanjutan | daftar prosedur di notebook | Kuat |
| Kesimpulan profesional | decision gate | Kuat |
| Legal distinction | evidence E-06 dan panduan | Kuat |

## Pengujian yang masih diperlukan sebelum kelas
- uji desktop Chrome/Edge/Firefox;
- uji tampilan mobile/tablet;
- pastikan localStorage reset dan persistence berfungsi;
- uji seluruh tahapan unlock 1→4;
- pastikan link sumber eksternal terbuka pada tab baru;
- cek bahwa semua nomor rekening tetap termasking;
- uji kesimpulan tidak terbuka sebelum tiga wawancara ditelaah;
- uji tidak ada error JavaScript pada console.

## Prioritas pengembangan berikutnya
1. Perluas ekstraksi transaksi primer jika putusan lengkap dapat diakses secara stabil.
2. Tambahkan timeline kejadian/transaksi yang lebih rinci.
3. Tambahkan matriks risk-control-evidence yang dapat diekspor mahasiswa.
4. Tambahkan fungsi ekspor notebook ke `.txt`/`.md` tanpa server.
5. Setelah pilot Kasus 1 stabil, mulai pengembangan penuh Kasus 2 Coretax.