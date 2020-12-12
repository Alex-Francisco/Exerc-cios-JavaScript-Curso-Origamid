// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"');
console.log(linksInternos);

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const selecionaElemento = document.querySelectorAll('body *');
console.log(selecionaElemento);

function handleElemento(event) {
    console.log(event.currentTarget);
}

selecionaElemento.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const selecionaElementos = document.querySelectorAll('body *');
console.log(selecionaElementos);

selecionaElementos.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        elemento.remove()
    });
});


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keydown', (pressionado) => {
    if (pressionado.key === 't') {
        const body = document.querySelector('body');
        body.classList.add('txtMaior') 
    }
}); 


