function valida() {
    
    if(numeroBase = document.getElementById('num1').value==""){
        alert("Preencha o campo com um número inteiro");
        document.frmnumint.focus();
        return false;
    }else{
        let num1=parseInt(document.getElementById('num1').value)
        for (let i = 1; i <= 10; i++) {
            let result = num1 * i;   
            console.log(num1+"x" + i + "="+result);
        }
        return false;

    }

}