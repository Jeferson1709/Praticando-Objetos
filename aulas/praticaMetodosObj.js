//Adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
  nome: "Carlos Ferreira",
  nascimento: "2001-08-02",
  cpf: "1234593223",
  pontuacao: 5000,
  trofeus: ["speedrunner", "fun"],
};

user.calcularIdade = function calcularIdade() {
  const anoNasc = parseInt(this.nascimento.slice(0, 4));
  const idade = new Date().getFullYear() - anoNasc;
  console.log(`a idade é ${idade}`);
};

user.calcularIdade();

console.log(user);

