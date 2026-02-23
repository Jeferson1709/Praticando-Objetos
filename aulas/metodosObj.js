// Métodos Internos de Objetos
const cliente = {
  nome: "Jeferson A",
  score: 900,
  recorrente: true,
  tags: ["premium", "clube"],
  saudarCliente: function () {
    console.log(`boas vindas, ${this.nome}!`);
  },
  saudarCliente2() {
    console.log(`boas vindas, ${this.nome}!`);
  },
};

cliente.saudarCliente();
//boas vindas, Jeferson.

cliente.informarScore = function informarScore(params) {
  console.log(`seu score é ${this.score}`);
};

cliente.informarScore();
//seu score é 900
