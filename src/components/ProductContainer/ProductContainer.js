import React from 'react';
import Product from '../Product/Product';

class ProductContainer extends React.Component {
    constructor(props){
		super(props)
		this.state = {
			data : []	  	
		}
	}

	addProduct = (index) => {
	} 
   
    componentDidMount() {
        fetch('http://localhost:3001/products',
		{headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            this.setState({data: res.data})
        });        
    }
	
	render() {
		let filteredData = this.state.data ;
		const searchString = this.props.searchString;

		if (searchString) {
			filteredData = this.state.data.filter(element => element.name.toLowerCase().includes(this.props.searchString.toLowerCase()))
		}

		return (
			<div className="d-flex justify-content-start mb-5">
				{filteredData.length > 0 ? filteredData.map(product => 
					<Product 
						key = {product._id}
						id = {product._id}
						product_name = {product.name} 
						product_price = {product.price}
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