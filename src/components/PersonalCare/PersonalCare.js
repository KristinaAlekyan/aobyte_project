import Product from '../Product/Product';
import '../PersonalCare/PersonalCare.css';

const personalCareData =    [
                                {
                                    "id":11,
                                    "product_name":"Shampo",
                                    "product_price":"1500",
                                    "category": "Personal Care",
                                    "image": "/images/11.jpeg"
                                },
                                {
                                    "id":12,
                                    "product_name":"Hand cream",
                                    "product_price":"1700",
                                    "category": "Personal Care",
                                    "image": "/images/12.jpeg"
                                },
                                {
                                    "id":13,
                                    "product_name":"Foot cream",
                                    "product_price":"1900",
                                    "category": "Personal Care",
                                    "image": "/images/13.jpeg"
                                },
                            ];

function PersonalCare(){ 
    return (
        <div className = "personalCareContainer">
            <h1>PersonalCare</h1>
            <div className="personalCare">
                {personalCareData.map(product => 
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
 
export default PersonalCare;