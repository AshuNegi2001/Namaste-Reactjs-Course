import React from "react";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";
// import {useSelector} from "react-redux";

const RestaurantMenuList = ({menu}) =>{
    
    return(
        <>
        <div className = "w-3/5 bg-green-200 mx-auto">
            {menu.map((item, index) =>(
                <div key = {index}>
                    {item.categories ? (
                        <RestaurantNestedItemCategory nestedCategory = {item}/>) :
                        (<RestaurantItemCategory itemCategory = {item}/>)}
                </div>
            ))}
        </div>
        </>
    )
};

export default RestaurantMenuList;