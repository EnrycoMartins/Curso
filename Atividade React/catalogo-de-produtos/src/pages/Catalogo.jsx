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
    imagem: "https://unsplash.com/pt-br/fotografias/monitor-de-computador-de-tela-plana-preta-ligado-ao-lado-do-teclado-preto-do-computador-xxL1FavYOh0",
  },
  {
    id: 2,
    nome: "Mouse logitech sem fio MX Master 3",
    preco: 300.0,
    descricao: "Conexão Bluetooth e receptor USB com sensor de alta precisão.",
    imagem: "https://unsplash.com/pt-br/fotografias/um-mouse-de-computador-sentado-em-cima-de-uma-parede-azul-e-vermelha-tfDEY43gTgw",
  },
  {
    id: 3,
    nome: "Headset razer blackshark 7.1",
    preco: 349.0,
    descricao: "Som surround virtual com microfone com cancelamento de ruído.",
    imagem: "https://unsplash.com/pt-br/fotografias/um-close-up-de-um-fone-de-ouvido-para-jogos-em-um-mouse-pad-tef0zuhF5Uc",
  },
];

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simulação de requisição à API usando useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(DADOS_MOCK);
      setCarregando(false);
    }, 2000); // 2 segundos de atraso simulado

    return () => clearTimeout(timer); // Cleanup
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
        <ProdutoForm onAdicionarProduto={handleAdicionarProduto} />
      </section>

      <hr className="divisor" />

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