// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'Alex Francisco',
    sobrenome: 'da Silva Souza',
    idade: 30,
}

console.log(dadosPessoais.nome, dadosPessoais.sobrenome, dadosPessoais.idade);

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = dadosPessoais.nome + ' ' + dadosPessoais.sobrenome;
console.log(dadosPessoais.nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;

  console.log(carro);
  console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
      raça: 'labrador',
      cor: 'preto',
      idade: '10 anos',
      late: 'Ao ver um homem',
  }
  
  console.log(cachorro)
  