window.cipher = {
  encode: (offSet,mensaje) => {

    let mensajeC=""; 
    let i= 0;
    //console.log(mensaje.length)
    for (i = 0; i<mensaje.length; i++) {
    // Capturo la letra
    let letraCapturada = mensaje[i];
    // Pasar letra a Mayúsculas
    let letraMayuscula = letraCapturada.toUpperCase();
    //console.log("letraMayuscula: ", letraMayuscula)
    // Obtener posición en el código ASCII
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
    //console.log(mensaje.length)
    for (j = 0; j<mensaje2.length; j++) {
    // Capturo la letra
    let letraCapturada2 = mensaje2[j];
    // Pasar letra a Mayúsculas
    let letraMayuscula2 = letraCapturada2.toUpperCase();
    //console.log(letraMayuscula);
    // Obtener posición en el código ASCII
    let converterAscci2=letraMayuscula2.charCodeAt(0);
    //console.log(converterAscci); 
    let newUbication2=(converterAscci2 + 65 - parseInt(offSet2)) %26+65;
    //console.log(newUbication);
    let newMensaje2=String.fromCharCode(newUbication2);
    //console.log(newMensaje);
    mensajeC2+= newMensaje2;
    //console.log(mensajeC);
    }

      return mensajeC2;
  }
}    
