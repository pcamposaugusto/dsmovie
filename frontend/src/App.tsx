import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    // O componente BrowserRouter é usado para iniciar a configuração das rotas no navegador
    <BrowserRouter> 
      <Navbar />
      {/* Antes do componente Routes devem vir os componentes que estarão presentes em todas as páginas da aplicação */}
      <Routes>
        {/* Routes vai configurar rota por rota através de Route */}
        <Route path="/" element={<Listing />} />
        {/* Abaixo não há um "element" identificando um componente a ser renderizado, ou seja, a rota deve estar completa (por exemplo, /form/1) para que a página com o formulário seja renderizada  */}
        <Route path="/form">
          {/* Dentro da página /form é criada uma sub-rota /form/:movieId, usada para acessar a página de cada filme através de seu id */}
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;