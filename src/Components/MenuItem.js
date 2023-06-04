import veg from "../assets/Images/veg.png";
import nonVeg from "../assets/Images/nonVeg.png";
import { IMG_CDN_URL } from "../Config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId, isVeg } = item;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // redux send action object to store{payload : item}
  };

  return (
    <>
      <div  className="" key={id}>
        <div className="flex mx-auto justify-between py-8 px-11 ">
          <div className="w-96">
            <img className="w-6 h-6" src={isVeg === 1 ? veg : nonVeg} alt="" />
            <h1 className="text-lg font-medium">{name}</h1>
            <h2 className="text-lg font-medium">₹{price / 100}</h2>
            <h3 className="text-sm font-extralight">{description}</h3>
          </div>
          <div className=" flex flex-col my-auto ">
            <img
              className="h-28 w-28 rounded-lg object-cover "
              src={IMG_CDN_URL + imageId}
              alt={name}
            />
            <button
              data-testid = "add-btn"
              className="bg-slate-100 text-green-500 w-16 mb-0 py-1 px-4 rounded-lg mx-auto -mt-6"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="border-white border"></div>
      </div>
    </>
  );
};

export default MenuItem;
