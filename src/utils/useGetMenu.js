import { useState, useEffect } from "react";
import { swiggyMenu_api_URL } from "../Config";

const useGetMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggyMenu_api_URL + restaurantId);
      const json = await data.json();
      // console.log(json);
      const menuItemsList =
        json?.data?.cards[4]["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const nestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      // Here, we filtered some categories like itemCategory and nestedItemCategory because  we don't want iterate licenseCategory or some other category.
      const menu = menuItemsList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === nestedItemCategory
        ) {
          return item?.card?.card;
        }
      });

      // Now, we modified data because we don't want to use same line in every where.
      const modifiedData = {
        info: json.data?.cards[0]?.card?.card?.info,
        menu: menu.filter((value) => value !== undefined),
      };

      setRestaurant(modifiedData);
    } catch (error) {
      console.log(error);
    }
  }

  // Return data from restaurant
  return restaurant;
};
export default useGetMenu;
