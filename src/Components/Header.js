import { useState } from "react";
import logo from "../assets/Images/foodpipe.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <div className="flex justify-center pl-4 py-2">
      <img  data-testid = "logo" className="cursor-pointer" src={logo} alt="logo" width="100" />
    </div>
  );
};

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);

  return (
    <div className=" sticky top-0 left-0 right-0 z-10 flex justify-between bg-slate-100 shadow-lg">
      <Title />
      <div className="flex py-8 mx-3 ">
        <ul className="flex">
          <li className="px-3 hover:text-amber-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 hover:text-amber-400">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 hover:text-amber-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li data-testid= "cart"  className="px-3 hover:text-amber-400">
            <Link to="/cart">
              Cart{" "}
              {totalItemsCount === 0 ? null : (
                <span className="text-white rounded-full bg-amber-400 px-2">
                  {totalItemsCount}
                </span>
              )}{" "}
            </Link>
          </li>
          <li className="px-3 hover:text-amber-400">
            <Link to="/instamart">InstaMart</Link>
          </li>
        </ul>
        {/** Here, we have our login and logout button */}
        {isSignedIn ? (
          <button
            className="pb-[3px] mx-2 hover:text-amber-400"
            onClick={() => {
              setIsSignedIn(false);
            }}
          >
            Sign out
          </button>
        ) : (
          <button className="pb-[3px] mx-2 hover:text-amber-400">
            <Link to="/signin">sign in</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
