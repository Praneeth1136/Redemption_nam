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
    const cartItems = useSelector(store => store.cart.items);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-50 px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img
                    className="w-10 h-10 object-contain rounded"
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/294/606/small/burger-logo-delicious-happy-fun-food-sandwich-restaurant-burger-symbol-icon-illustration-vector.jpg"
                    alt="Logo"
                />
                <span className="hidden sm:block text-lg font-semibold text-gray-800">Swiggy</span>
            </div>

            <nav>
                <ul className="flex items-center gap-6 text-gray-600 text-sm">
                    <li className="hidden md:flex items-center gap-1">
                        {onlineStatus ? (
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        ) : (
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        )}
                        <span className="text-xs text-gray-400">Online</span>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className="hover:text-gray-900 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="hover:text-gray-900 transition-colors">
                            Contact
                        </Link>
                    </li>
                    <li className="relative">
                        <Link to="/Cart" className="flex items-center gap-1 hover:text-gray-900">
                            <span className="text-lg">🛒</span>
                            {cartItems.length > 0 && (
                                <span className="bg-amber-600 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li className="hidden lg:block text-gray-500">{loggedInUser}</li>
                    <button
                        className="px-4 py-1.5 bg-gray-800 text-white rounded text-sm font-medium hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={() => {
                            btnNameReact === 'Login'
                                ? setbtnNameReact('Logout')
                                : setbtnNameReact('Login');
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
