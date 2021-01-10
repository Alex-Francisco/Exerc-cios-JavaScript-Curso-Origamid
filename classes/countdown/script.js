import Countdown from './countdown.js';

const tempoParaNatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300');

console.log(tempoParaNatal.total);
setInterval(() => {
    console.log(tempoParaAnoNovo.total);
}, 1000);