import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setInVisible,
}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-semibold text-3xl">{title}</h1>
      {isVisible ? (
        <button onClick={() => setInVisible()} className="underline">
          Hide
        </button>
      ) : (
        <button onClick={() => setIsVisible()} className="underline">
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState(""); //sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is `lifting state up`. Example-> This state is indirectly using <Section/> components for data handling.

  return (
    <>
      <h1>INSTAMART ACCORDIN</h1>
      <div className="h-screen">
        <Section
          title={"Career"}
          isVisible={visibleSection === "Career"} // If visibleSection will be equal to Career then it will show the content.
          setIsVisible={() => setVisibleSection("Career")}
          setInVisible={() => setVisibleSection("")} // setInvisible is used for hide the content.
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
        />

        <Section
          title={"Products"}
          isVisible={visibleSection === "Products"}
          setIsVisible={() => setVisibleSection("Products")}
          setInVisible={() => setVisibleSection("")}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
        />

        <Section
          title={"About"}
          isVisible={visibleSection === "About"}
          setIsVisible={() => setVisibleSection("About")}
          setInVisible={() => setVisibleSection("")}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
        />
      </div>
    </>
  );
};

export default InstaMart;
