import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const[products , setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            const categoryMap = {}; 
    
            const filteredProducts = data.reduce((acc, product) => {
              if (!categoryMap[product.category]) {
                categoryMap[product.category] = [];
              }
    
              if (categoryMap[product.category].length < 2) {
                categoryMap[product.category].push(product);
                acc.push(product);
              }
    
              return acc;
            }, []);
    
            setProducts(filteredProducts);
          });
      }, []);

      console.log(products)

      const allProductsEle = products.map((item) => {
        return (
            
            <div key={item.id} className='product-card'>
                <Link to={`${item.id}`}>
                <img src={item.image} alt={item.title} width={230} height={280}/>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                </Link>
            </div>
            
        )
      })

  return (
    <div className='all-products-container'>
        {allProductsEle}
    </div>
  )
}

export default AllProducts