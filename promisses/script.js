/*const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        setTimeout(()=> {
            resolve({nome: 'Alex', idade: 28});
        }, 1000)
    } else {
        reject(Error('Ocorreu um erro'))
    }
});

const retorno = promessa
.then(resolucao => {
    resolucao.profissao = 'Designer';
    return resolucao;
})
.then (resolucao => {
    console.log(resolucao)
}, rejeitada => {
    console.log(rejeitada);
}).finally(() => {
    console.log('Acabou')
})

console.log(retorno);*/

const login = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Usuário logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolucao) => {
    console.log(resolucao);
})
   