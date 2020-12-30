// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const selecionaParagrafo = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(selecionaParagrafo, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);
console.log(`O total de caracteres é igual a ${totalCaracteres}`)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    elemento.innerHTML = conteudo;
    return elemento;
}

console.log(criarElemento('li', 'ativo', 'testando 123'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarH1 = criarElemento.bind(null, 'h1', 'titulo');
console.log(criarH1('Aprendendo e praticando javascript'));
console.log(criarH1('#praticar'));


/*function criarH1(conteudo) {
    const elemento = document.createElement('h1');
    elemento.classList.add('titulo');
    elemento.innerHTML = conteudo;
    return elemento;
}
console.log(criarH1('elemento 1 criado com sucesso!'));
console.log(criarH1('elemento 2 criado com sucesso!'));*/
