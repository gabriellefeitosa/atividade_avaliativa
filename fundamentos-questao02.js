// fundamentos-questao02.js

/**
 * Programa para calcular a área de um triângulo usando a fórmula de Herão.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função para calcular a área de um triângulo dados os três lados.
 * @param {number} a - Comprimento do primeiro lado do triângulo.
 * @param {number} b - Comprimento do segundo lado do triângulo.
 * @param {number} c - Comprimento do terceiro lado do triângulo.
 * @returns {number} - A área do triângulo.
 */
function calcularAreaTriangulo(a, b, c) {
  // Calcula o semiperímetro
  const s = (a + b + c) / 2;

  // Calcula a área usando a fórmula de Herão
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Retorna o resultado
  return area;
}

// Exemplo de uso
const lado1 = 5;
const lado2 = 6;
const lado3 = 7;
const area = calcularAreaTriangulo(lado1, lado2, lado3);

console.log(`A área do triângulo com lados ${lado1}, ${lado2}, ${lado3} é: ${area.toFixed(2)} unidades quadradas.`);
