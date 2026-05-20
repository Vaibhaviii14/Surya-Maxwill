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

          {/* FILTER BUTTONS */}

          {/* <div className="shop-filters">

            <button className="filter-btn active">
              ALL
            </button>

            <button className="filter-btn">
              PADDLES
            </button>

            <button className="filter-btn">
              APPAREL
            </button>

            <button className="filter-btn">
              ACCESSORIES
            </button>

          </div> */}

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

          <button className="shop-btn">
            Explore Store
          </button>

        </div>

      </div>

    </section>

  );
}

export default ShopSection;