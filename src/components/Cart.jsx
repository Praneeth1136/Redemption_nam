import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-20 animate-fade-in text-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Cart</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[50vh] p-6">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600 font-medium">
                        {cartItems.length} items in your cart
                    </span>
                    {cartItems.length > 0 && (
                        <button
                            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold text-sm flex items-center gap-2"
                            onClick={handleClearCart}
                        >
                            <span>🗑️</span> Clear Cart
                        </button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 text-gray-400 gap-4">
                        <div className="text-6xl">🛒</div>
                        <h2 className="text-xl font-semibold text-gray-600">Your cart is empty</h2>
                        <p>You can go to home page to view more restaurants</p>
                    </div>
                ) : (
                    <ItemList items={cartItems} />
                )}
            </div>
        </div>
    );
};

export default Cart;
