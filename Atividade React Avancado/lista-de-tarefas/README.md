# Todo List - React Avançado | Projeto de Curso

Uma aplicação moderna e responsiva de Lista de Tarefas (Todo List) desenvolvida para aplicar e consolidar conceitos avançados do ecossistema React. O foco principal do projeto é a organização da arquitetura, reutilização de lógica, gerenciamento de estado global e otimização de performance.

---

## Objetivo do Projeto

Ir além do básico. Em vez de apenas criar um CRUD simples, este projeto implementa padrões de desenvolvimento profissionais utilizados no mercado, garantindo que o aplicativo seja escalável e performático, mesmo se a lista de tarefas crescer significativamente.

## Funcionalidades e UI/UX

- **Gestão de Tarefas:** Adicionar, concluir e remover tarefas de forma fluida.
- **Filtros Dinâmicos:** Visualização segmentada (Todas, Pendentes, Concluídas).
- **Persistência de Dados:** Salvamento automático no `localStorage` do navegador (os dados não se perdem ao recarregar a página).

---

## Tecnologias e Conceitos Aplicados

O projeto foi construído utilizando **React (via Vite)** e implementa os seguintes recursos do React Avançado:

*   **Context API:** Gerenciamento do estado global da aplicação (tarefas e filtros), evitando o problema de *Prop Drilling* (passar props por múltiplos componentes desnecessariamente).
*   **Custom Hooks:** Criação do hook `useLocalStorage` para abstrair e encapsular a lógica de leitura e gravação no armazenamento local.
*   **Memoization (`useMemo` e `useCallback`):** 
    *   Otimização de funções de manipulação de estado (`addTodo`, `toggleTodo`, `removeTodo`) para que não sejam recriadas a cada renderização.
    *   Cálculo otimizado dos contadores de estatísticas (Total, Pendentes, Concluídas) e da listagem filtrada.
*   **`React.memo`:** Otimização da árvore de componentes, garantindo que o componente `<TodoItem />` só seja re-renderizado caso o seu estado individual mude.

---


## Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto na sua máquina:

*    **Clone este repositório:**
    Bash

    git clone [https://github.com/EnrycoMartins/Curso.git](https://github.com/EnrycoMartins/Curso.git)

    Abra o terminal integrado na pasta Atividade React Avancado

*   **Acesse o diretório do projeto:**
    Bash

    cd lista-de-tarefas

*   **Instale as dependências:**
    Bash

    npm install

*   **Inicie o servidor de desenvolvimento:**
    Bash

    npm run dev

    O terminal exibirá um link local (geralmente http://localhost:5173). Abra-o no seu navegador.