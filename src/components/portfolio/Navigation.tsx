import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sectionIds = ["hero", "bio", "work", "contact"];

const Navigation = ({ initialActiveId = "hero" }: { initialActiveId?: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(initialActiveId);

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: document.getElementById("page-scroll"),
          threshold: 0.35,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);

    return () => clearTimeout(timer);
  }, [location]);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome && document.getElementById(id)) {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", location.pathname);
    } else {
      navigate(`/#${id}`);
    }
  };

  const isDark = activeId === "contact";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 px-5 py-4 backdrop-blur-sm sm:px-8 lg:px-10 transition-colors duration-300 ${
        isDark
          ? "bg-black text-white"
          : "bg-[#f7f4f1] text-black"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[11px] font-bold uppercase tracking-[-0.04em]">
        <div className="flex items-center gap-6">
          <a
            href="#bio"
            onClick={(event) => scrollToSection(event, "bio")}
            className={`pb-0.5 border-b transition-colors ${
              activeId === "bio" ? "border-current opacity-100" : "border-transparent opacity-60"
            }`}
          >
            Bio
          </a>
          <a
            href="#work"
            onClick={(event) => scrollToSection(event, "work")}
            className={`pb-0.5 border-b transition-colors ${
              activeId === "work" ? "border-current opacity-100" : "border-transparent opacity-60"
            }`}
          >
            Work
          </a>
        </div>
        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, "contact")}
          className={`pb-0.5 border-b transition-colors ${
            activeId === "contact" ? "border-current opacity-100" : "border-transparent opacity-60"
          }`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;