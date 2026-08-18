(()=>{
  const $=s=>document.querySelector(s);
  const form=$('#uploadForm'), status=$('#status'), caseSelect=$('#caseId'), case2Option=$('#case2Option'), case2Note=$('#case2Note');

  async function checkCase2(){
    try{
      const r=await fetch('../api/case2-status',{cache:'no-store'});
      const data=await r.json();
      const enabled=!!data.enabled;
      case2Option.disabled=!enabled;
      case2Note.textContent=enabled?'Kasus 2 sudah aktif dan dapat dipilih.':'Kasus 2 belum diaktifkan oleh dosen.';
      if(!enabled && caseSelect.value==='case2')caseSelect.value='case1';
    }catch{
      case2Option.disabled=true;
      case2Note.textContent='Status Kasus 2 belum dapat diperiksa.';
    }
  }

  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const file=$('#file').files[0];
    if(!file)return;
    const lower=file.name.toLowerCase();
    if(!(lower.endsWith('.ppt')||lower.endsWith('.pptx'))){status.textContent='Hanya berkas .ppt atau .pptx yang dapat diunggah.';status.className='status error';return;}
    if(file.size>25*1024*1024){status.textContent='Ukuran berkas melebihi 25 MB.';status.className='status error';return;}
    const btn=form.querySelector('button[type=submit]');
    btn.disabled=true;status.textContent='Mengunggah…';status.className='status';
    const fd=new FormData(form);
    try{
      const r=await fetch('../api/submissions/upload',{method:'POST',body:fd});
      const data=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(data.error||'Unggahan gagal.');
      status.textContent=`Berhasil diunggah: ${data.filename}`;status.className='status success';
      form.reset();await checkCase2();
    }catch(err){status.textContent=err.message||'Unggahan gagal.';status.className='status error'}finally{btn.disabled=false}
  });
  checkCase2();
})();
