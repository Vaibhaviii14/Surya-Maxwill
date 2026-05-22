import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar">

      <div className="container nav-inner">

        {/* LOGO */}
        <div className="logo">
          MAXWILL
        </div>

        {/* LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#courts">Courts</a>
          <a href="/#coaching">Coaching</a>
          <a href="/#cafe">Cafe</a>
          <a href="/#events">Events</a>
          <Link to="/shop">Store</Link>
        </div>

        {/* BUTTON */}
        <button className="book-btn">
          Book Now
        </button>

      </div>

    </nav>
  );
}

export default Navbar;