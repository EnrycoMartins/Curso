const BASE_URL = "https://crudcrud.com/api/0341dad24b954649a76131b3f7094e2a/clientes";

const form = document.getElementById("form-cliente");
const listaClientes = document.getElementById("lista-clientes");

// --- FUNÇÃO 1: Listar Clientes (GET) ---
async function carregarClientes() {
    try {
        const response = await fetch(BASE_URL);
        const dados = await response.json();

        // Limpa a lista antes de renderizar pra não duplicar
        listaClientes.innerHTML = "";

        dados.forEach(cliente => {
            adicionarNaTela(cliente);
        });
    } catch (error) {
        console.error("Deu ruim ao carregar:", error);
    }
}

// Ajuda a criar o HTML de cada cliente
function adicionarNaTela(cliente) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>
            <strong>${cliente.nome}</strong> <br> 
            <small>${cliente.email}</small>
        </span>
        <button class="btn-delete" onclick="deletarCliente('${cliente._id}')">Excluir</button>
    `;
    listaClientes.appendChild(li);
}

// --- FUNÇÃO 2: Cadastrar Cliente (POST) ---
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Pra não recarregar a página

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const novoCliente = {
        nome: nome,
        email: email
    };

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCliente)
        });

        if (response.ok) {
            // Se salvou na API, recarrega a lista pra mostrar o novo
            carregarClientes();
            form.reset(); // Limpa os inputs
        }
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
});

// --- FUNÇÃO 3: Excluir Cliente (DELETE) ---
async function deletarCliente(id) {
    if(!confirm("Tem certeza que quer apagar esse cliente?")) return;

    try {
        // O CrudCrud pede o ID na URL pra deletar
        const urlDeletar = `${BASE_URL}/${id}`;

        const response = await fetch(urlDeletar, {
            method: "DELETE"
        });

        if (response.ok) {
            carregarClientes(); // Atualiza a lista removendo o item
        }
    } catch (error) {
        console.error("Erro ao deletar:", error);
    }
}

// Carrega a lista assim que abre a página
carregarClientes();