function validaProc(){
 
let numeros = [];

for (let i = 0; i < 4; i++) {
    let valor = parseInt(prompt("Digite um número inteiro: "));
    numeros.push(valor); 
}

console.log("Números em ordem inversa:");
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}

return false;

}
