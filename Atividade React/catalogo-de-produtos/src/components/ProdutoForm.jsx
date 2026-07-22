import { useState } from "react";

export default function ProdutoForm({ onAdicionarProduto }) {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica dos campos obrigatórios
    if (!formData.nome.trim() || !formData.preco || !formData.descricao.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome: formData.nome,
      preco: parseFloat(formData.preco),
      descricao: formData.descricao,
      imagem: formData.imagem,
    };

    onAdicionarProduto(novoProduto);

    // Reseta o formulário
    setFormData({
      nome: "",
      preco: "",
      descricao: "",
      imagem: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-produto">
      <h2>Cadastrar Novo Produto</h2>

      <div className="form-group">
        <label htmlFor="nome">Nome do Produto *</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Ex: Teclado Mecânico"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="preco">Preço (R$) *</label>
        <input
          type="number"
          id="preco"
          name="preco"
          step="0.01"
          value={formData.preco}
          onChange={handleChange}
          placeholder="Ex: 250.00"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imagem">URL da Imagem (Opcional)</label>
        <input
          type="url"
          id="imagem"
          name="imagem"
          value={formData.imagem}
          onChange={handleChange}
          placeholder="https://exemplo.com/imagem.jpg"
        />
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição *</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="3"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Breve descrição do produto..."
          required
        />
      </div>

      <button type="submit" className="btn-submit">
        Adicionar ao Catálogo
      </button>
    </form>
  );
}