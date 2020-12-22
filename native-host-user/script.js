// Liste 5 objetos nativos

// -> Number, -> Boolean, -> String, -> Array e -> Function

// Liste 5 objetos do browser

// -> Window, -> History, -> Document, -> Nodelist, -> HTMLColletion

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
    console.log('Existe'); 
} else {
    console.log('Não Existe');
}

if (typeof document.webkitCancelFullScreen !== 'undefined') {
    console.log('Existe'); 
} else {
    console.log('Não Existe');
}