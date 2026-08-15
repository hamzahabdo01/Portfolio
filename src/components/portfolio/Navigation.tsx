import { useState, useEffect } from "react";

const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const sectionIds = ["hero", "bio", "work", "contact"];

const Navigation = () => {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const scrollRoot = document.getElementById("page-scroll");
    if (!scrollRoot) return;

    const handleScroll = () => {
      const scrollTop = scrollRoot.scrollTop;
      const scrollHeight = scrollRoot.scrollHeight;
      const clientHeight = scrollRoot.clientHeight;

      if (scrollHeight - scrollTop - clientHeight < 10) {
        setActiveId("contact");
        return;
      }

      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= clientHeight * 0.5) {
          current = id;
        }
      }
      setActiveId(current);
    };

    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scrollRoot.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = activeId === "contact";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 px-5 py-4 backdrop-blur-sm sm:px-8 lg:px-10 transition-colors duration-300 ${
        isDark
          ? "bg-black text-white"
          : "bg-transparent text-black"
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