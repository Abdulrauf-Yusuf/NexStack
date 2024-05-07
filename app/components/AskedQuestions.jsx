import Accordion from "./Accordion";

export default function AskedQuestions() {
  return (
    <section className="pl-[4.25rem] max-lg:pl-[2.25rem] max-xl:pl-[2.5rem] max-md:pl-[1.88rem] pr-[3.63rem] max-xl:pr-[3rem]">
      <h2 className="mt-[6.25rem] text-[3.75rem] leading-normal font-extrabold text-[#111111] max-xl:text-[3.5rem] max-lg:text-[2.5rem] max-md:text-[1.5rem] text-center max-md:text-left">
        Frequently Asked Questions
      </h2>
      {/* className="mt-[0.94rem] pr-[3.79rem]" */}
      <p className=" text-center text-[1.25rem] px-[6rem] max-xl:px-[4rem] max-lg:px-[2rem] max-md:px-[0rem] max-md:text-[.85rem] max-md:text-left">
        Here are answers to some of the questions we often get from our
        customers.
      </p>
      {/*  Faq */}
      <div className="flex items-start justify-around mt-[4rem] max-lg:flex-col max-lg:mt-[.1rem]">
        <div className="w-[40%] max-xl:w-[65%] max-lg:w-full">
          <Accordion />
        </div>
        {/* Card */}
        <div className="card mr-[2.28rem] ml-[1.8rem] lg:w-[20rem] max-lg:w-[21rem] max-lg:mt-10  ">
          <p className=" font-medium text-[0.89rem] leading-[1.68rem] text-[#FFFFFFCC] pt-[2.3rem]">
            Reach out to us
          </p>
          <h2 className=" font-extrabold text-[2.7394rem] leading-normal text-[#FFFFFF] mt-[0.25rem] ">
            More questions
          </h2>
          <p className=" font-medium text-[1.09044rem] leading-[1.68rem] text-[#FFFFFF] mt-[0.71rem] ">
            Do you have other questions that are not mentioned here or you’ll
            like to get further clarifications on our services?
          </p>
          <button className="bg-[#DA004C] rounded-[0.24781rem] py-[0.5rem] px-[0.99rem] text-[#FFFFFF] text-[1.125rem] font-semibold text-center  border-none mt-[2.51rem] mb-[2.71rem]">
            Speak to our admin
          </button>
        </div>
      </div>
    </section>
  );
}
