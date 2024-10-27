// condicionais-questao03.js

/**
 * Programa que itera entre 0 e 99 e calcula a soma de números pares e ímpares.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que calcula a soma de números pares e ímpares de 0 a 99.
 */
function somarParesImpares() {
  let somaPares = 0;
  let somaImpares = 0;

  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      somaPares += i; // Adiciona à soma de pares
    } else {
      somaImpares += i; // Adiciona à soma de ímpares
    }
  }

  console.log("Soma dos números pares:", somaPares);
  console.log("Soma dos números ímpares:", somaImpares);
}

// Chama a função
somarParesImpares();
