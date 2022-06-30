import { useState, useEffect } from "react";
import "../Category/category.css";

function Category() {
    const [category, setCategory] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/categories',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((res) => {
                console.log("res.data", res.data)
                setCategory(res.data)
            });
    }, [])

    return (
        <div className="categoryContainer">
            <h1 className="category">
                
                {category ? category.map(category => 
                    <option >{category.name}</option>
                ) : ""}
            </h1>
        </div>
    )
}

export default Category;