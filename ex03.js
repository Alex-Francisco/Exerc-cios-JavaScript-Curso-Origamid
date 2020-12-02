// nomeie 3 propriedades ou métodos de strings
var nome = 'Alex';
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.charAt(1));

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.classList.add('novaClass');
btn.innerText = 'mudou';
btn.addEventListener('click', function(){
    btn.innerText = 'Texto inserido depois de clicar no botão';
    btn.classList.remove('novaClass');
});
console.log(btn.id);
//innerHtml
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function copiar() {
    var inputCopiado = document.querySelector('#inputCopiado');
    inputCopiado.select();
    inputCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("O texto copiado foi >> " + inputCopiado.value);
};