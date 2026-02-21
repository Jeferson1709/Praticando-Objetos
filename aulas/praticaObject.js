/* // OBJETOS

crie um objeto 'pessoa' como jogadora em um plataforma de games e adicione algumas caracteristicas como propriedades. */

const pessoa = {
  nome: "Jeferson",
  nascimento: "2006-10-13",
  cpf: "731817312321",
  pontuacao: 5000,
  trofeus: ["10xVitóriasSeguidas", "fun"],
};

// imprimir no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// exclua uma propriedade do objeto.
delete pessoa.cpf;
console.log(pessoa);

// criar uma função para iterar os troféus.

function exibirTrofeus(listaTrofeus) {
  for (const trofeu of listaTrofeus) {
    console.log(`tem o troféu: ${trofeu}`);
  }
}

exibirTrofeus(pessoa.trofeus);
