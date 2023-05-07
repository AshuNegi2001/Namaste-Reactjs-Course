import React, { useContext } from "react";
// import UserContext from "../utils/UserContext";

const Footer = () => {
  // const {user} = useContext(UserContext);
  return (
    <div className="flex flex-col text-center bg-slate-200 py-3 shadow-lg">
      <h1>Made by Ashu Negi</h1>
      <h2>Copyright © 2023 Food Pipe. All Rights Reserved</h2>
      {/* <h3>{user.name} {user.email}</h3> */}
    </div>
  );
};

export default Footer;
