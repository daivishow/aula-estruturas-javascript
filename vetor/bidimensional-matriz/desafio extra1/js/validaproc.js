function validaProc() {

  let matriz = [];
  let matrizPrincipal = [];
  let matrizSecundaria = [];
  let linhas = 4;
  let colunas = 4;

  for(l = 0; l < linhas; l++){
    matriz [l] = [];
    for(c = 0; c < colunas; c++){
      matriz[l][c] = parseInt(prompt("Insira o valor da posição ["+ (l+1) +"] ["+(c+1)+"]"))
    }
  }

  for(l = 0; l < linhas; l++){
    matrizPrincipal [l] = [];
    matrizSecundaria [l] = [];
    for (c = 0; c < colunas; c++){
      matrizPrincipal[l][l]
      matrizSecundaria[l][3-l]
    }
  }

  document.write("<h3>Diagonal principal da matriz:</h3>");
  for (let l = 0; l < linhas; l++) {
      document.write(matriz[l][l] + "&nbsp;&nbsp;");
    }
    document.write("<br>");

    document.write("<h3>Diagonal secundária da matriz:</h3>");
    for (let l = 0; l < linhas; l++) {
        document.write(matriz[l][3-l] + "&nbsp;&nbsp;");
    }
    document.write("<br>");

  return false;
}
