import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokeData"
import { useState } from "react";

const Body = () => {
    const [resList, setResList] = useState(restaurantList)

    function getResFilter() {
        setResList(
            resList.filter((item) => {
                return item.data.avgRating > 4
            })
        )
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={getResFilter}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {resList.map((resList) => (
                <RestaurantCard key={resList.data.id} resData={resList} />
            ))}
            </div>
        </div>
    )
}

export default Body