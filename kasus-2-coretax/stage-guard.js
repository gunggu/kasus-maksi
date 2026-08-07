// Guard hierarkis: mahasiswa tidak dapat melompati tahap pembelajaran.
function performanceAnalyzed(){return String(state.performanceNote||'').trim().length>=60}
stage=function(){
  if(analyzedDesignCount()<2)return 1;
  if(classifiedIncidentCount()<4)return 2;
  if(matrixComplete()<3)return 3;
  return 4;
};

const stageBoxCoreDasar=stageBox;
stageBox=function(){
  const s=stage(),d=CORE_DATA.stages[s-1];
  let req='Syarat keputusan terpenuhi';
  if(s===1)req=`${analyzedDesignCount()}/2 artefak desain dianalisis`;
  else if(s===2)req=`${classifiedIncidentCount()}/4 insiden diklasifikasikan`;
  else if(s===3){
    const p=performanceAnalyzed()?'analisis kinerja ✓':'analisis kinerja belum lengkap';
    req=`${p} • ${matrixComplete()}/3 baris matriks assurance lengkap`;
  }
  return `<div class="stage-box"><div><span>Tahap ${s}/4</span><b>${d.title}</b><p>${d.desc}</p></div><div class="requirement"><b>Syarat tahap berikutnya</b><span>${req}</span></div></div>`;
};

const renderMatrixCoreDasar=renderMatrix;
renderMatrix=function(){
  if(classifiedIncidentCount()<4){
    $('#content').innerHTML=`${stageBox()}<div class="locked"><h3>Matriks Assurance belum dibuka</h3><p>Klasifikasikan minimal empat insiden dengan alasan terlebih dahulu.</p><button onclick="view='incidents';render()">Buka Incident Board</button></div>`;
    return;
  }
  if(!performanceAnalyzed()){
    $('#content').innerHTML=`${stageBox()}<div class="locked"><h3>Matriks Assurance belum dibuka</h3><p>Analisis Dashboard Kinerja terlebih dahulu. Tuliskan sekurang-kurangnya tiga temuan berbasis angka beserta keterbatasan interpretasinya.</p><button onclick="view='performance';render()">Buka Dashboard Kinerja</button></div>`;
    return;
  }
  renderMatrixCoreDasar();
};

// Refresh tampilan setelah guard aktif.
render();