import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Carrito() {
  const [cart, setCart] = useState([]);
  const [products] = useState({
    'torta-chocolate': {
      id: 'torta-chocolate',
      title: 'Torta de Chocolate',
      price: 15000,
      description: 'Deliciosa torta de chocolate con relleno de crema y cubierta de ganache.',
      image: '/img/images10.jpeg'
    },
    'torta-frutal': {
      id: 'torta-frutal',
      title: 'Torta Frutal',
      price: 18000,
      description: 'Torta esponjosa con crema y decorada con variedad de frutas frescas de la estación.',
      image: '/img/images11.jpeg'
    },
    'red-velvet': {
      id: 'red-velvet',
      title: 'Torta Red Velvet',
      price: 20000,
      description: 'Clásica torta roja con sabor a vainilla y chocolate, cubierta con frosting de queso crema.',
      image: '/img/images6.jpeg'
    },
    'torta-sin-azucar': {
      id: 'torta-sin-azucar',
      title: 'Torta Sin Azúcar',
      price: 16500,
      description: 'Exquisita torta endulzada naturalmente, ideal para personas con restricciones de azúcar.',
      image: '/img/images4.jpeg'
    }
  });

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (index, change) => {
    const newCart = [...cart];
    if (newCart[index]) {
      newCart[index].quantity += change;
      
      if (newCart[index].quantity < 1) {
        newCart[index].quantity = 1;
      }
      
      setCart(newCart);
    }
  };

  const setQuantity = (index, quantity) => {
    const newCart = [...cart];
    if (newCart[index]) {
      newCart[index].quantity = quantity;
      setCart(newCart);
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const product = products[item.id];
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const calculateShipping = () => {
    return cart.length > 0 ? 3000 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! En un futuro esto te llevará a completar tu pedido.');
  };

  const subtotal = calculateSubtotal();
  const shipping = calculateShipping();
  const total = calculateTotal();

  return (
    <div>
      {/* Breadcrumb */}
      <section className="breadcrumb-section py-3 mt-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
              <li className="breadcrumb-item active">Carrito de Compras</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className="cart-content py-5">
        <div className="container">
          <h1 className="mb-4">Tu Carrito de Compras</h1>
          
          <div className="row">
            <div className="col-lg-8">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon"></div>
                  <h3>Tu carrito está vacío</h3>
                  <p>Agrega algunos productos deliciosos para comenzar</p>
                  <Link to="/productos" className="btn btn-primary mt-3">
                    Ver Productos
                  </Link>
                </div>
              ) : (
                <div id="cart-items-container">
                  {cart.map((item, index) => {
                    const product = products[item.id];
                    if (!product) return null;
                    
                    const itemTotal = product.price * item.quantity;
                    
                    return (
                      <div key={index} className="cart-item" data-product-id={item.id}>
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="cart-item-image img-fluid" 
                            />
                          </div>
                          <div className="col-9 col-md-5">
                            <h5 className="mb-1">{product.title}</h5>
                            <p className="text-muted mb-0">
                              {product.description.substring(0, 60)}...
                            </p>
                            <p className="mb-0 product-price">
                              ${product.price.toLocaleString('es-CL')}
                            </p>
                          </div>
                          <div className="col-6 col-md-3">
                            <div className="quantity-selector d-flex align-items-center">
                              <button 
                                className="btn btn-outline-secondary quantity-btn" 
                                onClick={() => updateQuantity(index, -1)}
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                className="quantity-input form-control text-center mx-2" 
                                value={item.quantity} 
                                min="1" 
                                style={{width: '60px'}}
                                onChange={(e) => setQuantity(index, parseInt(e.target.value) || 1)}
                              />
                              <button 
                                className="btn btn-outline-secondary quantity-btn" 
                                onClick={() => updateQuantity(index, 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-4 col-md-2 text-end">
                            <p className="mb-1 fw-bold item-total">
                              ${itemTotal.toLocaleString('es-CL')}
                            </p>
                            <button 
                              className="btn btn-sm btn-outline-danger" 
                              onClick={() => removeFromCart(index)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="col-lg-4">
              <div className="summary-card">
                <h3 className="mb-4">Resumen de Compra</h3>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span id="subtotal">${subtotal.toLocaleString('es-CL')}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span id="shipping">${shipping.toLocaleString('es-CL')}</span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total:</strong>
                  <strong id="total">${total.toLocaleString('es-CL')}</strong>
                </div>
                
                <button 
                  id="checkout-btn" 
                  className="btn btn-primary w-100" 
                  disabled={cart.length === 0}
                  onClick={handleCheckout}
                >
                  Proceder al Pago
                </button>
                
                <div className="mt-3 text-center">
                  <Link to="/productos" className="text-decoration-none">
                    ← Continuar comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4>Pastelería Mil Sabores</h4>
              <p>
                50 años endulzando momentos especiales con las mejores recetas 
                tradicionales y modernas de la repostería chilena.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Contacto</h4>
              <p>
                Av. Dulce 1234, Santiago Centro<br />
                Región Metropolitana, Chile
              </p>
              <p>
                Teléfono: +56 2 2345 6789<br />
                Email: info@pasteleriamilsabores.cl
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright">
                &copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Carrito;