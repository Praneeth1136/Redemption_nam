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
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">
                Menu for {resid} - Indian Delight Restaurant
            </h1>

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
    );
};

export default RestaurantMenu;
