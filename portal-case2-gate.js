(()=>{
  const STORAGE_KEY='kasus2_aktif_v1';
  const EXPECTED_HASH='ae5234fb3d615cbaca3d41f2badd2adf118d1bc654d61cb24b9d3b66e0d2c870';
  const case2=document.querySelector('[data-case2-gate]');
  if(!case2)return;

  const statusChip=case2.querySelector('.status-chip');
  const cta=case2.querySelector('.cta');
  const isActive=()=>localStorage.getItem(STORAGE_KEY)==='1';

  function sync(){
    const active=isActive();
    case2.classList.toggle('locked',!active);
    case2.classList.toggle('active',active);
    case2.setAttribute('aria-label',active?'Kasus 2 aktif. Buka Coretax.':'Kasus 2 belum aktif. Klik untuk aktivasi dengan sandi.');
    if(statusChip)statusChip.textContent=active?'AKTIF • PENGEMBANGAN & IMPLEMENTASI SIA':'BELUM DIAKTIFKAN';
    if(cta)cta.textContent=active?'Buka Kasus 2 →':'Aktifkan Kasus 2 🔒';
  }

  async function sha256(text){
    const data=new TextEncoder().encode(text);
    const hash=await crypto.subtle.digest('SHA-256',data);
    return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }

  function ensureDialog(){
    let dialog=document.getElementById('case2ActivationDialog');
    if(dialog)return dialog;
    dialog=document.createElement('dialog');
    dialog.id='case2ActivationDialog';
    dialog.className='activation-dialog';
    dialog.innerHTML=`
      <form method="dialog" id="case2ActivationForm">
        <button type="button" class="dialog-close" aria-label="Tutup">×</button>
        <span class="eyebrow">AKTIVASI KASUS 2</span>
        <h2>Coretax DJP: 1 Januari, Go Live</h2>
        <p>Kasus 2 belum diaktifkan pada browser ini. Masukkan sandi aktivasi dosen.</p>
        <label for="case2Password">Sandi aktivasi</label>
        <input id="case2Password" type="password" autocomplete="off" required>
        <div class="dialog-actions">
          <button type="submit" class="activate-button">Aktifkan Kasus 2</button>
          <button type="button" class="cancel-button">Batal</button>
        </div>
        <p id="case2ActivationStatus" class="activation-status" role="status"></p>
      </form>`;
    document.body.appendChild(dialog);
    dialog.querySelector('.dialog-close').onclick=()=>dialog.close();
    dialog.querySelector('.cancel-button').onclick=()=>dialog.close();
    dialog.querySelector('#case2ActivationForm').addEventListener('submit',async e=>{
      e.preventDefault();
      const input=dialog.querySelector('#case2Password');
      const status=dialog.querySelector('#case2ActivationStatus');
      const hash=await sha256(input.value);
      if(hash===EXPECTED_HASH){
        localStorage.setItem(STORAGE_KEY,'1');
        status.textContent='Kasus 2 berhasil diaktifkan.';
        status.className='activation-status success';
        sync();
        setTimeout(()=>{dialog.close();window.location.href='kasus-2-coretax/index.html';},350);
      }else{
        status.textContent='Sandi aktivasi tidak sesuai.';
        status.className='activation-status error';
        input.select();
      }
    });
    dialog.addEventListener('close',()=>{
      const input=dialog.querySelector('#case2Password');
      const status=dialog.querySelector('#case2ActivationStatus');
      input.value='';status.textContent='';status.className='activation-status';
    });
    return dialog;
  }

  case2.addEventListener('click',e=>{
    if(isActive())return;
    e.preventDefault();
    const dialog=ensureDialog();
    dialog.showModal();
    setTimeout(()=>dialog.querySelector('#case2Password').focus(),0);
  });
  sync();
})();
