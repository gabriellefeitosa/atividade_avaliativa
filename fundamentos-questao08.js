// fundamentos-questao08.js

/**
 * Programa para exibir uma frase ao inverso.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que inverte uma frase.
 * @param {string} frase - A frase a ser invertida.
 * @returns {string} - A frase invertida.
 */
function inverterFrase(frase) {
  return frase.split("").reverse().join("");
}

// Exemplo de uso
const fraseOriginal = "Este é um exemplo de frase para inverter";
const fraseInvertida = inverterFrase(fraseOriginal);

console.log("Frase Original:", fraseOriginal);
console.log("Frase Invertida:", fraseInvertida);
