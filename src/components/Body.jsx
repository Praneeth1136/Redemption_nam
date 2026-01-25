import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
// import resList from '../utils/mockData';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UseContext';

const RestaurantPromoted = withPromotedLabel(RestaurantCard);

const Body = () => {
    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setsearchText] = useState('');

    const { loggedInUser, setUserName } = useContext(UserContext);

    //Normal Variable
    // const listOfRestaurants = [];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
        );

        const json = await data.json();

        console.log(json);

        // setListOfRestaurants(json?.data?.cards);
        // // setListOfRestaurants(
        // //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
        // // );
        // setfilteredRestaurants(json?.data?.cards);

        const cards = json?.data?.cards || [];
        const restaurantCard = cards.find(
            card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );
        const restaurants =
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setlistOfRestaurants(restaurants);
        setfilteredRestaurants(restaurants);
        // console.log(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you are offline</h1>;

    //Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    // return listOfRestaurants.length === 0 ? (
    //     <Shimmer />
    // ) : (
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search restaurants..."
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 text-sm"
                            value={searchText}
                            onChange={e => {
                                setsearchText(e.target.value);
                            }}
                        />
                        <svg
                            className="w-4 h-4 absolute left-3 top-2.5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <button
                        className="btn-primary cursor-pointer"
                        onClick={() => {
                            const filteredRestaurantss = listOfRestaurants.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
                            );
                            setfilteredRestaurants(filteredRestaurantss);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                res => res.info.avgRating > 4.0,
                            );
                            setlistOfRestaurants(filteredList);
                            setfilteredRestaurants(filteredList);
                        }}
                    >
                        <span className="text-amber-500">★</span>
                        Top Rated
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Hi,</span>
                        <input
                            value={loggedInUser}
                            onChange={e => setUserName(e.target.value)}
                            className="bg-transparent border-b border-gray-200 focus:border-gray-400 focus:outline-none text-gray-700 w-20"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredRestaurants.map((restaurant, index) => (
                    <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}>
                        {restaurant?.info?.availability?.opened ? (
                            <RestaurantPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
