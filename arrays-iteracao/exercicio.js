// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const selecionaCurso = document.querySelectorAll('.curso');
const arrayCurso = Array.from(selecionaCurso);
const newCurso = arrayCurso.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        Título: titulo,
        Descrição: descricao,
        Aulas: aulas,
        Horas: horas,               
    }
});
console.log(newCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((x => x > 100));
console.log(maiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const buscaBaixo = instrumentos.some((instrumento) => {
    return instrumento === 'Baixo';
});

console.log(buscaBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
]

/*
let total = 0;
const newCompra = compras.map(function(item, index, array){
    precoCorrigido = item.preco.replace('R$ ', '').replace(',', '.');
    total += +precoCorrigido;
});

console.log(`O valor total de compras foi de R$ ${total}`);
*/

const total = compras.reduce((acumulador, item) => {
    const precoCorrigido = +item.preco.replace('R$ ', '').replace(',', '.');
    return acumulador + precoCorrigido;
}, 0)

console.log(`O valor total de compras foi de R$ ${total}`);

