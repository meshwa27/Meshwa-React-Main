import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-icon">&#9776;</span> {/* Hamburger icon */}
        </div>
        <nav className="navbar-links">
          <NavLink
            to={"/"}
            className="navbar-link"
          >
            Home
          </NavLink>
          <NavLink
            to={"/product"}
            className="navbar-link"
          >
            Product
          </NavLink>
          <NavLink
            to={"/addproduct"}
            className="navbar-link"
          >
            Add Product
          </NavLink>
          <NavLink
            to={"/login"}
            className="navbar-link"
          >
            Login
          </NavLink>
        </nav>
      </div>

      {/* Off-canvas menu for mobile */}
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-close" onClick={toggleMenu}>&times;</div>
        <nav className="offcanvas-links">
          <NavLink to={"/"} className="offcanvas-link" onClick={toggleMenu}>Home</NavLink>
          <NavLink to={"/product"} className="offcanvas-link" onClick={toggleMenu}>Product</NavLink>
          <NavLink to={"/addproduct"} className="offcanvas-link" onClick={toggleMenu}>Add Product</NavLink>
          <NavLink to={"/login"} className="offcanvas-link" onClick={toggleMenu}>Login</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
