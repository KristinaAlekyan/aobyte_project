import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import '../Groceries/Groceries.css';


function Groceries (){
    const [groceryProducts, setGroceryProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/category/grocery',
		{headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            setGroceryProducts(res.data)
        });        
    })
    return (
        <div className = "groceriesContainer">
            <h1>Groceries</h1>
            <div className="groceries">
                {groceryProducts.map(product => 
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
 
export default Groceries;