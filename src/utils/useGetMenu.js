import React, { useState, useEffect } from "react";
import { swiggyMenu_api_URL } from "../Config";

const useGetMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
  
  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggyMenu_api_URL + restaurantId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  
  // Return data from restaurant
  return restaurant;
};
export default useGetMenu;
