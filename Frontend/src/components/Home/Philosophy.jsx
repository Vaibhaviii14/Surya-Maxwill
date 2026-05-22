function Philosophy() {

  return (

    <section className="philosophy-section">

      <div className="philosophy-container">

        {/* LEFT */}

        <div className="philosophy-left">

          <span className="philosophy-tag">
            THE PHILOSOPHY
          </span>

          <h2>
            A
            <br />
            Curated
            <br />
            Kind Of
            <br />
            Intensity.
          </h2>

        </div>

        {/* RIGHT */}

        <div className="philosophy-right">

          <p className="philosophy-intro">
            Surya Maxwill is built for athletes who care
            about the small details — the snap of the paddle,
            the chalk on the line, the cinematic light across
            the court at golden hour.
            Everything here is considered.
          </p>

          <div className="feature-list">

            {/* ITEM 1 */}

            <div className="feature-item">

              <span className="feature-number">
                01
              </span>

              <h3 className="feature-title">
                Curated
                <br />
                Courts
              </h3>

              <p className="feature-description">
                Twelve championship-grade indoor and outdoor
                courts engineered for tournament-level play.
              </p>

            </div>

            {/* ITEM 2 */}

            <div className="feature-item">

              <span className="feature-number">
                02
              </span>

              <h3 className="feature-title">
                Elite
                <br />
                Coaching
              </h3>

              <p className="feature-description">
                World-class certified coaches translating
                decades of racket-sport craft into your game.
              </p>

            </div>

            {/* ITEM 3 */}

            <div className="feature-item">

              <span className="feature-number">
                03
              </span>

              <h3 className="feature-title">
                Members
                <br />
                Club
              </h3>

              <p className="feature-description">
                A quiet, considered space — café, lounge
                and pro shop — designed like a boutique hotel.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Philosophy;