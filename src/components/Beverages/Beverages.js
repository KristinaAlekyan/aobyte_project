import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import '../Beverages/Beverages.css';

<<<<<<< HEAD
=======
const beveragesData =   [
                            {
                                "id": 15,
                                "product_name":"Coca-Cola",
                                "product_price":"9000",
                                "category": "Beverages",
                                "image": "/images/5.png"
                            },
                            {
                                "id": 18,
                                "product_name":"Peach juice",
                                "product_price":"400",
                                "category": "Beverages",
                                "image": "/images/1.png"
                            }
                        ];

>>>>>>> 2fcd32c2a85f4b4cb0f0ef0d349e73c0f45fb15c
function Beverages () {
    const [beverageProducts, setBeverageProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/category/beverage',
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