function validaProc() {
  let linhas = 4;
  let colunas = 5;
  let matriz = [];
  let somaLinhas = [];
  let somaTotal = 0;

  for (let l = 0; l < linhas; l++) {
    matriz[l] = [];
    somaLinhas[l] = 0; 
    for (let c = 0; c < colunas; c++) {
      matriz[l][c] = parseInt(prompt("Digite o valor da linha " + l + " e coluna " + c));
      somaLinhas[l] += matriz[l][c];  
      somaTotal += matriz[l][c];      
    }
  }

  document.write("<h3>Matriz:</h3>");
  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      document.write(matriz[l][c] + "&nbsp;&nbsp;");
    }
    document.write("<br>");
  }

  document.write("<h3>Soma de cada linha:</h3>");
  for (let l = 0; l < linhas; l++) {
    document.write("Linha " + l + ": " + somaLinhas[l] + "<br>");
  }

  document.write("<h3>Soma total dos elementos:</h3>" + somaTotal);

  return false;
}
