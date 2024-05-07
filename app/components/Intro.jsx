import Image from "next/image";
import IntroImage from "../../public/Rectangle 15 (1).png";
import ZigZagImage from "../../public/Group 143 (1).png";
import FlowerIcon from "../icons/FlowerIcon";
import Link from "next/link";
import FlowerIconBig from "../icons/FlowerIconBig";

export default function Intro() {
  return (
    <div className="w-full flex justify-between max-md:block ">
      <div className="w-1/2 pl-[4.25rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] max-md:w-full">
        <h1 className="mt-[8.31rem] max-md:pr-[3.25rem] max-[350px]:pr-[1.25rem]  ">
          Kickstart your child’s tech career with us now!
        </h1>
        <p className="mt-[1.75rem] text-[1.375rem] pr-[4rem] max-lg:pr-[2rem] max-lg:text-[1rem]">
          We empower and equip the young generation with cutting-edge
          technological skills, fostering their love for technology, while
          utilising their creativity in preparation for lifelong learning in a
          rapidly advancing digital society.
        </p>
        <div className="flex flex-row mt-[2.06rem] gap-[2.5rem] max-lg:flex-col max-md:gap-[1.44rem]">
          <button className="btn bg-[#DA004C] text-[1.25rem] text-[#FFFFFF] font-semibold leading-normal h-[3rem] max-lg:w-[14rem]">
            Get Started
          </button>
          <div className=" flex flex-col items-start justify-start max-md:flex-row max-md:gap-[1.16rem] ">
            <button className="btn border text-[1.25rem] text-[#DA004C] border-[#DA004C] border-solid font-semibold leading-normal h-[3rem] max-[350px]:text-[1rem] max-[350px]:w-[21rem]">
              Speak to our admin
            </button>
            <FlowerIcon />
            <FlowerIconBig />
          </div>
        </div>
      </div>
      <div className="w-1/2 max-md:w-full">
        <Image
          src={IntroImage}
          alt="Intro Image"
          priority
          className=" h-[45rem] md:p-0 md:w-full max-md:mt-[4.38rem] max-md:px-[1.88rem] max-md:h-[33rem] "
        />
      </div>
    </div>
    // <div className="md:flex md:justify-between md:items-start">
    //   <div className="md:w-1/2 md:pl-[1.9rem] lg:pl-[2.25rem] xl:pl-[4.25rem]">
    //     <h1 className="heading-1 pr-[3.25rem]  mt-[10.56rem] ">
    //       Kickstart your child’s tech career with us now!
    //     </h1>
    //     <p className="paragraph mt-[2.19rem] pr-[1.87rem]">
    //       We empower and equip the young generation with cutting-edge
    //       technological skills, fostering their love for technology, while
    //       utilising their creativity in preparation for lifelong learning in a
    //       rapidly advancing digital society.
    //     </p>
    //     <div className=" flex flex-col gap-[1.44rem] lg:flex-row ">
    //       <button className="btn-primary mt-[3.44rem] w-[12.875rem] ">
    //         Get Started
    //       </button>
    //       <div className="flex flex-row max-lg:items-end gap-[1.16rem] lg:flex-col ">
    //         <button className="btn-secondary w-[12.875rem]  ">
    //           Speak to our admin
    //         </button>
    //         <FlowerIcon />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:w-1/2">
    //     <Image
    //       src={IntroImage}
    //       alt="Intro Image"
    //       priority
    //       className="mt-[4.38rem] pr-[1.88rem] md:p-0 md:w-full  "
    //     />
    //     {/* <ZigZagIcon /> */}
    //     {/* <Image src={ZigZagImage} alt="Zig-Zag Image" priority className="w-full" /> */}
    //   </div>
    // </div>
  );
}
