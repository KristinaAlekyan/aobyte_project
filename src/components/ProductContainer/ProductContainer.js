import React from 'react';
import Product from '../Product/Product';
import productData from "../../Data/product.json";

class ProductContainer extends React.Component {
    constructor(props){
		super(props)
		this.state = {
			data : productData	  	
		}
	}

	addProduct = (index) => {
	} 
	
	render() {
		let filteredData = this.state.data ;
		const searchString = this.props.searchString;

		if (searchString) {
			filteredData = this.state.data.filter(element => element.product_name.toLowerCase().includes(this.props.searchString.toLowerCase()))
		}

		return (
			<div className="d-flex justify-content-start mb-5">
				{filteredData.length > 0 ? filteredData.map(product => 
					<Product 
						key = {product.id}
						id = {product.id}
						product_name = {product.product_name} 
						product_price = {product.product_price}
						addProduct = {this.addProduct}
						image = {product.image}
					/>
				) : <span>No Results!</span>
				} 
			</div>
		);
	}
}
 
export default ProductContainer;