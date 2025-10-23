import React, { useMemo, useState } from 'react'
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

const CATALOGO = [
  { id: 1,  name: 'Selva Negra',             price: 15000, base: 'images1'  },
  { id: 2,  name: 'Tres Leches',             price: 15000, base: 'images2'  },
  { id: 3,  name: 'Torta Milhojas',          price: 15000, base: 'images3'  },
  { id: 4,  name: 'Cheesecake de Frutilla',  price: 15000, base: 'images4'  },
  { id: 5,  name: 'Red Velvet',              price: 15000, base: 'images5'  },
  { id: 6,  name: 'Carrot Cake',             price: 15000, base: 'images6'  },
  { id: 7,  name: 'Chocolate Ganache',       price: 15000, base: 'images7'  },
  { id: 8,  name: 'Mousse de Maracuyá',      price: 15000, base: 'images8'  },
  { id: 9,  name: 'Chirimoya Alegre',        price: 15000, base: 'images9'  },
  { id: 10, name: 'Tiramisú',                price: 15000, base: 'images10' },
  { id: 11, name: 'Merengue lúcuma',         price: 15000, base: 'images11' },
  { id: 12, name: 'Torta Frutal',            price: 15000, base: 'images12' },
  { id: 13, name: 'Cheesecake frutos rojos', price: 15000, base: 'images13' },
  { id: 14, name: 'Torta Creativa',          price: 15000, base: 'images14' }, // .jpg
  { id: 15, name: 'Torta Ópera',             price: 15000, base: 'images15' },
  { id: 16, name: 'Nuez & Caramelo',         price: 15000, base: 'images16' },
  { id: 17, name: 'Manjar Nuez',             price: 15000, base: 'images17' },
  { id: 18, name: 'Selva Negra Blanca',      price: 15000, base: 'images18' }
]

export default function Products() {
  const [sort, setSort] = useState('precio-asc')

  const productos = useMemo(() => {
    const arr = [...CATALOGO]
    if (sort === 'precio-asc') arr.sort((a, b) => a.price - b.price)
    if (sort === 'precio-desc') arr.sort((a, b) => b.price - a.price)
    if (sort === 'nombre-asc') arr.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'nombre-desc') arr.sort((a, b) => b.name.localeCompare(a.name))
    return arr
  }, [sort])

  return (
    <section className="products-section py-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
          <h2 className="section-title mb-3">Nuestros Productos</h2>
          <div className="d-flex align-items-center gap-2">
            <span className="me-2">Ordenar por:</span>
            <select className="form-select" style={{ width: 200 }} value={sort} onChange={e => setSort(e.target.value)}>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="nombre-asc">Nombre A-Z</option>
              <option value="nombre-desc">Nombre Z-A</option>
            </select>
          </div>
        </div>

        <div className="row">
          {productos.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <div className="product-image">
                  <ImgWithFallback base={p.base} alt={p.name} className="product-img" />
                </div>
                <div className="card-body text-center">
                  <h5 className="product-title">{p.name}</h5>
                  <p className="product-price">Desde ${p.price.toLocaleString('es-CL')}</p>
                  <Link to={`/producto/${p.id}`} className="btn btn-primary">
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Nota removida según indicación */}
      </div>
    </section>
  )
}
