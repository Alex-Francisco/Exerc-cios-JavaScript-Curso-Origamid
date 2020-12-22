// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const alex = new Pessoas('Alex', 'Francisco', 31);
console.log(alex.nomeCompleto());



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
console.log(li.constructor.name);

li.click; // Function
console.log(li.click.constructor.name);

li.innerText; // String
console.log(li.innerText.constructor.name);

li.value; // Number
console.log(li.value.constructor.name);

li.hidden; // Boolean
console.log(li.hidden.constructor.name);

li.offsetLeft; // Number
console.log(li.offsetLeft.constructor.name);

li.click();
console.log(li.click().constructor.name);


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
