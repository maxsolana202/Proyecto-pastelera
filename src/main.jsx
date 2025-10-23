import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import './styles/App.css'

// (si el menú hamburguesa no colapsa):
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
