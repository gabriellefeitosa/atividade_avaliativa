// fundamentos-questao04.js

/**
 * Programa para verificar se um dos números é 30 ou se a soma dos dois é 30.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função para verificar a condição dos números.
 * @param {number} num1 - O primeiro número.
 * @param {number} num2 - O segundo número.
 * @returns {boolean} - Retorna true se um dos números for 30 ou se a soma dos dois for 30.
 */
function verificaNumeroOuSoma30(num1, num2) {
  return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
}

// Exemplos de uso
console.log(verificaNumeroOuSoma30(30, 10)); // true (primeiro número é 30)
console.log(verificaNumeroOuSoma30(15, 15)); // true (soma é 30)
console.log(verificaNumeroOuSoma30(20, 10)); // false (nenhuma condição atendida)
console.log(verificaNumeroOuSoma30(5, 30));  // true (segundo número é 30)
