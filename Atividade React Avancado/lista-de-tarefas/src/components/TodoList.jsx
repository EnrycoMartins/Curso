import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

// A exportação nomeada (export function) garante que o App.jsx encontre o componente
export function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}