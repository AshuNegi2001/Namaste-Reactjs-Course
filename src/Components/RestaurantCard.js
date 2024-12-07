import { IMG_CDN_URL } from "../Config";
import { IoIosStar } from "react-icons/io";
// import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  sla,
  costForTwo,
}) => {
  // const {user} = useContext(UserContext); // it is UserContext example.
  // console.log(sla.lastMileTravelString);
  return (
    <div className=" w-60 h-56 bg-slate m-7 text-xs flex flex-col justify-between hover:scale-105 hover:rounded-lg hover:shadow-xl hover:border hover:p-3 lg:!w-64 lg:!h-60 lg:!m-7 md:w-52 md:h-60 md:mx-5 sm:w-40 sm:h-52 sm:mx-5 xsm:w-44 xsm:mx-4 xsm:h-48 mob:w-36 mob:h-48 mob:mx-3">
      <img className="rounded-lg " src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="flex justify-between">
        <div className="flex pr-10 my-auto mob:overflow-auto">{name}</div>
        <div className="flex justify-center font-bold rounded-lg px-1 h-5 bg-green-600 text-white">
          <span className="text-xs my-auto">{avgRating}</span>
          <div className="my-auto">
            <IoIosStar />
          </div>
        </div>
      </div>
      <h5 className="truncate">{cuisines.join(", ")}</h5>
      <span className="flex justify-between">
        <h4>{sla.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
      {/* <div>{user.name} </div>
      <div>{user.email} </div> */}
    </div>
  );
};

export default RestaurantCard;
