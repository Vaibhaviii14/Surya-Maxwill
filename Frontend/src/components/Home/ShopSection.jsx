import { Link } from 'react-router-dom';
import img1 from "../../assets/gallery/pickleball1.jpg"
import img2 from "../../assets/gallery/pickleball3.jpg"
import img3 from "../../assets/gallery/pickleball2.jpg"
import img4 from "../../assets/gallery/pickleball4.jpg"

function ShopSection() {

  return (

    <section className="shop-section">

      <div className="shop-container">

        {/* LEFT */}

        <div className="shop-left">

          <div className="shop-grid">

            <img
              src={img4}
              alt=""
            />

            <img
              src={img2}
              alt=""
            />

            <img
              src={img1}
              alt=""
            />

            <img
              src={img3}
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