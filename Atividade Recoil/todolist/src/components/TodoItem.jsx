import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <li className={`todo-item ${item.isComplete ? 'completed' : ''}`}>
      <span 
        style={{ textDecoration: item.isComplete ? 'line-through' : 'none', cursor: 'pointer' }} 
        onClick={toggleItemCompletion}
      >
        {item.text}
      </span>
      <div className="todo-actions">
        <button 
          className={`btn ${item.isComplete ? 'btn-undo' : 'btn-complete'}`} 
          onClick={toggleItemCompletion}
        >
          {item.isComplete ? 'Desmarcar' : 'Concluir'}
        </button>
        <button className="btn btn-delete" onClick={deleteItem}>
          Remover
        </button>
      </div>
    </li>
  );
}

// Funções utilitárias para imutabilidade
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}