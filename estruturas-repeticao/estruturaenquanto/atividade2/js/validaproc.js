function validaProc(){

    let i = 1;
    let maior = 0;
    let numero;
    while(i<=3){

        numero=parseInt(prompt("Digite o número"));
        console.log("O número informado é: "+numero);
        if(numero>maior){
            maior=numero;

        }
        i = i + 1;
    }
    console.log("O maior número foi "+maior);

    return false;

}