import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim() === '') return;
    
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="todo-input-group">
      <input 
        type="text" 
        className="todo-input" 
        value={inputValue} 
        onChange={onChange} 
        placeholder="Digite uma nova tarefa..."
      />
      <button className="btn btn-add" onClick={addItem}>Adicionar</button>
    </div>
  );
}

// Utilitário simples para gerar IDs únicos
let id = 0;
function getId() {
  return id++;
}