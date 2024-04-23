import {CDN_URL} from "../utils/contants"

const RestaurantCard = ({resData}) => {
    const {data:{name, cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime }} = resData
    return (
        <>
        <div className="card">
            <img src={`${CDN_URL}${cloudinaryImageId}`} alt="food pic" height={"200px"} />
            <h2>{name}</h2>
            <h4>{cuisines.join(" ")}</h4>
            <h5>Rating {avgRating}</h5>
            <h6>Cost For Two {costForTwo / 100}</h6>
            <h6>Delivery Time {deliveryTime}</h6>
        </div>
        </>
    )
}

export default RestaurantCard