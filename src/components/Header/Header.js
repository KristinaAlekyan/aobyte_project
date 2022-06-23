import '../Header/header.css';
import { Link } from 'react-router-dom';

export default function Header(props){
    return (
        <div className="d-flex flex-row justify-content-between ">
            <div>
                <ul className="nav">
                    <li className="nav-item">                            
                        <Link className="nav-link active " aria-current="page" to ="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/branches">Branches</Link>
                    </li>

                    <li className="nav-item">
                        <div className="dropdown">
                            <div className="dropbtn" >Category</div>
                            <div className="dropdown-content">
                                <Link to="/category/household">Household</Link>
                                <Link to="/category/personalcare">Personal Care</Link>
                                <Link to="/category/beverages">Beverages</Link>
                                <Link to="/category/groceries">Groceries</Link>
                            </div>
                        </div> 
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about"> About </Link>
                    </li>

                    <li>
                        <input className = "search"
                            type="text"
                            onChange={props.onChange}
                            placeholder="Search..."
                            value={props.value}
                        />
                    </li>
                </ul>
            </div>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/basket">
                            <svg  width="17" height="17" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"> Login </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registration"> Registration </Link>
                    </li>
                </ul>
            </div>
        </div>
    )    
}