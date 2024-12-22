import { useSelector, useDispatch } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import { addItem, removeItem, clearCart } from "../utils/cartSlice.js";
import veg from "../assets/Images/veg.png";
import nonVeg from "../assets/Images/nonVeg.png";
import { IMG_CDN_URL } from "../Config";
import { RiDeleteBinLine } from "react-icons/ri";
import cart from "../assets/Images/cart.png";
// import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const dispatch = useDispatch();

  const getItemTotal = useItemTotal(); // to get the total amount

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return Object.values(cartItems).length > 0 ? (
    <div className=" w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/5 bg-amber-400 mx-auto my-3 rounded-lg text-white p-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">
          Total CartItems({totalItemsCount})
        </h1>
        <button
          className="bg-gray-400 rounded-md px-4 py-2 hover:scale-110"
          onClick={() => {
            handleClearCart();
          }}
        >
          <RiDeleteBinLine />
        </button>
      </div>
      <div>
        {Object.values(cartItems).map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="flex justify-between w-full my-5 mt-7"
              >
                <div className="w-1/5 flex items-center">
                  <img
                    className="rounded-lg"
                    src={IMG_CDN_URL + item?.imageId}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col align-middle w-2/5">
                  <img className="w-4" src={item?.isVeg === 1 ? veg : nonVeg} />
                  <h1 className="text-sm">{item?.name}</h1>
                  <h2 className="text-sm">
                    {"₹ " + (item.price / 100) * item.quantity}
                  </h2>
                </div>
                <div className="w-2/12 border-white border my-auto flex justify-evenly rounded-md">
                  <button
                    className="hover:scale-150"
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    -
                  </button>
                  <span className="">{item.quantity}</span>
                  <button
                    className="hover:scale-150"
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-white border"></div>
      <div className="flex justify-between my-3">
        <p className="font-bold text-sm">To Pay</p>
        <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
      </div>
      <div className="flex justify-center my-5">
        <button className="bg-gray-400 px-10 rounded-md py-1">Pay</button>
      </div>
    </div>
  ) : (
    <>
      <div className=" w-4/5 mx-auto mt-16 p-3 h-screen">
        <div className=" mx-auto w-2/5">
          <img src={cart} alt="cart image" />
        </div>
        <div className="text-center mt-5 md:text-lg text-sm font-normal">
          <h1>Your cart is empty!</h1>
          <h2>Please! Go and Order something special</h2>
        </div>
      </div>
    </>
  );
};
export default Cart;
