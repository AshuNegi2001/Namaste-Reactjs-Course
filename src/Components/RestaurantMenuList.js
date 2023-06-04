import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";
// import {useSelector} from "react-redux";

const RestaurantMenuList = ({menu}) =>{
    
    return(
        <>
        <div className = "lg:w-3/5 md:w-4/5 w-full bg-green-200 mx-auto">
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