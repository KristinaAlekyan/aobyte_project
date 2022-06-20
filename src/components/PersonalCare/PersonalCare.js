import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import '../PersonalCare/PersonalCare.css';

function PersonalCare(){ 
    const [personalcareProducts, setPersonalcareProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/category/personalcare',
		{headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            setPersonalcareProducts(res.data)
        });        
    })
    return (
        <div className = "personalCareContainer">
            <h1>PersonalCare</h1>
            <div className="personalCare">
                {personalcareProducts.map(product => 
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
 
export default PersonalCare;