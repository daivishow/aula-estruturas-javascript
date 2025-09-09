function calcularMedias() {
    let turma = 1;
    let totalAlunosAcima7 = 0;
    let somaMediasEscola = 0;
    let totalAlunosEscola = 0;

    do {
        // Considerando apenas 1 aluno por turma
        let media = parseFloat(prompt("Digite a média do único aluno da Turma " + turma + ":"));

        somaMediasEscola += media;
        totalAlunosEscola++;

        if (media >= 7) {
            totalAlunosAcima7++;
        }

        console.log("Turma " + turma + ": média do aluno = " + media);

        turma++;
    } while (turma <= 3);

    let mediaGeralEscola = somaMediasEscola / totalAlunosEscola;

    console.log("Total de alunos com média >= 7: " + totalAlunosAcima7);
    console.log("Média geral da escola: " + mediaGeralEscola.toFixed(2));
}
