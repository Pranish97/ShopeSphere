import React, {  useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const location = useLocation()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, [id]);

  const search = location.state?.search || ""
  const category = location.state?.category || ""

  
  console.log(location)
  
  const productDetailELem = productData ? (
    <div className="product-detail-container">
      <NavLink to={`..${search}`} relative="path" className="back-link">
        Back to {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </NavLink>
      <div className="product-detail-box">
        <img
          src={productData.image}
          alt={productData.title}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{productData.title}</h2>
          <p className="product-price">${productData.price}</p>
          <p className="product-description">{productData.description}</p>
          <button className="add-to-cart" >Add to Cart</button>
        </div>
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );

  return <div className="product-detail-container">{productDetailELem}</div>;
};

export default ProductDetails;
