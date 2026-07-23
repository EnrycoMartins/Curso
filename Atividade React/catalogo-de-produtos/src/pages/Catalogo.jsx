import { useState, useMemo } from "react";
import ProdutoCard from "../components/ProdutoCard";
import ProdutoForm from "../components/ProdutoForm";
import { useProdutos } from "../context/ProdutosContext";

export default function Catalogo() {
  const { produtos, carregando } = useProdutos();
  const [busca, setBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    if (!busca) return produtos;
    return produtos.filter((prod) =>
      prod.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [produtos, busca]);

  return (
    <div className="catalogo-container">
      <header className="header">
        <h1>Catálogo de Produtos</h1>
      </header>

      <section className="secao-cadastro">
        <ProdutoForm />
      </section>

      <hr className="divisor" />

      <section className="secao-produtos">
        <h2>Produtos Disponíveis</h2>

        <input
          type="text"
          placeholder="Buscar produto por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
        />

        {carregando ? (
          <div className="status-carregando">
            <div className="spinner"></div>
            <p>Carregando produtos...</p>
          </div>
        ) : produtosFiltrados.length === 0 ? (
          <p className="lista-vazia">Nenhum produto encontrado!</p>
        ) : (
          <div className="grid-produtos">
            {produtosFiltrados.map((prod) => (
              <ProdutoCard
                key={prod.id}
                nome={prod.nome}
                preco={prod.preco}
                descricao={prod.descricao}
                imagem={prod.imagem}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}