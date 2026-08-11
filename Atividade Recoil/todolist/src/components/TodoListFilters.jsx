import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoAtoms';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div className="todo-filters">
      <label>Filtrar tarefas:</label>
      <select className="todo-select" value={filter} onChange={updateFilter}>
        <option value="Todas">Todas as tarefas</option>
        <option value="Concluídas">Apenas as concluídas</option>
        <option value="Pendentes">Apenas as pendentes</option>
      </select>
    </div>
  );
}