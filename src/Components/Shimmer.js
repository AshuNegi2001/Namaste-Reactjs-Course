import React from "react";
import { shimmer_card_unit } from "../Config";

const ShimmerCard = () => {
  return (
    <>
      <div className="animate-pulse w-60 h-60 bg-slate-50 rounded-lg shadow-xl p-3 m-2 ">
        <div className="h-28 bg-slate-200 rounded-lg"></div>
        <div className="w-3/5 h-4 mt-3 bg-slate-200 rounded-lg"></div>
        <div className="w-4/5 mt-3 h-4 bg-slate-200 rounded-lg"></div>
        <div className="w-full mt-5 h-4 bg-slate-200 rounded-lg"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {new Array(shimmer_card_unit).fill().map((_, index) => {
          return <ShimmerCard key={index} />;
        })}
      </div>
      
    </>
  );
};

export default Shimmer;
