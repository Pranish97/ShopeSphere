import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WomenProducts = () => {
    const [womenProducts, setWomenProducts] = useState([])

    useEffect(()=> { 
            fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(res =>res.json())
            .then(data=> setWomenProducts(data))
        }, [])

    const womenElements = womenProducts.map((item) => {
        return (
            <div key={item.id} className='product-card'>
                <Link to="/men">
                <img src={item.image} alt={item.title} width={230} height={280}/>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                </Link>
            </div>
        )
    })
  return (
    <div className='women-container'>
        {womenElements}
    </div>
  )
}

export default WomenProducts