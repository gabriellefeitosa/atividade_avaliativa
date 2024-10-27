// funcoes-questao02.js

/**
 * Função que conta a quantidade de vogais e consoantes em uma frase.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 * @param {string} frase - A frase a ser analisada.
 * @returns {Object} - Um objeto com a quantidade de vogais e consoantes.
 */
function contarVogaisEConsoantes(frase) {
  const vogais = 'aeiouAEIOU';
  let contagemVogais = 0;
  let contagemConsoantes = 0;

  for (let char of frase) {
    if (/[a-zA-Z]/.test(char)) { // Verifica se o caractere é uma letra
      if (vogais.includes(char)) {
        contagemVogais++;
      } else {
        contagemConsoantes++;
      }
    }
  }

  return {
    vogais: contagemVogais,
    consoantes: contagemConsoantes
  };
}

// Exemplo de uso
const frase = "Olá, como você está hoje?";
const resultado = contarVogaisEConsoantes(frase);

console.log(`Vogais: ${resultado.vogais}`);
console.log(`Consoantes: ${resultado.consoantes}`);
