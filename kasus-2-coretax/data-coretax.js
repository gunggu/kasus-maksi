const CORE_DATA={
meta:{title:'Coretax DJP: 1 Januari, Go Live',role:'Tim assurance Sistem Informasi Akuntansi yang melapor kepada Steering Committee implementasi',mission:'Menilai kesiapan dan stabilisasi Coretax sebagai sistem informasi berskala nasional dengan menggunakan bukti resmi tentang cutover, akses, insiden, kapasitas, kinerja, dan volume transaksi.',warning:'Kasus menggunakan dokumen dan metrik publik DJP. Aplikasi tidak mengklaim memiliki source code, defect register internal, UAT scripts, atau production logs yang tidak dipublikasikan.',learning:[
'Memahami hubungan business process redesign, implementasi sistem, cutover, dan post-implementation review.',
'Membedakan masalah requirement, data migration, IAM, integration, application control, capacity, dan user/process issue.',
'Menilai role design PIC, impersonation, drafter, dan signer dalam konteks segregation of duties.',
'Menggunakan metrik latency, throughput, dan transaction volume sebagai bukti kinerja sistem.',
'Menghubungkan masalah → akar penyebab → risiko SIA → kontrol → bukti → tindakan.',
'Membuat keputusan stabilisasi sistem tanpa hindsight dan tanpa menganggap setiap keluhan sebagai software defect.'
]},
stages:[
{stage:1,title:'Tahap 1 — Desain & Cutover',desc:'Konteks proyek, timeline praimplementasi, dan arsitektur akses tersedia.'},
{stage:2,title:'Tahap 2 — Insiden Produksi',desc:'Terbuka setelah dua artefak desain/cutover dianalisis.'},
{stage:3,title:'Tahap 3 — Remediasi & Kinerja',desc:'Terbuka setelah empat insiden diklasifikasikan dengan alasan.'},
{stage:4,title:'Tahap 4 — Keputusan Stabilisasi',desc:'Terbuka setelah tiga baris matriks assurance lengkap.'}
],
timeline:[
{id:'TL-01',date:'16 Desember 2024',title:'Praimplementasi dimulai',fact:'DJP menetapkan masa praimplementasi Coretax DJP 16–31 Desember 2024.',source:'DJP PENG-38/PJ.09/2024',url:'https://www.pajak.go.id/id/pengumuman/pemberitahuan-pelaksanaan-praimplementasi-coretax-djp',prov:'primary'},
{id:'TL-02',date:'24 Desember 2024',title:'Login wajib pajak dibuka',fact:'Wajib pajak yang telah memiliki akun DJP Online dapat mulai login ke Coretax pada masa praimplementasi.',source:'DJP',url:'https://www.pajak.go.id/id/pengumuman/pemberitahuan-pelaksanaan-praimplementasi-coretax-djp',prov:'primary'},
{id:'TL-03',date:'1 Januari 2025',title:'Implementasi produksi',fact:'Coretax DJP mulai diimplementasikan untuk pelaksanaan hak dan pemenuhan kewajiban perpajakan.',source:'Keputusan Menteri Keuangan / DJP',url:'https://www.pajak.go.id/id/peraturan/implementasi-sistem-inti-administrasi-perpajakan',prov:'primary'},
{id:'TL-04',date:'22 Januari 2025',title:'Pembaruan pascaimplementasi',fact:'DJP mempublikasikan perbaikan modul registrasi/impersonate, penambahan server database, perbaikan validasi XML, kanal e-Faktur desktop, dan skema penandatanganan digital.',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'TL-05',date:'16 Maret 2025',title:'Pembaruan kinerja',fact:'DJP melaporkan penurunan latency pada login, registrasi, faktur pajak, SPT, dan bukti potong serta volume produksi yang besar.',source:'DJP',url:'https://www.pajak.go.id/id/siaran-pers/keterangan-tertulis-perkembangan-informasi-terkini-coretax-djp',prov:'primary'}
],
architecture:[
{id:'AR-01',title:'Transformasi proses bisnis',fact:'PSIAP/Coretax merupakan bagian reformasi perpajakan yang berfokus pada perancangan ulang proses bisnis, pembaruan teknologi informasi, dan perbaikan basis data.',risk:'Requirement dan process-fit: apakah sistem merepresentasikan proses pajak secara utuh dan konsisten?',source:'Portal Reformasi DJP',url:'https://pajak.go.id/id/reformdjp/coretax',prov:'primary'},
{id:'AR-02',title:'PIC & impersonation',fact:'PIC memiliki akses penuh ke sistem wajib pajak badan melalui skema impersonate dan dapat mendelegasikan role tertentu.',risk:'Identity, accountability, delegated access, dan concentration of privilege.',source:'FAQ DJP PIC/Impersonate',url:'https://pajak.go.id/sites/default/files/2025-01/Penanggung%20Jawab%2C%20Impersonate%20dan%20Penambahan%20Role%20Akses%20WP%20Badan%20%281%29.pdf',prov:'primary'},
{id:'AR-03',title:'Drafter & signer',fact:'PIC dapat memberikan role seperti drafter atau signer kepada pegawai lain; akses penuh tetap berada pada PIC.',risk:'Segregation of duties dan apakah kontrol organisasi perlu diperkuat oleh rule sistem.',source:'FAQ DJP PIC/Impersonate',url:'https://pajak.go.id/sites/default/files/2025-01/Penanggung%20Jawab%2C%20Impersonate%20dan%20Penambahan%20Role%20Akses%20WP%20Badan%20%281%29.pdf',prov:'primary'},
{id:'AR-04',title:'XML sebagai interface data',fact:'Coretax menggunakan XML untuk sejumlah proses impor dan menerapkan validasi atas elemen seperti NPWP/NITKU dan data perpajakan terkait.',risk:'Interface validation, data quality, schema compatibility, dan error handling.',source:'DJP Template XML',url:'https://www.pajak.go.id/en/node/112031',prov:'primary'}
],
incidents:[
{id:'IN-01',area:'Akses & identitas',condition:'Sebagian pengguna mengalami kendala terkait impersonation/registrasi dan passphrase sehingga DJP melakukan perbaikan modul registrasi.',classification:['IAM','Master data','Business process','Capacity'],best:'IAM',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'IN-02',area:'Infrastruktur',condition:'DJP menambah server database untuk meningkatkan kapasitas lalu lintas data.',classification:['Capacity','IAM','Requirement','User error'],best:'Capacity',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'IN-03',area:'XML / interface',condition:'DJP memperbaiki validasi data skema impor faktur pajak berformat XML.',classification:['Integration / interface','Capacity','IAM','User training'],best:'Integration / interface',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'IN-04',area:'Digital signing',condition:'DJP memperbaiki skema penandatanganan digital dalam proses penerbitan dokumen faktur.',classification:['Security / application control','Capacity','Data migration','User training'],best:'Security / application control',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'IN-05',area:'Output faktur',condition:'DJP menyatakan sebelumnya terdapat kendala pada beberapa PKP di mana data yang tercantum pada faktur pajak tidak lengkap; kemudian dilakukan perbaikan.',classification:['Output / information quality','IAM','Capacity','Training'],best:'Output / information quality',source:'DJP KT-04/2025',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp',prov:'primary'},
{id:'IN-06',area:'Akses organisasi',condition:'Keberhasilan impersonate WP badan bergantung pada data pihak terkait/PIC yang sesuai; DJP mengimbau wajib pajak memeriksa data penanggung jawab sebelum implementasi.',classification:['Master data / IAM','Capacity','Application calculation','Network'],best:'Master data / IAM',source:'DJP',url:'https://www.pajak.go.id/id/artikel/persiapan-implementasi-coretax-djp-wajib-pajak-diimbau-cek-data-penanggung-jawab-yang',prov:'primary'}
],
performance:[
{metric:'Login',before:4.1,after:0.012,unit:'detik',period:'awal Februari → pertengahan Maret 2025'},
{metric:'Registrasi',before:5.8,after:0.045,unit:'detik',period:'awal Februari → pertengahan Maret 2025'},
{metric:'Penerbitan faktur pajak',before:10,after:1.46,unit:'detik',period:'periode awal → pertengahan Maret 2025'},
{metric:'Pelaporan SPT',before:29.28,after:3.93,unit:'detik',period:'periode awal → pertengahan Maret 2025'},
{metric:'Pembuatan bukti potong',before:16.6,after:0.29,unit:'detik',period:'periode awal → pertengahan Maret 2025'}
],
capacity:[
{metric:'XML per unggahan',before:'100',after:'15.000',unit:'faktur/unggahan'},
{metric:'PJAP throughput',before:'21',after:'50',unit:'faktur/menit'},
{metric:'Penandatanganan XML',before:'270',after:'1.000',unit:'faktur/menit'}
],
volume:[
{date:'21 Januari 2025 09.00',metric:'Faktur dibuat',value:'8.419.899'},
{date:'21 Januari 2025 09.00',metric:'Faktur tervalidasi/disetujui',value:'5.630.494'},
{date:'16 Maret 2025 03.04',metric:'Faktur pajak diadministrasikan',value:'136.969.276'},
{date:'16 Maret 2025 03.04',metric:'Bukti potong diadministrasikan',value:'44.135.107'}
],
questions:[
{id:'P1',title:'Apa yang sebenarnya berubah ketika Coretax go-live?',question:'Petakan perubahan proses, data, akses, dan interface yang membuat implementasi Coretax menjadi proyek SIA, bukan sekadar penggantian aplikasi.',output:'Satu peta sistem sederhana + empat area perubahan.'},
{id:'P2',title:'Apa akar masalah dari insiden yang tersedia?',question:'Klasifikasikan sedikitnya empat insiden ke kategori yang tepat dan jelaskan mengapa tidak semua kendala boleh disebut software bug.',output:'Empat klasifikasi insiden dengan alasan dan risiko SIA.'},
{id:'P3',title:'Apa yang dikatakan data kinerja?',question:'Gunakan bukti capacity, latency, dan volume untuk menilai apakah masalah utama lebih mencerminkan desain, sizing, integration, data/IAM, atau normal stabilization.',output:'Tiga temuan berbasis angka + keterbatasan interpretasi.'},
{id:'P4',title:'Apa keputusan Steering Committee?',question:'Pilih strategi: lanjut penuh dengan remediasi, phased functionality, parallel/fallback terbatas, atau rollback yang lebih luas. Tentukan tiga tindakan prioritas dan bukti yang harus dimonitor.',output:'Satu keputusan + tiga tindakan + tiga indikator monitoring.'}
],
glossary:[
['SDLC','Siklus perencanaan, analisis, desain, pengembangan/konfigurasi, pengujian, implementasi, dan pemeliharaan sistem.'],
['Cutover','Perpindahan dari sistem/proses lama ke sistem baru pada saat implementasi.'],
['Post-implementation review','Evaluasi setelah go-live untuk menilai apakah sistem mencapai tujuan dan risiko telah dikendalikan.'],
['IAM','Identity and Access Management: pengelolaan identitas, autentikasi, role, dan hak akses.'],
['Impersonation','Mekanisme pengguna personal bertindak mewakili entitas/badan yang berhak diwakilinya.'],
['Interface validation','Kontrol yang memastikan data antar sistem/format memenuhi aturan sebelum diterima.'],
['Latency','Waktu tunggu yang dibutuhkan sistem untuk merespons suatu fungsi.'],
['Throughput','Jumlah transaksi/dokumen yang dapat diproses dalam satu satuan waktu.'],
['Capacity','Kemampuan infrastruktur/aplikasi menangani beban tertentu.'],
['Stabilization','Periode perbaikan dan tuning setelah sistem baru masuk produksi.']
],
sources:[
{id:'S-01',label:'Praimplementasi Coretax DJP',url:'https://www.pajak.go.id/id/pengumuman/pemberitahuan-pelaksanaan-praimplementasi-coretax-djp'},
{id:'S-02',label:'Implementasi Sistem Inti Administrasi Perpajakan',url:'https://www.pajak.go.id/id/peraturan/implementasi-sistem-inti-administrasi-perpajakan'},
{id:'S-03',label:'Portal Reformasi/Coretax DJP',url:'https://pajak.go.id/id/reformdjp/coretax'},
{id:'S-04',label:'FAQ PIC, Impersonate dan Role',url:'https://pajak.go.id/sites/default/files/2025-01/Penanggung%20Jawab%2C%20Impersonate%20dan%20Penambahan%20Role%20Akses%20WP%20Badan%20%281%29.pdf'},
{id:'S-05',label:'Pembaruan Pasca-Implementasi Coretax DJP',url:'https://pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-pasca-implementasi-coretax-djp'},
{id:'S-06',label:'Perkembangan Informasi Terkini Coretax DJP',url:'https://www.pajak.go.id/id/siaran-pers/keterangan-tertulis-perkembangan-informasi-terkini-coretax-djp'},
{id:'S-07',label:'Template XML Coretax',url:'https://www.pajak.go.id/en/node/112031'}
]};