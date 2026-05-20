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
          <a href="#">Home</a>
          <a href="#">Courts</a>
          <a href="#">Coaching</a>
          <a href="#">Cafe</a>
          <a href="#">Events</a>
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