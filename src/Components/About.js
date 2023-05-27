import aboutFood from "../assets/Images/aboutFood.png";

const About = () => {
  return (
    <>
      <div className="flex justify-evenly ml-5 h-screen">
        <div className="mt-32 w-2/5 font-normal">
          <div className=" ml-32 font-bold text-6xl text-amber-400">
            it's not just Food, it's an Experience.
          </div>
          <p className="py-3 ml-32 ">
            We are helping you to get fresh and delicuous food in minutes by
            using our nice Web & App.
          </p>
        </div>
        <div className="w-3/5 mt-12">
          <img className="" src={aboutFood} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
