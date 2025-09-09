function validaProc() {
  let matriz = [];
  let linhas = 3;
  let colunas = 3;

  for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let c = 0; c < colunas; c++) {
          matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
      }
  }

  let multiplicador = parseInt(prompt("Digite o valor para multiplicar a matriz:"));

  let matrizMultiplicada = [];

  for (let i = 0; i < linhas; i++) {
      matrizMultiplicada[i] = [];
      for (let c = 0; c < colunas; c++) {
          matrizMultiplicada[i][c] = matriz[i][c] * multiplicador;
      }
  }

  document.write("<h3>Matriz multiplicada:</h3>");
  for (let i = 0; i < linhas; i++) {
      for (let c = 0; c < colunas; c++) {
          document.write(matrizMultiplicada[i][c] + "&nbsp;&nbsp;");
      }
      document.write("<br>");
  }

  document.write("<h4>Matriz muliplicada por:</h4>"+multiplicador);

  return false;
}
