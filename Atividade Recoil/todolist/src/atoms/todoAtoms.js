import { atom } from 'recoil';

// Armazena a lista completa de tarefas
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Armazena o estado atual do filtro
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Todas',
});