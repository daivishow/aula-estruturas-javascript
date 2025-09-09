function validaProc(){
    while(true){
        let peso = parseFloat(prompt("Digite seu peso em kg:"));
        let altura = parseFloat(prompt("Digite sua altura em metros:"));

        let imc = peso / (altura * altura);

        alert("Seu IMC é: " + imc.toFixed(2));

        if(imc < 18.5){
            alert("Você está abaixo do peso.");
        } else if(imc >= 18.5 && imc < 25){
            alert("Você está com peso normal.");
        } else if(imc >= 25 && imc < 30){
            alert("Você está com sobrepeso.");
        } else {
            alert("Você está com obesidade.");
        }

        let continuar = prompt("Deseja calcular novamente? (s/n)").toLowerCase();
        if(continuar !== "s"){
            alert("Programa encerrado.");
            break;
        }
    }
}
