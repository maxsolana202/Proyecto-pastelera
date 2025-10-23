import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

export default function Navbar() {
  const { getTotalItems } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">Pastelería Mil Sabores</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item">
              <Link className="nav-link cart-link" to="/carrito">
                Carrito <span className="cart-count">({getTotalItems()})</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
