// import { useState, useEffect } from 'react';
// import Shimmer from './Shimmer';
// import { MOCK_MENU } from '../utils/mockData';
// import {useParams} from "react-router-dom";

// const RestaurantMenu = () => {
//     const [resInfo, setresInfo] = useState(MOCK_MENU);
//     console.log(resInfo);

//     if(resInfo === null) return <Shimmer/>
//     // Destructuring the name, price, and description from the very first item of the first category
//     const { name, price, description, isVeg } = resInfo?.[0]?.itemCards[0]?.card?.info;

//     return (
//         <div>
//             <h1>{name}</h1>
//             <h2> {price} for two</h2>
//             {/* <p>{description}</p> */}
//             <ul>
//                 {resInfo[1]?.itemCards.map((items, index) => (
//                     <li key={index}>items.card.info.name</li>
//                 ))}
//                 {/* <li>{resInfo[1]?.itemCards[0]?.card?.info.name}</li>
//                 <li>{resInfo[1]?.itemCards[1]?.card?.info.name}</li>
//                 <li>{resInfo[1]?.itemCards[2]?.card?.info.name}</li> */}
//                 {/* <li>Diet Coke</li>
//                 <li>Coke</li> */}
//             </ul>
//         </div>
//     );
// };

// export default RestaurantMenu;

import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { MOCK_MENU } from '../utils/mockData';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const { resid } = useParams();
    // Initializing with the mock data provided
    const [resInfo, setresInfo] = useState(MOCK_MENU);

    // If the data is still loading or empty, show Shimmer
    if (!resInfo || resInfo.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="menu">
            <h1>Indian Delight Restaurant</h1>
            <h2>Menu</h2>

            {/* First, we map over the Menu Categories (Recommended, Main Course, etc.) */}
            {resInfo.map((category, index) => (
                <div key={index} className="menu-category">
                    <h3>{category.title}</h3>
                    <ul>
                        {/* Second, we map over the specific itemCards in that category */}
                        {category.itemCards.map(item => (
                            <li key={item.card.info.id}>
                                <strong>{item.card.info.name}</strong> -{' Rs.'}{' '}
                                {item.card.info.price}
                                {item.card.info.isVeg ? ' (🟢 Veg)' : ' (🔴 Non-Veg)'}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;
