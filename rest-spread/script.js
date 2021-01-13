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

function soma(a = 0, b = 0) {
    console.log(arguments);
    return a + b;
}

console.log(soma(10, 40));


function mult(a = 0, b = 0) {
    const argArray = Array.from(arguments);
    console.log(argArray);
    return a * b;
}

console.log(mult(10, 40));

function sub(a = 0, b = 0) {
    const argArray = Array.from(arguments);
    argArray.forEach(arg => {
        console.log(arg);
    })
    console.log(argArray);
    return a * b;
}

console.log(sub(10, 40));


function teste(...listaArgumentos) {
    console.log(listaArgumentos);
    listaArgumentos.forEach(item => console.log(item));
}

teste(10, 20, 30, 'Oi', 'Teste')

function dividir(a, b, ...listaArgumentos) {
    console.log(listaArgumentos);
    return a / b
}

console.log(dividir(100, 20, 30, 'Oi', 'Teste'));