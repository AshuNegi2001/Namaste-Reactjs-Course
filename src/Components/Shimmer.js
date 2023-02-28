import React from "react";
import { shimmer_card_unit } from "../Config";

const ShimmerCard = () => {
  return (
    <>
      <div className=" shimmer-card ">
        <div className="shimmer-img stroke animate" src=""></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate"></div>
        <div className="shimmer-details stroke animate"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-container">
        {new Array(shimmer_card_unit).fill().map((_, index) => {
          return <ShimmerCard key={index} />;
        })}
      </div>
    </>
  );
};

export default Shimmer;
