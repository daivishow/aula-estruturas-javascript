function validaProc() {

let vetor = [];

for (let i = 0; i < 5; i++) {
  let valor = parseInt(prompt("Digite um valor inteiro para a posição " + (i+1) + ":"));
  vetor.push(valor);
}

let multiplicador = parseInt(prompt("Digite um valor inteiro para multiplicar:"));

let resultados = [];

for (let i = 0; i < vetor.length; i++) {
  resultados.push(vetor[i] * multiplicador);
}

console.log("Resultados da multiplicação:");
for (let i = 0; i < resultados.length; i++) {
  console.log("Posição " + (i+1) + ": " + resultados[i]);
}

return false;

}
