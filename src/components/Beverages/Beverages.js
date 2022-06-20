import Product from '../Product/Product';
import '../Beverages/Beverages.css';

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

function Beverages () {
    return (
        <div className = "beveragesContainer">
            <h1>Beverages</h1>
            <div className="beverages">
                {beveragesData.map(product => 
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
 
export default Beverages;