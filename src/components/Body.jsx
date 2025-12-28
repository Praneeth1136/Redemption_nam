import RestaurantCard from './RestaurantCard';
// import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setsearchText] = useState('');

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

        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants; //Cards

        setlistOfRestaurants(restaurants);
        setfilteredRestaurants(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline</h1>

    //Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    // return listOfRestaurants.length === 0 ? (
    //     <Shimmer />
    // ) : (
    return (
        <div className="body">
            <div className="filterr_btn">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={e => {
                            setsearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(searchText);

                            const filteredRestaurantss = listOfRestaurants.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
                            );

                            setfilteredRestaurants(filteredRestaurantss);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter_btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            res => res.info.avgRating > 4.0,
                        );
                        console.log(listOfRestaurants);
                        setlistOfRestaurants(filteredList);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="filter-icon"
                    >
                        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                    </svg>
                    Top Rated
                </button>
            </div>
            <div className="res_container">
                {filteredRestaurants.map((restaurant, index) => (
                    <Link to="/restaurants/:resid" key={index}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
