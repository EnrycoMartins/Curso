import { useState } from "react";
import './tarefa.css';

function Tarefa({texto}){

    const [concluida, setConcluida] = useState(false); // tarefa vai nascer desmarcada.

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }

    return(
        <li><input type="checkbox" onChange={alternarConcluida}/> <span className={concluida ? "concluida" : ""}>{texto}</span> <button>Remover</button></li>
    )
}
export default Tarefa;