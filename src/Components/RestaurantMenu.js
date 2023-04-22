import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerMenu from "./ShimmerMenu";
import useGetMenu from "../utils/useGetMenu";
import veg from "../assets/Images/veg.png";
import nonVeg from "../assets/Images/nonVeg.png";

const RestaurantMenu = (props) => {
  // how to read a dynamic URL using param
  const params = useParams();
  const { restaurantId } = params;

  // This hook is for get the restaurant data
  const restaurant = useGetMenu(restaurantId); // In this we will pass our restaurantId and it will return that restaurant data
  return !restaurant ? (
    <ShimmerMenu />
  ) : ( 
    <>
      <div className = "">
        <div className = "flex justify-center bg-black pr-28">
          <div className = "w-1/4 flex justify-end">
          <img
            className="flex my-3 w-64 rounded-lg "
            src={
              IMG_CDN_URL +
              restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
            }
            alt=""
          />
          </div>
          {/* <h1>restaurant id : {restaurantId}</h1> */}
          <div className=" flex flex-col text-end w-1/4 text-white ml-12 my-auto">
            <h2 className="text-3xl font-semibold my-3">
              {restaurant?.cards[0]?.card?.card?.info.name}
            </h2>
            <h3>
              {restaurant?.cards[0]?.card?.card?.info.cuisines.join(", ")}
            </h3>
            <h3 className="text-sm">
              {restaurant?.cards[0]?.card?.card?.info.areaName}
            </h3>
            <h3 className="my-1">
              <span className="pr-3">
                {restaurant?.cards[0]?.card?.card?.info.avgRating}
              </span>
              <span className="p-3">|</span>
              <span className="py-3 pl-2">
                {restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}
              </span>
            </h3>
          </div>
        </div>

        <div className="mx-auto w-6/12 bg-green-200 p-7">
          <h1 className="font-semibold mb-7 text-lg">
            Recommended (
            {
              (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards.length)
            }
            )
          </h1>
          {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
            (item) => (
              <li className="list-none" key={item?.card?.info?.id}>
                <div className="flex justify-between pb-20 ">
                  <div className="w-96">
                    <img
                      className="w-6 h-6"
                      src={item?.card?.info?.isVeg === 1 ? veg : nonVeg}
                      alt=""
                    />
                    <h1 className="text-lg">{item?.card?.info?.name}</h1>
                    <h2 className="text-lg">
                      ₹{item?.card?.info?.price / 100}
                    </h2>
                    <h3 className="text-sm">{item?.card?.info?.description}</h3>
                  </div>
                  <div className="flex flex-col align-end ">
                    <img
                      className="h-28 w-28 rounded-lg object-cover "
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt=""
                    />
                    <button className="bg-slate-100 text-green-500 w-20 mb-0 py-1 px-4 rounded-lg mx-auto -mt-6 .mb-0">
                      ADD
                    </button>
                  </div>
                </div>
              </li>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
