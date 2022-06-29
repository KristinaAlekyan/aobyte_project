import { useState, useEffect } from "react";
import Product from "../Product/Product";

function ProductContainer({ searchString }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/products',
			{
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then((response) => response.json())
			.then((res) => {
				setProducts(res.data)
			});
	}, [])

	let filteredData = products;

	if (searchString) {
		filteredData = products.filter(element => element.name.toLowerCase().includes(searchString.toLowerCase()))
	}

	return (
		<div className="d-flex justify-content-start flex-wrap mb-5 ">
			{filteredData.length > 0 ? filteredData.map(product =>
				<Product
					key={product._id}
					id={product._id}
					product_name={product.name}
					product_price={product.price}
					image={product.image}
				/>
			) : <span>No Results!</span>
			}
		</div>
	);
}

export default ProductContainer
