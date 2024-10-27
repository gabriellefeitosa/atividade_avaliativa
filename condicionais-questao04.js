// condicionais-questao04.js

/**
 * Programa que calcula as médias de 5 alunos e determina se estão aprovados ou reprovados.
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função que calcula a média de cada aluno e determina seu status.
 * @param {Array} alunos - A lista de alunos e suas notas.
 */
function calcularMedias(alunos) {
  alunos.forEach(aluno => {
    const nome = aluno[0];
    const notas = aluno[1];
    
    // Calcula a média
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / notas.length;

    // Determina se o aluno está aprovado ou reprovado
    const status = media < 70 ? "Reprovado" : "Aprovado";

    // Exibe o resultado
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
  });
}

// Lista de alunos e suas notas
const alunos = [
  ["Aluno1", [10, 50, 100]],
  ["Aluno2", [55, 78, 90]],
  ["Aluno3", [70, 80, 90]],
  ["Aluno4", [30, 40, 60]],
  ["Aluno5", [85, 90, 95]],
];

// Chama a função
calcularMedias(alunos);
