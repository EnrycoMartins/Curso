
import { useState } from 'react'
import './App.css'
import FormularioReclamacao from './components/FormularioReclamacao'
import type { Reclamacao } from './tipos/reclamacao'
import ListaReclamacoes from './components/ListaReclamacoes'

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([])

  const adicionarReclamacao = (dados: Reclamacao) => {
    const nova : Reclamacao = {
      ... dados,
      id: 1
    }
    setReclamacoes(prev => [...prev, nova]);
  }
  


  return (
    <>
      <FormularioReclamacao aoEnviar={adicionarReclamacao}  />
      <ListaReclamacoes reclamacoes={reclamacoes}/>
    </>
  )
}

export default App
