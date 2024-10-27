// condicionais-questao01.js

/**
 * Programa que compara dois números e indica qual é o maior.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que compara dois números e retorna qual é o maior.
 * @param {number} num1 - O primeiro número.
 * @param {number} num2 - O segundo número.
 * @returns {string} - Uma mensagem indicando qual número é maior.
 */
function compararNumeros(num1, num2) {
  if (num1 > num2) {
    return `${num1} é o maior número.`;
  } else if (num2 > num1) {
    return `${num2} é o maior número.`;
  } else {
    return "Os números são iguais.";
  }
}

// Exemplo de uso
const numero1 = 10;
const numero2 = 20;
const resultado = compararNumeros(numero1, numero2);

console.log(resultado);
