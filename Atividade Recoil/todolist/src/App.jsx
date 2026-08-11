import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;