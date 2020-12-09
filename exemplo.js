const img1 = document.querySelector('img');
img1.addEventListener('click', function() {
    console.log('clicou');
});

function callback() {
    console.log('imagem clicada');
}
img1.addEventListener('click', callback);
//ou
img1.addEventListener('click', () => {
    console.log('clicou com arrow function');
});

function minhaFuncao(event) {
    console.log(event);
}
img1.addEventListener('click', minhaFuncao);

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}
imagensLista.addEventListener('click', callbackLista);