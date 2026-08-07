// Pengayaan bukti lintas pemangku kepentingan dan penajaman bahasa epistemik.
// Dimuat setelah data-coretax.js dan sebelum app-coretax.js.
CORE_DATA.meta.mission='Menilai implementasi dan stabilisasi Coretax sebagai sistem informasi berskala nasional dengan menggunakan bukti resmi tentang cutover, akses, insiden, kapasitas, kinerja, volume transaksi, serta perspektif pengguna dan oversight. Fokusnya adalah membangun hipotesis akar penyebab yang dapat dipertanggungjawabkan, bukan mengklaim penyebab yang tidak dibuktikan oleh data publik.';

CORE_DATA.questions=[
{id:'P1',title:'Apa yang sebenarnya berubah ketika Coretax go-live?',question:'Petakan perubahan proses, data, akses, dan interface yang membuat implementasi Coretax menjadi proyek SIA, bukan sekadar penggantian aplikasi.',output:'Satu peta sistem sederhana + empat area perubahan.'},
{id:'P2',title:'Apa hipotesis akar penyebab dari insiden yang tersedia?',question:'Klasifikasikan sedikitnya empat insiden. Untuk setiap insiden, jelaskan hipotesis penyebab yang paling masuk akal, alasan berbasis bukti, dan bukti tambahan yang masih diperlukan. Jangan menganggap setiap kendala sebagai software bug.',output:'Empat klasifikasi insiden + hipotesis penyebab + kebutuhan bukti tambahan.'},
{id:'P3',title:'Apa yang dikatakan data kinerja?',question:'Gunakan bukti capacity, latency, throughput, dan volume untuk menghasilkan tiga temuan. Jelaskan apa yang dapat dan tidak dapat disimpulkan dari metrik publik before/after.',output:'Tiga temuan berbasis angka + keterbatasan interpretasi.'},
{id:'P4',title:'Apa keputusan Steering Committee?',question:'Pilih strategi: lanjut penuh dengan remediasi, phased functionality, parallel/fallback terbatas, atau rollback yang lebih luas. Tentukan tiga tindakan prioritas dan tiga indikator yang harus dimonitor.',output:'Satu keputusan + tiga tindakan + tiga indikator monitoring.'}
];

CORE_DATA.stakeholders=[
  {
    id:'ST-01',type:'Oversight resmi',source:'Komisi XI DPR RI',date:'7 Mei 2025',
    fact:'Dalam RDP dengan DJP, Komisi XI meminta penyelesaian permasalahan fundamental implementasi Coretax. Isu yang dibahas meliputi login/akses, perubahan data, kode otorisasi, OTP, PIC, impersonate, role access, faktur pajak, interoperabilitas, aksesibilitas, dan e-Bupot.',
    use:'Menguji apakah perbaikan teknis yang dilaporkan DJP sudah mencakup pengalaman operasional dan governance yang lebih luas.',
    limitation:'Pernyataan oversight bukan defect log teknis dan tidak dengan sendirinya mengidentifikasi root cause.',
    url:'https://emedia.dpr.go.id/news/2025/05/09/komisi-xi-benahi-permasalahan-fundamental-implementasi-sistem-core-tax',prov:'primary'
  },
  {
    id:'ST-02',type:'Perspektif pengguna/bisnis',source:'Reuters / APINDO dan pengguna',date:'14 Januari 2025',
    fact:'Reuters melaporkan keluhan pengguna mengenai crash, gangguan operasi, dan mismatch data yang menghambat penerbitan dokumen pajak dan berdampak pada proses bisnis. APINDO menyatakan dampaknya menyentuh pelaporan, penyampaian dokumen, dan perhitungan kewajiban pajak tepat waktu.',
    use:'Memberi evidence tentang business impact yang tidak terlihat dari metrik latency saja.',
    limitation:'Sumber sekunder dan berbasis pengalaman pengguna tertentu; tidak mewakili seluruh populasi pengguna.',
    url:'https://www.reuters.com/markets/asia/users-frustrated-indonesias-tax-system-upgrade-hit-by-problems-2025-01-14/',prov:'secondary'
  },
  {
    id:'ST-03',type:'Keputusan mitigasi operasional',source:'Reuters / pernyataan DJP–Komisi XI',date:'10–11 Februari 2025',
    fact:'Sistem lama diizinkan berjalan berdampingan untuk proses tertentu ketika Coretax masih diperbaiki, disertai relaksasi sanksi untuk keterlambatan yang dipengaruhi gangguan sistem dan permintaan roadmap implementasi.',
    use:'Menjadi bukti nyata bahwa parallel/fallback adalah opsi mitigasi yang benar-benar digunakan, sehingga mahasiswa dapat menilai trade-off continuity vs control consistency.',
    limitation:'Tidak menjelaskan secara rinci proses mana, architecture decision, atau internal risk assessment yang mendasari setiap fallback.',
    url:'https://www.reuters.com/markets/asia/indonesia-turns-old-tax-system-after-troubles-with-new-software-2025-02-11/',prov:'secondary'
  }
];

CORE_DATA.glossary.push(
 ['Root-cause hypothesis','Penjelasan sementara mengenai penyebab mendasar yang paling konsisten dengan bukti; harus dapat berubah jika bukti baru muncul.'],
 ['Evidence triangulation','Membandingkan bukti dari pemilik sistem, pengguna, oversight, dan metrik agar kesimpulan tidak bergantung pada satu sumber.']
);