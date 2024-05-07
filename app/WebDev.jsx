export default function WebDev() {
  return (
    <section>
      <div className="bg-[#E86E04]">
        <h2 className="text-[#FFFFFF]">Fundamentals of Web Development</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Scelerisque eu urna tellus
          nunc eleifend tincidunt.
        </p>
        <h2>Price : $25</h2>
        <h2>Duration : 3 months</h2>
        <button className="btn bg-[#FFFFFF] text-[#333333] rounded-[0.625rem]">
          Register
        </button>
        <button className="btn border border-solid border-[#FFFFF] text-[#FFFFFF] rounded-[0.625rem]">
          See scheme
        </button>
      </div>

      {/* Second Section */}
      <section>
        <div className="flex flex-row justify-between items-center bg-[#FFFFF]">
          <h3>Course description</h3>
          <a
            href="/"
            className="text-[#E86E04] text-[0.875rem] font-semibold leading-normal"
          >
            Download Scheme
          </a>
        </div>
        <p className="text-[#555555] text-[1rem] leading-normal font-normal">
          Lorem ipsum dolor sit amet consectetur. Non sodales proin ornare nisi.
          Elit aliquet laoreet hendrerit mi. Pharetra vulputate purus potenti
          scelerisque natoque facilisi dignissim quis sed. Aliquet aliquam
          tortor mi fermentum aliquam sit. Maecenas at nullam pulvinar ultrices
          proin in nec. Laoreet ullamcorper tristique aliquet felis quis congue
          est. Mauris fermentum arcu adipiscing pharetra pretium. Sit lectus
          bibendum aliquet eu feugiat malesuada non auctor nibh.
        </p>
        <button className="btn bg-[#E86E04] text-[#FFFFFF] rounded-[0.625rem] text-[1.125rem] font-semibold leading-normal">
          Register
        </button>
        <button className="btn bg-[#FFFFFF] text-[#E86E04] rounded-[0.3125rem] border border-solid border-[#E86E04] text-[1.125rem] font-semibold leading-normal">
          Speak to our admin
        </button>
      </section>
    </section>
  );
}
