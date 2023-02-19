import React from "react";
import logo from "../logo/FOOD_PIPE.png";

export const Title = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width="100" />
    </div>
  );
};

const Header = ()=> {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
