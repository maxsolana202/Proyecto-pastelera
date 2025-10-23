import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <img
          src="/img/images1.jpeg"
          alt="Pastelería Mil Sabores"
          className="hero-image mb-4"
          style={{ maxHeight: 420, borderRadius: 16, width: '100%', objectFit: 'cover' }}
        />
        <h1 className="hero-title">Pastelería Mil Sabores</h1>
        <p className="hero-subtitle">
          50 años endulzando momentos especiales con el sabor de nuestras recetas únicas 🍰
        </p>
        <Link to="/productos" className="btn hero-btn hero-btn-accent">
          Ver Productos
        </Link>
      </div>
    </section>
  )
}
