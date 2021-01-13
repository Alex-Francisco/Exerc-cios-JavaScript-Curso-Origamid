/*
function perimetroForma(lado, totalLados) {
    return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));
*/

/*
function perimetroForma(lado, totalLados) {
    totalLados = totalLados || 4;
    return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));
*/

function perimetroForma(lado, totalLados = 4) {
    return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));
console.log(perimetroForma(10, 2));