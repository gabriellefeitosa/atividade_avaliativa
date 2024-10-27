// funcoes-questao03.js

/**
 * Função que encontra o maior e o menor valor em uma lista de números.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 * @param {Array<number>} numeros - A lista de números.
 * @returns {Object} - Um objeto com o maior e o menor valor.
 */
function encontrarMaiorEMenor(numeros) {
  if (numeros.length !== 10) {
    throw new Error("A lista deve conter exatamente 10 números.");
  }

  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);

  return {
    maior: maior,
    menor: menor
  };
}

// Exemplo de uso
const listaDeNumeros = [12, 45, 78, 23, 56, 89, 3, 67, 90, 15];
const resultado = encontrarMaiorEMenor(listaDeNumeros);

console.log(`Maior valor: ${resultado.maior}`);
console.log(`Menor valor: ${resultado.menor}`);
