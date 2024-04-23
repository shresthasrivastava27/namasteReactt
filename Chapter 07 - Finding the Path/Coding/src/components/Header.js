import { useState } from "react";
import FoodLogo from "../../../Images/logo.png";
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState(true)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={FoodLogo} alt="logo" /> 
                Abhifood
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>                    
                    <li><Link to="/cart">Cart</Link></li>
                    <li><button className="login-btn" onClick={() => {setBtnName(!btnName)}}>{btnName ? "login" : "logout"}</button></li>             
                </ul>
            </div>
        </div>
    )
}


export default Header