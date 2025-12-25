import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState('Login');

    

    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/294/606/small/burger-logo-delicious-happy-fun-food-sandwich-restaurant-burger-symbol-icon-illustration-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
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
