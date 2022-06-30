import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import BasketContainer from "./components/BasketContainer/BasketConainer";
import Login from "./components/Login/Login"
import Registration from "./components/Registration/Registration";
import Branches from "./components/Branches/Branches";
import AboutUs from "./components/AboutUs/AboutUs";
import Category from "./components/Category/Category";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import SingleProduct from "./components/SingleProduct/SingleProduct"
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

function App() {
    const [searchString, setSearchString] = useState("");
    const onSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <Provider store={store}>
            <Router >
                <Header onChange={onSearchStringChange} value={searchString} />

                <Routes>
                    <Route exact path="/" element={<Main searchString={searchString} />} />
                    <Route exact path="/home" element={<Main searchString={searchString} />} />
                    <Route exact path="/products" element={<Main searchString={searchString} />} />
                    <Route exact path="/addProduct" element={<AddProduct />} />
                    <Route exact path="/editProduct/:id" element={<EditProduct />} />
                    <Route exact path="/products/:id" element={<SingleProduct />} />
                    <Route exact path="/branches" element={<Branches />} />
                    <Route exact path="/about" element={<AboutUs />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/registration" element={<Registration />} />
                    <Route exact path="/basket" element={<BasketContainer />} />
                    <Route exact path="/categories" element={<Category />} />
                    <Route path="/categories/:categoryId" element={<ProductContainer />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
