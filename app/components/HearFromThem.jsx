import Image from "next/image";
import KidsVideo from "../../public/Rectangle 17.png";
import GroupedCircle from "../icons/GroupedCircle";

export default function HearFromThem() {
  return (
    <section className="pl-[4.25rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] pr-[3.63rem] max-xl:pr-[3rem]">
      {/* mt-[2.88rem] pr-[7.06rem] */}
      <div className="flex flex-col justify-center items-center gap-[.5rem] max-md:justify-start max-md:items-start">
        <h2 className="mt-[6.25rem] text-[3.75rem] leading-normal font-extrabold text-[#111111] max-xl:text-[3.5rem] max-lg:text-[2.5rem] max-md:text-[1.6rem] max-md:text-left">
          Hear from our students directly
        </h2>
        <p className=" text-center text-[1.25rem] px-[6rem] max-xl:px-[4rem] max-lg:px-[2rem] max-md:px-[0rem] max-md:text-[.85rem] max-md:text-left ">
          Click below to watch a video interview of one of our students. Watch
          two of our students; Umar and Hasan, as they share their personal
          learning experiences.
        </p>
        {/* Temporary, will change it to a video */}
        <Image
          src={KidsVideo}
          alt="Kids video"
          priority
          className="w-[82rem] mt-[1.75rem]"
        />
        <GroupedCircle />
      </div>
    </section>
  );
}
