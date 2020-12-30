const perimetro = new Function('lado', 'return lado * 4');
console.log(perimetro(4));

function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(4,6));
console.log(somar.length) // retorna o total de argumentos (n1, n2 = 2 argumentos)
console.log(somar.name) // retorna o nome da função (somar)

const carros = ['Ford', 'Fiat', 'VW'];
carros.forEach((item)=> {
    console.log(item);
});

carros.forEach.call(carros, (item)=>{
    console.log(item);
});