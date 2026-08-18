(()=>{
  document.documentElement.style.visibility='hidden';
  fetch('/api/case2-status',{cache:'no-store',headers:{'Accept':'application/json'}})
    .then(r=>{if(!r.ok)throw new Error('status');return r.json()})
    .then(data=>{
      if(data.enabled===true){
        document.documentElement.style.visibility='';
      }else{
        window.location.replace('../index.html?kasus2=belum-aktif');
      }
    })
    .catch(()=>window.location.replace('../index.html?kasus2=status-gagal'));
})();
