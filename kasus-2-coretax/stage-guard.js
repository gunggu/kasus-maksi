// Guard hierarkis: mahasiswa tidak dapat melompati tahap pembelajaran.
stage=function(){
  if(analyzedDesignCount()<2)return 1;
  if(classifiedIncidentCount()<4)return 2;
  if(matrixComplete()<3)return 3;
  return 4;
};
const renderMatrixCoreDasar=renderMatrix;
renderMatrix=function(){
  if(classifiedIncidentCount()<4){
    $('#content').innerHTML=`${stageBox()}<div class="locked"><h3>Matriks Assurance belum dibuka</h3><p>Klasifikasikan minimal empat insiden dengan alasan terlebih dahulu. Matriks harus dibangun setelah Anda memiliki hipotesis akar masalah.</p><button onclick="view='incidents';render()">Buka Incident Board</button></div>`;
    return;
  }
  renderMatrixCoreDasar();
};
// Refresh tampilan setelah guard aktif.
render();