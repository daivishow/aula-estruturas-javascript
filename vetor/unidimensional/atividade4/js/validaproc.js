function validaProc() {

    let numeros = [];

    for (let i = 0; i < 10; i++) {
      numeros[i] = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    }
    
    console.log("Números nas posições ímpares:");
    for (let i = 1; i < numeros.length; i += 2) {
      console.log(numeros[i]);
    }

    return false;
}
