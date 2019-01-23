window.cipher = {
  encode: (offSet,mensaje) => {

    let mensajeC=""; 
    let i= 0;
    for (i = 0; i<mensaje.length; i++) {
    let letraCapturada = mensaje[i];
    let letraMayuscula = letraCapturada.toUpperCase();
    let converterAscci=letraMayuscula.charCodeAt(0);
    let newUbication=(converterAscci - 65 + parseInt(offSet)) % 26 + 65;
    let newMensaje=String.fromCharCode(newUbication);

    mensajeC+= newMensaje;
    }
    return mensajeC;
  },
  decode: (offSet2,mensaje2) => {

    let mensajeC2=""; 
    let j= 0;
    for (j = 0; j<mensaje2.length; j++) {
    let letraCapturada2 = mensaje2[j];
    let letraMayuscula2 = letraCapturada2.toUpperCase();
    let converterAscci2=letraMayuscula2.charCodeAt(0); 
    let newUbication2=(converterAscci2 + 65 - parseInt(offSet2)) %26+65;
    let newMensaje2=String.fromCharCode(newUbication2);
    mensajeC2+= newMensaje2;
    }

      return mensajeC2;
  }
}    
