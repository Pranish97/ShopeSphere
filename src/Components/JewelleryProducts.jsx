import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JewelleryProducts = () => {
    const [jewelleryProduct, setJewelleryProduct] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res=>res.json())
        .then(data=> setJewelleryProduct(data))
    }, [])

    console.log(jewelleryProduct)
    const jewelleryElement = jewelleryProduct.map((item) => {
        return (
            <div key={item.id} className='product-card'>
                <Link to="/men">
                <img src={item.image} alt={item.title}  width={230} height={280} />
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                </Link>
            </div>
        )
    })

  return (
    <div className='jewellery-container'>
        {jewelleryElement}
    </div>
  )
}

export default JewelleryProducts