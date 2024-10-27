// fundamentos-questao06.js

/**
 * Programa para encontrar o número com a maior quantidade de ocorrências em um array.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função para encontrar o número com a maior frequência em um array.
 * @param {number[]} array - Um array de números.
 * @returns {number} - O número com a maior ocorrência.
 */
function numeroMaisFrequente(array) {
  const contagem = {};

  // Conta as ocorrências de cada número
  for (const num of array) {
    contagem[num] = (contagem[num] || 0) + 1;
  }

  // Encontra o número com a maior ocorrência
  let numeroFrequente = null;
  let maxOcorrencias = 0;

  for (const num in contagem) {
    if (contagem[num] > maxOcorrencias) {
      maxOcorrencias = contagem[num];
      numeroFrequente = Number(num);
    }
  }

  return numeroFrequente;
}

// Exemplo de uso
const arrayDeNumeros = [1, 2, 2, 3, 3, 3, 4, 5, 3, 2, 1];
const resultado = numeroMaisFrequente(arrayDeNumeros);

console.log(`O número com mais ocorrências é: ${resultado}`);
