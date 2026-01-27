// Valida se os campos não estão vazios
export const validarEntrada = (nome, email) => {
    return nome.trim().length > 0 && email.trim().length > 0;
};

// Conta quantos clientes existem
export const contarTotalClientes = (listaClientes) => {
    return listaClientes.reduce((total) => total + 1, 0);
};

// Verifica se já tem alguém com esse email (simulação)
export const emailExiste = (listaClientes, emailNovo) => {
    return listaClientes.find(cliente => cliente.email === emailNovo);
};