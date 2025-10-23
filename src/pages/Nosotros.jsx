import React from 'react'

export default function Nosotros() {
  return (
    <section className="about-preview-section py-5">
      <div className="container">
        <h2 className="section-title text-center">Nuestra Historia</h2>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="/img/imagesHistoria.jpeg"
              alt="Historia Pastelería Mil Sabores"
              className="img-fluid rounded"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              onError={(e) => { e.currentTarget.src = '/img/images14.jpg' }}
            />
          </div>
          <div className="col-md-6">
            <p>
              <strong>Pastelería Mil Sabores</strong> nació como un pequeño taller familiar en
              Santiago hace más de cinco décadas. Desde nuestros primeros queques y alfajores
              hasta las tortas más elaboradas de hoy, mantenemos la receta de siempre:
              ingredientes frescos, técnica artesanal y mucho cariño.
            </p>
            <p>
              Nuestro equipo de maestros pasteleros ha formado a nuevas generaciones, cuidando
              cada detalle en sabor y presentación. Creemos que un buen pastel acompaña momentos
              únicos: cumpleaños, aniversarios, graduaciones y reuniones familiares.
            </p>
            <p>
              Te invitamos a visitarnos y a crear tu propio “mil sabores” con nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
