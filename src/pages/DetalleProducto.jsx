import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../components/CartContext'

// 👇 Definimos la tabla de incrementos aquí para no depender de Products.jsx
const SIZE_INC = { Pequeño: 0, Mediano: 3000, Grande: 6000 }

function ImgWithFallback({ base, alt, className }) {
  const [src, setSrc] = useState(`/img/${base}.jpeg`)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => { if (src.endsWith('.jpeg')) setSrc(`/img/${base}.jpg`) }}
    />
  )
}

export default function DetalleProducto() {
  const { productId } = useParams()
  const id = Number(productId)
  const { addToCart } = useCart()

  const baseName = `images${id}`
  const basePrice = 15000

  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('Mediano')

  const price = useMemo(() => basePrice + (SIZE_INC[size] ?? 0), [size])

  const handleAddToCart = () => {
    addToCart({
      id,
      name: `Pastel #${id}`,
      price,
      image: `/img/${baseName}.jpeg`,
      quantity,
      size
    })
    alert('Producto agregado al carrito ✅')
  }

  return (
    <div className="container py-5">
      <nav className="breadcrumb-section mb-3">
        <span className="breadcrumb-item"><a href="/productos">Productos</a></span>
        <span className="breadcrumb-item active ms-1">Pastel #{id}</span>
      </nav>

      <div className="row">
        <div className="col-md-6 mb-3">
          <ImgWithFallback base={baseName} alt={`Pastel #${id}`} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2 className="product-title">Pastel #{id}</h2>
          <p className="product-description">
            Bizcocho artesanal con relleno a elección y cobertura suave. Ingredientes frescos y selección de tamaño.
          </p>

          <div className="customization-options mt-3">
            <h6>Tamaño</h6>
            {['Pequeño', 'Mediano', 'Grande'].map((opt) => (
              <button
                key={opt}
                className={`btn btn-outline-primary me-2 size-btn ${size === opt ? 'active' : ''}`}
                onClick={() => setSize(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <h4 className="product-price mt-3">${price.toLocaleString('es-CL')}</h4>

          <div className="quantity-selector my-3">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="mx-2 fw-bold">{quantity}</span>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </button>
          </div>

          <button id="add-to-cart-detail" className="btn btn-primary" onClick={handleAddToCart}>
            Agregar al carrito
          </button>

          <div className="product-details mt-4">
            <h6>Especificaciones</h6>
            <ul>
              <li>Rinde: Pequeño (6 porciones), Mediano (10), Grande (16)</li>
              <li>Conservación: refrigerado hasta 48 horas</li>
              <li>Alérgenos: contiene gluten, huevo y lácteos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
