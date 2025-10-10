import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [sizeFilter, setSizeFilter] = useState('all');

  const products = [
    {
      id: 'torta-chocolate',
      title: 'Torta de Chocolate',
      price: 15000,
      description: 'Deliciosa torta de chocolate con relleno de crema y cubierta de ganache.',
      image: '/img/images2.jpeg',
      categories: ['tortas-cuadradas', 'tradicional']
    },
    {
      id: 'torta-frutal',
      title: 'Torta Frutal',
      price: 18000,
      description: 'Torta esponjosa con crema y decorada con variedad de frutas frescas de la estación.',
      image: '/img/images12.jpeg',
      categories: ['tortas-circulares', 'tradicional']
    },
    {
      id: 'red-velvet',
      title: 'Torta Red Velvet',
      price: 20000,
      description: 'Clásica torta roja con sabor a vainilla y chocolate, cubierta con frosting de queso crema.',
      image: '/img/images5.jpeg',
      categories: ['tortas-circulares', 'especiales']
    },
    {
      id: 'torta-sin-azucar',
      title: 'Torta Sin Azúcar',
      price: 16500,
      description: 'Exquisita torta endulzada naturalmente, ideal para personas con restricciones de azúcar.',
      image: '/img/images8.jpeg',
      categories: ['tortas-cuadradas', 'sin-azucar']
    },
    {
      id: 'torta-sin-gluten',
      title: 'Torta Sin Gluten',
      price: 19000,
      description: 'Deliciosa opción para celíacos, elaborada con harinas alternativas y mismo sabor exquisito.',
      image: '/img/images4.jpeg',
      categories: ['tortas-circulares', 'sin-gluten']
    },
    {
      id: 'torta-vegana',
      title: 'Torta Vegana',
      price: 17500,
      description: 'Elaborada sin productos de origen animal, pero con todo el sabor de una torta tradicional.',
      image: '/img/images7.jpeg',
      categories: ['vegana', 'tortas-circulares']
    },
    {
      id: 'cheesecake',
      title: 'Cheesecake Individual',
      price: 5000,
      description: 'Porción individual de cheesecake con base de galleta y topping de frutos rojos.',
      image: '/img/images13.jpeg',
      categories: ['postres-individuales']
    },
    {
      id: 'brownie',
      title: 'Brownie de Chocolate',
      price: 4500,
      description: 'Brownie intenso de chocolate con nueces, disponible en porción individual o familiar.',
      image: '/img/images15.jpeg',
      categories: ['postres-individuales']
    },
    {
      id: 'torta-personalizada',
      title: 'Torta Personalizada',
      price: 25000,
      description: 'Creamos la torta de tus sueños para tu ocasión especial. Consultar por diseños.',
      image: '/img/images14.jpeg',
      categories: ['tortas-especiales']
    },
    {
      id: 'torta-tres-leches',
      title: 'Torta Tres Leches',
      price: 16000,
      description: 'Clásica torta bañada en mezcla de tres leches y decorada con merengue o crema chantillí.',
      image: '/img/images10.jpeg',
      categories: ['tradicional', 'tortas-cuadradas']
    },
    {
      id: 'torta-zanahoria',
      title: 'Torta de Zanahoria',
      price: 17000,
      description: 'Húmeda torta de zanahoria con especias, nueces y cubierta de frosting de queso crema.',
      image: '/img/images16.jpeg',
      categories: ['tradicional', 'tortas-circulares']
    },
    {
      id: 'tiramisu',
      title: 'Tiramisú Individual',
      price: 6000,
      description: 'Clásico postre italiano en porción individual, con café, cacao y queso mascarpone.',
      image: '/img/images18.jpeg',
      categories: ['postres-individuales']
    }
  ];

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.categories.includes(selectedCategory)
  );

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'tortas-cuadradas', name: 'Tortas Cuadradas' },
    { id: 'tortas-circulares', name: 'Tortas Circulares' },
    { id: 'postres-individuales', name: 'Postres Individuales' },
    { id: 'tradicional', name: 'Tradicional' },
    { id: 'especiales', name: 'Especiales' },
    { id: 'sin-azucar', name: 'Sin Azúcar' },
    { id: 'sin-gluten', name: 'Sin Gluten' },
    { id: 'vegana', name: 'Vegana' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="products-header py-5 mt-5">
        <div className="container text-center">
          <h1 className="display-4">Nuestros Productos</h1>
          <p className="lead">Descubre nuestra amplia variedad de deliciosos postres y tortas</p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="categories-section py-3 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="text-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn category-btn ${selectedCategory === category.id ? 'active' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="filter-section py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 mb-2">
              <select 
                className="form-select" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre A-Z</option>
              </select>
            </div>
            <div className="col-md-3 mb-2">
              <select 
                className="form-select" 
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
              >
                <option value="all">Todos los tamaños</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-container py-5">
        <div className="container">
          <div className="row" id="products-grid">
            {sortedProducts.map(product => (
              <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card product-card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top product-img" 
                    alt={product.title} 
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <p className="price">${product.price.toLocaleString('es-CL')}</p>
                    <Link 
                      to={`/detalle-producto/${product.id}`} 
                      className="btn btn-primary mt-auto"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4>Pastelería Mil Sabores</h4>
              <p>
                50 años endulzando momentos especiales con las mejores recetas 
                tradicionales y modernas de la repostería chilena.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Contacto</h4>
              <p>
                Av. Dulce 1234, Santiago Centro<br />
                Región Metropolitana, Chile
              </p>
              <p>
                Teléfono: +56 2 2345 6789<br />
                Email: info@pasteleriamilsabores.cl
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright">
                &copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Products;