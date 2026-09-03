import { useState } from "react";
import SkeletonImage from "@/components/ui/SkeletonImage";
import arifsourceLaptop from "../../assets/arifsource/arifsource-laptop.webp";
import hudaLaptop from "../../assets/huda/huda-laptop.webp";
import koasLaptop from "../../assets/koas/koas-laptop.webp";
import wbsLaptop from "../../assets/wbs/wbs-laptop.webp";
import girlupLaptop from "../../assets/girl-up-artemis/girlup-laptop.avif";

const projects = [
  {
    id: "arifsource",
    name: "ArifSource",
    tags: "UI / UX / Branding / Frontend / Backend",
    category: "Website",
    image: arifsourceLaptop,
    link: "/work/arifsource"
  },
  {
    id: "huda",
    name: "Huda Engineering",
    tags: "UI / UX / Frontend / Backend",
    category: "Website",
    image: hudaLaptop,
    link: "/work/huda"
  },
  {
    id: "koas",
    name: "Koas",
    tags: "UI / UX / Frontend / Backend",
    category: "Website",
    image: koasLaptop,
    link: "/work/koas"
  },
  {
    id: "women",
    name: "Women Beyond Silence",
    tags: "UI / UX / Frontend",
    category: "Website",
    image: wbsLaptop,
    link: "/work/women"
  },
  {
    id: "artemis",
    name: "Girl Up Artemis",
    tags: "UI / UX / Frontend",
    category: "Website",
    image: girlupLaptop,
    link: "/work/artemis"
  }
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="work" className="flex min-h-dvh flex-col overflow-hidden bg-[#f7f4f1] px-5 pt-24 pb-6 text-black sm:px-8 sm:pt-28 sm:pb-8 lg:h-dvh lg:min-h-0 lg:shrink-0 lg:snap-start lg:snap-always lg:overflow-hidden lg:pt-20 lg:px-10 lg:pb-8">
      <div className="mx-auto w-full max-w-[1600px] flex h-full flex-col justify-between">
        <h2 className="text-3xl font-bold tracking-[-0.08em] leading-none mb-1 sm:text-4xl sm:mb-3 lg:text-[clamp(3.2rem,5.5vw,5.5rem)] lg:mb-6">
          Work
        </h2>

        <div className="flex flex-1 flex-col justify-between py-2 sm:gap-3 lg:flex-1 lg:justify-evenly lg:py-1 xl:gap-6" onMouseLeave={() => setActiveIndex(null)}>
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <a
                key={project.id}
                href={project.link}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col justify-between gap-0.5 py-0.5 transition-all duration-300 cursor-pointer sm:flex-row sm:items-center sm:gap-0 sm:py-2 lg:py-2.5 xl:py-3"
              >
                {/* Project Name */}
                <div className="w-full sm:w-1/3">
                  <h3
                    className={`text-[1.15rem] font-bold tracking-tight transition-all duration-500 ease-out sm:text-2xl lg:text-[2.15rem] xl:text-[2.65rem] ${
                      isActive ? "translate-x-3 text-black" : "translate-x-0 text-[#a3a3a3]"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Mobile: tags (left) + category (far right) */}
                <div className="flex w-full min-h-[1.5rem] items-center justify-between sm:hidden">
                  <p
                    className={`text-[9.5px] font-normal transition-colors duration-300 ${
                      isActive ? "text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.tags}
                  </p>

                  <span
                    className={`text-[9.5px] transition-colors duration-300 ${
                      isActive ? "font-medium text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Tags (desktop only, centered) */}
                <div className="hidden w-1/3 text-center sm:block">
                  <p
                    className={`text-sm font-normal transition-colors duration-300 lg:text-[17px] xl:text-lg ${
                      isActive ? "text-black font-medium" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.tags}
                  </p>
                </div>

                {/* Category + Preview Image (desktop only) */}
                <div className="relative hidden min-h-[3.5rem] w-1/3 items-center justify-end gap-8 sm:flex">
                  <span
                    className={`text-sm transition-colors duration-300 lg:text-[17px] xl:text-lg ${
                      isActive ? "font-medium text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.category}
                  </span>

                  <div
                    className={`absolute right-0 top-1/2 h-14 w-24 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-black transition-all duration-500 ease-out sm:h-16 sm:w-28 lg:h-22 lg:w-38 xl:h-24 xl:w-42 ${
                      isActive
                        ? "opacity-100 scale-100 -translate-y-1/2 translate-x-0"
                        : "pointer-events-none -translate-y-1/2 translate-x-6 scale-75 opacity-0"
                    }`}
                  >
                    <SkeletonImage
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
