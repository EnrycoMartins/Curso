import { createContext, useState, useEffect, useContext, useCallback } from "react";

const ProdutosContext = createContext();

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

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(DADOS_MOCK);
      setCarregando(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const adicionarProduto = useCallback((novoProduto) => {
    setProdutos((prevProdutos) => [novoProduto, ...prevProdutos]);
  }, []);

  return (
    <ProdutosContext.Provider value={{ produtos, carregando, adicionarProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de um ProdutosProvider");
  }
  return context;
}