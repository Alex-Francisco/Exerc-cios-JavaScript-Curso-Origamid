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


console.log(Math.PI);
console.log(Math.abs(-5)); // retorna 5 positivo
console.log(Math.ceil(3.4)); // arredonda pra cima, no caso 4 (ceil = teto)
console.log(Math.floor(3.4)); // arredonda pra baixo, no caso 3 (floor = chão)
console.log(Math.round(4.7)); // arredondamento automático
console.log(Math.round(4.3)); // arredondamento automático







