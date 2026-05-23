import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import paddlesImg from '../../assets/paddles.png';
import ballImg from '../../assets/ball.png';
import './Shop.css';
import NegoBtn from './NegoBtn';

const products = [
  {
    id: 1,
    name: 'MAXWILL PRO X1',
    type: 'Paddles',
    category: 'CARBON FIBER PADDLE',
    description: 'Precision-engineered paddle for elite control and maximum power.',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
    badge: 'BESTSELLER'
  },
  {
    id: 2,
    name: 'TECH TEE',
    type: 'Apparel',
    category: 'PERFORMANCE APPAREL',
    description: 'Ultra-breathable tech fabric designed to keep you cool on the court.',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop',
    badge: 'NEW'
  },
  {
    id: 3,
    name: 'COURT MASTER',
    type: 'Footwear',
    category: 'ELITE FOOTWEAR',
    description: 'Lightweight court shoes offering premium stability and grip.',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    badge: ''
  },
  {
    id: 4,
    name: 'GRIP TAPE',
    type: 'Accessories',
    category: 'PREMIUM ACCESSORIES',
    description: 'Professional grade overgrip for a secure and comfortable hold.',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop',
    badge: ''
  },
  {
    id: 5,
    name: 'THERMAL 32',
    type: 'Accessories',
    category: 'INSULATED HYDRATION',
    description: 'Double-walled thermal flask keeps water ice cold for 24 hours.',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1585255452632-475268682a39?q=80&w=1200&auto=format&fit=crop',
    badge: ''
  }
];

const filters = ['All Products', 'Paddles', 'Apparel', 'Footwear', 'Accessories'];

function Shop() {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let filteredProducts = activeFilter === 'All Products' 
    ? [...products] 
    : products.filter(p => p.type === activeFilter);

  if (sortOption === 'category') {
    filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
  } else if (sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
  }

  return (
    <>
      <Navbar />
      <div className="shop-page">
        {/* HERO SECTION */}
        <section className="shop-hero container">
          <div className="shop-hero-left">
            <span className="shop-badge">PREMIUM EQUIPMENT</span>
            <h1 className="shop-title">THE PRO<br/>SHOP.</h1>
            <p className="shop-subtitle">
              Curated gear for athletes who care about every detail. Precision-engineered paddles, high-performance apparel, and elite accessories.
            </p>
            <div className="shop-hero-buttons">
              <button className="btn-solid">SHOP NEW ARRIVALS</button>
              <button className="btn-outline">VIEW ALL</button>
            </div>
          </div>
          <div className="shop-hero-right">
            <div className="hero-custom-images">
              <img src={paddlesImg} alt="Maxwell Pro Paddle" className="shop-hero-paddle" />
            </div>
          </div>
        </section>

        {/* FILTERS & SORTING */}
        <section className="shop-filters-section container">
          <div className="shop-filters">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`shop-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="shop-sort">
            <select 
              className="sort-select" 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort By: Featured</option>
              <option value="category">Sort By: Category</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="shop-products container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-side-title">{product.name}</div>
                <div className="product-image-wrap">
                  <button className="heart-btn">♡</button>
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-bottom">
                    <p className="product-price">{product.price}</p>
                    <div className="product-actions" style={{ alignItems: 'center' }}>
                      <NegoBtn />
                      <button className="buy-btn">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CUSTOM ORDER CARD */}
            <div className="product-card custom-order-card">
              <div className="custom-order-content">
                <h2 className="custom-icon">?</h2>
                <h3 className="custom-title">CUSTOM<br/>ORDER</h3>
                <p className="custom-text">
                  Need a custom paddle or team apparel? Let our designers create your signature look.
                </p>
                <button className="btn-outline-light">INQUIRE NOW</button>
              </div>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP BANNER MARQUEE */}
        <section className="shop-marquee">
          <div className="marquee-content">
            <span>MEMBERS GET 15% OFF ALL GEAR. JOIN THE CLUB TODAY.</span>
            <span>MEMBERS GET 15% OFF ALL GEAR. JOIN THE CLUB TODAY.</span>
            <span>MEMBERS GET 15% OFF ALL GEAR. JOIN THE CLUB TODAY.</span>
            <span>MEMBERS GET 15% OFF ALL GEAR. JOIN THE CLUB TODAY.</span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
