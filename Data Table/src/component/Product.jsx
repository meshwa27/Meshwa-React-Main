import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState("");
  const [order, setOrder] = useState(null);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/product`, {
      params: {
        _page: page,
        _limit: 10,
        category: selectCategory,
        _sort: "price",
        _order: order,
        q: search
      }
    })
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        alert("Deleted");
        getDataFromServer();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataFromServer();
  }, [page, selectCategory, order, search]);

  return (
    <>
      <div style={{display:'flex',justifyContent:'space-around', marginTop: '30px',marginBottom:'20px'}}>
        <div>
          <select 
            onChange={(e) => setSelectCategory(e.target.value)}
            className="select-category"
          >
            <option value="">Select your category</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
          <input 
            type="text" 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search here' 
            className="search-input"
          />
        </div>
        <div>
          <button onClick={() => setOrder("asc")} className="sort-button">Low to High</button>
          <button onClick={() => setOrder("desc")} className="sort-button">High to Low</button>
        </div>
      </div>
      <hr />
   
      <style>
        {`
          .product-page {
            color: black;
            text-align: center;
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            padding: 20px;
          }
          .product-card {
            border: 1px solid teal;
            border-radius: 5px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
          .product-card img {
            border-radius: 5px;
          }
          .product-card h3, .product-card p {
            margin: 10px 0;
          }
          .product-buttons {
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
          }
          .product-buttons button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
            background-color: teal;
            color: white;
          }
          .product-buttons button:hover {
            background-color: #50B498;
            color: black;
          }
          .pagination {
            display: flex;
            justify-content: center;
            margin-top: 15px;
          }
          .pagination button {
            padding: 10px 20px;
            margin: 0 5px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            background-color: teal;
            color: white;
          }
          .pagination button:hover {
            background-color: #50B498;
            color: black;
          }
          .pagination button:disabled {
            background-color: #ddd;
            cursor: not-allowed;
            color: black;
          }

          /* Custom Styles */
          .select-category {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
            cursor: pointer;
            transition: border-color 0.3s;
          }
          .select-category:hover {
            border-color: teal;
          }
          .search-input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
            width: 200px;
            transition: border-color 0.3s;
          }
          .search-input:hover {
            border-color: teal;
          }
          .sort-button {
            padding: 10px 20px;
            margin: 0 5px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
            background-color: teal;
            color: white;
          }
          .sort-button:hover {
            background-color: #50B498;
            color: black;
          }
        `}
      </style>

      <div className="product-page">
        <h1>Product Page</h1>
        <div className="product-grid">
          {product.map((el) => (
            <div key={el.id} className="product-card">
              <Link to={`/singlepage/${el.id}`}>
                <img src={el.image} alt={el.title} height={200} width={200}/>
              </Link>
              <h3>{el.title}</h3>
              <h3>{el.price}</h3>
              <p>{el.description}</p>
              <div className="product-buttons">
                <button><Link to={`/edit/${el.id}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
          <span style={{fontSize:'21px',marginTop:'2px'}}>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={product.length < 10}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Product;
