import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import '../BasketContainer/basketContainer.css';
import basketData from "../../Data/basket.json";

class BasketContainer extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            basketProduct: basketData
        }
    }

    basketProductRemove = (id) => {
        const newBasketProduct = [...this.state.basketProduct].filter((i) => i.id !== id );
        this.setState({
            basketProduct: newBasketProduct
        })
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center mb-5">
                <div className="basketTitle">
                    <h1>Basket </h1>
                </div>
                {
                    this.state.basketProduct.length ?
                        (
                            <>
                                <div className="basketContainer">
                                    {this.state.basketProduct.map(product =>
                                        <BasketItem
                                            key={product.id}
                                            id={product.id}
                                            product_name={product.product_name}
                                            product_price={product.product_price}
                                            basketProductRemove={this.basketProductRemove}
                                            image={product.image}
                                        />
                                    )}
                                </div>
                                <div className="order">
                                    <div className="orderTotal">
                                        <h4>Total </h4>
                                    </div>
                                    <div className="orderCount">
                                        <h4>
                                            {this.state.basketProduct
                                                .map(function (item) {
                                                    return item["product_price"]
                                                })
                                                .reduce(function (y, x) {
                                                    return y + +x;
                                                }, 0)}
                                            dr
                                        </h4>
                                    </div>
                                    <div className="orderButton">
                                        <button>Order</button>
                                    </div>
                                </div>
                            </>
                        )
                        : (<h3>Basket is empty</h3>)
                }
            </div>
        );
    }
}

export default BasketContainer;