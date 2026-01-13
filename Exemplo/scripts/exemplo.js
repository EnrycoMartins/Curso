//Entrada
const valorJantar = prompt("Valor do jantar R$:");
//Processamento
const valorGarcom = Number(valorJantar) * 0.10;
const valorTotal = Number(valorJantar) + valorGarcom;

//Saída
alert("Valor total: R$" + valorTotal);