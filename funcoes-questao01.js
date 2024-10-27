// funcoes-questao01.js

/**
 * Função que inverte um número.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 * @param {number} num - O número a ser invertido.
 * @returns {number} - O número invertido.
 */
function inverterNumero(num) {
  // Converte o número para string, inverte e converte de volta para número
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Exemplo de uso
const numero = 12356;
const numeroInvertido = inverterNumero(numero);

console.log(`O número original é: ${numero}`);
console.log(`O número invertido é: ${numeroInvertido}`);
