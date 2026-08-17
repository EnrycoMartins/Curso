
import { useEffect, useState } from 'react'
import './App.css'
import FormularioReclamacao from './components/FormularioReclamacao'
import type { Reclamacao } from './tipos/reclamacao'
import ListaReclamacoes from './components/ListaReclamacoes'
import axios from 'axios'

const API_URL = "https://crudcrud.com/api/4bf6a7c4c6aa4ed2b93e50db013c84c6/reclamacoes";

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([])

  const adicionarReclamacao = (dados: Reclamacao) => {

    axios
    .post<Reclamacao>(API_URL, dados)
    .then(resposta => setReclamacoes(prev => [...prev, resposta.data]))
  }
  
  useEffect(() => {
    //fetch
    axios
    .get<Reclamacao[]>(API_URL)
    .then(resposta => setReclamacoes(resposta.data));
  }, [])


  return (
    <>
      <FormularioReclamacao aoEnviar={adicionarReclamacao}  />
      <ListaReclamacoes reclamacoes={reclamacoes}/>
    </>
  )
}

export default App
