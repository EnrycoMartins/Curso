import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <main className="app-container">
        <h1>Lista de Tarefas</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </main>
    </TodoProvider>
  );
}