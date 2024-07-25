import React, { useState } from 'react';
import axios from 'axios';

const initialstate = {
  title: "",
  price: 0,
  Description: "",
  category: "",
  image: "",
};

const AddProduct = () => {
  const [formdata, setFormdata] = useState(initialstate);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const { title, price, category, Description, image } = formdata;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/product", formdata)
      .then((res) => {
        alert("Data added successfully");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-product-container">
      <h1>Add Product Page</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input 
          type="text" 
          name='image' 
          value={image} 
          onChange={handleChange} 
          placeholder='Image URL' 
          className="form-input"
        />
        <br />
        <input 
          type="text" 
          name='title' 
          value={title} 
          onChange={handleChange} 
          placeholder='Title' 
          className="form-input"
        />
        <br />
        <select 
          name='category' 
          value={category} 
          onChange={handleChange} 
          className="form-select"
        >
          <option value="">Select your category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <br />
        <input 
          type="text" 
          name='price' 
          value={price} 
          onChange={handleChange} 
          placeholder='Price' 
          className="form-input"
        />
        <br />
        <input 
          type="text" 
          name='Description' 
          value={Description} 
          onChange={handleChange} 
          placeholder='Description' 
          className="form-input"
        />
        <br />
        <input type="submit" value="Add Product" className="form-submit" />
      </form>

      <style>
        {`
          .add-product-container {
            padding: 20px;
            max-width: 500px;
            margin: 50px auto;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            background-color: #f9f9f9;
          }
          .add-product-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .form-input, .form-select {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s, box-shadow 0.3s;
            width: 90%;
          }
          .form-input:hover, .form-select:hover {
            border-color: teal;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .form-submit {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: teal;
            color: white;
            font-size: 16px;
            transition: background-color 0.3s, color 0.3s;
          }
          .form-submit:hover {
            background-color: #50B498;
            color: black;
          }
        `}
      </style>
    </div>
  );
}

export default AddProduct;
