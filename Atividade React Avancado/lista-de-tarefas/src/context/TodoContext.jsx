import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('@todo-app:todos', []);
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'completed'

  // useCallback evita que as funções sejam recriadas a cada render
  const addTodo = useCallback((text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, [setTodos]);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, [setTodos]);

  // useMemo para filtrar a lista apenas quando 'todos' ou 'filter' alterarem
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'pending':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // Contadores calculados com useMemo
  const stats = useMemo(() => {
    const completedCount = todos.filter((t) => t.completed).length;
    return {
      total: todos.length,
      completed: completedCount,
      pending: todos.length - completedCount,
    };
  }, [todos]);

  const value = useMemo(
    () => ({
      todos: filteredTodos,
      stats,
      filter,
      setFilter,
      addTodo,
      toggleTodo,
      removeTodo,
    }),
    [filteredTodos, stats, filter, addTodo, toggleTodo, removeTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo deve ser usado dentro de um TodoProvider');
  }
  return context;
}