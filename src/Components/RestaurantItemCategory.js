import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="mx-auto w-full px-6 box-border">
        <div className="flex justify-between py-3">
          <h3
            className="cursor-pointer text-lg font-semibold"
            onClick={() => {
              toggleView();
            }}
          >
            {itemCategory?.title} ({itemCategory?.itemCards?.length})
          </h3>
          <div>
            {isVisible ? (
              <IoIosArrowUp
                className="cursor-pointer"
                onClick={() => {
                  toggleView();
                }}
              />
            ) : (
              <IoIosArrowDown
                className="cursor-pointer"
                onClick={() => {
                  toggleView();
                }}
              />
            )}
          </div>
        </div>
        {isVisible && (
          <div className="">
            {itemCategory &&
              itemCategory.itemCards.map((item, index) => (
                <MenuItem key={index} item={item.card.info} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantItemCategory;
