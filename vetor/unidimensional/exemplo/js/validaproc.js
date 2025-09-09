function validaProc(){
   
        // Declarando a variável controladora i
        let i;
        //Declarando o vetor
        let num=[];
        //Alimentando o vetor com dados
        for(i = 0 ; i<3; i++){

            num[i]=parseInt(prompt("Digite o número"));

        }

        //Retirando os valores de cada posição do vetor...
        for(i = 0; i<3; i++){

            console.log("O valor do vetor num na posição " + i + " é : "+num[i]);
        }

        return false;
    
}
