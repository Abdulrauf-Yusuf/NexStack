import Image from "next/image";
import KidImage from "../../public/Rectangle 15 (2).png";
import BlackIcon from "../icons/BlackIcon";
import PinkIcon from "../icons/PinkIcon";
import DarkOrangeIcon from "../icons/DarkOrangeIcon";
import SecBlackIcon from "../icons/SecBlackIcon";
import LineIcon from "../icons/LineIcon";
import StraightLineIcon from "../icons/StraightLineIcon";

export default function WhySection() {
  return (
    <section className="flex flex-row justify-between items-start gap-[3.53rem] pl-[4.25rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] pr-[3.63rem] max-xl:pr-[3rem] mt-[5rem] max-lg:block">
      <div>
        <h2 className="text-[2.5rem] leading-normal font-extrabold text-[#111111] max-md:text-[1.7rem] ">
          Why you should learn with us
        </h2>
        <p className="text-[1rem] text-[#111111] mt-[1.25rem]">
          We offer hands-on and comprehensive project-based learning in an
          engaging learning environment. With us, your kid will be able to
          learn, explore and excel in their preferred technology disciplines.
        </p>
        <Image
          src={KidImage}
          alt="Image of a kid"
          priority
          className="mt-[1.94rem]"
        />
      </div>
      <StraightLineIcon />

      <div>
        <div>
          <BlackIcon />
          <h3 className="text-[1.625rem] uppercase leading-[2.125rem] font-bold mt-[1.06rem] max-xl:text-[1.5rem] max-md:capitalize">
            Flexible Schedule
          </h3>
          <p className="text-[1rem] text-[#111111] mt-[1.06rem]">
            At Nexstack, the timings of our learning sessions are flexibly
            scheduled to conveniently fit round our learners study routine
          </p>
        </div>
        <LineIcon />
        <div>
          <DarkOrangeIcon />
          <h3 className="text-[1.525rem] uppercase leading-[2.125rem] font-bold mt-[1.06rem] max-md:capitalize">
            Small Sized Classes
          </h3>
          <p className="text-[1rem] text-[#111111] mt-[1.06rem]">
            At Nexstack, we prioritize quality over quantity. We offer small
            sized classes for all training sessions in a bid to ensure seamless
            learning and interactions.
          </p>
        </div>
      </div>
      <LineIcon />
      <StraightLineIcon />

      <div>
        <div>
          <PinkIcon />
          <h3 className="text-[1.625rem] uppercase leading-[2.125rem] font-bold mt-[1.06rem] max-md:capitalize">
            Certification
          </h3>
          <p className="text-[1rem] text-[#111111] mt-[1.06rem]">
            We offer certificates upon the successful completion of a course.
            This will be a proof of undertaking a full training and completion
            of all projects as required.
          </p>
        </div>
        <LineIcon />
        <div>
          <SecBlackIcon />
          <h3 className="text-[1.625rem] uppercase leading-[2.125rem] font-bold mt-[1.06rem] max-md:capitalize ">
            One To One Support
          </h3>
          <p className="text-[1rem] text-[#111111] mt-[1.06rem]">
            We know learning a new skill online might be daunting. That is why
            we have dedicated one-to-one support sessions to monitor the
            development and progress of each of our students.
          </p>
        </div>
      </div>
    </section>
  );
}
