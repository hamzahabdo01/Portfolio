import portrait from "../../assets/hero/hamza-child.webp";

const BioSection = () => {
  return (
    <section id="bio" className="flex min-h-dvh shrink-0 snap-start snap-always flex-col justify-start overflow-y-auto bg-[#f7f4f1] px-5 pb-8 pt-24 text-black sm:px-8 lg:h-dvh lg:overflow-hidden lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Mobile / tablet view */}
        <div className="flex flex-col gap-8 lg:hidden">
          <div className="flex items-start">
            <h2 className="text-[clamp(4.5rem,9.5vw,9.5rem)] font-bold italic leading-[0.78] tracking-[-0.1em]">Hey!</h2>
            <span className="relative ml-2 mt-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f6b94d] text-3xl font-normal leading-none text-[#f6b94d] sm:h-20 sm:w-20 sm:text-4xl">
              <span>⌣</span>
              <i className="absolute left-[27%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#f6b94d] sm:h-2 sm:w-2" />
              <i className="absolute right-[27%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#f6b94d] sm:h-2 sm:w-2" />
            </span>
          </div>

          <div className="text-sm font-semibold leading-[1.8] tracking-[-0.04em] [word-spacing:0.2em]">
            <p>
              I am a Software Engineer with over 2 years of experience. I have worked with multiple sectors and had the privilege of collaborating with exceptional entrepreneurs.
            </p>
            <p className="mt-4">
              My work focuses on combining creativity and functionality to deliver exceptional user experiences while enhancing business performance. With a rich portfolio and a passion for innovation, I continue to contribute to impactful digital solutions.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[600px]">
            <img src={portrait} alt="Illustrated portrait of Hamzah Abdo" className="h-auto w-full rounded-[2rem]" />
          </div>

          <p className="hidden text-[clamp(1.3rem,2vw,2rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
            Design by <span className="font-[1000] italic">Hamzah</span>, a software engineer based in Addis Ababa, Ethiopia. Currently part of the design team at <span className="italic">JLink.</span>
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden grid-cols-[1.05fr_1.35fr_0.95fr] gap-x-10 lg:grid lg:pt-10">
          <div className="self-start">
            <div className="flex items-start">
              <h2 className="text-[clamp(4.5rem,9.5vw,9.5rem)] font-bold italic leading-[0.78] tracking-[-0.1em]">Hey!</h2>
              <span className="relative ml-2 mt-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f6b94d] text-3xl font-normal leading-none text-[#f6b94d] sm:h-20 sm:w-20 sm:text-4xl">
                <span>⌣</span>
                <i className="absolute left-[27%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#f6b94d] sm:h-2 sm:w-2" />
                <i className="absolute right-[27%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#f6b94d] sm:h-2 sm:w-2" />
              </span>
            </div>
            <p className="mt-16 max-w-[300px] text-[clamp(1.3rem,2vw,2rem)] font-semibold leading-[1.02] tracking-[-0.065em] lg:mt-[12rem]">
              Design by <span className="font-[1000] italic">Hamzah</span>, a software engineer based in Addis Ababa, Ethiopia. Currently part of the design team at <span className="italic">JLink.</span>
            </p>
          </div>

          <div className="relative mx-auto mt-24 w-full max-w-[600px] lg:mt-[7rem] lg:-translate-x-5 lg:self-center">
            <img src={portrait} alt="Illustrated portrait of Hamzah Abdo" className="h-auto w-full rounded-[2rem]" />
          </div>

          <div className="mt-24 max-w-[320px] text-sm font-semibold leading-[1.8] tracking-[-0.04em] [word-spacing:0.2em] lg:mt-[15rem]">
            <p>
              I am a Software Engineer with over 2 years of experience. I have worked with multiple sectors and had the privilege of collaborating with exceptional entrepreneurs.
            </p>
            <p className="mt-10">
              My work focuses on combining creativity and functionality to deliver exceptional user experiences while enhancing business performance. With a rich portfolio and a passion for innovation, I continue to contribute to impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
