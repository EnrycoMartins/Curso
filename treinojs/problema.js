/* 
 Elaborar um programa para um Cinema, onde o usuário possa digitar o título do filme e a duração do filme em minutos.
 Exiba o titulo do filme e converta a duração para horas e minutos.

 1. obter o nome do filme
 2. obter a duração em minutos
 3. converter a duração de minutos em horas
  3.1 Fazer a divisão da duração em minutos por 60 para pegar a quantidade em horas
  3.2 Arredondar a quantidade de horas para pegar só as horas cheias
  3.3 Pegar o resultado da duração em minutos e remover as horas cheias (horas * 60)
   Exemplo: 70 minutos (1 hora e 10 minutos)
   60 minutos = 1 hora
   10 minutos
   70 / 60 = 1,16 (arredondar para baixo = 1)
   horas = 1
   const minutos = 70 - 1 * 60 = 10
 4. Exibir o nome do filme
 5. Exibir a duração em horas e minutos
*/
function algoritmo() {
    const titulo = document.getElementById("titulo").value;
    const duracao = document.getElementById("duracao").value;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaoSaida").textContent = horas + "hora(s)" + minutos + "minuto(s)";
}