import SkeletonImage from "@/components/ui/SkeletonImage";
import hamzaBio from "../../assets/hero/hamza-bio.avif";

const BioSection = () => {
  return (
    <section
      id="bio"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-[#f7f4f1] px-5 pt-24 pb-6 text-black sm:px-8 sm:pt-28 sm:pb-8 lg:h-dvh lg:min-h-0 lg:shrink-0 lg:snap-start lg:snap-always lg:px-10 lg:py-10"
    >
      <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-between">
        {/* Mobile View */}
        <div className="flex flex-1 flex-col justify-between gap-4 lg:hidden">
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px]">
            <SkeletonImage
              src={hamzaBio}
              alt="Hamzah Abdo"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
          </div>

          <h2 className="text-[clamp(2.2rem,7.5vw,3.8rem)] font-bold italic leading-none tracking-[-0.08em]">
            Hamzah Abdo.
          </h2>

          <div className="space-y-2 text-xs font-semibold leading-relaxed tracking-[-0.03em] sm:text-sm">
            <p>
              A Full-Stack Developer based in Addis Ababa, Ethiopia with over 2 years of experience.
            </p>
            <p className="text-black/70">
              Building scalable backend systems and refined interfaces. Open to new roles & freelance collaborations.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-black/10 pt-3 text-xs font-bold uppercase tracking-tight text-black/60 sm:text-sm">
            <span>2+ YRS EXP</span>
            <span>15+ PROJECTS</span>
            <span>FULL-STACK</span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden flex-1 grid-cols-[1.15fr_1.25fr_1fr] items-center gap-12 lg:grid xl:gap-16">
          {/* Left: Heading & Intro */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(3.5rem,6.5vw,6.5rem)] font-bold italic leading-[0.88] tracking-[-0.09em]">
              Hamzah Abdo.
            </h2>
            <p className="mt-8 max-w-[400px] text-[clamp(1.3rem,1.9vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.06em]">
              Full-Stack Developer based in Addis Ababa, Ethiopia. Available for full-time roles & freelance.
            </p>
          </div>

          {/* Center: Clean portrait positioned lower */}
          <div className="flex items-center justify-center lg:translate-y-8 xl:translate-y-12">
            <div className="w-full max-w-[450px] xl:max-w-[490px]">
              <SkeletonImage
                src={hamzaBio}
                alt="Hamzah Abdo"
                className="aspect-[3/4] w-full rounded-3xl object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Narrative & Clean Minimal Stats */}
          <div className="flex flex-col justify-center space-y-8 text-[15px] xl:text-[17px] font-semibold leading-[1.8] tracking-[-0.03em] text-black/80">
            <div className="space-y-5">
              <p>
                I focus on combining robust engineering with thoughtful design to build high-performance digital solutions that elevate businesses and delight users.
              </p>
              <p className="text-black/60 font-medium">
                With a background across multiple sectors, I craft end-to-end applications from architecture to interaction.
              </p>
            </div>

            {/* Minimal Stat Lines */}
            <div className="border-t border-black/15 pt-6 space-y-3.5 text-sm xl:text-base uppercase tracking-wider font-bold">
              <div className="flex items-center justify-between">
                <span className="text-black/50 text-xs xl:text-sm">Experience</span>
                <span className="text-black">2+ Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/50 text-xs xl:text-sm">Delivered</span>
                <span className="text-black">5+ Solutions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/50 text-xs xl:text-sm">Focus</span>
                <span className="text-black">Full-Stack & UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
