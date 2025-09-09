function validaProc() {

let notasA = []; 
let notasB = []; 

let medias = [];

for (let i = 0; i<5; i++){

  notasA[i]=parseFloat(prompt("Digite a " + (i+1) + "ª nota do " + (i+1) + "º aluno do bimestre:"));

}

for (let i = 0; i<5; i++){

  notasB[i]=parseFloat(prompt("Digite a " + (i+1) + " nota do " + (i+1) + "º aluno do bimestre:"));

}

for (let i = 0; i < 5; i++) {
  
  let media = (notasA[i] + notasB[i]) / 2;
  
  medias.push(media);
}

console.log("Médias dos alunos:", medias);

return false;

}
