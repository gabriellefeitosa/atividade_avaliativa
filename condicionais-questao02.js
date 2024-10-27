// condicionais-questao02.js

/**
 * Programa que itera entre 0 e 50 e determina se os números são pares ou ímpares.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que verifica se os números de 0 a 50 são pares ou ímpares.
 */
function verificarParidade() {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(`${i} é par.`);
    } else {
      console.log(`${i} é ímpar.`);
    }
  }
}

// Chama a função
verificarParidade();
