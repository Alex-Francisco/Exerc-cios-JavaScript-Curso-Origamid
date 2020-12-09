// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(`A distância da primeira imagem em relação ao top é de ${primeiraImg.offsetTop} pixels`);

// Retorne a soma da largura de todas as imagens

function larguraTotalImgs() {
    const imagens = document.querySelectorAll('img');
    let somaLarguraImgs = 0;
    imagens.forEach((imagem) => {
        somaLarguraImgs += imagem.offsetWidth;
});
    console.log(`A soma da largura de todas as imagens é de ${somaLarguraImgs} pixels`);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
let larguraLink = 0;
let alturaLink = 0;

links.forEach((link) => {
    larguraLink = link.offsetWidth;
    alturaLink = link.offsetHeight;
    if (larguraLink && alturaLink >= 48) {
        console.log(`${link} está de acordo com o google`);
    } else {
        console.log(`${link} não está de acordo com o google`);
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const larguraBrowser = window.matchMedia('(max-width: 720px)');
valorLargura = larguraBrowser.matches;
if (valorLargura) {
    document.querySelector('body').classList.add('menu-mobile');
} else {
    document.querySelector('body').classList.remove('menu-mobile');
}
