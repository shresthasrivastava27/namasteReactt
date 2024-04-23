import { useState } from "react";
import FoodLogo from "../../../Images/logo.png";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>                    
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={() => {setBtnName(!btnName)}}>{btnName ? "login" : "logout"}</button></li>             
                </ul>
            </div>
        </div>
    )
}


export default Header