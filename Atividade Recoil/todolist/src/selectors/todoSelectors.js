import { selector } from 'recoil';
import { todoListState, todoListFilterState } from '../atoms/todoAtoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Concluídas':
        return list.filter((item) => item.isComplete);
      case 'Pendentes':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});