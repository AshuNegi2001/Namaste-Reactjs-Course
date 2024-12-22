import { useParams } from "react-router-dom";
import useGetMenu from "../utils/useGetMenu";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";




const RestaurantMenu = () =>{
    const { restaurantId } = useParams(); // It will return dynamic url id
    // console.log(restaurantId);
    const restaurant = useGetMenu(restaurantId); // Passing restaurantId to custom Hook to fetch restaurant data.
    // console.log(restaurant);
    return !restaurant ? (
        <ShimmerMenu/> ):
        (
            <div data-testid = "menu" className = "">
                <RestaurantInfo {...restaurant.info}/> {/* Here I spreaded all the property using spread Operator.*/}
                <RestaurantMenuList menu = {restaurant.menu} />
            </div>

        )

        
    
}
export default RestaurantMenu;