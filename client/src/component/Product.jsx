import React, { useState, useEffect } from 'react';
import './cssfile/product.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const [images, setImages] = useState([]); // To store the fetched images
 const navi = useNavigate()
  const confirm = () =>{
       navi('/product/confirmbuy')
  }

  // Fetch images when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:4000/img'); // Fetch images from backend
        setImages(res.data); // Store images in the state
      } catch (error) {
        console.error('There was an error fetching the images!', error);
      }
    };

    fetchImages(); 
  }, []); 

  return (
    <div className='pro-container'>
      <div className='nav-container' id='pro-nav'>
        <div className="pro-logo-img">
          <img
            src="logo.png"
            alt="JK stickers"
            className='logo-class'
          />
          <h3>Sticker</h3>
        </div>
      </div>
      <div className="product">
        {/* Dynamically render product images */}
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="procard1">
              <div className="img">
                <img src={image.img} alt={`Product ${index}`} className='pro-img' />
              </div>
              <div className="pro-details">
                <h2 className='product-name'>Cvil war</h2>
                <h2 className='product-prize'>Rs. 9.00</h2>
                <button className='product-btn' onClick={confirm}>Buy</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Product;
