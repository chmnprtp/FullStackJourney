//!This is Custom hook Page
import { useEffect, useState } from "react";
import { MENU_ID } from "../utils/constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetch data 
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to fetch data once when the component is mounted or render

  //fetch data logic
  const fetchData = async () => {
    const data = await fetch(MENU_ID + resId);
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6026361&lng=77.3769437&restaurantId=53783&catalog_qa=undefined&submitAction=ENTER
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestrauntMenu;
