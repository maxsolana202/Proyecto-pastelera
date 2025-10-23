import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true // Ajustar según tu lógica de autenticación
  return isAuthenticated ? children : <Navigate to="/login" />
}
