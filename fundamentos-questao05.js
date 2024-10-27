// fundamentos-questao05.js

/**
 * Programa para verificar se três números inteiros estão entre 50 e 99.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função para verificar se três números estão no intervalo de 50 a 99.
 * @param {number} num1 - O primeiro número.
 * @param {number} num2 - O segundo número.
 * @param {number} num3 - O terceiro número.
 */
function verificaIntervalo(num1, num2, num3) {
  const dentroIntervalo = (num) => num >= 50 && num <= 99;

  if (dentroIntervalo(num1) && dentroIntervalo(num2) && dentroIntervalo(num3)) {
    console.log("Sucesso: Todos os números estão entre 50 e 99.");
  } else {
    console.log("Erro: Um ou mais números não estão dentro do intervalo de 50 a 99.");
  }
}

// Exemplos de uso
verificaIntervalo(60, 70, 80);  // Sucesso
verificaIntervalo(50, 100, 75); // Erro
verificaIntervalo(45, 60, 99);  // Erro
verificaIntervalo(55, 85, 95);  // Sucesso
