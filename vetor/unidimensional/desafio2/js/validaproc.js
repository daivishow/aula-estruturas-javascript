function validaProc() {
  let array = [];

  for (let i = 0; i < 10; i++) {
    array[i] = parseInt(prompt("Digite o " + (i + 1) + "º número desejado:"));
  }

  let valorBusca = parseInt(prompt("Digite um valor inteiro para buscar no vetor:"));

  let posicao = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === valorBusca) {
      posicao = i;
      break;
    }
  }

  if (posicao !== -1) {
    alert("Valor encontrado na posição: " + posicao);
  } else {
    alert("Valor não encontrado no vetor.");
  }

  return false;

}

// extra mostrar a posição dos números (se o mesmo número estiver em mais de uma posição)