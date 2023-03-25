import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../Config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper"; // For reusability, maintainability, readability filterData function is added in Helper.js file of Utils folder



// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants(); // we can't call async funtion directly here because it will give to performance loss.
  }, []);

  //  useEffect Hook => Concept start from here...
  // This useEffect is not a part of website. It just concept a of unmounting in useEffect hook how it work?
  // useEffect(() => {
  //   const timer = setInterval(()=>{
  //     console.log("useEffect timer")
  //   }, 1000)
  //   return( // this return function will called when we unmounting this component
  //     ()=>{
  //       clearInterval(timer);
  //       console.log("useEffect return");
  //     }
  //   )
  // }) // Concept ended here...

  // empty dependency array => once useEffect call after the initial render
  // when [searchText] is dependency array => once useEffect call after the initial render + everytime call or render when searchText changes

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    // console.log(json);
    // Optional chaining:
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // if restaurants is empty => render shimer Ui
  // if restaurants has data => show the restauant card

  
  

  // not component render (early return)
  if (!allRestaurants) return null;

  //conditional rendering:
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants?.length === 0
            ? "No restaurants match your filter!" // conditional rendering
            : filteredRestaurants.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id} // Now, the key should be in our Link component because when we use map function in react which component we mapping it should have any key.
                  >
                    <RestaurantCard {...restaurant.data} />
                  </Link>
                );
              })}
        </div>
      )}
    </>
  );
};

export default Body;
