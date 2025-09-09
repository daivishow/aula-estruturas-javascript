function procFormulario(){
    //alert("Estou na função");
    let num1, num2

    if(document.frmnotas.txtnum1.value==""){
        alert("Preenchar o número 01");
        document.frmnotas.textnum1.focus();

        return false;
    }else if(document.frmnotas.txtnum2.value==""){
        alert("Preenchar o número 02");
        document.frmnotas.textnum2.focus();

        return false;
    }else{
        num1 = parseFloat(document.getElementById('num1').value);
        num2 = parseFloat(document.getElementById('num2').value);

        if(num1==num2){
            alert("Número 01: "+num1+" igual ao Número 02:"+num2);
        }else if(num1 > num2){
            alert("Número 01: "+num1+" maior que o Número 02:"+num2);
        }else{
            alert("Número 01: "+num1+" menor que o Número 02:"+num2);
        }
    }
    
    
}