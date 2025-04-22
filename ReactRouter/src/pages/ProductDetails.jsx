// Productdetails.jsx

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const ProductDetails = ({ }) => {
    const Navigate = useNavigate();
    const { id } = useParams();
    const products = [
        { id: 1, name: "Apple iPhone", price: 1000, description: "Latest iPhone model" },
        { id: 2, name: "Samsung TV", price: 800, description: "Smart TV with 4K resolution" },
        { id: 3, name: "Acer Laptop", price: 1500, description: "Latest Laptop from Acer" },
        { id: 4, name: "Lenovo Tablet", price: 500, description: "Latest Tablet from Lenovo" },
    ]
    const find = products.find((product) => product.id == id);
    if (!find) {
        return <div>Product not found</div>
    }

    const { name, price, description } = find;
    return (
        <>
            <div>Productdetails :- </div>
            <ul>
                <li>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{price}</p>
                    <button onClick={() => Navigate(-1)}> &larr; Go Back</button>
                </li>
            </ul>
        </>
    )
}

export default ProductDetails