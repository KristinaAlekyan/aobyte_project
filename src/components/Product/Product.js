import { useNavigate } from "react-router-dom";
import "../Product/product.css";

function Product({ id, product_name, product_price, product_category, image }) {

	const navigate = useNavigate();

	return (
		<div className="card" >

			<div className="cardImage">
				<img src={image} alt="AAA" />
			</div>
			<h5>{product_name}</h5>
			<p className="price">{product_price} dr</p>
			<h6>{product_category}</h6>
			<button onClick={() => navigate(`/products/${id}`)} >View</button>
		</div>
	)
}

export default Product;