import { useState } from "react";
import logo from "../assets/Images/foodpipe.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const Title = () => {
  return (
    <div className="flex justify-center ">
      <img
        data-testid="logo"
        className="cursor-pointer sm:w-56"
        src={logo}
        alt="logo"
        width="300"
      />
    </div>
  );
};

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  // `closeMenu function is only for reset the value of menuActive and remove the active class`.
  const closeMenu = () => {
    const menu = document.querySelector(".menu-container");
    menu.classList.remove("active");
    menu.classList.add("false");
    setMenuActive(!menuActive);
  };

  return (
    <div className="menu-container shadow-lg md:sticky md:top-0 md:left-0 md:right-0 md:z-10 md:bg-white md:shadow-lg md:flex md:justify-between ">
      <div className="md:flex !flex !justify-between md:w-1/6">
        <div className={`${menuActive && "flex w-60 bg-white fixed"}`}>
          <div className="md:block w-44 p-4 pl-2  md:py-7 md:pl-5 ">
            <Title />
          </div>
          <div
            className={`md:hidden text-xl ${menuActive && "pl-10 pt-3 pr-3"} ${
              !menuActive && "hidden"
            }`}
            onClick={() => {
              closeMenu();
            }}
          >
            {" "}
            <GrClose />
          </div>
        </div>
        <div
          className={`md:hidden p-4 text-2xl ${
            menuActive && "w-full flex justify-end"
          }`}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          {" "}
          <GiHamburgerMenu />
        </div>
      </div>
      <div
        className={`md:flex md:py-7 md:justify-end font-medium text-lg md:static md:h-[85px] md:w-3/4 ${
          !menuActive && "hidden"
        } ${menuActive && "active"} `}
      >
        <ul className="md:flex sticky bottom-0">
          <li className="md:px-3 hover:text-amber-400 md:py-0 py-3 px-8">
            <Link to="/">Home</Link>
          </li>
          <li className="md:px-3 hover:text-amber-400 md:py-0 py-3 px-8">
            <Link to="/about">About</Link>
          </li>
          <li className="md:px-3 hover:text-amber-400 md:py-0 py-3 px-8">
            <Link to="/contact">Contact</Link>
          </li>
          <li
            data-testid="cart"
            className="md:px-3 md:py-0 hover:text-amber-400 py-3 px-8"
          >
            <Link to="/cart">
              Cart{" "}
              {totalItemsCount === 0 ? null : (
                <span className="text-white rounded-full bg-amber-400 px-2 py-0">
                  {totalItemsCount}
                </span>
              )}{" "}
            </Link>
          </li>
          <li className="md:px-3 md:py-0 md:hover:text-amber-400 py-3 px-8">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li>
            {isSignedIn ? (
              <button
                className="md:px-3 md:py-0 md:hover:text-amber-400 pt-3 pb-8 px-8"
                onClick={() => {
                  setIsSignedIn(false);
                }}
              >
                Sign Out
              </button>
            ) : (
              <button className="md:px-3  md:py-0 hover:text-amber-400 pt-3 pb-8 px-8">
                <Link to="/signin">sign in</Link>
              </button>
            )}
          </li>
        </ul>
        {/** Here, we have our login and logout button */}
      </div>
    </div>
  );
};

export default Header;
