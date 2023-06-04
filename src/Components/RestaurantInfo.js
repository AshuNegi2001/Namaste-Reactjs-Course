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
      <div className="bg-black">
        <div className="flex w-full lg:w-3/5 md:w-4/5 lg:h-4/5 mx-auto px-8 py-5">
          <div className="w-2/4 flex ">
            <img
              className="flex my-3 w-64 rounded-lg"
              src={IMG_CDN_URL + cloudinaryImageId}
              alt={name}
            />
          </div>
          {/* <h1>restaurant id : {restaurantId}</h1> */}
          <div className="flex flex-col text-end w-2/4 text-white ml-12 my-auto">
            <h2 className="text-xl md:text-3xl font-semibold my-3">{name}</h2>
            <h3 className = "text-xs sm:text-sm">{cuisines.join(", ")}</h3>
            <h3 className="text-xs md:text-sm">{areaName}</h3>
            <h3 className="my-1">
              <span className="pr-2">{avgRating}</span>
              <span className="p-3">|</span>
              <span className="text-xs sm:text-sm py-3 pl-2">{costForTwoMessage}</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
