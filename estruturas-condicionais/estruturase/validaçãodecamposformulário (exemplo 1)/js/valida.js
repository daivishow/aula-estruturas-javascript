function validaFormulario()
{
    /*alert("Testando o Javascript");*/
    if(document.frmcadastro.txtnome.value=="")
    {

        alert("Preencha o campo Nome");
        document.frmcadastro.txtnome.focus();
        return false;

    }else if(document.frmcadastro.txtfone.value==""){

        alert("Preencha o campo Telefone");
        document.frmcadastro.txtfone.focus();
        return false;

    }else if(document.frmcadastro.txtemail.value==""){

        alert("Preencha o campo Email");
        document.frmcadastro.txtemail.focus();
        return false;

    }else{
            alert("Todos preenchidos - Saindo.......");
            return true
         }
         
}