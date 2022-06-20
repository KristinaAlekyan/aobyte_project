import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import '../Househould/household.css';

function Household () {
    const [housholdProducts, setHousholdProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category/household',
		{headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            setHousholdProducts(res.data)
        });        
    })

    return (
        <div className = "householdContainer">
            <h1>Household</h1>
            <div className="household">
                {housholdProducts.map(product => 
                    <Product 
                        key = {product._id}
                        id = {product._id}
                        product_name = {product.name} 
                        product_price = {product.price}
                        image = {product.image}
                    />
                )}
            </div>
        </div>
    )
}
 
export default Household;