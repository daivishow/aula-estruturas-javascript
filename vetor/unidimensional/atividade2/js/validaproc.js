function validaProc() {

    let i;
    let notas = [];
    let contadorAprovados = 0; 

    for (i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt("Digite a nota do aluno"));
    }

    console.log("--- Relatório de Notas Aprovadas (>= 7.5) ---");
    for (i = 0; i < 3; i++) {
        if (notas[i] >= 7.5) {
            console.log("A nota do aluno na posição " + i + " é: " + notas[i]);
            contadorAprovados++; 
        }
    }

    console.log("\n--- Resumo ---");
    console.log("Total de notas iguais ou superiores a 7.5: " + contadorAprovados);

    return false;
}

validaProc();