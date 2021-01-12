//funciona sem o new e com o new usando return new
/*
function Pessoa(nome) {
    if(!(this instanceof Pessoa)) // se fizer assim funciona
        return new Pessoa(nome)
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}

const designer = Pessoa('André');
console.log(designer);
*/


function Pessoa(nome) {
    if(!(this instanceof Pessoa)) 
        return new Pessoa(nome)
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}

const designer = new Pessoa('André');
console.log(designer);
