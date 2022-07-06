import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BasketContainer from "./components/BasketContainer/BasketConainer";
import Login from "./components/Login/Login"
import Registration from "./components/Registration/Registration";
import Branches from "./components/Branches/Branches";
import AboutUs from "./components/AboutUs/AboutUs";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct"
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import ProductContainer from './components/ProductContainer/ProductContainer';

function App() {
    const [searchString, setSearchString] = useState("");
    const [category, setCategory] = useState("all");

    const onSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <Provider store={store}>
            <Router >
                <Header onChange={onSearchStringChange} value={searchString} setCategory={setCategory} />

                <Routes>
                    <Route exact path="/" element={<ProductContainer searchString={searchString} category={category} setCategory={setCategory} />} />
                    <Route exact path="/home" element={<ProductContainer searchString={searchString} category={category} setCategory={setCategory} />} />
                    <Route exact path="/products" element={<ProductContainer searchString={searchString} category={category} setCategory={setCategory} />} />
                    <Route exact path="/addProduct" element={<AddProduct />} />
                    <Route exact path="/editProduct/:id" element={<EditProduct />} />
                    <Route exact path="/products/:id" element={<SingleProduct />} />
                    <Route exact path="/branches" element={<Branches />} />
                    <Route exact path="/about" element={<AboutUs />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/registration" element={<Registration />} />
                    <Route exact path="/basket" element={<BasketContainer />} />
                    <Route exact path="/categories" element={<Category />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
