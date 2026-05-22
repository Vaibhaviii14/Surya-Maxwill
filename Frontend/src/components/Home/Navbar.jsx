import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

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
          <Link to="/arena">Gallery & Coaches</Link>
          <Link to="/shop">Store</Link>

          <div className="dropdown">
            <a href="#" style={{ cursor: "default", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Dashboard <ChevronDown size={14} className="dropdown-arrow" />
            </a>
            <div className="dropdown-content">
              <Link to="/dashboard">Patron Portal</Link>
              <Link to="/dashboard/owner">Owner Console</Link>
            </div>
          </div>

          <Link to="/explore">Courts & Tournaments</Link>
        </div>

        {/* BUTTON */}
        <button className="book-btn" onClick={() => navigate('/dashboard')}>
          Book Now
        </button>

      </div>

    </nav>
  );
}

export default Navbar;