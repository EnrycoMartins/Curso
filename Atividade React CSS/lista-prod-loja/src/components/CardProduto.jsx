import React, { useState } from 'react';
import styled from 'styled-components';

// ==========================================
// 1. Definição dos Estilos (CSS-in-JS)
// ==========================================

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #ffffff;
  /* overflow: hidden garante que a imagem respeite as bordas arredondadas do card */
  overflow: hidden; 
  display: flex;
  flex-direction: column;
`;

const ProdutoImagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover; /* Garante que a imagem não fique esticada ou achatada */
`;

const CardConteudo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProdutoNome = styled.h2`
  font-size: 1.15rem;
  color: #333333;
  margin: 0 0 12px 0;
`;

const ProdutoPreco = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 20px 0;
`;

const BotaoAdicionar = styled.button`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: auto; /* Empurra o botão sempre pro final do card */
  
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};

  &:hover {
    opacity: 0.9;
  }
`;

// ==========================================
// 2. Componente Funcional React
// ==========================================

export default function CardProduto({ nome, preco, imagem }) {
  const [adicionado, setAdicionado] = useState(false);

  const alternarCarrinho = () => {
    setAdicionado(!adicionado);
  };

  return (
    <CardContainer>
      {/* Nova tag de imagem recebendo a prop */}
      <ProdutoImagem src={imagem} alt={nome} />
      
      <CardConteudo>
        <ProdutoNome>{nome}</ProdutoNome>
        <ProdutoPreco>R$ {preco}</ProdutoPreco>
        
        <BotaoAdicionar adicionado={adicionado} onClick={alternarCarrinho}>
          {adicionado ? 'No Carrinho' : 'Adicionar ao carrinho'}
        </BotaoAdicionar>
      </CardConteudo>
    </CardContainer>
  );
}