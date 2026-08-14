
import './App.css'
import FormularioReclamacao from './components/FormularioReclamacao'

function App() {

  const notification = () => {
      console.log("OK");
  }
  return (
    <>
      <FormularioReclamacao aoEnviar={notification}  />
    </>
  )
}

export default App
