// Método Object
//Ao usar Object.keys() e Object.values() lembre que objetos não são coleções ordenadas.
const cliente = {
  nome: "Jeferson A",
  cpf: "12345678987",
  email: "j@j.com",
  score: 865,
  recorrente: true,
  tags: ["premium", "clube"],
};

console.log(Object.keys(cliente));
// Saída: ['nome', 'cpf', 'email', 'score', 'recorrente', 'tags']

console.log(Object.values(cliente));
// Saída: ['Jeferson A', '12345678987', 'j@j.com', 865, true, ['premium', 'clube']]

console.log(Object.entries(cliente));
// Saída: [['nome', 'Jeferson A'], ['cpf', '12345678987'], ['email', 'j@j.com'], ['score', 865], ['recorrente', true], ['tags', ['premium', 'clube']]]

for (const info in cliente) {
  const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
  console.log(texto);
}