import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItems = item => {
        dispatch(addItems(item));
    };

    return (
        <div className="flex flex-col">
            {items.map((item, index) => (
                <div
                    key={item.card.info.id + '-' + index}
                    className="flex justify-between items-start gap-4 p-6 border-b border-gray-100 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-300 rounded-lg my-1"
                >
                    <div className="flex-1">
                        <div className="flex flex-col gap-1 mb-3">
                            <div className="flex items-center gap-2">
                                <span
                                    className={
                                        item.card.info.isVeg
                                            ? 'text-green-600 border border-green-600 px-1 rounded-[4px] text-[10px]'
                                            : 'text-red-600 border border-red-600 px-1 rounded-[4px] text-[10px]'
                                    }
                                >
                                    {item.card.info.isVeg ? '●' : '▲'}
                                </span>
                                <span className="text-orange-500 font-bold text-xs">
                                    {item.card.info.isBestseller ? '★ Bestseller' : ''}
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg">
                                {item.card.info.name}
                            </h3>
                            <span className="font-medium text-gray-700">
                                ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                            {item.card.info.description}
                        </p>
                    </div>

                    <div className="w-32 md:w-40 flex-shrink-0 relative">
                        {item.card.info.imageId ? (
                            <img
                                src={
                                    item.card.info.imageId.startsWith('http')
                                        ? item.card.info.imageId
                                        : CDN_URL + item.card.info.imageId
                                }
                                className="w-full h-24 md:h-32 object-cover rounded-xl shadow-sm"
                                alt={item.card.info.name}
                            />
                        ) : (
                            <div className="w-full h-24 md:h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs">
                                No Image
                            </div>
                        )}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <button
                                className="bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-200 hover:shadow-lg uppercase text-sm hover:bg-gray-50 transition-all active:scale-95"
                                onClick={() => handleAddItems(item)}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
