import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form className="col-md-6 mx-auto">
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="ejemplo@email.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="********" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
      <p className="text-center mt-3">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  )
}
