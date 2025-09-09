function validaProc() {
  let linhas = 5;
  let colunas = 5;
  let matriz = [];
  let matrizDobro = [];

  for (let l = 0; l < linhas; l++) {
    matriz[l] = [];
    for (let c = 0; c < colunas; c++) {
      matriz[l][c] = parseInt(prompt("Digite o valor da linha " + l + " e coluna " + c));
    }
  }

  for (let l = 0; l < linhas; l++) {
    matrizDobro[l] = [];
    for (let c = 0; c < colunas; c++) {
      matrizDobro[l][c] = matriz[l][c] * 2;
    }
  }
  document.write("<h3>Matriz Original:</h3>");
  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      document.write(matriz[l][c] + "&nbsp;&nbsp;");
    }
    document.write("<br>");
  }

  document.write("<h3>Matriz com o dobro:</h3>");
  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      document.write(matrizDobro[l][c] + "&nbsp;&nbsp;");
    }
    document.write("<br>");
  }

  return false;
}
