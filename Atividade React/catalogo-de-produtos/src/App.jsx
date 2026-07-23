import Catalogo from "./pages/Catalogo";
import { ProdutosProvider } from "./context/ProdutosContext";

export default function App() {
  return (
    <ProdutosProvider>
      <Catalogo />
    </ProdutosProvider>
  );
}