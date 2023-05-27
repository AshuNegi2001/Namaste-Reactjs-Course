import { IMG_CDN_URL } from "../Config";
// import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwoString,
}) => {
  // const {user} = useContext(UserContext); // it is UserContext example.
  return (
    <div className="w-60 h-64 bg-slate-50 rounded-lg shadow-xl p-3 m-2 text-xs flex flex-col justify-between hover:scale-105">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <span className="flex justify-between">
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
      {/* <div>{user.name} </div>
      <div>{user.email} </div> */}
    </div>
  );
};

export default RestaurantCard;
