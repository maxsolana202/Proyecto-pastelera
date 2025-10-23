import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Crear Cuenta</h2>
      <form className="col-md-6 mx-auto">
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" placeholder="Juan Pérez" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="ejemplo@email.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="********" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
      <p className="text-center mt-3">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  )
}
