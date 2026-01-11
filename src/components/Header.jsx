import { LOGO_URL } from '../utils/constant';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery';
import UserContext from '../utils/UseContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState('Log-in');

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        console.log('Header Redered');
    }, [btnNameReact]);

    //Subscribing to the store
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/294/606/small/burger-logo-delicious-happy-fun-food-sandwich-restaurant-burger-symbol-icon-illustration-vector.jpg" />
                <span className="ml-3 bg-red-500 text-white px-2 rounded">TW</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart {cartItems.length} items</Link>
                    </li>
                    <li>
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li>{loggedInUser}</li>
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
