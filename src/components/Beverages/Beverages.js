import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import '../Beverages/Beverages.css';

function Beverages () {
    const [beverageProducts, setBeverageProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category/beverage',
		{headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            setBeverageProducts(res.data)
        });        
    })
    return (
        <div className = "beveragesContainer">
            <h1>Beverages</h1>
            <div className="beverages">
                {beverageProducts.map(product => 
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
 
export default Beverages;