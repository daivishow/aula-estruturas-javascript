function validaProc() {
    let clientes = [];
    let qtdClientes = 3;
  
    for (let i = 0; i < qtdClientes; i++) {
        let nome = prompt("Digite o nome do cliente " + (i + 1) + ":");
        let compras = [];
        
        for (let mes = 1; mes <= 3; mes++) {
            let valor = parseFloat(prompt("Digite o valor da compra do mês " + mes + " para " + nome + ":"));
            if (isNaN(valor)) {
                valor = 0; 
            }
            compras.push(valor);
        }
  
        let qtdCompras = compras.filter(function(valor) {
            return valor > 0;
        }).length;
  
        let soma = compras.reduce(function(acc, val) {
            return val > 0 ? acc + val : acc;
        }, 0);
  
        let media = qtdCompras > 0 ? soma / qtdCompras : 0;
  
        clientes.push({
            nome: nome,
            compras: compras,
            qtdCompras: qtdCompras,
            media: media.toFixed(2)
        });
    }
  
    let opcao = prompt("Escolha uma opção:\n1 - Ver compras de um cliente\n2 - Ver todas as compras");
  
    if (opcao == "1") {
        let nomeBusca = prompt("Digite o nome do cliente que deseja consultar:");
        let clienteEncontrado = clientes.find(function(c) {
            return c.nome.toLowerCase() === nomeBusca.toLowerCase();
        });
  
        if (clienteEncontrado) {
            document.write("<h3>Compras de " + clienteEncontrado.nome + "</h3>");
            document.write("Mês 1: R$ " + clienteEncontrado.compras[0] + "<br>");
            document.write("Mês 2: R$ " + clienteEncontrado.compras[1] + "<br>");
            document.write("Mês 3: R$ " + clienteEncontrado.compras[2] + "<br>");
            document.write("Média das compras: R$ " + clienteEncontrado.media + "<br>");
            document.write("Quantidade de compras: " + clienteEncontrado.qtdCompras + "<br>");
        } else {
            alert("Cliente não encontrado.");
        }
  
    } else if (opcao == "2") {
        document.write("<h2>Todas as compras:</h2>");
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            document.write("<h3>" + cliente.nome + "</h3>");
            document.write("Mês 1: R$ " + cliente.compras[0] + "<br>");
            document.write("Mês 2: R$ " + cliente.compras[1] + "<br>");
            document.write("Mês 3: R$ " + cliente.compras[2] + "<br>");
            document.write("Média: R$ " + cliente.media + "<br>");
            document.write("Qtd de compras: " + cliente.qtdCompras + "<br><hr>");
        }
    } else {
        alert("Opção inválida.");
    }
  }
  