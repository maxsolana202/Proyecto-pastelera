import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ImgWithFallback({ base, alt, className }) {
  const [src, setSrc] = useState(`/img/${base}.jpeg`)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => { if (src.endsWith('.jpeg')) setSrc(`/img/${base}.jpg`) }}
    />
  )
}

const POSTS = [
  {
    id: 1,
    title: 'Selva Negra',
    origin: 'Origen: Alemania – Selva Negra (Schwarzwald)',
    excerpt:
      'Bizcocho de chocolate, guindas y crema batida. Un clásico europeo adaptado a nuestro paladar.',
    base: 'images1',
    link: '/producto/1'
  },
  {
    id: 2,
    title: 'Tres Leches',
    origin: 'Origen: Centroamérica',
    excerpt:
      'Esponjoso bizcocho bañado en mezcla de tres leches con cobertura suave de merengue o crema.',
    base: 'images2',
    link: '/producto/2'
  },
  {
    id: 3,
    title: 'Torta Milhojas',
    origin: 'Origen: Europa – popularizada en Chile',
    excerpt:
      'Capas finas de masa hojaldrada con manjar y crema pastelera. Crocante y deliciosa.',
    base: 'images3',
    link: '/producto/3'
  },
  {
    id: 4,
    title: 'Cheesecake de Frutilla',
    origin: 'Origen: Estados Unidos',
    excerpt:
      'Base de galletas, relleno cremoso de queso y cobertura de frutillas frescas.',
    base: 'images4',
    link: '/producto/4'
  },
  {
    id: 5,
    title: 'Red Velvet',
    origin: 'Origen: Estados Unidos',
    excerpt:
      'Bizcocho rojo aterciopelado con suave frosting de queso crema.',
    base: 'images5',
    link: '/producto/5'
  },
  {
    id: 6,
    title: 'Carrot Cake',
    origin: 'Origen: Europa',
    excerpt:
      'Pastel húmedo de zanahoria con especias y cobertura de queso crema.',
    base: 'images6',
    link: '/producto/6'
  },
  {
    id: 7,
    title: 'Chocolate Ganache',
    origin: 'Origen: Francia',
    excerpt:
      'Intenso chocolate con ganache brillante y acabado elegante.',
    base: 'images7',
    link: '/producto/7'
  },
  {
    id: 8,
    title: 'Mousse de Maracuyá',
    origin: 'Origen: Sudamérica',
    excerpt:
      'Mousse liviano y ácido, perfecto para los amantes del maracuyá.',
    base: 'images8',
    link: '/producto/8'
  },
  {
    id: 9,
    title: 'Chirimoya Alegre',
    origin: 'Origen: Chile',
    excerpt:
      'Clásico chileno con chirimoya y jugo de naranja, fresco y equilibrado.',
    base: 'images9',
    link: '/producto/9'
  },
  {
    id: 10,
    title: 'Tiramisú',
    origin: 'Origen: Italia',
    excerpt:
      'Capas de bizcochos embebidos en café y crema mascarpone espolvoreada con cacao.',
    base: 'images10',
    link: '/producto/10'
  },
  {
    id: 11,
    title: 'Merengue lúcuma',
    origin: 'Origen: Perú–Chile (lúcuma) + técnica de merengue europea',
    excerpt:
      'Dulce manjar de lúcuma con discos de merengue crocante.',
    base: 'images11',
    link: '/producto/11'
  },
  {
    id: 12,
    title: 'Torta Frutal',
    origin: 'Origen: Internacional',
    excerpt:
      'Bizcocho suave con crema y frutas frescas de estación.',
    base: 'images12',
    link: '/producto/12'
  },
  {
    id: 13,
    title: 'Cheesecake de Frutos Rojos',
    origin: 'Origen: Estados Unidos',
    excerpt:
      'Clásico cheesecake con coulis de frutos rojos.',
    base: 'images13',
    link: '/producto/13'
  },
  {
    id: 14,
    title: 'Torta Creativa',
    origin: 'Origen: Arte pastelero',
    excerpt:
      'Diseño divertido y personalizado. Ideal para celebraciones.',
    base: 'images14', // esta es .jpg
    link: '/producto/14'
  },
  {
    id: 15,
    title: 'Torta Ópera',
    origin: 'Origen: Francia',
    excerpt:
      'Capas de bizcochuelo de almendras, café y ganache de chocolate.',
    base: 'images15',
    link: '/producto/15'
  },
  {
    id: 16,
    title: 'Torta Nuez & Caramelo',
    origin: 'Origen: Internacional',
    excerpt:
      'Bizcocho húmedo con nueces y caramelo salado.',
    base: 'images16',
    link: '/producto/16'
  },
  {
    id: 17,
    title: 'Torta Manjar Nuez',
    origin: 'Origen: Chile',
    excerpt:
      'Favorita local: manjar casero y nueces tostadas.',
    base: 'images17',
    link: '/producto/17'
  },
  {
    id: 18,
    title: 'Selva Negra Blanca',
    origin: 'Origen: Variación europea',
    excerpt:
      'Versión clara con chocolate blanco y frutas.',
    base: 'images18',
    link: '/producto/18'
  }
]

export default function Blog() {
  return (
    <div className="container py-5 blog-page">
      <div className="tituloBlog text-center">
        <h1>Tipos de torta</h1>
        <h2>Historias y orígenes</h2>
      </div>

      <div className="row mt-4">
        {POSTS.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card pastel h-100">
              <ImgWithFallback base={post.base} alt={post.title} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="text-muted small mb-1">{post.origin}</p>
                <p className="card-text">{post.excerpt}</p>
                <div className="mt-auto">
                  <Link to={post.link} className="btn btn-primary">Ver producto</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
