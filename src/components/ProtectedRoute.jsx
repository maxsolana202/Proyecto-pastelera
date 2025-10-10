// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Por ahora, siempre permitimos el acceso
  // En el futuro puedes agregar lógica de autenticación aquí
  const isAuthenticated = true; // Cambiar por lógica real de autenticación

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;