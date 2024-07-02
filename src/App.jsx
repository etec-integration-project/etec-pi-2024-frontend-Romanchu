import './App.css';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Registro from './components/register/registro';
import Login from './components/login/login';
import Carrito from './components/carrito/carrito';
import Footer from './components/footer/footer';
import Personalizacion from './components/personalizacion/Personalizacion';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={
            <>
              <Header />
              <Body />
              <Footer /> {/* Agrega el componente Footer al final de la página */}
            </>
            }
          />
          <Route 
            path='/registro'
            element={
            <>
              <Header />
              <Registro />
            </>
            }
          />
          <Route 
            path='/login'
            element={
            <>
              <Header />
              <Login />
            </>
            }
          />
          <Route 
            path='/carrito'
            element={
            <>
              <Header />
              <Carrito />
            </>
            }
          />
          <Route 
            path='/personalizacion'
            element={
            <>
              <Header />
              <Personalizacion />
              <Footer />
            </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

