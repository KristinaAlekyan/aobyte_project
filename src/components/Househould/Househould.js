import React from 'react';
import Product from '../Product/Product';
import '../Househould/household.css';

export const houseHoldData =    [
                                    {
                                        "id": 6,
                                        "product_name":"Fork",
                                        "product_price":"600",
                                        "category": "Household",
                                        "image": "/images/6.jpeg"
                                    },
                                    {
                                        "id": 7,
                                        "product_name":"Pan",
                                        "product_price":"1700",
                                        "category": "Household",
                                        "image": "/images/7.jpeg"
                                    },
                                    {
                                        "id": 8,
                                        "product_name":"Spoon",
                                        "product_price":"500",
                                        "category": "Household",
                                        "image": "/images/8.jpeg"
                                    }
                                ]

function Household () {
    return (
        <div className = "householdContainer">
            <h1>Household</h1>
            <div className="household">
                {houseHoldData.map(product => 
                    <Product 
                        key = {product.id}
                        id = {product.id}
                        product_name = {product.product_name} 
                        product_price = {product.product_price}
                        image = {product.image}
                    />
                )}
            </div>
        </div>
    )
}
 
export default Household;