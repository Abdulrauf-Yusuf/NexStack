import Image from "next/image";
import clothesImages from "../../public/Mockup Stack 3 (1).png";
import DarkOrangeStarIcon from "../icons/DarkOrangeStarIcon";

export default function Register() {
  const listItems = [
    "KNAPSACK",
    "WATER BOTTLE",
    "STATIONERY SET",
    "FACE CAP",
    "SWEATSHIRT",
    "T-SHIRT",
  ];
  return (
    <div className="flex flex-row items-center justify-between gap-[1rem] pl-0 pr-[3.63rem] max-xl:pr-[3rem] mt-[5rem] max-lg:flex-col">
      <div className="ml-0 pl-0 h-full">
        <Image src={clothesImages} alt="Nexstack Image" priority />
      </div>
      <div className=" max-lg:order-first max-lg:pl-[2.25rem]">
        <DarkOrangeStarIcon />
        <h3 className="font-extrabold leading-normal text-[2.8rem] pr-[6.3rem] max-xl:pr-[2.3rem] max-xl:text-[2.3rem] max-md:text-[1.6rem] max-sm:pr-[1rem]">
          <span className="text-[#DA004C]">Register</span> with us today to get
          free access to our starter pack
        </h3>
        <ul className=" flex flex-row flex-wrap gap-5 items-center mt-[1.56rem] pr-[7rem] max-xl:pr-[5rem] max-lg:pr-[3rem] max-md:pr-[1.5rem]">
          {listItems.map((list, index) => (
            <li
              key={index}
              className=" border border-black rounded text-black py-[0.62rem] px-[1.25rem] max-sm:py-[0.41rem] max-sm:px-[0.82rem] max-sm:text-[0.875rem] text-[1.2rem] leading-normal font-medium text-center"
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
