import React, { useState } from "react";
import logo from "../assets/Images/FOOD_PIPE.png";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width="100" />
    </div>
  );
};

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className = "home-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className = "about-link">About</Link>
          </li>
          <li>
            <Link to="/contact"className = "contact-link">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        {/** Here, we have our login and logout button */}
        {isSignedIn ? (
          <button
            onClick={() => {
              setIsSignedIn(false);
            }}
          >
            Sign out
          </button>
        ) : (
          <button
            >
            <Link to = "/signin">sign in</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
