function Carro() {
    this.marca = 'Marca';
    this.preco = 2000;
}

const honda = new Carro();
const fiat = new Carro();

honda.marca = 'Honda';
fiat.marca = 'Fiat';

console.log(honda);
console.log(fiat);