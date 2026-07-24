import { useTodo } from '../context/TodoContext';

export function TodoFilters() {
  const { filter, setFilter, stats } = useTodo();

  return (
    <div className="filters-container">
      <div className="buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Todas ({stats.total})
        </button>
        <button
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pendentes ({stats.pending})
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Concluídas ({stats.completed})
        </button>
      </div>
    </div>
  );
}