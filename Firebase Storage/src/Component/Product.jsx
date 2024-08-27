import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../Service/Firebase';
import { Link } from 'react-router-dom';
import './product.css'; // Import the CSS file

function Product() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getDataFromFirebase = () => {
    getDocs(collection(db, "products"))
      .then((res) => {
        let newArray = res.docs.map((el) => ({ ...el.data(), id: el.id }));
        setData(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      getDataFromFirebase(); // Fetch updated data after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        {currentItems.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} className="product-image" />
            <h3 className="product-title">{el.title}</h3>
            <h4 className="product-price">${el.price}</h4>
            <h5 className="product-category">{el.category}</h5>
            <p className="product-description">
              {el.description.length > 100 ? `${el.description.substring(0, 100)}...` : el.description}
            </p>
            <button className="product-button">
              <Link to={`/edit/${el.id}`} style={{ textDecoration: 'none', color: '#fff' }}>Edit</Link>
            </button>
            <button 
              onClick={() => deleteProduct(el.id)} 
              className="product-button product-button-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="pagination-button"
        >
          Previous
        </button>
        <span className="pagination-info">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Product;
