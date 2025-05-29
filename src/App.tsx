import './styles.css';
import Resume from './pages/Resume';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DataContextProvider } from './Context/Datacontext';
import Vendas from './pages/Vendas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Venda from './pages/Venda';

function App() {
  return (
    <BrowserRouter>
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
          <Routes> 
          <Route path='/' element={ <Resume />} />
          <Route path='/vendas' element={ <Vendas />} />
          <Route path='/vendas/:id' element={ <Venda />} />
          </Routes>
        </main>
      </div>
    </DataContextProvider>
   </BrowserRouter>
  );
}

export default App;
