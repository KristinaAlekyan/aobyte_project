import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../AddProduct/addProduct.css";

function EditProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setName(response.name);
                setPrice(response.price);
                setImage(response.image);
            })
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((response) => setCategories(response.data))
    }, [])

    const navigate = useNavigate();

    const onEditProduct = (event) => {
        event.preventDefault();
        console.log("Befor Save", name)
        const data = {
            name: name,
            price: price,
            image: image
        }

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((response) => response.json())

        navigate("/products")
    }

    const onSelectCategory = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    }

    return (
        <div className="addProductContainer" >
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <select onChange={onSelectCategory}>
                    {categories.map(category =>
                        <option key={category._id} value={category.name}>{category.name}</option>
                    )}
                </select>

            </div>
            <div>
                <input value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <p><button onClick={onEditProduct}>Save</button></p>
        </div>
    )
}

export default EditProduct;