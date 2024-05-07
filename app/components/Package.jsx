"use client";

import { useState } from "react";
import ComingSoonIcon from "../icons/ComingSoonIcon";
import PinkStarIcon from "../icons/PinkStarIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

export default function Package() {
  const listItems = [
    {
      title: "Web Development",
      price: "$10",
      about: `The course centres on the fundamentals of web development, with a
              major emphasis on front-end development.`,
      listContent: [
        "Understanding development concepts",
        "Solid foundation in HTML, CSS, JAVA SCRIPT",
        "Learning responsiveness of web applications",
        "Understand Git and GitHub for collaboration",
      ],
      bg: "#111111",
    },
    {
      title: "UI/UX Design",
      price: "$10",
      about: `The course focuses on the basics of Product designs, with major focus on User Interface designs`,
      listContent: [
        "Understanding design concepts",
        "Differences between UI and UX design",
        "Colour theory, typography, layout e.t.c",
        "Interpreting briefs based on real life cases.",
      ],
      bg: "#DA004C",
    },
    {
      title: "App Development",
      price: "$10",
      about: `The course centres on the fundamentals of web development, with a
              major emphasis on App development.`,
      listContent: [
        "Understanding development concepts",
        "Solid foundation in HTML, CSS, JAVA SCRIPT",
        "Learning responsiveness of web applications",
        "Understand Git and GitHub for collaboration",
      ],
      bg: "#111111",
    },
  ];
  const [showBasic, setShowBasic] = useState(true);

  const handleBasicClick = () => {
    setShowBasic(true);
  };
  const handleAdvancedClick = () => {
    setShowBasic(false);
  };

  return (
    <section className=" pl-[4.25rem] pr-[3.63rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] max-xl:pr-[3rem] max-md:pr-[.5rem]">
      <div className="flex flex-col justify-center items-center gap-[.5rem] max-md:items-start">
        <h2 className="mt-[6.25rem] text-[3.75rem] leading-normal font-extrabold text-[#111111] max-lg:text-[2.5rem] max-md:text-[1.7rem] ">
          Choose your desired skill
        </h2>
        {/* mt-[0.96rem] pr-[3.87rem] */}
        <p className=" text-[1.5rem] w-[40rem] text-center max-md:text-[1rem] max-md:w-[21rem] max-md:text-left max-sm:w-full ">
          Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus
          nunc eleifend tincidunt.
        </p>
        <div className="border border-black rounded w-[13.875rem] p-1 mt-[2.75rem] flex flex-row justify-around">
          <button
            onClick={handleBasicClick}
            className={`btnToggle ${showBasic ? "toggleActiveClass" : ""}`}
          >
            Basic
          </button>
          <button
            onClick={handleAdvancedClick}
            className={`btnToggle ${!showBasic ? "toggleActiveClass" : ""} `}
          >
            Advanced
          </button>
        </div>
      </div>
      {/* <div className="flex flex-row w-full gap-[0.39rem] items-center mt-[3.63rem]">
        <PinkStarIcon />
        <p className="text-[0.875rem]">
          All courses are for children between the ages of 8-16
        </p>
        <PinkStarIcon />
      </div> */}
      {showBasic ? (
        <div className="lg:pt-[.5rem] lg:pb-[2rem] lg:px-[1rem] lg:bg-[#111111] mt-[3.56rem] rounded-[0.3125rem]">
          <div className="grid grid-cols-1 gap-[0.62rem] pr-[1.87rem] mt-[2.31rem] lg:flex lg:bg-[#111111] ">
            {/* First Div */}
            {listItems.map((list, index) => (
              <div
                key={index}
                className={` text-[#FFFFFF] pl-[1.44rem]  rounded-[0.3125rem] `}
                style={{
                  background: `${list.bg}`,
                }}
              >
                <h2 className="text-[#FFFFFF] mt-[2.19rem] text-[2rem] font-extrabold max-md:text-[1.8rem]">
                  {list.title}
                </h2>
                <h4 className=" mt-[1.38rem] text-[3.75rem] font-semibold">
                  {list.price}
                </h4>
                <p className="text-white mt-[1.37rem] pr-[1.44rem] text-[1.125rem] max-md:text-[1rem] max-sm:w-full max-sm:pr-[0.44rem]">
                  {list.about}
                </p>
                <ul className=" mt-[2rem] list-square pl-[1.44rem]">
                  {list.listContent.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </ul>
                <button className=" btn bg-white text-[#111111] mt-[2.81rem] w-[8.75rem] text-[1.125rem] text-center font-semibold ">
                  Register
                </button>
                <div className="  mt-8 flex flex-row items-center gap-[0.62rem] mb-[3.69rem]">
                  <button className=" text-white leading-normal font-semibold text-[1.125rem] ">
                    Learn More
                  </button>
                  <RightArrowIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black text-white text-center mr-[1.88rem] rounded-[0.3125rem] mt-[3.56rem]">
          <div className=" flex flex-col items-center gap-[3.12rem] lg:gap-[2.12rem]">
            <h2 className=" text-[2.5rem] mt-[5.13rem] leading-normal font-extrabold text-[#FFFFFF] lg:text-[5rem] ">
              Coming soon
            </h2>
            <h2 className="text-[2.5rem] leading-normal font-extrabold  text-[#FFFFFFCC] lg:text-[5rem]">
              Coming soon
            </h2>
            <h2 className=" text-[2.5rem]  leading-normal font-extrabold text-[#FFFFFF99] lg:text-[5rem]">
              Coming soon
            </h2>
            <h2 className=" text-[2.5rem] leading-normal font-extrabold  text-[#FFFFFF66] lg:text-[5rem]">
              Coming soon
            </h2>
            <h2 className=" text-[2.5rem] mb-[5.13rem] leading-normal font-extrabold  text-[#FFFFFF33] lg:text-[5rem]">
              Coming soon
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}

// <div className="bg-black text-white pl-[1.44rem]">
//   <h2 className="text-[#FFFFFF] mt-[2.19rem]">App Development</h2>
//   <div className="flex flex-row justify-between items-center mt-[1.38rem]">
//     <h4>$10</h4>
//   </div>
//   <p className="text-white mt-[1.37rem] pr-[1.44rem]">
//     The course centres on the fundamentals of web development, with a major
//     emphasis on app development.
//   </p>
//   <ul className=" mt-[2rem] list-square pl-[1.44rem]">
//     <li>Understanding development concepts</li>
//     <li>Solid foundation in HTML, CSS, JAVA SCRIPT</li>
//     <li>Learning responsiveness of web applications</li>
//     <li>Understand Git and GitHub for collaboration</li>
//   </ul>
//   <button className=" btn bg-white text-[#111111] mt-[2.81rem] w-[8.75rem] text-[1.125rem] text-center font-semibold ">
//     Register
//   </button>
//   <div className="  mt-8 flex flex-row items-center gap-[0.62rem] mb-[3.69rem]">
//     <button className=" text-white leading-normal font-semibold text-[1.125rem] ">
//       Learn More
//     </button>
//     <RightArrowIcon />
//   </div>
// </div>;
