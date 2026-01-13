function calcularIMC() {
    //Entrada de Dados
    const valorAltura = document.getElementById("altura").value;
    const valorPeso = document.getElementById("peso").value;

    //Processamento
    let IMC = valorPeso / (valorAltura * valorAltura);
    let IMCArredondado = IMC.toFixed(2);
    //Saida
    let mensagem = "";
    if (IMC < 18) {
        mensagem = "Abaixo do peso: ";
    } else if (IMC >= 18 && IMC < 25) {
        mensagem = "Peso normal: ";
    } else if (IMC >= 25 && IMC < 30) {
        mensagem = "Sobrepeso: ";
    } else {
        mensagem = "Obesidade: ";
    }
    document.getElementById("resultado").textContent = mensagem + IMCArredondado;
}