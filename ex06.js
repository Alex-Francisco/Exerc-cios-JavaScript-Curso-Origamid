/* Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas); R: Pelo fato de ter usado a palavra-chave var no console.log, ao trocar o mesmo para cor, o erro continua, já que const e let não vaza do escopo de bloco criando com { }*/

  
  /* Como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);*/

  // Resposta
  const dois = 2;

  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  //Fim resposta
  

  /* O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);*/

  // Resposta
  var numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  //Fim resposta