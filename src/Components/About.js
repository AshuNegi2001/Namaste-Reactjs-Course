import aboutFood from "../assets/Images/aboutFood.png";

const About = () => {
  return (
    <>
      <div className="pt-10 sm:flex sm:justify-center h-screen">
        <div className="w-4/5 my-10  mx-auto lg:mt-32 md:mt-32 sm:2/5 sm:mt-28 md:w-2/5 lg:w-2/5 xl:w-2/5 font-normal text-left">
          <div className=" text-3xl xl:ml-32 font-bold xl:text-6xl lg:text-5xl md:text-4xl text-amber-400 text-center">
            <p>it's not just</p>
            <p>Food, it's an</p>
            <p>Experience.</p>
          </div>
          <p className="py-3 xl:ml-32 text-center text-sm">
            <div>We are helping you to get fresh and</div>
            <div> delicuous food in minutes by using our</div>
            <div>nice Web & App.</div>
          </p>
        </div>
        <div className="w-4/5 my-10 mx-auto sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 lg:mt-12 md:mt-16 xl:pl-10 sm:mt-28">
          <img className="" src={aboutFood} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
