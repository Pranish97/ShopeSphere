import React, {  useEffect, useState } from "react";
import { NavLink, useLoaderData, useLocation, useParams } from "react-router-dom";
import { getProductsID } from "../api";


export async function loader({request}){
  const id = new URL(request.url).pathname
  return getProductsID(id)
}

const ProductDetails = () => {
  const location = useLocation()
  const productData = useLoaderData()


  const search = location.state?.search || ""
  const category = location.state?.category || ""

  
  
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
