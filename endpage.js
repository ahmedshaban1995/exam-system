var div=document.getElementsByClassName("end")[0]

var grade=localStorage.getItem("grade");

div.innerHTML=`<h3>congratulations , your grade = ${grade} %</h3>`