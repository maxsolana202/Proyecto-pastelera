import React, { useState } from 'react';  // ← SOLO AGREGAR "React, "
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});
  const [alert, setAlert] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    if (id === 'correo') validarCorreo(value);
    if (id === 'contrasena') validarPassword(value);
  };

  const setOK = (field) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
    setIsValid(prev => ({ ...prev, [field]: true }));
  };

  const setError = (field, message) => {
    setErrors(prev => ({ ...prev, [field]: message }));
    setIsValid(prev => ({ ...prev, [field]: false }));
  };

  const validarCorreo = (correo = formData.correo) => {
    const correoValue = correo.trim();
    const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rx.test(correoValue)) {
      setError('correo', 'Ingrese un correo válido');
      return false;
    }
    setOK('correo');
    return true;
  };

  const validarPassword = (contrasena = formData.contrasena) => {
    const pass = contrasena;
    if (pass.length < 6) {
      setError('contrasena', 'La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setOK('contrasena');
    return true;
  };

  const buscarUsuarioPorCorreo = (correo) => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const userData = JSON.parse(localStorage.getItem(key));
        if (userData && userData.email === correo) {
          return userData;
        }
      } catch (e) {
        continue;
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert('');

    const correoValido = validarCorreo();
    const passwordValido = validarPassword();

    if (!correoValido || !passwordValido) {
      setAlert('error');
      return;
    }

    const correo = formData.correo.trim();
    const password = formData.contrasena;
    
    const usuarioEncontrado = buscarUsuarioPorCorreo(correo);

    if (usuarioEncontrado && usuarioEncontrado.password === password) {
      setAlert('success');
      localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setAlert('error-credenciales');
      setFormData({
        correo: '',
        contrasena: ''
      });
      setErrors({});
      setIsValid({});
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-text">Pastelería Mil Sabores</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cart-link" href="/carrito">
                  Carrito <span className="cart-count">(0)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="navbar-toggler-icon"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                  <li><a className="dropdown-item" href="/registro"> Registro</a></li>
                  <li><a className="dropdown-item" href="/login"> Iniciar Sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="inicioSesion mt-5 justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mb-3 mt-5">
              <h2>Iniciar Sesión</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  className={`form-control ${errors.correo ? 'is-invalid' : isValid.correo ? 'is-valid' : ''}`}
                  id="correo" 
                  placeholder="ejemplo@correo.com" 
                  value={formData.correo}
                  onChange={handleChange}
                  required 
                />
                <div className="invalid-feedback">{errors.correo}</div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className={`form-control ${errors.contrasena ? 'is-invalid' : isValid.contrasena ? 'is-valid' : ''}`}
                  id="contrasena" 
                  placeholder="Ingresa tu contraseña" 
                  value={formData.contrasena}
                  onChange={handleChange}
                  required 
                />
                <div className="invalid-feedback">{errors.contrasena}</div>
              </div>
              
              <div className="text-center mb-3">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 2rem', fontSize: '1.2rem' }}
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
            
            {alert === 'success' && (
              <div className="alert alert-success">
                ¡Bienvenido! Inicio de sesión exitoso. Redirigiendo...
              </div>
            )}
            
            {alert === 'error' && (
              <div className="alert alert-danger">
                Por favor corrige los errores en el formulario
              </div>
            )}
            
            {alert === 'error-credenciales' && (
              <div className="alert alert-danger">
                Correo o contraseña incorrectos
              </div>
            )}
            
            <div className="text-center mt-3">
              <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;