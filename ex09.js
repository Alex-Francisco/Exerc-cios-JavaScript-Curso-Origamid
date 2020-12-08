// Adicione a classe ativo a todos os itens do menu
const menuA = document.querySelectorAll('.menu a');
menuA.forEach((a) => {
    a.classList.add('ativo');
    console.log(a);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuA.forEach((a) => {
    a.classList.remove('ativo');
    menuA[0].classList.add('ativo');
    console.log(a);
});


// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach((imagem) => {
    console.log(imagem.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http://"');
link.setAttribute('href', 'http://www.developer.com.br')
console.log(link);

