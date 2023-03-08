import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, swiggyMenu_api_URL } from "../Config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const params = useParams();
  const { restaurantId } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      swiggyMenu_api_URL + restaurantId
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return (!restaurant) ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>restaurant id : {restaurantId}</h1>
          <h2>{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
          <h3>Area: {restaurant?.area}</h3>
          <h3>City: {restaurant?.city}</h3>
          <h3>AvgRating: {restaurant?.avgRating}</h3>
          <h3>Cost: {restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
