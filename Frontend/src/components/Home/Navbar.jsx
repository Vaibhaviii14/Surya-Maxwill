import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* HAMBURGER TOGGLE BUTTON */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/arena" onClick={() => setIsMenuOpen(false)}>Gallery & Coaches</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Store</Link>
            
            <div className="mobile-menu-section">
              <span className="mobile-section-title">Dashboard</span>
              <div className="mobile-submenu">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Patron Portal</Link>
                <Link to="/dashboard/owner" onClick={() => setIsMenuOpen(false)}>Owner Console</Link>
              </div>
            </div>

            <Link to="/explore" onClick={() => setIsMenuOpen(false)}>Courts & Tournaments</Link>
            
            <button 
              className="book-btn w-full mt-4" 
              onClick={() => { 
                setIsMenuOpen(false); 
                navigate('/dashboard'); 
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;