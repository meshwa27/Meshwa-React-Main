import React, { useState } from 'react';
import axios from 'axios';

const initalstate = {
  title: "",
  price: 0,
  Description: "",
  category: "",
  image: "",
}

const Addproduct = () => {
  const [formdata, setformdata] = useState(initalstate);

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const { title, price, category, Description, image } = formdata;

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/product", formdata)
      .then((res) => {
        alert("Data added");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 style={{ color: 'black', textAlign: 'center',marginTop:'100px' }}>Add Product Page</h1>
      <form onSubmit={(e) => handlesubmit(e)} style={styles.form}>
        <input 
          type="text" 
          name='image' 
          value={image} 
          onChange={(e) => handlechange(e)} 
          placeholder='Image' 
          style={styles.input} 
        /> <br />
        <input 
          type="text" 
          name='title' 
          value={title} 
          onChange={(e) => handlechange(e)} 
          placeholder='Title' 
          style={styles.input} 
        /> <br />
        <select 
          name='category' 
          value={category} 
          onChange={(e) => handlechange(e)} 
          style={styles.input}
        >
          <option value="">Select your category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="Women's clothing">Women's clothing</option>
        </select><br />
        <input 
          type="text" 
          name='price' 
          value={price} 
          onChange={(e) => handlechange(e)} 
          placeholder='Price' 
          style={styles.input} 
        /><br />
        <input 
          type="text" 
          name='Description' 
          value={Description} 
          onChange={(e) => handlechange(e)} 
          placeholder='Description' 
          style={styles.input} 
        /><br />
        <input type="submit" style={styles.submit} />
      </form>
    </div>
  )
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding:'20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '90%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submit: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'teal',
    color: 'white',
    cursor: 'pointer',
  }
}

export default Addproduct;
