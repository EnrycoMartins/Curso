// 1. Gerar um número aleatório entre 1 e 100
// Math.random() gera 0.algo, multiplicamos por 100 e pegamos o inteiro.
// Somamos 1 para garantir que vá de 1 até 100 (e não de 0 a 99).
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativasRestantes = 10;
let jogoAcabou = false;

function verificarChute() {
    
    if (jogoAcabou) {
        return;
    }

    let inputChute = document.getElementById("chute").value;
    let chute = parseInt(inputChute);
    
    let mensagemElemento = document.getElementById("mensagem");
    let tentativasElemento = document.getElementById("tentativas");
 
    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagemElemento.innerText = "Por favor, digite um número válido entre 1 e 100.";
        mensagemElemento.style.color = "orange";
        return; 
    }

    if (chute === numeroSecreto) {
        
        mensagemElemento.innerText = "Parabéns! Você acertou o número!";
        mensagemElemento.style.color = "green";
        jogoAcabou = true;
        document.getElementById("botaoChutar").disabled = true;

    } else {
        
        tentativasRestantes = tentativasRestantes - 1;
        tentativasElemento.innerText = tentativasRestantes;

        if (tentativasRestantes === 0) {
            mensagemElemento.innerText = "Você perdeu! O número secreto era " + numeroSecreto;
            mensagemElemento.style.color = "red";
            jogoAcabou = true;
            document.getElementById("botaoChutar").disabled = true;
        } else {
            
            if (chute > numeroSecreto) {
                mensagemElemento.innerText = "O número secreto é MENOR que " + chute;
            } else {
                mensagemElemento.innerText = "O número secreto é MAIOR que " + chute;
            }
            mensagemElemento.style.color = "blue";
        }
    }

    document.getElementById("chute").value = "";
    document.getElementById("chute").focus();
}