import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import DetalleProducto from './pages/DetalleProducto'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import './styles/App.css'

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/producto/:productId" element={<DetalleProducto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/carrito"
                element={
                  <ProtectedRoute>
                    <Carrito />
                  </ProtectedRoute>
                }
              />

              <Route
                path="*"
                element={
                  <div className="container text-center py-5 mt-5">
                    <h2>404 - Página no encontrada</h2>
                    <p>La página que buscas no existe.</p>
                    <a href="/" className="btn btn-primary">
                      Volver al Inicio
                    </a>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}
