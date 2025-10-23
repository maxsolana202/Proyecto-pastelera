import React, { useState } from 'react'
import { useCart } from '../components/CartContext'

export default function Carrito() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()
  const [processing, setProcessing] = useState(false)

  const finalize = () => {
    setProcessing(true)
    alert('Su compra está en proceso') // mensaje solicitado
    // aquí podrías simular redirección o vaciado posterior si quisieras
  }

  if (cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h2>Tu carrito está vacío 🛍️</h2>
        <p>Agrega productos para continuar con tu compra.</p>
      </div>
    )
  }

  return (
    <div className="container py-5">
      {processing && (
        <div className="alert alert-info" role="alert">
          Su compra está en proceso. Te enviaremos una confirmación pronto.
        </div>
      )}

      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="row">
        {cartItems.map((item, idx) => (
          <div key={idx} className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Tamaño: {item.size}</p>
                <p className="card-text fw-bold">
                  Precio unitario: ${item.price.toLocaleString('es-CL')}
                </p>

                <div className="d-flex align-items-center mb-3">
                  <button
                    className="btn btn-outline-secondary me-2"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <p className="fw-bold mb-3">
                  Subtotal: ${(item.price * item.quantity).toLocaleString('es-CL')}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <div className="text-end">
        <h4>Total: ${getTotalPrice().toLocaleString('es-CL')}</h4>
        <button className="btn btn-outline-danger me-3" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn btn-primary" onClick={finalize}>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
