import Tarefa from "./components/tarefa"
import { useState, useEffect } from "react";

const API_URL = "https://crudcrud.com/api/3c6c6f597a9e4d72a8973dd9de3ff8ee/tarefas";

function App() {
  
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  
  // Buscar os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(dados => setTarefas(dados))
      .catch(error => console.error("Erro ao buscar tarefas:", error));
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();

    if(novaTarefa.trim() === "") return; // não adiciona tarefa vazia

    //Envio da Tarefa pra nossa API
    
    const nova = {texto: novaTarefa.trim()}
     fetch(API_URL, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
      .then(res => res.json())
      .then(tarefaCriada => {
        setTarefas([...tarefas, tarefaCriada])
        setNovaTarefa(""); // limpa o input
      })
      .catch(error => console.error("Erro ao buscar tarefas:", error));
  }
  return (
    <main>        
      <h1>To-Do List App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={handleSubmit}>Adicionar</button>
      </form>            
        <ul>
          {tarefas.map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto}/>)}                      
        </ul>         
    </main>
  )
}

export default App
