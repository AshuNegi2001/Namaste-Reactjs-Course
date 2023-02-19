import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


/**
  Header
    -logo
    -Nav items (Right side)
    -cart
  Body
    -Search bar
    -RestaurantList
      -RestaurtCard (many cards )
        - Image
        - Name
        - Rating
        
 */
// React.Fragment
// JSX - one parent
// inline styling in jsx




const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //Call createRoot api to create a React root for displaying content inside a browser DOM element.

//passing a react element inside the root

//async defer
root.render(<AppLayout />); // render method help us to render the content in the browser DOM element.also we can use array list for passing multiple element in render method. render method replace all old element with new element which we pass in render method.
