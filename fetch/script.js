/*const doc = fetch('./doc.txt');
console.log(doc)

doc.then(resolucao => {
    return resolucao.text();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
})*/

/*const cep = fetch('https://viacep.com.br/ws/09450000/json/');

cep.then(r => r.json())
.then(body => {
    console.log(body.localidade);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.localidade;
});*/

/*
const estilo = fetch('./style.css');

estilo.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('.conteudo');
    const criarElemento = document.createElement('style');
    criarElemento.innerHTML = body;
    conteudo.appendChild(criarElemento)
});*/
