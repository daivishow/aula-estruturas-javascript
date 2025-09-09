function validaProc() {
  
    
    matriz = [];
    let linhas = 4;
    let colunas = 3
    let soma = 0;

    for(let l=0; l < linhas; l++){
        matriz[l] = [];
        for(let c=0; c < colunas; c++){
            let valor = parseFloat(prompt("Digite o valor da posição ["+ (l+1) +"]["+ (c+1) +"]"));
            matriz[l][c] = valor;
            soma += valor;
        }
    }

    console.log("Soma de todos os elementos da matriz:" + soma);

    return false;

}
