function procFormulario (){

    //Validação de campos
    if(document.frmnotas.txtnum1.value=="")
         {

                alert("Preencha o campo Número 1");
                document.frmnotas.txtnum1.focus();
                return false;


         }
    else if(document.frmnotas.txtnum2.value=="")
         {

            alert("Preencha o campo Número 2");
            document.frmnotas.txtnum2.focus();
            return false;
         }

    else
         {

            //Processamento do programa...
            let numero1 = parseFloat(document.getElementById('num1').value);
            let numero2 = parseFloat(document.getElementById('num2').value);
            if(numero1>numero2){
                    alert("\nNúmero 1 é maior que Número 2!")
            }if(numero1<numero2){
                    alert("\nNúmero 2 é maior que Número 1!")
            }else if(numero1==numero2){
                    alert("\nNúmero 1 é igual Número 2!")
            }
  
            
            //let é uma diretiva para declarar uma variável, parsefloat é uma função de conversão
         }

}