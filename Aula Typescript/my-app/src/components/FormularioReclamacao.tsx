import { useState } from "react";
import type { Reclamacao } from "../tipos/reclamacao";
import styles from './FormularioReclamacao.module.css'

type Props = {
    aoEnviar : (reclamacao: Reclamacao ) => void;
}

const FormularioReclamacao = ({ aoEnviar } : Props) =>  {
    
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();

        if(!nome || !mensagem) return;
        
        aoEnviar({nome, mensagem});
        setNome('');
        setMensagem('');
    }
    return(
        <form className={styles.formulario} onSubmit={enviar}>
            <h2>Registrar Reclamação</h2>
            <input 
            className={styles.input}
            type="text" 
            placeholder="Nome da Empresa"
            value = {nome}
            onChange = {(e) => setNome(e.target.value)}
            />
            <textarea
                className={styles.textarea}
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