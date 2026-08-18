(()=>{
  const STORAGE_KEY='kasus2_aktif_v1';
  if(localStorage.getItem(STORAGE_KEY)!=='1'){
    window.location.replace('../index.html?kasus2=belum-aktif');
  }
})();
