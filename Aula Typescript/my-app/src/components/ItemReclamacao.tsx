import type { Reclamacao } from "../tipos/reclamacao"


type Props ={
    reclamacao : Reclamacao
}

const ItemReclamacao = ({reclamacao} : Props) => {

    return (
        <div>
            <div>
                <strong>{reclamacao.nome}</strong>
            </div>
            <p>{reclamacao.mensagem}</p>
        </div>
    )
}

export default ItemReclamacao;