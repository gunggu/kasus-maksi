(()=>{
  const STATUS_URL='/api/case2-status';
  const ACTIVATE_URL='/api/case2-activate';
  const case2=document.querySelector('[data-case2-gate]');
  if(!case2)return;

  const statusChip=case2.querySelector('.status-chip');
  const cta=case2.querySelector('.cta');
  let globalActive=false;
  let statusKnown=false;

  function sync(){
    const active=statusKnown && globalActive;
    case2.classList.toggle('locked',!active);
    case2.classList.toggle('active',active);
    case2.setAttribute('aria-label',active?'Kasus 2 aktif untuk kelas. Buka Coretax.':'Kasus 2 belum diaktifkan untuk kelas. Klik untuk aktivasi dosen.');
    if(statusChip)statusChip.textContent=active?'AKTIF • PENGEMBANGAN & IMPLEMENTASI SIA':(statusKnown?'BELUM DIAKTIFKAN':'MEMERIKSA STATUS…');
    if(cta)cta.textContent=active?'Buka Kasus 2 →':(statusKnown?'Aktifkan Kasus 2 🔒':'Memeriksa status…');
  }

  async function refreshStatus(){
    try{
      const r=await fetch(STATUS_URL,{cache:'no-store',headers:{'Accept':'application/json'}});
      if(!r.ok)throw new Error('status');
      const data=await r.json();
      globalActive=data.enabled===true;
      statusKnown=true;
    }catch(err){
      globalActive=false;
      statusKnown=true;
      if(statusChip)statusChip.textContent='STATUS TIDAK TERSEDIA';
      if(cta)cta.textContent='Coba lagi';
      console.error('Status Kasus 2 tidak dapat dimuat',err);
      return false;
    }finally{
      sync();
    }
    return true;
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
        <span class="eyebrow">AKTIVASI GLOBAL KASUS 2</span>
        <h2>Coretax DJP: 1 Januari, Go Live</h2>
        <p>Aktivasi ini berlaku untuk <b>seluruh mahasiswa</b>. Masukkan sandi aktivasi dosen.</p>
        <label for="case2Password">Sandi aktivasi</label>
        <input id="case2Password" type="password" autocomplete="off" required>
        <div class="dialog-actions">
          <button type="submit" class="activate-button">Aktifkan untuk seluruh kelas</button>
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
      const button=dialog.querySelector('.activate-button');
      status.textContent='Mengaktifkan Kasus 2 untuk seluruh kelas…';
      status.className='activation-status';
      button.disabled=true;
      try{
        const r=await fetch(ACTIVATE_URL,{
          method:'POST',
          headers:{'Content-Type':'application/json','Accept':'application/json'},
          body:JSON.stringify({password:input.value})
        });
        const data=await r.json().catch(()=>({}));
        if(!r.ok){
          status.textContent=r.status===401?'Sandi aktivasi tidak sesuai.':(data.error||'Aktivasi gagal.');
          status.className='activation-status error';
          input.select();
          return;
        }
        globalActive=true;statusKnown=true;sync();
        status.textContent='Kasus 2 aktif untuk seluruh kelas.';
        status.className='activation-status success';
        setTimeout(()=>{dialog.close();window.location.href='kasus-2-coretax/index.html';},450);
      }catch(err){
        status.textContent='Layanan aktivasi tidak dapat dihubungi.';
        status.className='activation-status error';
      }finally{button.disabled=false}
    });
    dialog.addEventListener('close',()=>{
      const input=dialog.querySelector('#case2Password');
      const status=dialog.querySelector('#case2ActivationStatus');
      input.value='';status.textContent='';status.className='activation-status';
    });
    return dialog;
  }

  case2.addEventListener('click',async e=>{
    e.preventDefault();
    if(!statusKnown)await refreshStatus();
    if(globalActive){window.location.href=case2.getAttribute('href');return}
    const dialog=ensureDialog();
    dialog.showModal();
    setTimeout(()=>dialog.querySelector('#case2Password').focus(),0);
  });

  sync();
  refreshStatus();
  window.addEventListener('focus',refreshStatus);
})();
