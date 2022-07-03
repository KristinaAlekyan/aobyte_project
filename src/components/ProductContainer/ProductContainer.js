import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill  } from "react-icons/bs";
import Product from "../Product/Product";

function ProductContainer({ searchString }) {
	const [products, setProducts] = useState([]);
	const [sort, setSort] = useState('')
	

	useEffect(() => {
		fetch(`http://localhost:5000/products?sort=${sort}&search=`,
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
	}, [sort])

	let filteredData = products;

	if (searchString) {
		filteredData = products.filter(element => element.name.toLowerCase().includes(searchString.toLowerCase()))
	}

	return (
		<>
			<div>
				<button type = "button" onClick={()=> setSort("asc")}><span><BsFillArrowUpCircleFill/></span></button>
				<button type = "button" onClick={()=> setSort("desc")}><span><BsFillArrowDownCircleFill/></span></button>
			</div>
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
		</>
		
	);
}

export default ProductContainer
