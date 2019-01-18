window.cipher = {
  encode: (mensaje,offSet) => {
  const textC = "";
  const offSet= parseInt (offSet);
    for (i >= 0; i<textC.length; i++) {
    const newUbication =(mensaje.toUpperCase.CharCodeAt(i)- 65 + offSet)%26+65;
    const textCiph =String.fromCharCode(newUbication);
    textC+=textCiph;

    }
    return textC;
  },
  decode:(mensaje2,offSet) => {
    const offSet= parseInt (offSet);
    const textD = "";
      for (j >= 0; j<textD.length; j++) {
      const newUbication2 =(mensaje2.toUpperCase.CharCodeAt(j)+ 65 - offSet)%26+65;
      const textDeciph =String.fromCharCode(newUbication2);
      textD+=textDeciph;
      
      }
      return textD;
  }

};


