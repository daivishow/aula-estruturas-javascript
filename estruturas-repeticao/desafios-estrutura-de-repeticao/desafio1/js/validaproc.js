function validaProc(){

    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    let resultado = numero1 + numero2;
    let resposta;

    while(true){
        resposta = parseInt(prompt("Qual a soma de " + numero1 + " e " + numero2 + "?"));

        if (resposta === resultado){
            alert("Parabéns, você acertou a resposta!");
            break;
        } else{
            alert("Resposta errada, tente novamente!");
        }
    }

    //return false;

}