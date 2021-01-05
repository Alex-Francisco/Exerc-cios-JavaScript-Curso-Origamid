// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const resultado = document.querySelector('.resultado');
const txtCep = document.querySelector('#cep');
const btn = document.querySelector('#ok');

btn.addEventListener('click', passaValor);

function passaValor(event) {
    event.preventDefault();
    const cep = txtCep.value;
    buscaCep(cep);
}
    
function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultado.innerText = body;
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcP = document.querySelector('.btc');

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        console.log(btcJson.BRL.buy);
        btcP.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    })
}

setInterval(fetchBtc, 1000 * 30);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada')

function fetchPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piadaText => {
        paragrafoPiada.innerText = piadaText.value;
    })
}

btnProxima.addEventListener('click', fetchPiada);
fetchPiada();
