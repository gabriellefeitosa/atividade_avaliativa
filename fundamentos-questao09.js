// fundamentos-questao09.js

/**
 * Programa para calcular a soma dos tamanhos de todas as palavras em uma frase.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que calcula a soma dos tamanhos das palavras em uma frase.
 * @param {string} frase - A frase cujas palavras serão analisadas.
 * @returns {number} - A soma dos tamanhos das palavras.
 */
function somaTamanhosPalavras(frase) {
  return frase
    .split(" ") // Divide a frase em palavras
    .reduce((soma, palavra) => soma + palavra.length, 0); // Soma os tamanhos das palavras
}

// Exemplo de uso
const frase = "Este é um exemplo de frase para calcular tamanhos";
const totalTamanhos = somaTamanhosPalavras(frase);

console.log(`A soma dos tamanhos das palavras na frase é: ${totalTamanhos}`);
