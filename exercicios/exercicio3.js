/* Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
Acesse o índice 2 da lista que está dentro do objeto.
Exiba no console a frase: "Ingrediente complementar: [ingrediente]". */

const receita = {
  nome: "Bolo de Ceunoura",
  ingredientes: [
    "1/2 xícara(chá) de óleo",
    "3 ceunouras médias raladas",
    "4 ovos",
    "2 xícaras(chá) de açucar",
    "2 e 1/2 xícaras (chá)de farinha de trigo",
    "colher (sopa) de fermento em pó",
  ],
  tempoPreparo: 40,
};

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);
