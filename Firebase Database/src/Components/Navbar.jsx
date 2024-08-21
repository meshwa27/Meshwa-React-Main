import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
// import './Navbar.css'; // Import the CSS file
import '../Styles/Navbar.css';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : '#FFFFF3', 
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    < div className="navbar">
      <NavLink className="nav-link"  to="/">Home</NavLink>
      <NavLink className="nav-link"  to="/about">About</NavLink>
      <NavLink className="nav-link"  to="/dashboard">Dashboard</NavLink>
      <NavLink className="nav-link"  to="/login">
        <FaUser className="icon" /> Login 
      </NavLink>
    </div>
  );
}

export default Navbar;
