import { LOGO_URL } from '../utils/constant';
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import Grocery from './Grocery';

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState('Log-in');

    useEffect(()=>{
        console.log("Header Redered");
    },[btnNameReact]);

    

    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/294/606/small/burger-logo-delicious-happy-fun-food-sandwich-restaurant-burger-symbol-icon-illustration-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <button
                        className="login_btn"
                        onClick={() => {
                            btnNameReact === 'Login'
                                ? setbtnNameReact('Logout')
                                : setbtnNameReact('Login');
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
