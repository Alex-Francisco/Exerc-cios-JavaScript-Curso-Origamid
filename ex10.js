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
    console.log(somaLarguraImgs)
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
