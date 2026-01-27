import { ClienteService } from './classes.js';
import { validarEntrada, contarTotalClientes, emailExiste } from './utils.js';

// CONFIGURAÇÃO DA API
const ENDPOINT = "https://crudcrud.com/api/0341dad24b954649a76131b3f7094e2a/clientes"; 
const service = new ClienteService(ENDPOINT);

// SELEÇÃO DE ELEMENTOS (DOM)
const form = document.querySelector('#form-cliente');
const listaEl = document.querySelector('#lista-clientes');
const contadorEl = document.querySelector('#contador-clientes');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');

// ESTADO DA APLICAÇÃO
let clientesAtuais = []; // Pra gente poder usar o find() e reduce() localmente

// FUNÇÕES DE RENDERIZAÇÃO (DOM)
const atualizarTela = async () => {
    // 1. Busca dados dentro da API 
    clientesAtuais = await service.listar();

    // 2. Atualiza contador usando REDUCE
    const total = contarTotalClientes(clientesAtuais);
    contadorEl.textContent = `Total: ${total} clientes`;

    // 3. Limpa e recria a lista usando MAP
    listaEl.innerHTML = '';
    
    // O map transforma o objeto de dados em elemento HTML
    clientesAtuais.map(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${cliente.nome}</strong> (${cliente.email})</span>
            <button class="btn-delete" data-id="${cliente._id}">Excluir</button>
        `;
        listaEl.appendChild(li);
    });
};

// EVENTOS (addEventListener)

// 1. Evento de Submit (Cadastrar)
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = nomeInput.value;
    const email = emailInput.value;

    // Validação
    if (!validarEntrada(nome, email)) {
        alert("Preencha tudo!");
        return;
    }

    // Exemplo de uso do FIND para evitar duplicidade (Opcional)
    if (emailExiste(clientesAtuais, email)) {
        alert("Ops! Esse e-mail já está na lista (só um aviso visual).");
        // Não vou barrar pra não travar seu teste, mas poderia dar return aqui.
    }

    // Chama a classe de serviço
    await service.adicionar({ nome, email });
    
    form.reset();
    atualizarTela(); // Atualiza sem reload
});

// 2. Evento de Click na Lista (Delegação de Eventos para o Delete)
listaEl.addEventListener('click', async (event) => {
    // Verifica se clicou no botão de excluir
    if (event.target.classList.contains('btn-delete')) {
        const id = event.target.dataset.id;
        
        if (confirm("Quer mesmo apagar?")) {
            await service.remover(id);
            atualizarTela();
        }
    }
});

// Inicializa
atualizarTela();