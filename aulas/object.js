/* Objetos são coleçõs NÃO ordenadas de valores organizados em pares de chave-valor. 

const = obj {
    chave : valor ;
    chave : valor ;
    chave : valor ;
}

*/
//Notaçaõ de colchete.
const cliente1 = {
  "nome completo": "Joana A",
  cpf: "1217213223",
  email: "j@j.com",
};

console.log(cliente["nome completo"]);

const descrChave = "nome";

const cliente2 = {
  nome: "Joana A",
  cpf: "1217213223",
  email: "j@j.com",
};

console.log(cliente[descrChave]);

const cliente = {
  nome: "Jeferson",
  cpf: "123456785954",
  email: "jef@.com",
  score: 900,
  recorrente: true,
  endereco: {
    lougradouro: "Rua J",
    num: "329B",
    complemento: "apto 32",
    //restante do endereço.
  },
  tags: ["premium", "clube"],
};

console.log(cliente.nome); //String
console.log(cliente.score); //Número
console.log(cliente.endereco); //Objeto
console.log(cliente.tags); //array
console.log(cliente.endereco.lougradouro); //String
console.log(cliente.tags[0]); //String
cliente.celular = "5511999999999";
console.log(cliente);
cliente.celular = "5511999999998";
console.log(cliente.celular);

const clientes = [
  {
    nome: "Jeferson",
    cpf: "9834742234",
    email: "jef@d.com",
  },
  {
    nome: "Joana A",
    cpf: "92813u2920",
    email: "Joana@m.com",
  },
  {
    nome: "Carlos M",
    cpf: "3743827823",
    email: "Carlos@m.com",
  },
];
