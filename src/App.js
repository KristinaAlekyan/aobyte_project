import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasketContainer from "./components/BasketContainer/BasketConainer";
import Login from "./components/Login/Login"
import Registration from "./components/registration/Registration";
import Branches from "./components/Branches/Branches.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Household from "./components/Househould/Househould";
import PersonalCare from "./components/PersonalCare/PersonalCare";
import Beverages from "./components/Beverages/Beverages";
import Groceries from "./components/Groceries/Groceries";


function App() {
    const [searchString, setSearchString] = useState("");
    const onSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <Router>
            <Header onChange={onSearchStringChange} value={searchString}/>
            
            <Routes>
                <Route exact path="/" element={<Main searchString={searchString} />}/>  
                <Route exact path="/home" element={<Main searchString={searchString} />}/>
                <Route exact path="/products" element={<Main searchString={searchString} />}/>
                <Route path="/branches" element={<Branches/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/basket" element={<BasketContainer/>}/>
                <Route path="/category/household" element={<Household/>}/>
                <Route path="/category/personalcare" element={<PersonalCare/>}/>
                <Route path="/category/beverages" element={<Beverages/>}/>
                <Route path="/category/groceries" element={<Groceries/>}/>
            </Routes>           
        </Router>
    );
}

export default App;
