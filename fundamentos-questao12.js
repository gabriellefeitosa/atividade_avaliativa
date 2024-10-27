// fundamentos-questao12.js

/**
 * Programa para unir todos os elementos de uma lista em uma string única.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que une todos os elementos de um array em uma string única.
 * @param {Array} lista - A lista de elementos a serem unidos.
 * @returns {string} - A string resultante, com os elementos separados por #.
 */
function unirElementos(lista) {
  return lista.join("#"); // Une os elementos com #
}

// Exemplo de uso
const lista = ["maçã", "banana", "laranja", "kiwi"];
const resultado = unirElementos(lista);

console.log("Lista Original:", lista);
console.log("String Unida:", resultado);
