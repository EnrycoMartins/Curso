import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/todoSelectors';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="todo-container">
      <h2 className="todo-title">Gerenciador de Tarefas</h2>
      <TodoItemCreator />
      <TodoListFilters />
      
      <ul className="todo-list">
        {todoList.length > 0 ? (
          todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))
        ) : (
          <li style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>
            Nenhuma tarefa encontrada.
          </li>
        )}
      </ul>
    </div>
  );
}