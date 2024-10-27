// fundamentos-questao15.js

/**
 * Programa para ordenar todos os elementos numéricos de uma lista.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que ordena uma lista de números.
 * @param {number[]} numeros - A lista de números a serem ordenados.
 * @returns {number[]} - A lista de números ordenada.
 */
function ordenarNumeros(numeros) {
  return numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
}

// Exemplo de uso
const listaNumeros = [45, 10, 88, 25, 68, 58];
const listaOrdenada = ordenarNumeros(listaNumeros);

console.log("Lista Original:", listaNumeros);
console.log("Lista Ordenada:", listaOrdenada);
