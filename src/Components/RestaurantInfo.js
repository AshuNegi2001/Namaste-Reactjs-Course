import React from "react";
import { IMG_CDN_URL } from "../Config";

const RestaurantInfo = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
  costForTwoMessage,
}) => {
  return (
    <>
      <div className="flex justify-center bg-black pr-28">
        <div className="w-1/4 flex justify-end">
          <img
            className="flex my-3 w-64 rounded-lg"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        {/* <h1>restaurant id : {restaurantId}</h1> */}
        <div className="flex flex-col text-end w-1/4 text-white ml-12 my-auto">
          <h2 className="text-3xl font-semibold my-3">{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h3 className="text-sm">{areaName}</h3>
          <h3 className="my-1">
            <span className="pr-3">{avgRating}</span>
            <span className="p-3">|</span>
            <span className="py-3 pl-2">{costForTwoMessage}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
