import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) setCartItems(JSON.parse(savedCart))
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === product.size)
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.size === product.size
            ? { ...i, quantity: i.quantity + product.quantity }
            : i
        )
      }
      return [...prev, product]
    })
  }

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.size === size)))
  }

  const updateQuantity = (id, size, newQty) => {
    if (newQty < 1) return
    setCartItems(prev =>
      prev.map(i => (i.id === id && i.size === size ? { ...i, quantity: newQty } : i))
    )
  }

  const clearCart = () => setCartItems([])

  const getTotalPrice = () => {
    return cartItems.reduce((total, i) => {
      const price =
        typeof i.price === 'string'
          ? parseInt(i.price.replace('$', '').replace('.', '').replace('+', ''))
          : i.price
      return total + price * i.quantity
    }, 0)
  }

  const getTotalItems = () =>
    cartItems.reduce((total, i) => total + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
