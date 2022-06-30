import "../Header/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logedInSelector, login } from "../../redux/userSlice";
import { useState, useEffect } from "react";

function Header(props) {
    const [categories, setCategories] = useState([]);
    const isLogedIn = useSelector(logedInSelector);

    const dispatch = useDispatch();

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
                setCategories(res.data)
            });
    }, [])

    const navigate = useNavigate();

    return (
        <div className="d-flex flex-row justify-content-between ">
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/branches">Branches</Link>
                    </li>

                    <li className="nav-item">
                        <div className="dropdown">
                            <div className="dropbtn" >Category</div>
                            <div className="dropdown-content">
                                {categories.map(category =>
                                    <Link to="/category/" key={category._id} >
                                        <option >{category.name}</option>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about"> About </Link>
                    </li>

                    <li>
                        <input className="search"
                            type="text"
                            onChange={props.onChange}
                            placeholder="Search..."
                            value={props.value}
                        />
                    </li>
                    <li>
                        <button className="addProduct" onClick={() => navigate("/addProduct")}>Add Product</button>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/basket">
                            <svg width="17" height="17" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </Link>
                    </li>
                    {!isLogedIn ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> Login </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration"> Registration </Link>
                            </li>
                        </> : <></>
                    }


                    {isLogedIn ?
                        (<li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => dispatch(login())}> Logout </Link>
                        </li>) : <></>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header