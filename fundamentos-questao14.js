// fundamentos-questao14.js

/**
 * Programa para determinar se uma palavra está presente em uma frase.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que verifica se uma palavra está presente em uma frase.
 * @param {string} frase - A frase onde a palavra será buscada.
 * @param {string} palavra - A palavra a ser verificada.
 * @returns {boolean} - Verdadeiro se a palavra estiver presente, falso caso contrário.
 */
function palavraPresente(frase, palavra) {
  return frase.includes(palavra); // Verifica se a palavra está na frase
}

// Exemplo de uso
const frase = "O sol brilha intensamente no céu azul.";
const palavraParaBuscar = "brilha";
const resultado = palavraPresente(frase, palavraParaBuscar);

console.log(`A palavra "${palavraParaBuscar}" está presente na frase? ${resultado}`);
