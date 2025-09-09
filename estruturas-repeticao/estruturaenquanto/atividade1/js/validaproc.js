function validaProc(){

    let contador = 0;
    let soma = 0;

    while(contador<3){

            let numeroCont = prompt("Digite o número " + (contador +1) + ":");
            let numero = Number(numeroCont);
            soma = soma + numero;

            contador = contador + 1

    }
    console.log("O somatório dos 3 números é: " + soma);

    return false;

}