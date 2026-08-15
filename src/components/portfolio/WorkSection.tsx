import { useState } from "react";
import arifsourceLaptop from "../../assets/arifsource/arifsource-laptop.webp";
import fanosLaptop from "../../assets/fanos/fanos-laptop.webp";
import hudaLaptop from "../../assets/huda/huda-laptop.webp";
import koasLaptop from "../../assets/koas/koas-laptop.webp";
import wbsLaptop from "../../assets/wbs/wbs-laptop.webp";

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
    id: "fanos",
    name: "Fanos",
    tags: "UI / UX / Frontend",
    category: "Dashboard",
    image: fanosLaptop,
    link: "/work/fanos"
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
  }
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="work" className="flex min-h-dvh shrink-0 snap-start snap-always flex-col justify-start overflow-y-auto bg-[#f7f4f1] px-5 pt-24 pb-8 text-black sm:px-8 lg:h-dvh lg:overflow-hidden lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold tracking-[-0.08em] leading-none mb-6 lg:text-[clamp(3.5rem,7vw,7.5rem)] lg:mb-10">
          Work
        </h2>

        <div className="flex flex-col gap-4" onMouseLeave={() => setActiveIndex(null)}>
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <a
                key={project.id}
                href={project.link}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col justify-between gap-0 py-1 transition-all duration-300 cursor-pointer sm:flex-row sm:items-center sm:gap-0 sm:py-2"
              >
                {/* Project Name */}
                <div className="w-full sm:w-1/3">
                  <h3
                    className={`text-[1.7rem] font-bold tracking-tight transition-all duration-500 ease-out sm:text-3xl lg:text-4xl ${
                      isActive ? "translate-x-3 text-black" : "translate-x-0 text-[#a3a3a3]"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Mobile: tags (left) + category (far right) */}
                <div className="flex w-full min-h-[2.5rem] items-center justify-between sm:hidden">
                  <p
                    className={`text-[10px] font-normal transition-colors duration-300 ${
                      isActive ? "text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.tags}
                  </p>

                  <span
                    className={`text-[10px] transition-colors duration-300 ${
                      isActive ? "font-medium text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Tags (desktop only, centered) */}
                <div className="hidden w-1/3 text-center sm:block">
                  <p
                    className={`text-sm font-normal transition-colors duration-300 lg:text-base ${
                      isActive ? "text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.tags}
                  </p>
                </div>

                {/* Category + Preview Image (desktop only) */}
                <div className="relative hidden min-h-[3.5rem] w-1/3 items-center justify-end gap-8 sm:flex">
                  <span
                    className={`text-sm transition-colors duration-300 lg:text-base ${
                      isActive ? "font-medium text-black" : "text-[#a3a3a3]"
                    }`}
                  >
                    {project.category}
                  </span>

                  <div
                    className={`absolute right-0 top-1/2 h-14 w-24 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-black transition-all duration-500 ease-out sm:h-16 sm:w-28 lg:h-20 lg:w-36 ${
                      isActive
                        ? "opacity-100 scale-100 -translate-y-1/2 translate-x-0"
                        : "pointer-events-none -translate-y-1/2 translate-x-6 scale-75 opacity-0"
                    }`}
                  >
                    <img
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
