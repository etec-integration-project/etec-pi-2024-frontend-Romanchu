import './App.css';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Registro from './components/register/registro';
import Contacto from './components/contacto/Contacto';
import Carrito from './components/carrito/carrito';
import Footer from './components/footer/footer';
import Personalizacion from './components/personalizacion/Personalizacion';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/contexts/CartContext'; 

function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación dentro de CartProvider */}
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
            path='/contacto'
            element={
            <>
              <Header />
              <Contacto />
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
            </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
