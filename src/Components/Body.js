import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../Config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper"; // For reusability, maintainability, readability filterData function is added in Helper.js file of Utils folder
// import UserContext from "../utils/UserContext";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants(); // we can't call async funtion directly here because it will give to  performance loss.
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

  // const {user, setUser} = useContext(UserContext); // It is useContext hook to access context data.

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // Optional chaining:
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(filteredRestaurants);
  }
  // if restaurants is empty => render shimer Ui
  // if restaurants has data => show the restauant card

  // not component render (early return)
  if (!allRestaurants) return null;

  //conditional rendering:
  return (
    <>
      <div className="flex justify-center mb-5 mt-10">
        <input
          data-testid = "search-input"
          type="text"
          className="outline-none p-2 mx-3 w-44 bg-white shadow-md focus:scale-105 rounded-lg lg:w-96 md:w-80 sm:w-64"
          placeholder="Search a meal..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input> 
        <button data-testid = "search-btn"
          className="p-1 mx-2 bg-amber-400 rounded-lg w-20 text-white md:p-2 md:mx-3 hover:bg-green-400"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* This is useContext example:

        <input className = "mx-2" type = "text" value = {user.name} onChange = {(e)=>setUser({name: e.target.value,
        email: "newMail@gmail.com",
        })}></input>
        <input className = "mx-2" type="text" value = {user.email} onChange = {(e)=>setUser({
          name: "dummyName",
          email: e.target.value,
        })}/> */}
        
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
       ) : (
        <div data-testid = "res-list" className="flex flex-wrap mb-8 justify-center mx-auto">
          {filteredRestaurants?.length === 0
            ? <div className = "h-screen">No restaurants match your filter!</div> // conditional rendering
            : filteredRestaurants.map((restaurant) => {
                {/* console.log(restaurant); */}
                return (
                  <Link
                    to={"/restaurant/" + restaurant?.info?.id}
                    key={restaurant?.info?.id} // Now, the key should be in our Link component because when we use map function in react which component we mapping it should have any key.
                  >
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                );
              })}
        </div>
      )}
    </>
  );
};

export default Body;
