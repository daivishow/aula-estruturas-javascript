function validaProc() {
    let vetor = [];
    let i;

    for (i = 0; i < 10; i++) {
        vetor[i] = i * i; 
    }

    console.log("Dados do Vetor");
    for (i = 0; i < 10; i++) {
        console.log("Posição " + i + ": " + vetor[i]);
    }

    return false;
}

validaProc();