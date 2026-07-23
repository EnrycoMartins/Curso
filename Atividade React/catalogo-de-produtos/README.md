# Catálogo de Produtos - React Avançado

Esta é uma aplicação front-end desenvolvida com React e Vite para exibição e cadastro de produtos em um catálogo, aplicando conceitos fundamentais e avançados do ecossistema React.

## Funcionalidades do projeto

- Listagem dinâmica de produtos.
- Simulação de carregamento de dados (Mock API) via `useEffect`.
- Cadastro de novos itens através de formulário controlado.
- Filtro de busca de produtos em tempo real.

## Tecnologias e Conceitos Utilizados

- **ReactJS** e **Vite**.
- **Context API** (`ProdutosContext`) e **Custom Hooks** (`useProdutos`): Para o gerenciamento de estado global da aplicação, evitando o prop drilling.
- **Hooks de Ciclo de Vida e Estado**: `useState` e `useEffect`.
- **Memoização**:
  - `useMemo`: Utilizado para memorizar a lista de produtos filtrada pela busca, poupando processamento de renderizações desnecessárias.
  - `useCallback`: Aplicado na função de cadastro de produto (`adicionarProduto`) dentro do Provider, estabilizando a referência da função em memória.
  - `React.memo`: Aplicado no componente `ProdutoCard`, garantindo que um card só seja re-renderizado se suas propriedades específicas sofrerem alterações.

## Como inicializar e rodar o projeto

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências executando: `npm install`
3. Digite no terminal:`cd catalogo-de-produtos`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Acesse a aplicação através da URL fornecida no terminal (geralmente `http://localhost:5173`).