// Selecionando os campos que vamos usar
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const bairroInput = document.getElementById('bairro');
const localidadeInput = document.getElementById('localidade');
const ufInput = document.getElementById('uf');
const inputs = document.querySelectorAll('input'); // Pega todos os inputs para o loop de salvar

// --- PARTE 1: WEB STORAGE (Carregar dados ao iniciar) ---

// Essa função roda assim que a página carrega
window.addEventListener('DOMContentLoaded', () => {
    inputs.forEach(input => {
        // Tenta pegar o valor salvo no localStorage usando o ID do campo como chave
        const valorSalvo = localStorage.getItem(input.id);
        if (valorSalvo) {
            input.value = valorSalvo;
        }
    });
});

// --- PARTE 2: WEB STORAGE (Salvar dados ao digitar) ---

// Adiciona um ouvinte em cada campo. Sempre que o usuário digitar algo ('input'), salvamos.
inputs.forEach(input => {
    input.addEventListener('input', (evento) => {
        // Salva no localStorage: chave = id do campo, valor = o que foi digitado
        localStorage.setItem(evento.target.id, evento.target.value);
    });
});

// --- PARTE 3: FETCH API (Buscar CEP) ---

cepInput.addEventListener('blur', () => {
    // Remove traços e espaços para deixar só números
    let cep = cepInput.value.replace(/\D/g, '');

    if (cep !== "") {
        // Expressão regular para validar formato do CEP
        let validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            // Preenche com "..." enquanto carrega
            logradouroInput.value = "...";
            bairroInput.value = "...";
            localidadeInput.value = "...";
            ufInput.value = "...";

            // Faz a requisição para a API
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json()) // Transforma a resposta em JSON
                .then(data => {
                    if (!("erro" in data)) {
                        
                        logradouroInput.value = data.logradouro;
                        bairroInput.value = data.bairro;
                        localidadeInput.value = data.localidade;
                        ufInput.value = data.uf;

                        salvarCamposAutomaticos();
                    } else {
                        alert("CEP não encontrado.");
                        limparFormularioCep();
                    }
                })
                .catch(error => {
                    console.error("Erro na requisição:", error);
                    alert("Erro ao buscar CEP. Verifique sua conexão.");
                });
        } else {
            alert("Formato de CEP inválido.");
        }
    }
});

// Função auxiliar para limpar campos de endereço se der erro
function limparFormularioCep() {
    logradouroInput.value = ("");
    bairroInput.value = ("");
    localidadeInput.value = ("");
    ufInput.value = ("");
}

// Função para salvar manualmente os campos preenchidos pelo Fetch no LocalStorage
function salvarCamposAutomaticos() {
    localStorage.setItem('logradouro', logradouroInput.value);
    localStorage.setItem('bairro', bairroInput.value);
    localStorage.setItem('localidade', localidadeInput.value);
    localStorage.setItem('uf', ufInput.value);
}

// Bônus: Função para limpar o localStorage (para testar do zero)
function limparDados() {
    localStorage.clear();
    inputs.forEach(input => input.value = '');
    alert("Dados limpos!");
}