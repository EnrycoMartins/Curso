import { memo } from "react";

const ProdutoCard = memo(function ProdutoCard({ nome, preco, imagem, descricao }) {
  const imagemPadrao = "https://placehold.co/250x180/e2e8f0/1e293b?text=Sem+Imagem"; // Imagem padrão caso o usuário não informe uma URL
  const imagemValida = imagem && imagem.startsWith("http") ? imagem : imagemPadrao;

  return (
    <div className="card-produto">
      <img src={imagemValida} alt={nome} className="card-img" />
      <div className="card-body">
        <h3>{nome}</h3>
        <p className="card-descricao">{descricao}</p>
        <span className="card-preco">
          {Number(preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
});

export default ProdutoCard;