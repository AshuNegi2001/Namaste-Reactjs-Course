/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
import youLogo from "./logo/you.png";
import userIcon from "./logo/user.png";


// const heading = React.createElement(
//   "div",
//   {
//     className: "title"
//   },
//   [React.createElement("h1",{className: "title"}, "Heading 1"),
//   React.createElement("h2",{className: "title"}, "Heading 2"),
//   React.createElement("h3",{className: "title"}, "Heading 3")
// ]
// ); // createElement is react method or api for making an element.


// const Title = (props)=>{
//   console.log(props.course);
//   return props.course;
// }

// const Heading = ()=>{
//   return(
//     <div><Title course = "Namaste React Live Course"/> // we pass course as a props and then we use in title component.
    
//       <h1 className = "title"> Head 1</h1>
//       <h2 className = "title">Head 2</h2>
//       <h3 className = "title">Head 3</h3>
//     </div>
//   );
// }
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)


// Creating a Header Component from scratch using Functional Components with JSX ?
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

function Header(){
  return(
    <div className = "container">
      <img className= "youLogo" src= {youLogo} alt="youtube logo" width = "150"/>
      <input className = "searchInput" type="text" />
      <img className = "userLogo" src= {userIcon} alt="user logo" width = "40" height ="20"/>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));//Call createRoot api to create a React root for displaying content inside a browser DOM element.

//passing a react element inside the root

//async defer
root.render(<Header/>);// render method help us to render the content in the browser DOM element.also we can use array list for passing multiple element in render method. render method replace all old element with new element which we pass in render method.
