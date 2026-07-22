import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";
import ProdutoForm from "../components/ProdutoForm";

// Dados mockados para simular a API
const DADOS_MOCK = [
  {
    id: 1,
    nome: "Monitor UltraWide 29\"",
    preco: 1299.9,
    descricao: "Painel IPS Full HD com taxa de atualização de 75Hz.",
    imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
  },
  {
    id: 2,
    nome: "Mouse logitech sem fio MX Master 3",
    preco: 300.0,
    descricao: "Conexão Bluetooth e receptor USB com sensor de alta precisão.",
    imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
  },
  {
    id: 3,
    nome: "Headset razer blackshark 7.1",
    preco: 349.0,
    descricao: "Som surround virtual com microfone com cancelamento de ruído.",
    imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
  },
];

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(DADOS_MOCK);
      setCarregando(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAdicionarProduto = (novoProduto) => {
    setProdutos((prevProdutos) => [novoProduto, ...prevProdutos]);
  };

  return (
    <div className="catalogo-container">
      <header className="header">
        <h1>Catálogo de Produtos</h1>
      </header>

      <section className="secao-cadastro">
        {/* Passando a função correta como prop */}
        <ProdutoForm onAdicionarProduto={handleAdicionarProduto} />
      </section>

      <hr className="divisor" />

      {/* AQUI ESTAVA O PROBLEMA: Esta seção inteira estava faltando no seu return! */}
      <section className="secao-produtos">
        <h2>Produtos Disponíveis</h2>

        {carregando ? (
          <div className="status-carregando">
            <div className="spinner"></div>
            <p>Carregando produtos...</p>
          </div>
        ) : produtos.length === 0 ? (
          <p className="lista-vazia">Nenhum produto cadastrado no momento.</p>
        ) : (
          <div className="grid-produtos">
            {produtos.map((prod) => (
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