// fundamentos-questao01.js

/**
 * Programa para exibir o dia da semana e a hora atual no formato HH:MM:SS
 * Autor: [Seu Nome]
 * Data: [Data de criação]
 */

/**
 * Função para obter e exibir o dia da semana e a hora atual formatada.
 */
function exibirDataHora() {
  const agora = new Date();

  // Array com os dias da semana em português
  const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  const diaDaSemana = diasDaSemana[agora.getDay()];

  // Formatação da hora no formato HH:MM:SS
  const hora = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  const horaAtual = `${hora}:${minutos}:${segundos}`;

  // Exibição do resultado no console
  console.log(`Hoje é: ${diaDaSemana}.`);
  console.log(`A hora atual é: ${horaAtual}.`);
}

// Invocação da função para exibir data e hora
exibirDataHora();
