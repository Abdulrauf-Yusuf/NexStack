import Image from "next/image";
import KidsEllipseImage from "../../public/Ellipse 7.png";
import Parent1EllipseImage from "../../public/Ellipse 7 (1).png";
import Parent2EllipseImage from "../../public/Ellipse 7 (2).png";
import GroupedCircle from "../icons/GroupedCircle";

export default function Testimonials() {
  const listItems = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus nunc eleifend tincidunt. Lorem ipsum dolor sit amet consectetur.",
      src: KidsEllipseImage,
      alt: "Image of kid",
      name: "Lorem Ipsum",
      desc: "Student (9 yrs)",
      bgColor: "#E86E04",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus nunc eleifend tincidunt. Lorem ipsum dolor sit amet consectetur.",
      src: Parent1EllipseImage,
      alt: "Image of parent",
      name: "Lorem Ipsum",
      desc: "Parent",
      bgColor: "#DA004C",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus nunc eleifend tincidunt. Lorem ipsum dolor sit amet consectetur.",
      src: Parent2EllipseImage,
      alt: "Image of parent",
      name: "Lorem Ipsum",
      desc: "Parent",
      bgColor: "#E86E04",
    },
  ];
  return (
    <section className="pl-[4.25rem] pr-[3.63rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] max-xl:pr-[3rem] max-md:pr-[.5rem]">
      {/* pr-[5rem] mt-[3.56rem] */}
      <div className="flex flex-col justify-center items-center gap-[.2rem] max-md:items-start">
        <h2 className="mt-[6.25rem] text-[3.75rem] leading-normal font-extrabold text-[#111111] max-xl:text-[3.5rem] max-lg:text-[2.5rem] max-md:text-[1.7rem]">
          Testimonials from our customers
        </h2>
        {/* mt-[0.94rem] pr-[1.81rem] */}
        <p className="px-[9rem] text-center text-[1.25rem] max-xl:px-[4rem] max-lg:px-[2rem] max-md:px-[0rem] max-md:text-[.85rem] max-md:text-left">
          We have a high rating for expertise and an engaging environment. Read
          some of the comments from parents and some students regarding their
          overall experience using our service.
        </p>
      </div>
      {/* mr-[2.56rem] pl-[1.31rem] */}
      <div className="flex flex-row gap-[3.5rem] max-xl:gap-[2.5rem]">
        {listItems.map((list, index) => (
          <div
            key={index}
            className={`card2 mt-[2.81rem] pl-[1.81rem] ${
              index === 2 ? "max-lg:hidden" : ""
            } ${index === 1 ? "max-md:hidden" : ""} max-md:mr-[1.88rem]`}
            style={{
              background: `${list.bgColor}`,
            }}
          >
            <p className="text-[#FFFFFF] text-[1.25rem] mt-[2.25rem] max-md:text-[1rem]">
              Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus
              nunc eleifend tincidunt. Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex flex-row items-center gap-[0.94rem] mt-[1.62rem] pb-[1.24rem] ">
              <Image
                src={list.src}
                alt={list.alt}
                priority
                className="w-[4rem] h-[4rem] max-md:w-[2.5rem] max-md:h-[2.5rem] "
              />

              <div className="flex flex-col gap-[0.25rem]">
                <h5 className="text-[#FFFFFF] text-[1.2rem] font-bold leading-[1.3rem] max-md:text-[0.95rem]">
                  {list.name}
                </h5>

                <p className="text-[#FFFFFF] text-[1rem] font-medium leading-[1.3rem] max-md:text-[0.625rem]">
                  {list.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GroupedCircle />
    </section>
  );
}
