export class ClienteService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    // Busca todos os clientes
    async listar() {
        try {
            const response = await fetch(this.url);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar:", error);
            return [];
        }
    }

    // Adiciona um novo
    async adicionar(cliente) {
        try {
            const response = await fetch(this.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cliente)
            });
            return await response.json();
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    }

    // Remove pelo ID
    async remover(id) {
        try {
            await fetch(`${this.url}/${id}`, { method: "DELETE" });
            return true;
        } catch (error) {
            console.error("Erro ao deletar:", error);
            return false;
        }
    }
}