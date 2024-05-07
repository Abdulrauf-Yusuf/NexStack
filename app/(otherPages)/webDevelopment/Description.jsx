import DownloadIcon from "../../icons/DownloadIcon";

export default function Description() {
  return (
    <section className="px-[4.25rem] max-md:px-[2.25rem] max-sm:px-0 max-sm:pl-[1.88rem]">
      <div className="flex flex-row justify-between items-center bg-[#FFFFF] pt-[5.81rem] pr-[1.87rem] max-md:pr-[1rem]">
        <h3 className="text-[2rem] text-[#333333] font-bold leading-normal max-lg:text-[1.7rem] max-sm:text-[1.3rem]">
          Course description
        </h3>
        <div className=" flex flex-row justify-between items-center gap-[0.62rem] border border-solid border-[#E86E04] py-[0.625rem] px-[1.25rem] rounded-[0.625rem] max-lg:py-[.5rem] max-lg:px-[1rem] max-md:px-[.7rem] max-sm:border-none ">
          {/* underline underline-offset-4 */}
          <DownloadIcon />
          <button
            href="/"
            className="text-[#E86E04] text-[1.1rem] font-semibold leading-normal max-md:text-[1rem] max-sm:underline max-sm:underline-offset-4"
          >
            Download Scheme
          </button>
        </div>
      </div>
      <p className="text-[#555555] mt-[2rem] pr-[1.5rem] text-[1.2rem] leading-normal font-medium max-lg:text-[1rem] max-lg:pr-[.9rem]">
        Lorem ipsum dolor sit amet consectetur. Non sodales proin ornare nisi.
        Elit aliquet laoreet hendrerit mi. Pharetra vulputate purus potenti
        scelerisque natoque facilisi dignissim quis sed. Aliquet aliquam tortor
        mi fermentum aliquam sit. Maecenas at nullam pulvinar ultrices proin in
        nec. Laoreet ullamcorper tristique aliquet felis quis congue est. Mauris
        fermentum arcu adipiscing pharetra pretium. Sit lectus bibendum aliquet
        eu feugiat malesuada non auctor nibh.
      </p>
      <div className="flex flex-row mt-[2.96rem] gap-[2.81rem] max-sm:flex-col">
        <button className=" py-[0.62rem] px-[1.25rem] bg-[#E86E04] text-[#FFFFFF] w-[12.875rem] rounded-[0.625rem] text-[1.25rem] font-semibold leading-normal max-sm:w-[13.875rem]">
          Register
        </button>
        <button className=" bg-[#FFFFFF]  py-[0.62rem] px-[1.25rem] w-[16.3125rem] text-[#E86E04] rounded-[0.3125rem] border border-solid border-[#E86E04] text-[1.25rem] font-semibold leading-normal max-sm:w-[13.875rem] max-sm:text-[1.125rem]">
          Speak to our admin
        </button>
      </div>
    </section>
  );
}
