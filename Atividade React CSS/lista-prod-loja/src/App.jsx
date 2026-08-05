import React from 'react';
import CardProduto from './components/CardProduto.jsx';

export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '40px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      flexWrap: 'wrap', 
      justifyContent: 'center',
      alignItems: 'flex-start' /* Essa linha resolve o problema do tamanho! */
    }}>
      
      <CardProduto 
        nome="Monitor Ultrawide 29" 
        preco="1.200,00"
        imagem="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" 
      />
      
      <CardProduto 
        nome="Teclado Mecânico RGB" 
        preco="350,00"
        imagem="https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" 
      />

      <CardProduto 
        nome="Mouse Gamer Sem Fio" 
        preco="250,00"
        imagem="https://images.unsplash.com/photo-1527814050087-179f00484bc2?w=500&q=80" 
      />

      <CardProduto 
        nome="Headset Surround 7.1" 
        preco="420,00"
        imagem="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80" 
      />

      <CardProduto 
        nome="Cadeira Ergonômica" 
        preco="950,00"
        imagem="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80" 
      />

    </div>
  );
}