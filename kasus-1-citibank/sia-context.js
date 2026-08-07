// Lapisan framing Sistem Informasi Akuntansi untuk mahasiswa semester 1.
// Ditambahkan tanpa mengubah logika investigasi inti.
const renderBriefingSebelumSIA=renderBriefing;
renderBriefing=function(){
  renderBriefingSebelumSIA();
  const root=document.querySelector('#content');
  if(!root)return;
  const box=document.createElement('section');
  box.className='sia-context-block';
  box.innerHTML=`
    <div class="sia-context-head">
      <span class="eyebrow">MENGAPA INI KASUS SISTEM INFORMASI AKUNTANSI?</span>
      <h3>Bukan sekadar kasus fraud perbankan</h3>
      <p>Fokus kelas adalah memahami bagaimana transaksi masuk ke sistem, divalidasi, diotorisasi, diproses, dicatat, dipantau, dan akhirnya menjadi informasi akuntansi yang dipercaya.</p>
    </div>
    <div class="sia-question">
      <b>Pertanyaan SIA utama</b>
      <p>Bagaimana suatu transaksi dapat tercatat dan diproses oleh sistem perbankan ketika keabsahan otorisasinya dipersoalkan, dan kontrol informasi apa yang seharusnya mencegah atau mendeteksinya?</p>
    </div>
    <div class="sia-flow">
      <span>Instruksi nasabah</span><i>→</i><span>Dokumen sumber</span><i>→</i><span>Input</span><i>→</i><span>Validasi</span><i>→</i><span>Otorisasi</span><i>→</i><span>Pemrosesan</span><i>→</i><span>Posting</span><i>→</i><span>Monitoring</span>
    </div>
    <div class="grid three sia-learning-grid">
      <div class="card"><b>TPS & Input Controls</b><p>Apakah transaksi yang masuk valid, lengkap, dan didukung dokumen sumber yang sah?</p></div>
      <div class="card"><b>Authorization & SoD</b><p>Apakah approval benar-benar mewakili otorisasi nasabah dan dilakukan oleh fungsi yang independen?</p></div>
      <div class="card"><b>Audit Trail & Monitoring</b><p>Dapatkah transaksi ditelusuri end-to-end dan apakah sistem mendeteksi pola yang tidak wajar?</p></div>
    </div>
    <div class="sia-facts card">
      <h3>Fakta kasus yang relevan untuk SIA</h3>
      <ul>
        <li>terdapat rekening nasabah dan beneficiary sebagai data akun/master;</li>
        <li>terdapat formulir/instruksi transfer sebagai dokumen sumber;</li>
        <li>terdapat Relationship Manager, Cash Officer, dan Cash Supervisor dalam rantai proses;</li>
        <li>terdapat SOP Transaction Verification No. 30 Revision 2007;</li>
        <li>terdapat transaksi bernilai besar yang memerlukan verifikasi tambahan;</li>
        <li>terdapat account summary, banking relationship summary, dan guest logbook sebagai bukti/hasil informasi;</li>
        <li>terdapat beneficiary berulang yang dapat menjadi dasar exception monitoring.</li>
      </ul>
      <p class="sub"><b>Batas:</b> kasus tidak memiliki raw core-banking log. Mahasiswa harus membedakan bukti yang tersedia dengan data sistem yang secara ideal seharusnya diminta.</p>
    </div>
    <div class="sia-takeaway">
      <b>Pesan utama</b>
      <p>Processing accuracy tidak sama dengan transaction validity. Sistem dapat mencatat transaksi secara teknis benar tetapi tetap menghasilkan informasi yang tidak dapat dipercaya jika input atau otorisasinya tidak valid.</p>
    </div>`;
  root.appendChild(box);
};
