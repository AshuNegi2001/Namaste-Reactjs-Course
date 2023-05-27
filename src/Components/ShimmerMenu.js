import { shimmer_card_unit } from "../Config";

const ShimmerMenuCard = () => {
  return (
    <>
      <div className="mx-auto w-6/12 p-3">
        <div className="flex justify-between pb-10 mt-16 ">
          <div className="flex flex-col w-96">
            <div className="animate-pulse bg-slate-300 h-5 rounded-lg mt-6 mb-3 w-1/3"></div>
            <div className="animate-pulse bg-slate-300 h-5 rounded-lg mb-3 w-1/2"></div>
          </div>
          <div className="animate-pulse bg-slate-300 h-28 w-28 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

const ShimmerMenu = () => {
  return (
    <>
      <div className="">
        <div className=" w-full h-48 shadow-xl flex justify-center pr-28 ">
          <div className=" animate-pulse w-1/5 h-40 bg-slate-300 flex justify-end my-3 rounded-lg"></div>
          <div className="flex flex-col w-1/4 ml-12 my-auto">
            <div className="animate-pulse h-5 w-1/3 bg-slate-300 rounded-lg my-3"></div>
            <div className="animate-pulse h-5 w-1/2 bg-slate-300 rounded-lg mb-3"></div>
            <div className="animate-pulse h-5 w-4/6 bg-slate-300 rounded-lg mb-3"></div>
          </div>
        </div>
        <div>
          {new Array(shimmer_card_unit).fill().map((_, index) => {
            return <ShimmerMenuCard key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShimmerMenu;
