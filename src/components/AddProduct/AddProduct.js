import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../AddProduct/addProduct.css";

function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((response) => setCategories(response.data))
    }, [])

    const onAddProduct = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            image: image,
            category: selectedCategory
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((response) => console.log(response))

        navigate("/products")
    }

    const onSelectCategory = (event) => {
        event.preventDefault();
        const selected = categories.find(i => i.name === event.target.value)
        setSelectedCategory(selected);
    }

    return (
        <div className="addProductContainer" >
            <div>
                <input placeholder="Type name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input placeholder="Type price" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <select onChange={onSelectCategory}>
                    <option >select category</option>
                    {categories.map(category =>
                        <option key={category._id} value={category.name}>{category.name}</option>
                    )}
                </select>
            </div>
            <div>
                <input placeholder="Type url" onChange={(e) => setImage(e.target.value)} />
            </div>
            <p><button onClick={onAddProduct}>Add</button></p>
        </div>
    )
}

export default AddProduct;