import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";

import "./singleProduct.css";

function SingleProduct(props) {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    const id = useParams().id

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((res) => {
                setProduct(res)
            });
    }, [id]);

    const onDelete = () => {

        fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' })
            .then(() => console.log("deleted"));

        navigate(`/products/`)
    }

    return (
        <div className="singleProduct" >
            <div className="heartDelete">
                <div className="heart" >
                    <a href="#/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </a>
                </div>
                <div className="delete" >
                    <button onClick={onDelete}> <BsFillCartXFill /></button>
                </div>

            </div>
            <div className="cardImage">
                <img src={product.image} alt="AAA" />
            </div>

            <h5>{product.name}</h5>
            <p className="price">{product.price} dr</p>
            <button onClick={() => navigate(`/editProduct/${id}`)}>Edit</button>
        </div>
    )
}

export default SingleProduct;