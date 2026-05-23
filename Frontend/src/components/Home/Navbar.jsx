import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from '../../assets/logo/surya-maxwill.png';

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="container nav-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logoImg} alt="Surya-Maxwill Logo" className="logo-img" />
          <span className="logo-text">MAXWILL</span>
        </Link>

        {/* LINKS */}
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/arena">Gallery & Coaches</NavLink>
          <NavLink to="/shop">Store</NavLink>

          <div className="dropdown">
            <a href="#" style={{ cursor: "default", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Dashboard <ChevronDown size={14} className="dropdown-arrow" />
            </a>
            <div className="dropdown-content">
              <NavLink to="/dashboard" end>Patron Portal</NavLink>
              <NavLink to="/dashboard/owner">Owner Console</NavLink>
            </div>
          </div>

          <NavLink to="/explore">Courts & Tournaments</NavLink>
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
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/arena" onClick={() => setIsMenuOpen(false)}>Gallery & Coaches</NavLink>
            <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Store</NavLink>
            
            <div className="mobile-menu-section">
              <span className="mobile-section-title">Dashboard</span>
              <div className="mobile-submenu">
                <NavLink to="/dashboard" end onClick={() => setIsMenuOpen(false)}>Patron Portal</NavLink>
                <NavLink to="/dashboard/owner" onClick={() => setIsMenuOpen(false)}>Owner Console</NavLink>
              </div>
            </div>

            <NavLink to="/explore" onClick={() => setIsMenuOpen(false)}>Courts & Tournaments</NavLink>
            
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