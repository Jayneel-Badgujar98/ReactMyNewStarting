// Product.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Product = () => {

    const products = [
        {id : 1, name: "Apple iPhone"},
        {id : 2, name: "Samsung TV"},
        {id : 3, name: "Acer Laptop"},
        {id : 4, name: "Lenovo Tablet"},
    ]
    const Navigate = useNavigate();
  return (
    <div>
<ul>
    <li>
        {products.map((product) => {
            return(
                <div key = {product.id}>
                    <button onClick = {() => Navigate(`/ProductDetails/${product.id}`)}>{product.name}</button>
                </div>
            )
        })}
    </li>
</ul>
    </div>
  )
}

export default Product