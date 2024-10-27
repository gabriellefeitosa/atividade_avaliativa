// fundamentos-questao07.js

/**
 * Programa para modificar cada palavra em uma frase de acordo com seu tamanho.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que modifica cada palavra em uma frase.
 * - Se a palavra tem menos de 5 caracteres, transforma em maiúsculas.
 * - Se a palavra tem 5 ou mais caracteres, transforma em minúsculas.
 * @param {string} frase - A frase a ser modificada.
 * @returns {string} - A nova frase com palavras transformadas.
 */
function modificarFrase(frase) {
  return frase
    .split(" ")
    .map(palavra => 
      palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
    )
    .join(" ");
}

// Exemplo de uso
const fraseOriginal = "Este é um exemplo de Frase para Testar o Programa";
const fraseModificada = modificarFrase(fraseOriginal);

console.log("Frase Original:", fraseOriginal);
console.log("Frase Modificada:", fraseModificada);
