/*
fetch('./dados.json')
.then(r => r.json())
.then(json => {
    console.log(json);
})
*/

fetch('./dados.json')
.then(r => r.json())
.then(json => {
   json.forEach(materia => {
       console.log(materia.aula);
   })
})

/*
const config = {
    player: 'Google',
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

const stringConfig = JSON.stringify(config);
console.log(stringConfig)
*/

const configuracao = {
    player: 'Google',
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

localStorage.config = JSON.stringify(configuracao);
console.log(JSON.parse(localStorage.config));