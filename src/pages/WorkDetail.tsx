import { useParams, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import arifsourceLaptop from "../assets/arifsource/arifsource-laptop.webp";
import arifsourceIpad from "../assets/arifsource/arifsource-ipad.webp";
import arifsourceMobileOne from "../assets/arifsource/arifsource-mobile-one.webp";
import arifsourceMobileTwo from "../assets/arifsource/arifsource-mobile-two.webp";
import fanosLaptop from "../assets/fanos/fanos-laptop.webp";
import fanosIpad from "../assets/fanos/fanos-ipad.webp";
import fanosMobileOne from "../assets/fanos/fanos-mobile-one.webp";
import fanosMobileTwo from "../assets/fanos/fanos-mobile-two.webp";
import hudaLaptop from "../assets/huda/huda-laptop.webp";
import hudaIpad from "../assets/huda/huda-ipad.webp";
import hudaMobileOne from "../assets/huda/huda-mobile-one.webp";
import hudaMobileTwo from "../assets/huda/huda-mobile-two.webp";
import koasLaptop from "../assets/koas/koas-laptop.webp";
import koasIpad from "../assets/koas/koas-ipad.webp";
import koasMobileOne from "../assets/koas/koas-mobile-one.webp";
import koasMobileTwo from "../assets/koas/koas-mobile-two.webp";
import wbsLaptop from "../assets/wbs/wbs-laptop.webp";
import wbsIpad from "../assets/wbs/wbs-ipad.webp";
import wbsMobileOne from "../assets/wbs/wbs-mobile-one.webp";
import wbsMobileTwo from "../assets/wbs/wbs-mobile-two.webp";

type ProjectImages = {
  laptop: string;
  ipad: string;
  mobileOne: string;
  mobileTwo: string;
};

type Project = {
  name: string;
  tags: string;
  category: string;
  description: string;
  url: string;
} & ProjectImages;

const projectImages: Record<string, ProjectImages> = {
  arifsource: {
    laptop: arifsourceLaptop,
    ipad: arifsourceIpad,
    mobileOne: arifsourceMobileOne,
    mobileTwo: arifsourceMobileTwo,
  },
  fanos: {
    laptop: fanosLaptop,
    ipad: fanosIpad,
    mobileOne: fanosMobileOne,
    mobileTwo: fanosMobileTwo,
  },
  huda: {
    laptop: hudaLaptop,
    ipad: hudaIpad,
    mobileOne: hudaMobileOne,
    mobileTwo: hudaMobileTwo,
  },
  koas: {
    laptop: koasLaptop,
    ipad: koasIpad,
    mobileOne: koasMobileOne,
    mobileTwo: koasMobileTwo,
  },
  women: {
    laptop: wbsLaptop,
    ipad: wbsIpad,
    mobileOne: wbsMobileOne,
    mobileTwo: wbsMobileTwo,
  },
};

const projectsData: Record<string, Project> = {
  arifsource: {
    name: "ArifSource",
    tags: "UI / UX / Branding / Frontend / Backend",
    category: "Website",
    url: "https://arifsource.com",
    description:
      "ArifSource is a B2B marketplace platform designed to connect suppliers and buyers, streamlining the procurement process with real-time RFQ management and seamless communication.",
    ...projectImages.arifsource,
  },
  fanos: {
    name: "Fanos",
    tags: "UI / UX / Frontend",
    category: "Dashboard",
    url: "https://fanos-refined.vercel.app",
    description:
      "Fanos is a modern dashboard interface designed for data visualization and management, providing intuitive controls and real-time analytics.",
    ...projectImages.fanos,
  },
  huda: {
    name: "Huda",
    tags: "UI / UX / Frontend / Backend",
    category: "Website",
    url: "https://hudaengineering.com",
    description:
      "Huda Engineering PLC is a digital platform for a construction leader, showcasing premium residential and commercial projects with technical expertise.",
    ...projectImages.huda,
  },
  koas: {
    name: "Koas",
    tags: "UI / UX / Frontend / Backend",
    category: "Website",
    url: "https://koasowner.vercel.app",
    description:
      "Koas is a comprehensive web application designed to deliver seamless user experiences with modern design and robust backend functionality.",
    ...projectImages.koas,
  },
  women: {
    name: "WBS",
    tags: "UI / UX / Frontend",
    category: "Website",
    url: "https://womenbeyondsilence.com",
    description:
      "Women Beyond Silence is a collective digital space centering gender justice and mental health, designed to facilitate healing and international advocacy.",
    ...projectImages.women,
  },
};

const WorkDetailLayout = ({ project }: { project: Project }) => (
  <section className="flex min-h-0 flex-1 px-5 pt-3 pb-4 sm:px-8 sm:pb-6 lg:px-10">
    <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col gap-2 sm:gap-4 lg:flex-row lg:items-stretch lg:gap-5">
      {/* Laptop — left */}
      <div className="relative flex h-[clamp(130px,28dvh,200px)] flex-none items-center justify-center overflow-hidden rounded-2xl bg-black sm:h-[360px] lg:h-auto lg:min-h-0 lg:flex-1">
        <img
          src={project.laptop}
          alt={`${project.name} laptop view`}
          className="relative z-10 h-[88%] w-auto max-w-[92%] translate-y-4 object-contain sm:h-[90%] sm:translate-y-6"
        />
      </div>

      {/* Right column — devices top, text bottom */}
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 lg:gap-8">
        <div className="flex w-full items-stretch gap-3 sm:gap-4">
          <div className="flex h-[7rem] min-w-0 flex-1 items-center justify-center self-center overflow-hidden rounded-xl bg-black sm:h-auto sm:self-stretch">
            <img
              src={project.ipad}
              alt={`${project.name} ipad mockup`}
              className="h-full w-full scale-[0.93] object-contain"
            />
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:gap-4">
            <div className="flex h-[7rem] w-[5.5rem] items-end justify-center overflow-hidden rounded-xl bg-black sm:h-[9.75rem] sm:w-[7.75rem] lg:h-[11.75rem] lg:w-[9.75rem]">
              <img
                src={project.mobileOne}
                alt={`${project.name} mobile mockup 1`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden h-[7rem] w-[5.5rem] items-end justify-center overflow-hidden rounded-xl bg-black sm:flex sm:h-[9.75rem] sm:w-[7.75rem] lg:h-[11.75rem] lg:w-[9.75rem]">
              <img
                src={project.mobileTwo}
                alt={`${project.name} mobile mockup 2`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm sm:text-base font-normal leading-snug max-w-[480px] text-black/80 lg:ml-auto lg:text-right">
            {project.description}
          </p>

          <div className="mt-4 flex items-end justify-between gap-3 sm:mt-5 lg:ml-auto lg:justify-end">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-black/20 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[-0.04em] transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Visit site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <h1 className="text-[clamp(2rem,4.5vw,5rem)] font-bold tracking-[-0.06em] leading-none lg:text-right">
              /{project.name}<sup className="text-[0.3em] align-super">®</sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f7f4f1] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-black mb-4">Project not found</p>
          <button
            onClick={() => navigate("/")}
            className="text-black/60 hover:text-black transition-colors underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#f7f4f1] text-black lg:h-screen">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#f7f4f1]/95 px-5 py-5 backdrop-blur-sm sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[11px] font-bold uppercase tracking-[-0.04em]">
          <div className="flex items-center gap-6">
            <a href="/" className="flex min-h-[44px] items-center transition-opacity hover:opacity-55">Bio</a>
            <a href="/#work" className="flex min-h-[44px] items-center border-b border-black pb-0.5">Work</a>
          </div>
          <a href="/#contact" className="flex min-h-[44px] items-center transition-opacity hover:opacity-55">Contact</a>
        </div>
      </nav>

      <main className="flex min-h-0 flex-1 flex-col pt-16 sm:pt-20">
        <WorkDetailLayout project={project} />
      </main>
    </div>
  );
};

export default WorkDetail;
