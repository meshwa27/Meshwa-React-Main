import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#28282B" , padding: "15px 150px" }}>
      <nav style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#C0C0C0',
            fontSize: isActive ? "18px" : "16px",
            fontWeight: isActive ? "bold" : "normal",
            transition: "all 0.3s ease-in-out",
            backgroundColor: isActive ? "#444" : "transparent",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#C0C0C0',
            fontSize: isActive ? "18px" : "16px",
            fontWeight: isActive ? "bold" : "normal",
            transition: "all 0.3s ease-in-out",
            backgroundColor: isActive ? "#444" : "transparent",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/product"}
        >
          Product
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#C0C0C0',
            fontSize: isActive ? "18px" : "16px",
            fontWeight: isActive ? "bold" : "normal",
            transition: "all 0.3s ease-in-out",
            backgroundColor: isActive ? "#444" : "transparent",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/addproduct"}
        >
          Add Product
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#C0C0C0',
            fontSize: isActive ? "18px" : "16px",
            fontWeight: isActive ? "bold" : "normal",
            transition: "all 0.3s ease-in-out",
            backgroundColor: isActive ? "#444" : "transparent",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/login"}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
