// funcoes-questao04.js

/**
 * Função que verifica se uma palavra está presente em uma frase.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 * @param {string} frase - A frase na qual a palavra será buscada.
 * @param {string} palavra - A palavra a ser verificada.
 * @returns {boolean} - Retorna true se a palavra estiver presente, caso contrário false.
 */
function verificarPalavraNaFrase(frase, palavra) {
  return frase.includes(palavra);
}

// Exemplo de uso
const frase = "Hoje é um dia ensolarado e maravilhoso.";
const palavra = "ensolarado";
const resultado = verificarPalavraNaFrase(frase, palavra);

if (resultado) {
  console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
  console.log(`A palavra "${palavra}" não está presente na frase.`);
}
