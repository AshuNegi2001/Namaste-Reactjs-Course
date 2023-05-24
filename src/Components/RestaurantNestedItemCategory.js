import React, { useState } from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className=" ">
        <div className="flex justify-between mx-auto w-full  px-6 py-3 ">
          <h3
            className="cursor-pointer text-lg font-semibold"
            onClick={() => {
              toggleView();
            }}
          >
            {nestedCategory?.title}
          </h3>

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
        {isVisible && (
          <div className="">
            {nestedCategory.categories.map((item, index) => (
              <div key={index} className="px-9">
                <RestaurantItemCategory itemCategory={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantNestedItemCategory;
