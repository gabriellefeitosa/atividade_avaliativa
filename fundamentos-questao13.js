// fundamentos-questao13.js

/**
 * Programa para elevar cada número de uma lista ao cubo e somar os resultados.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que eleva cada número de uma lista ao cubo e soma os resultados.
 * @param {number[]} numeros - A lista de números a serem processados.
 * @returns {number} - A soma dos valores obtidos.
 */
function somaCubos(numeros) {
  return numeros
    .map(num => Math.pow(num, 3)) // Eleva cada número ao cubo
    .reduce((soma, cubo) => soma + cubo, 0); // Soma os resultados
}

// Exemplo de uso
const listaNumeros = [1, 2, 3, 4, 5];
const resultado = somaCubos(listaNumeros);

console.log("Lista Original:", listaNumeros);
console.log("Soma dos Cubos:", resultado);
