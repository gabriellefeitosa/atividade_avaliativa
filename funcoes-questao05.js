// funcoes-questao05.js

/**
 * Função que encontra a maior palavra em uma frase.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 * @param {string} frase - A frase a ser analisada.
 * @returns {string} - A maior palavra encontrada na frase.
 */
function encontrarMaiorPalavra(frase) {
  // Divide a frase em palavras
  const palavras = frase.split(/\s+/); // Usando regex para separar por espaços

  // Inicializa a maior palavra como uma string vazia
  let maiorPalavra = '';

  // Itera sobre as palavras
  palavras.forEach(palavra => {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra; // Atualiza a maior palavra
    }
  });

  return maiorPalavra;
}

// Exemplo de uso
const frase = "Hoje é um dia ensolarado e maravilhoso.";
const maiorPalavra = encontrarMaiorPalavra(frase);

console.log(`A maior palavra na frase é: "${maiorPalavra}"`);
