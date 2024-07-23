import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <style>
        {`
        *
        {
        margin:0px;
        paddimg:0px
        }
          .navbar {
            display: flex;
            font-size:21px;
            justify-content: space-around;
            background-color: teal;
            padding: 10px;
            height:50px
          }
          .navbar a {
            color: white;
           
            text-decoration: none;
            padding: 10px 20px;
            transition: background-color 0.3s, color 0.3s;
          }
          .navbar a:hover {
            background-color: white;
            color: teal;
            border-radius: 5px;
          }
        `}
      </style>
      <div className="navbar">
        
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/addproduct"}>Add Product</Link>
      </div>
    </>
  )
}

export default Navbar
