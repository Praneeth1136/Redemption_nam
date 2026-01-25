import { useState } from 'react';
import Shimmer from './Shimmer';
import { MOCK_MENU } from '../utils/mockData';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resid } = useParams();

    // const resInfo = useRestaurantMenu(resid); // Using the hook with resid

    const resInfo = useRestaurantMenu(MOCK_MENU);

    const [showIndex, setShowIndex] = useState(null);

    if (!resInfo || resInfo.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-20 animate-fade-in">
            <div className="text-center mb-10 border-b border-gray-200 pb-6">
                <h1 className="font-extrabold text-3xl text-gray-800 mb-2">
                    Indian Delight Restaurant
                </h1>
                <p className="text-gray-500 text-sm">Delicious Indian Cuisine • 20 min delivery</p>
                {/* Note: In a real app, restaurant details would come from resInfo, but using static title as per original code's placeholder logic if needed, or resid */}
            </div>

            <div className="flex flex-col gap-4">
                {/* Categories Accordion */}
                {resInfo.map((category, index) => (
                    // Controlled Component
                    <RestaurantCategory
                        key={category.title || index}
                        data={category}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
