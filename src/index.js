
function mostrar(){
  document.getElementById("container").style.display = "block";
  document.getElementById("imagen").style.display = "none";
}

function mensaje(){
  let mensaje= document.getElementById("writeText1").value;
  let offSet=document.getElementById("offSet").value;
  let textC= cipher.encode(offSet,mensaje);
  document.getElementById("writeText2").value=textC;
} 

function mensaje2(){
  let mensaje2= document.getElementById("writeText1").value;
  let offSet2=document.getElementById("offSet").value;
  let textC2= cipher.decode(offSet2,mensaje2);
  document.getElementById("writeText2").value=textC2;
}

    


