import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/product?_page=${page}&_limit=5`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromServer();
  }, [page]);

  return (
    <>
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
            color:black;
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
             color:black

          }
          .pagination button:disabled {
            background-color: #ddd;
            cursor: not-allowed;
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
                <button>Edit</button>
                <button>Delete</button>
              </div>
             
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
          <span style={{fontSize:'21px',marginTop:'2px'}}>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === 4}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Product;
