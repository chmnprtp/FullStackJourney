
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
    const {resId} = useParams(); //return object with whatever you pass - path: "/restaurants/:resId",
    console.log(resId); 

    const resInfo = useRestrauntMenu(resId); // fething data from useRestrauntMenu


    // Show shimmer if data is still being fetched
    if (!resInfo) {
        return <Shimmer />;
    }

    // Extract categories from the response
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="flex">
        <h1>{name}</h1>
        <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=> <li key={item.card.info.id}> {item.card.info.name} {" -Rs."}{item.card.info.defaultPrice/100 || item.card.info.price/100} </li>)}
            {/* two pices bcz swiggy api has only one option defaultPrince or Price */}
        </ul>
    </div>
    );
};

export default RestaurantMenu;
