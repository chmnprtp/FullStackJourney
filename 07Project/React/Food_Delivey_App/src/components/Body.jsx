import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import mockData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; // Import Link
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  let [searchText, setSearchText] = useState("");

  //Normal js Variable
  //   let listOfRestaurantsJs = [
  //     {
  //       data: {
  //         id: "334475",
  //         name: "KFC",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //         costForTwo: 40000,
  //         deliveryTime: 36,
  //         avgRating: "3.8",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "334476",
  //         name: "Pizza Hut",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["Pizza", "Biryani", "American", "Snacks", "Fast Food"],
  //         costForTwo: 40000,
  //         deliveryTime: 40,
  //         avgRating: "4.8",
  //       },
  //     },
  //     {
  //         data: {
  //           id: "334477",
  //           name: "MCD",
  //           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //           cuisines: ["Pizza", "Biryani", "American", "Snacks", "Fast Food"],
  //           costForTwo: 40000,
  //           deliveryTime: 40,
  //           avgRating: "4.5",
  //         },
  //       },
  //   ];

  useEffect(() => {
    fetchData();
  }, []);

  // todo to make custom hook
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6026361&lng=77.3769437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );
    const json = await data.json();
    // console.log(json);
    console.log(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //optional chaining -?.?.?
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // checking online status of user
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  return listOfRestaurants.length === 0 ? ( // conditional rendering ?:
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 mr-0">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg mr-0 cursor-pointer" onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              // console.log(searchText);
              const filterRes = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filterRes);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 ml-0 flex items-center">
        <button className="px-4 py-2 ml-0 bg-gray-100 rounded-lg cursor-pointer" onClick={() => {
            //Filter logic
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            // Wrap the RestaurantCard with Link to navigate to the restaurant detail page
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
