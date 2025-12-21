import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData';
import {useState} from "react";

const Body = () => {
    //Local State Variable - Super powerful variable
    const[listOfRestaurants,setListOfRestaurants] = useState(resList);

    //Normal Variable
    // const listOfRestaurants = [];

    return (
        <div className="body">
            <button className="filter_btn" onClick = {() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                console.log(listOfRestaurants);
                setListOfRestaurants(filteredList);
            }   
            }
            >Filter</button>
            <div className="res_container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;