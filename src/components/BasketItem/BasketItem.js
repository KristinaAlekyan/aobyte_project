import React from 'react';
import '../BasketItem/basketItem.css';


function BasketItem ({id, product_name, product_price, basketProductRemove, image}){   
    return (          
        <div className="cardBasket" >
                <div className ="cardBasketImage">
                    <img src = {image} alt = "AAA"/>
                </div>
                <div className ="cardBasketProp">
                    <div className = "cardBasketName"> 
                        <p>{product_name}</p>
                    </div>
                    <div className = "cardBasketPrice">
                        <p className="priceBasket">{product_price} dr</p>
                    </div>
                    <div className="input-group ml-3">
                        <input type="button" value="-" className="button-minus" data-field="quantity"/>
                        <input type="number" step="1" max="" defaultValue="1" name="quantity" className="quantity-field"/>
                        <input type="button" value="+" className="button-plus" data-field="quantity"/>
                    </div>

                    <div className = "cardBasketPrice">
                        <p className="price">{product_price} dr</p>
                    </div>
                    <div className = "cardBasketButton">
                        <p><button onClick = {() => basketProductRemove(id)}>X</button></p>
                    </div>
                </div>
        </div>
    )
} 
export default BasketItem;