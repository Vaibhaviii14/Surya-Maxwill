function Courts() {

  return (

    <section className="courts-section">

      <div className="courts-container">

        {/* LEFT */}

        <div className="courts-left">

          <span className="courts-tag">
            COURT BOOKING
          </span>

          <h2>
            Choose
            <br />
            Your
            <br />
            Arena.
          </h2>

          <p>
            Championship-grade surfaces designed
            for every kind of player —
            from social evenings to tournament finals.
          </p>

        </div>

        {/* RIGHT */}

        <div className="courts-grid">

          {/* CARD 1 */}

          <div className="court-card active">

            <div>

              <h3>
                Court 01 / Pavilion
              </h3>

              <span>
                Indoor Cushioned
              </span>

            </div>

            <p>
              ₹1,200 / hr
            </p>

          </div>

          {/* CARD 2 */}

          <div className="court-card">

            <div>

              <h3>
                Court 04 / Atrium
              </h3>

              <span>
                Indoor Hardcourt
              </span>

            </div>

            <p>
              ₹1,400 / hr
            </p>

          </div>

          {/* CARD 3 */}

          <div className="court-card">

            <div>

              <h3>
                Court 07 / Garden
              </h3>

              <span>
                Outdoor Acrylic
              </span>

            </div>

            <p>
              ₹900 / hr
            </p>

          </div>

          {/* CARD 4 */}

          <div className="court-card">

            <div>

              <h3>
                Court 12 / Centre
              </h3>

              <span>
                Show Court
              </span>

            </div>

            <p>
              ₹2,800 / hr
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Courts;