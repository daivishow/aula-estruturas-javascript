function validaProc() {
    let matriz = [];
    let andares = 6;
    let aptosPorAndar = 4;
    let rendaTotal = 0;

    for (let l = 0; l < andares; l++) {
        matriz[l] = [];
        for (let c = 0; c < aptosPorAndar; c++) {
            let valor = parseFloat(prompt("Digite a renda do apartamento " + (c + 1) + " no andar " + (l + 1)));
            
            if (isNaN(valor) || valor < 0) {
                alert("Valor inválido! Digite um número positivo.");
                c--; 
                continue;
            }

            matriz[l][c] = valor;
            rendaTotal += valor;
        }
    }

    document.write("<h3>Matriz de Rendas (6x4):</h3>");
    for (let l = 0; l < andares; l++) {
        for (let c = 0; c < aptosPorAndar; c++) {
            document.write("R$ " + matriz[l][c].toFixed(2) + "&nbsp;&nbsp;");
        }
        document.write("<br>");
    }

    let totalAptos = andares * aptosPorAndar;
    let media = rendaTotal / totalAptos;

    document.write("<h3>Renda Total do Prédio: R$ " + rendaTotal.toFixed(2) + "</h3>");
    document.write("<h3>Renda Média por Apartamento: R$ " + media.toFixed(2) + "</h3>");

    return false;
}