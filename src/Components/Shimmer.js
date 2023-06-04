import { shimmer_card_unit } from "../Config";

const ShimmerCard = () => {
  return (
    <>
      <div className="animate-pulse w-60 !h-56 bg-slate-50 rounded-lg shadow-xl p-3 m-7 lg:!w-64 lg:!h-60 lg:!m-7 md:w-52 md:!h-60 md:!mx-5 sm:w-40 sm:!h-60 sm:mx-5 xsm:w-44 xsm:!mx-4 xsm!h-64 mob:w-36 mob:!h-60 mob:mx-3">
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
      <div data-testid = "shimmer" className="flex flex-wrap mb-8 justify-center mx-auto w-10/12">
        {new Array(shimmer_card_unit).fill().map((_, index) => {
          return <ShimmerCard key={index} />;
        })}
      </div>
      
    </>
  );
};

export default Shimmer;
