console.log(Number.isNaN(NaN));
console.log(Number.isNaN('Teste'));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.66544141));

console.log(parseFloat('322255.58845'));
console.log(parseFloat('322255,58845'));
console.log(parseFloat('    322255.58845'));
console.log(parseFloat('fasfasf322255.58845'));
console.log(parseFloat('200 reais'));
console.log(parseInt('23.78'));


const preco = 52.99;
console.log(preco.toFixed());
console.log(preco.toFixed(4));
console.log(preco.toFixed() + 2); // errado
console.log(+preco.toFixed() + 2); // certo

console.log(preco.toLocaleString('en-US', { style: 'currency', currency: 'USD'}));
console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));




