class Parquimetro {
    constructor() {
        // Tabela de preços ordenada do maior para o menor
        this.tabelaPrecos = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ];
    }

    processarPagamento(valorInserido) {
        // --- CORREÇÃO IMPORTANTE ---
        // 1. Transforma em texto (String)
        // 2. Troca vírgula por ponto (para o padrão americano do JS aceitar)
        // 3. Converte para número decimal (Float)
        let valorTratado = String(valorInserido).replace(',', '.');
        const valor = parseFloat(valorTratado);

        // Debug no console (F12) para ver o que está chegando
        console.log(`Valor original: ${valorInserido} | Valor entendido: ${valor}`);

        // REGRA 1: Valor insuficiente (Menor que R$ 1,00 ou não é número)
        if (isNaN(valor) || valor < 1.00) {
            // Lança um erro que será pego pelo 'catch' lá embaixo
            throw new Error("Valor insuficiente. Insira no mínimo R$ 1,00.");
        }

        // REGRA 2: Calcular tempo e troco
        let planoEscolhido = null;

        // Procura o melhor plano que o dinheiro paga
        for (let item of this.tabelaPrecos) {
            if (valor >= item.valor) {
                planoEscolhido = item;
                break; // Achou o maior plano possível, para o loop
            }
        }

        // Calcula o troco
        const troco = valor - planoEscolhido.valor;

        return {
            tempo: planoEscolhido.tempo,
            troco: troco
        };
    }
}

// --- INTERAÇÃO COM A TELA ---

const btnConfirmar = document.getElementById('btn-confirmar');
const inputValor = document.getElementById('valor');
const divResultado = document.getElementById('resultado');

// Instancia a classe
const parquimetro = new Parquimetro();

btnConfirmar.addEventListener('click', () => {
    const valorDigitado = inputValor.value;
    
    // 1. Sempre mostra a caixa de resultado
    divResultado.classList.remove('hidden');

    try {
        // Tenta processar
        const resultado = parquimetro.processarPagamento(valorDigitado);

        // SE DEU CERTO:
        // Remove estilo de erro (vermelho)
        divResultado.classList.remove('erro');
        
        // Formata o dinheiro para R$ (ex: 2,50)
        const trocoFormatado = resultado.troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        divResultado.innerHTML = `
            <h3 style="color: #4cd137; margin: 0;">✅ Pagamento Aceito</h3>
            <p><strong>Tempo:</strong> ${resultado.tempo} minutos</p>
            <p><strong>Troco:</strong> ${trocoFormatado}</p>
        `;

    } catch (erro) {
        // SE DEU ERRO (Valor < 1.00):
        // Adiciona estilo de erro (vermelho)
        divResultado.classList.add('erro');
        
        divResultado.innerHTML = `
            <h3 style="color: #e84118; margin: 0;">⛔ Atenção</h3>
            <p>${erro.message}</p>
        `;
    }
});