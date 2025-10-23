import React from 'react'

export default function Contacto() {
  return (
    <>
      <section className="contact-header">
        <div className="container">
          <h1 className="section-title">Contáctanos</h1>
          <p>¡Felices de atenderte y responder todas tus dudas!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="row">
            {/* Formulario (decorativo) */}
            <div className="col-md-6">
              <h4>Envíanos un mensaje</h4>
              <form id="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Nombre" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Correo electrónico" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control message-input" rows="5" placeholder="Mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>

            {/* Información */}
            <div className="col-md-6">
              <h4>Información de contacto</h4>

              <div className="info-item">
                <div className="info-content">
                  <h5>Redes Sociales</h5>
                  <p>
                    <a href="#" className="social-link">Facebook</a> ·{' '}
                    <a href="#" className="social-link">Instagram</a> ·{' '}
                    <a href="#" className="social-link">Twitter</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-content">
                  <h5>Teléfonos</h5>
                  <p>+56 2 2345 6789 / +56 9 8765 4321</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-content">
                  <h5>Ubicación</h5>
                  <p>Av. Dulce 1234, Santiago Centro (ubicación de ejemplo)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-content">
                  <h5>Correo</h5>
                  <p>info@pasteleriamilsabores.cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* (Opcional) Mapa estático o embed si quieres más adelante */}
          {/* <div className="map-section">
            <div className="map-frame">
              <iframe ... ></iframe>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}
