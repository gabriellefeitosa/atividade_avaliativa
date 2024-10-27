// fundamentos-questao10.js

/**
 * Programa para converter nome e sobrenome para o formato "Iniciais Sobrenome Nome".
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que converte o nome e sobrenome para o formato desejado.
 * @param {string} nomeCompleto - O nome completo da pessoa.
 * @returns {string} - O nome no formato "Iniciais Sobrenome Nome".
 */
function converterNome(nomeCompleto) {
  // Divide o nome completo em partes
  const partes = nomeCompleto.split(" ");
  
  // Obtém as iniciais (Tirando o último elemento que é o sobrenome)
  const iniciais = partes.slice(0, -1).map(nome => nome.charAt(0).toUpperCase() + ".").join(" ");
  
  // O sobrenome é o último elemento
  const sobrenome = partes[partes.length - 1];
  
  // Retorna no formato desejado
  return `${iniciais} ${sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1)}`;
}

// Exemplo de uso
const nome = "Alan Mathison Turing";
const nomeFormatado = converterNome(nome);

console.log("Nome Original:", nome);
console.log("Nome Formatado:", nomeFormatado);
