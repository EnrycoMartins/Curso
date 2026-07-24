import { memo } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItemComponent({ todo }) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => removeTodo(todo.id)} aria-label="Remover tarefa">
        Excluir
      </button>
    </li>
  );
}

export const TodoItem = memo(TodoItemComponent);