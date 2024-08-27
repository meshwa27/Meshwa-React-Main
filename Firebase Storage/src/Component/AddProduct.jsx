import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

  const initialValue = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  };

  const [formData, setFormData] = useState(initialValue);
  const { title, price, category, description, image } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/product", formData)
      .then((res) => {
        console.log(res.data);
        alert("Data Added");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{fontSize:"38px"}}>Welcome to AddProduct Page</h1><br />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          name='image' 
          value={image} 
          onChange={handleChange} 
          type="text" 
          placeholder="Image URL" 
          style={{ padding: '10px 20px', borderRadius: '5px', border: '1px solid grey' }} 
        />
        <input 
          name='title' 
          value={title} 
          onChange={handleChange} 
          type="text" 
          placeholder="Title" 
          style={{ padding: '10px 20px', borderRadius: '5px', border: '1px solid grey' }} 
        />
        <select 
          name='category' 
          value={category} 
          onChange={handleChange} 
          style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid grey' }}
        >
          <option value="">Select Your Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input 
          name='price' 
          value={price} 
          onChange={handleChange} 
          type="text" 
          placeholder="Price" 
          style={{ padding: '10px 20px', borderRadius: '5px', border: '1px solid grey' }} 
        />
        <input 
          name='description' 
          value={description} 
          onChange={handleChange} 
          type="text" 
          placeholder="Description" 
          style={{ padding: '10px 20px', borderRadius: '5px', border: '1px solid grey' }} 
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#151515', color: 'white', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
