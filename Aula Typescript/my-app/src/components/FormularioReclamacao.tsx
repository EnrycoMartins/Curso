import { useState } from "react";

type Props = {
    aoEnviar : () => void;
}

const FormularioReclamacao = ({ aoEnviar } : Props) =>  {
    
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        aoEnviar();
    }
    return(
        <form onSubmit={enviar}>
            <h2>Registrar Reclamação</h2>
            <input type="text" 
            placeholder="Nome da Empresa"
            value = {nome}
            onChange = {(e) => setNome(e.target.value)}
            />
            <textarea
                placeholder="Descreva sua reclamação"
                value = {mensagem}
                onChange = {(e) => setMensagem(e.target.value)}
            >
            </textarea>
            <button type="submit">Enviar</button>
        </form>
    )
} 

export default FormularioReclamacao;