// fundamentos-questao11.js

/**
 * Programa para retornar os últimos n elementos de uma lista de números.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que retorna os últimos n elementos de um array.
 * @param {number[]} numeros - A lista de números.
 * @param {number} n - O número de elementos a serem retornados.
 * @returns {number[]} - Os últimos n elementos do array.
 */
function ultimosNElementos(numeros, n) {
  return numeros.slice(-n); // Retorna os últimos n elementos
}

// Exemplo de uso
const numeros = [10, 58, 68, 88, 25, 45];
const n = 3;
const resultado = ultimosNElementos(numeros, n);

console.log("Lista Original:", numeros);
console.log(`Os últimos ${n} elementos são:`, resultado);
