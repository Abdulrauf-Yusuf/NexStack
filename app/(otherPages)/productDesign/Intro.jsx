export default function Intro() {
  return (
   
    <section className="text-center bg-[rgb(218,0,76)] max-sm:text-left ">
      <div className="flex flex-col max-sm:pl-[1.88rem] ">
        <h2 className="text-[3rem] mt-[11rem] text-[#FFFFFF] leading-normal font-extrabold max-lg:text-[2.5rem] max-sm:text-[1.5rem] max-sm:mt-[9rem]">
          Fundamentals of Product Design
        </h2>
        <p className="mt-[.5rem] text-[#FFFFFF] text-[1.3rem] px-[25rem] max-xl:px-[15rem] max-lg:px-[6rem] max-sm:text-[1.1rem] max-sm:px-0 max-sm:mt-[1.06rem] ">
          Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus
          nunc eleifend tincidunt.
        </p>
        <div className="flex flex-row justify-center items-center mt-[3rem] gap-[3.37rem] max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:mt-[2rem] max-sm:gap-[1rem]">
          <h2 className=" text-[#FFFFFF] text-[1.7rem] max-sm:text-[1.5rem]">
            <span className="text-[#FFFFFFB2]">Price :</span> $25
          </h2>
          <h2 className=" text-[#FFFFFF] text-[1.7rem] max-sm:text-[1.5rem]">
            <span className="text-[#FFFFFFB2]">Duration :</span> 3 months
          </h2>
        </div>
        <div className="flex flex-row gap-[1.94rem] justify-center items-center mt-[3.47rem] mb-[7.72rem] max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:mb-[4.76rem] ">
          <button className=" px-[1.25rem] py-[0.62rem] w-[9.8125rem] bg-[#FFFFFF]  text-[#333333] rounded-[0.625rem] text-[1.125rem] text-center font-semibold leading-normal">
            Register
          </button>
          <button className=" px-[1.25rem] py-[0.62rem] w-[9.8125rem] border border-solid border-[#FFFFF] text-[#FFFFFF] rounded-[0.625rem] text-[1.125rem] text-center font-medium leading-normal">
            See scheme
          </button>
        </div>
      </div>
    </section>
  );
}
