import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useGetMenu from "../utils/useGetMenu";

const RestaurantMenu = (props) => {
  
  // how to read a dynamic URL using param
  const params = useParams();
  const { restaurantId } = params;

  // This hook is for get the restaurant data
  const restaurant = useGetMenu(restaurantId); // In this we will pass our restaurantId and it will return that restaurant data
  return (!restaurant) ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>restaurant id : {restaurantId}</h1>
          <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId} alt="" />
          <h3>Area: {restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
          <h3>City: {restaurant?.cards[0]?.card?.card?.info.city}</h3>
          <h3>AvgRating: {restaurant?.cards[0]?.card?.card?.info.avgRating}</h3>
          <h3>Cost: {restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
