import { Link } from 'react-router-dom';

function ShopSection() {

  return (

    <section className="shop-section">

      <div className="shop-container">

        {/* LEFT */}

        <div className="shop-left">

          <div className="shop-grid">

            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="shop-right">

          <span className="shop-tag">
            THE STORE
          </span>

          <h2>
            Dive Into
            <br />
            The Shop.
          </h2>

          <p>
            Curated paddles, performance apparel
            and premium essentials designed for
            athletes who care about every detail.
          </p>

          <Link to="/shop" className="shop-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            Explore Store
          </Link>

        </div>

      </div>

    </section>

  );
}

export default ShopSection;