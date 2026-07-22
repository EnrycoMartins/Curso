export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  // Imagem padrão caso o usuário não informe uma URL
  const imagemPadrao = "https://via.placeholder.com/250x180?text=Sem+Imagem";

  return (
    <div className="card-produto">
      <img src={imagem || imagemPadrao} alt={nome} className="card-img" />
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
}