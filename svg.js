var level =1;
function doorHidden(){
  document.getElementById("door").style="visibility: hidden;";
  document.getElementById("txt_line_1").textContent="hello";
}

function doorShow(){
  document.getElementById("door").style="visibility: show;";
}

function WaterLevel(){
  //document.getElementById("w40").style="fill: #2EB1FF;";
  //document.getElementById("w30").style="fill: none;";
 document.getElementById("w"+level+"0").style="fill: #2EB1FF;";
 ++level;
 if (level > 10) {level = 1;  for (i=1; i<11;++i) document.getElementById("w"+i+"0").style="fill: none;";}
}