import ValidarCpf from './validar.js';

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();