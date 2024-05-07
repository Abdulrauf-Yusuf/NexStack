import Image from "next/image";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import LogoWhite from "../icons/LogoWhite";
import WhiteLineIcon from "../icons/WhiteLineIcon";

export default function Footer() {
  const listItems = ["Home", "Courses", "Testimonials"];
  return (
    <>
      <div className="bg-black mt-[6.25rem] pl-[4.25rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] pr-[3.63rem] max-xl:pr-[3rem]  w-full ">
        <div className="flex flex-row gap-[10rem] max-lg:flex-col max-lg:gap-[2rem] max-sm:gap-0">
          <div className="w-1/2 max-lg:w-full">
            <LogoWhite />
            <p className="text-white mt-[1.5rem] text-[1.2rem] max-xl:text-[1.1rem] max-sm:text-[0.875rem]">
              NexStack is an industry-focused tech hub for kids and young
              adults. We’re committed to building the next generation of
              tech-stars.
            </p>
          </div>
          <div>
            <h5 className="text-[1.3rem] text-[#FFFFFF] font-extrabold leading-[2.125rem] mt-[3rem] max-lg:mt-[1rem] max-sm:text-[1rem]">
              QUICK LINKS
            </h5>
            <ul className="text-white mt-[0.5rem]">
              {listItems.map((list, index) => (
                <li
                  key={index}
                  className="text-[1.2rem] max-lg:text-[1rem] font-medium leading-[2.125rem] text-[#FFFFF]"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-[1.25rem] mt-[2rem] max-lg:mt-[2.13rem]">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <LinkedinIcon />
        </div>
        <div>
          <p className="text-[#FFFFFF] mt-[1.19rem] mb-[1.64rem] text-[1.2rem] max-xl:text-[1.1rem] w-full max-sm:text-[0.875rem] ">
            Follow us on social media for exciting updates on the
            services we offer.
          </p>
          <hr className="mr-[4.25rem] max-lg:mr-[2.25rem] max-sm:mr-[.1rem]" />
          {/* <WhiteLineIcon /> */}
          <p className="text-white text-[0.875rem] mt-[1.42rem] font-medium leading-normal pb-[1.37rem] text-center max-sm:text-left">
            {" "}
            © 2022 NexStack Tech Hub.{" "}
          </p>
        </div>
        {/* <div className="pt-[1.38rem]">
        <LogoWhite />
        <p className="text-white mt-[1.31rem] pr-[3.75rem]">
          NexStack is an industry-focused tech hub for kids and young adults.
          We’re committed to building the next generation of tech-stars.
          </p>
          
        <div className="mt-[2.13rem]">
          <h5 className="text-[1rem] text-[#FFFFFF] font-extrabold leading-[2.125rem]">
            QUICK LINKS
          </h5>
          <ul className="text-white mt-[0.5rem]">
            {listItems.map((list, index) => (
              <li
                key={index}
                className="text-[0.875rem] font-medium leading-[2.125rem] text-[#FFFFF]"
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
        {/* <div className="flex flex-row gap-[1.25rem] mt-[2.13rem]">
        <TwitterIcon />
        <InstagramIcon />
        <FacebookIcon />
        <LinkedinIcon />
      </div>
      <div>
      <p className="text-[#FFFFFF] mt-[1.19rem] mb-[1.64rem] text-[0.875rem] font-medium leading-normal ">
      Follow us on social media for exciting updates on the services we
      offer.
      </p>
      <WhiteLineIcon />
      <p className="text-white text-[0.875rem] mt-[1.42rem] font-medium leading-normal pb-[1.37rem]">
      {" "}
      © 2022 NexStack Tech Hub.{" "}
      </p>
    </div> */}
      </div>
    </>
  );
}

{
  /* Social Media Links */
}
