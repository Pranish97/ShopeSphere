import React, { useEffect, useState } from 'react'

const ElectronicProducts = () => {
    const [electronicProduct, setElectronicProduct] = useState([])

    useEffect(()=> {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res => res.json())
        .then(data => setElectronicProduct(data))
    }, [])


    const electronicELem = electronicProduct.map((item)=> {
        return (
            <div key={item.id} className='product-card'>
                <img src={item.image} alt={item.title} width={230} height={280}/>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>
        )
    })
  return (
    <div className='electronic-container'>
        {electronicELem}
    </div>
  )
}

export default ElectronicProducts