import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaDeGatos from './ListaDeGatos'; 
import Formulario from './Formulario';

const App = () => {
  return (
    <Router>
      <div>
        {/* Menu superior */}
        <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <div style={{ display: 'inline-block', border: '1px solid black', padding: '5px', marginRight: '10px' }}>
            <Link to="/lista-de-gatos">Lista de Gatos</Link>
          </div>
          <div style={{ display: 'inline-block', border: '1px solid black', padding: '5px' }}>
            <Link to="/formulario">Formulário</Link>
          </div>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/lista-de-gatos" element={<ListaDeGatos />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
