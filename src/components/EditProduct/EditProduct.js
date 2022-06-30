import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../AddProduct/addProduct.css";

function EditProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [categories, setCategories] = useState([]);

    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((response) => setCategories(response.data))
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setName(response.name);
                setPrice(response.price);
                setImage(response.image);
                setSelectedCategory(response.category);
            })
    }, []);

    const onSelectCategory = (event) => {
        event.preventDefault();
        const selected = categories.find(i => i.name === event.target.value);
        setSelectedCategory(selected);
    }

    const onSaveProduct = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            price: price,
            image: image,
            category: selectedCategory
        }

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((response) => response.json())

        navigate("/products")
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
            <p><button onClick={onSaveProduct}>Save</button></p>
        </div>
    )
}

export default EditProduct;