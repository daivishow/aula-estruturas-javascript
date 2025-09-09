function validaProc() {
  let matriz = [];
  let linhas = 2;
  let colunas = 2;

  for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let c = 0; c < colunas; c++) {
          matriz[i][c] = i + c;
      }
  }

  console.log("Matriz:");
  console.table(matriz);

  let linha = parseInt(prompt("Digite a linha (0 a " + (linhas - 1) + ") para somar:"));

  if (linha < 0 || linha >= linhas || isNaN(linha)) {
      document.write("Linha inválida!");
      return false;
  }

  let soma = 0;
  for (let c = 0; c < colunas; c++) {
      soma += matriz[linha][c];
  }

  document.write("<h3>Soma dos elementos da linha " + linha + ": " + soma + "</h3>");
  for (let i = 0; i < linhas; i++) {
      for (let c = 0; c < colunas; c++) {
          document.write(matriz[i][c] + "&nbsp;&nbsp;");
      }
      document.write("<br>");
  }

  return false;
}
