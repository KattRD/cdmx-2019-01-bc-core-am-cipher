
function mostrarMensaje(){
  let mensaje= document.getElementById("writeText1").value;
  let offSet=document.getElementById("offSet").value;
  console.log(mensaje);
  console.log(offSet);
  
  let textC= cipher.encode(offSet,mensaje);
  //console.log(textC);
  console.log(textC);
  document.getElementById("writeText2").value=textC;
  

} ;

function mostrarMensaje2(){
  let mensaje2= document.getElementById("writeText1").value;
  //console.log(mensaje2)
  let offSet2=document.getElementById("offSet").value;
  let textC2= cipher.decode(offSet2,mensaje2);
  document.getElementById("writeText2").value=textC2;
  

} ;

    


