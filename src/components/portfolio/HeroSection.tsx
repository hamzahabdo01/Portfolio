import { useEffect, useState } from "react";
import { Copyright } from "lucide-react";
import portrait from "../../assets/hero/hamzah-portrait.png";
import logo from "../../assets/hero/hamzah-logo.png";

const creativeWords = ["Creative", "Inspired", "Building", "Refining"];
const widestWord = "Creative";

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((index) => (index + 1) % creativeWords.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-dvh shrink-0 snap-start snap-always overflow-hidden bg-[#f7f4f1] px-5 pb-6 pt-24 text-black sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex h-[calc(100dvh-7.5rem)] max-w-[1600px] flex-col justify-between">
        {/* Mobile / tablet: vertical stack */}
        <div className="flex flex-1 flex-col items-center justify-center pb-40 lg:hidden">
          <img
            src={portrait}
            alt="Illustrated portrait of Hamzah Abdo"
            className="h-32 w-32 rounded-full object-cover sm:h-48 sm:w-48"
          />
          <h1 className="mt-8 flex items-baseline justify-center text-center text-[clamp(2.8rem,11vw,10rem)] font-bold leading-[0.73] tracking-[-0.095em] sm:mt-12">
            <span className="relative inline-block">
              <span
                aria-hidden
                className="invisible inline-block origin-left scale-x-[1] tracking-[-0.055em]"
              >
                {widestWord}
              </span>
              <span
                key={wordIndex}
                className="animate-slide-up absolute left-0 top-0 inline-block origin-left scale-x-[1] tracking-[-0.055em] whitespace-nowrap"
              >
                {creativeWords[wordIndex]}
              </span>
            </span>
            <span className="ml-[0.3em]">is</span>
            <span className="ml-[0.35em] italic">joy</span>
          </h1>
        </div>

        {/* Desktop: editorial headline */}
        <div className="relative hidden pt-8 sm:pt-12 lg:block lg:pt-20">
          <h1 className="hero-title relative z-10 max-w-[1320px] text-[clamp(2.2rem,9.5vw,9.5rem)] font-bold leading-[0.73] tracking-[-0.095em] sm:text-[clamp(3.65rem,13.2vw,13.75rem)]">
            <span className="relative mr-[0.85em] inline-block">
              <span
                aria-hidden
                className="invisible inline-block origin-left scale-x-[1] tracking-[-0.055em]"
              >
                {widestWord}
              </span>
              <span
                key={wordIndex}
                className="animate-slide-up absolute left-0 top-0 inline-block origin-left scale-x-[1] tracking-[-0.055em] whitespace-nowrap"
              >
                {creativeWords[wordIndex]}
              </span>
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 -ml-[0.5em] inline-block origin-left scale-x-[1] tracking-[-0.055em]">is</span>
              <span className="absolute left-[0.6em] -top-[0.32em] -z-0 block h-[1.15em] w-[1.15em] overflow-hidden rounded-full border-[0.045em] border-black bg-black">
                <img
                  src={portrait}
                  alt="Illustrated portrait of Hamzah Abdo"
                  className="h-full w-full object-cover"
                />
              </span>
            </span>
            <span className="ml-[5.5em] mt-[0.14em] block w-fit whitespace-nowrap italic">joy</span>
          </h1>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 sm:mt-16 sm:gap-6 lg:items-end">
          <div className="flex items-center text-2xl font-black leading-none tracking-[-0.09em] sm:text-4xl lg:text-7xl">
            <Copyright strokeWidth={3} className="mr-[0.04em] h-[0.7em] w-[0.7em]" />
            2026
          </div>

          <div className="w-[40px] shrink-0 overflow-hidden rounded-md sm:w-[60px] lg:absolute lg:bottom-3 lg:left-1/2 lg:w-[80px] lg:-translate-x-1/2">
            <img src={logo} alt="Hamzah Abdo monogram" className=" w-full object-cover" />
          </div>

          <p className="max-w-[100px] text-right text-[9px] font-bold uppercase leading-tight tracking-[-0.04em] sm:max-w-none sm:text-xs">
            / Building digital experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
