function Footer() {

  return (

    <footer className="footer-section">

      <div className="container footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <div className="footer-mini-tag">
            SURYA MAXWILL PICKLEBALL ACADEMY
          </div>

          <h2>
            See you
            <br />
            on court.
          </h2>

          <p>
            India’s premium pickleball club.
            Members-only courts, certified
            coaching, and cinematic experiences
            for the modern athlete.
          </p>

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          {/* VISIT */}

          <div className="footer-column">

            <div className="footer-heading">
              Visit
            </div>

            <a href="#">
              Surya Maxwill Pavilion
            </a>

            <a href="#">
              Whitefield, Bengaluru
            </a>

            <a href="#">
              India 560066
            </a>

          </div>

          {/* PAGES */}

          <div className="footer-column">

            <div className="footer-heading">
              Pages
            </div>

            <a href="#">
              Home
            </a>

            <a href="#">
              Shop
            </a>

            <a href="#">
              Booking
            </a>

            <a href="#">
              Coaches
            </a>

          </div>

          {/* CONNECT */}

          <div className="footer-column">

            <div className="footer-heading">
              Connect
            </div>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              YouTube
            </a>

            <a href="#">
              Journal
            </a>

            <a href="#">
              Email
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="container footer-bottom">

        <span>
          © 2026 SURYA MAXWILL. ALL COURTS RESERVED.
        </span>

        <span>
          MADE WITH INTENTION.
        </span>

      </div>

    </footer>
  );
}

export default Footer;