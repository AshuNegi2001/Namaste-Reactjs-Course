// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const Footer = () => {
  // const {user} = useContext(UserContext);
  return (
    <div data-testid = "footer" className="flex flex-col text-center py-3 shadow-inner  bg-slate-100 font-medium">
      <h1>Made by Ashu Negi</h1>
      <h2 data-testid = "detail" >Copyright © 2023 Food Pipe. All Rights Reserved</h2>
      {/* <h3>{user.name} {user.email}</h3> */}
    </div>
  );
};

export default Footer;
