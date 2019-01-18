
function mostrarMensaje(){
  let mensaje= document.getElementById("writeText1").value;
  document.getElementById("writeText2").value= mensaje;
  let offSet=document.getElementById("offSet").value; 
  encode (mensaje,offSet);
  
}; 
  function mostrarMensaje2(){ 
      let mensaje2= document.getElementById("writeText2").value;
      document.getElementById("writeText1").value= mensaje2;
      let offSet=document.getElementById("offSet").value;
 
}; 
    




window.cipher.encode(mensaje, offSet)
window.cipher.encode(mensaje2, offSet)

