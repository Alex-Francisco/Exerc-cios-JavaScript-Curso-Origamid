function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

console.log(honda);
console.log(fiat);

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 58000)
console.log(mazda)