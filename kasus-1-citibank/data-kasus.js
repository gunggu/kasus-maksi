const CASE_DATA={
meta:{title:'Citibank Indonesia: 117 Transfer',role:'Tim review forensik independen',mission:'Menilai bagaimana transaksi yang dipersoalkan dapat melewati proses bank, bukti apa yang mendukung kesimpulan, dan kontrol apa yang harus diperbaiki.',warning:'Kasus ini menggunakan bukti publik autentik dan rekonstruksi pembelajaran. Jangan menyamakan kegagalan proses dengan kesalahan pidana individu.'},
transactions:[
{id:'TX-001',date:'10 Mei 2010',form:'—',sender:'Rohli bin Pateni',senderAcc:'8000••2818',beneficiary:'Vigor Aw Yoshuara',beneficiaryAcc:'1462••0888',bank:'BCA Kuta Bali',amount:'Rp500.000.000',narrative:'—',source:'Putusan MA',prov:'primary'},
{id:'TX-002',date:'31 Agustus 2010',form:'AM 93712',sender:'Rohli bin Pateni',senderAcc:'8000••2818',beneficiary:'Sukardi',beneficiaryAcc:'8006••1109',bank:'Citibank N.A.',amount:'USD 150.000',narrative:'—',source:'Putusan MA',prov:'primary'},
{id:'TX-003',date:'29 September 2010',form:'AM 124134',sender:'Rohli bin Pateni',senderAcc:'8000••2818',beneficiary:'PT Graha Putranusa',beneficiaryAcc:'1040••2798',bank:'Bank Mandiri',amount:'USD 6.200',narrative:'pembayaran tower 3 lantai 22A',source:'Putusan MA',prov:'primary'},
{id:'TX-004',date:'1 Oktober 2010',form:'124135',sender:'Rohli bin Pateni',senderAcc:'8000••2818',beneficiary:'PT Exclusive Jaya Perkasa',beneficiaryAcc:'4363••8782',bank:'Belum terverifikasi',amount:'Belum terverifikasi',narrative:'—',source:'Putusan MA',prov:'primary'},
{id:'TX-005',date:'16 Desember 2010',form:'110423',sender:'Ahmad Riyad',senderAcc:'8000••7838',beneficiary:'Ismail bin Janim',beneficiaryAcc:'2761••4762',bank:'BCA',amount:'Rp61.000.000',narrative:'untuk pembelian propolis Bpk A. Riyad',source:'Putusan MA',prov:'primary'},
{id:'TX-006',date:'28 Desember 2010',form:'—',sender:'Gaby M',senderAcc:'2150••4146',beneficiary:'Ismail bin Janim',beneficiaryAcc:'2761••4762',bank:'BCA',amount:'Rp300.000.000',narrative:'DP untuk apartemen Regata',source:'Putusan MA',prov:'primary'},
{id:'TX-007',date:'Tanggal belum terverifikasi',form:'—',sender:'Collin Latung',senderAcc:'8000••1490',beneficiary:'Ismail bin Janim',beneficiaryAcc:'2761••4762',bank:'BCA',amount:'USD 10.000',narrative:'pembayaran Bpk Collin Latung untuk pembelian obat',source:'Putusan MA',prov:'primary'}
],
controls:[
{id:'C-01',title:'Transaction Verification SOP',fact:'Putusan terkait menyebut SOP Transaction Verification No. 30 Revision 2007.',question:'Apa tujuan kontrol verifikasi ini, dan bukti apa yang menunjukkan kontrol tersebut benar-benar dilaksanakan?',prov:'primary'},
{id:'C-02',title:'Pemisahan peran',fact:'Catatan perkara mengidentifikasi peran Cash Officer dan Cash Supervisor di cabang Landmark.',question:'Apakah struktur peran tersebut cukup untuk menghasilkan pemisahan tugas yang efektif?',prov:'primary'},
{id:'C-03',title:'Verifikasi transaksi bernilai besar',fact:'Catatan perkara menyebut 18 formulir transfer melewati seorang Cash Supervisor; delapan transaksi di atas Rp300 juta diverifikasi olehnya.',question:'Apakah konsentrasi verifikasi pada satu supervisor merupakan indikator kelemahan kontrol atau hanya karakteristik volume kerja?',prov:'primary'},
{id:'C-04',title:'Uji forensik tanda tangan',fact:'Putusan PK menyebut dua formulir transaksi yang diperiksa laboratorium forensik dinilai tidak identik dengan tanda tangan asli nasabah terkait.',question:'Seberapa jauh bukti dua formulir dapat digeneralisasi terhadap populasi transaksi?',prov:'primary'},
{id:'C-05',title:'Inventaris bukti',fact:'Catatan perkara mencantumkan account summary, banking relationship summary, guest logbook, dan dokumen kepegawaian sebagai bagian bukti.',question:'Bukti mana yang paling relevan untuk menguji otorisasi, occurrence, dan pemisahan tugas?',prov:'primary'}
],
witnesses:[
{id:'W-01',name:'Inong Malinda Dee',role:'Senior Relationship Manager',summary:'Perannya penting untuk memahami hubungan nasabah, instruksi transfer, dan bagaimana dokumen transaksi masuk ke proses bank.',source:'Putusan 1607 K/PID.SUS/2012',prov:'primary'},
{id:'W-02',name:'Novianty Iriane',role:'Cash Officer',summary:'Relevan untuk merekonstruksi proses kas dan verifikasi. Putusan PK berikutnya harus diperlakukan terpisah dari analisis kontrol.',source:'Putusan 99 PK/Pid.Sus/2016',prov:'primary'},
{id:'W-03',name:'Betharia Panjaitan',role:'Cash Supervisor',summary:'Relevan untuk transaksi bernilai besar, verifikasi, dan konsentrasi fungsi supervisi. Putusan PK berikutnya harus diperlakukan secara akurat.',source:'Putusan 99 PK/Pid.Sus/2016',prov:'primary'},
{id:'W-04',name:'Nasabah Citibank',role:'Pemilik rekening',summary:'Keterangan nasabah relevan untuk menguji apakah transaksi benar-benar diotorisasi dan sesuai pola hubungan perbankan.',source:'Putusan dan peliputan persidangan',prov:'secondary'},
{id:'W-05',name:'Penyidik',role:'Rekonstruksi dan penyitaan bukti',summary:'Peliputan kontemporer menyebut rekonstruksi proses dan penyitaan 29 formulir transfer.',source:'ANTARA',prov:'secondary'}
],
evidence:[
{id:'E-01',title:'Putusan MA 1607 K/PID.SUS/2012',desc:'Sumber utama fakta perkara dan rincian transaksi yang dapat ditelusuri.',prov:'primary'},
{id:'E-02',title:'Putusan PK 99 PK/Pid.Sus/2016',desc:'Sumber penting untuk kontrol, SOP, peran Cash Officer/Supervisor, dan disposisi hukum berikutnya.',prov:'primary'},
{id:'E-03',title:'Peliputan persidangan 117 transfer',desc:'Peliputan ANTARA menyebut sekitar 117 transfer dan kurang lebih 30 nasabah.',prov:'secondary'},
{id:'E-04',title:'Penyitaan 29 formulir transfer',desc:'Peliputan kontemporer tentang bukti yang disita penyidik.',prov:'secondary'},
{id:'E-05',title:'Formulir transfer simulasi',desc:'Rekonstruksi visual untuk membantu memahami field dan kontrol; bukan scan formulir Citibank asli.',prov:'reconstruction'}
],
decisions:['Kontrol desain memadai tetapi pelaksanaan gagal','Terdapat kelemahan desain dan pelaksanaan kontrol','Bukti belum cukup untuk menyimpulkan','Perlu prosedur investigasi tambahan sebelum kesimpulan']
};