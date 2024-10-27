// fundamentos-questao03.js

/**
 * Programa para conversão de temperaturas entre Celsius e Fahrenheit.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Converte de Celsius para Fahrenheit.
 * @param {number} celsius - A temperatura em graus Celsius.
 * @returns {number} - A temperatura convertida para Fahrenheit.
 */
function celsiusParaFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

/**
 * Converte de Fahrenheit para Celsius.
 * @param {number} fahrenheit - A temperatura em graus Fahrenheit.
 * @returns {number} - A temperatura convertida para Celsius.
 */
function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Exemplos de uso
const temperaturaCelsius = 25;
const temperaturaFahrenheit = 77;

console.log(`${temperaturaCelsius}°C é equivalente a ${celsiusParaFahrenheit(temperaturaCelsius).toFixed(2)}°F.`);
console.log(`${temperaturaFahrenheit}°F é equivalente a ${fahrenheitParaCelsius(temperaturaFahrenheit).toFixed(2)}°C.`);
