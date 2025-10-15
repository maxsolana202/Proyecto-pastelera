import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Aquí puedes agregar tu lógica de autenticación
  // Por ahora, asumimos que el usuario está autenticado
  const isAuthenticated = true; // Cambiar según tu lógica de autenticación

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;