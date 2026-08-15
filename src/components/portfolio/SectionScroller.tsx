import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sectionIds = ["hero", "bio", "work", "contact"];

const SectionScroller = () => {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const scrollRoot = document.getElementById("page-scroll");
    if (!scrollRoot) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollRoot;
      setAtTop(scrollTop < 10);
      setAtBottom(scrollHeight - scrollTop - clientHeight < 10);
    };

    scrollRoot.addEventListener("scroll", update, { passive: true });
    update();

    return () => scrollRoot.removeEventListener("scroll", update);
  }, []);

  const scrollSection = (direction: 1 | -1) => {
    const scrollRoot = document.getElementById("page-scroll");
    if (!scrollRoot) return;

    const positions = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      return (
        el.getBoundingClientRect().top -
        scrollRoot.getBoundingClientRect().top +
        scrollRoot.scrollTop
      );
    });

    let current = 0;
    for (let i = 0; i < positions.length; i++) {
      if (scrollRoot.scrollTop >= positions[i] - 1) current = i;
    }

    const target = Math.min(Math.max(current + direction, 0), positions.length - 1);
    scrollRoot.scrollTo({ top: positions[target], behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-1 rounded-2xl border border-black/20 bg-[#f7f4f1]/95 p-1.5 text-black shadow-sm backdrop-blur-sm sm:right-8 lg:hidden">
      <button
        type="button"
        aria-label="Scroll to previous section"
        disabled={atTop}
        onClick={() => scrollSection(-1)}
        className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <div className="h-px w-6 bg-black/20" />

      <button
        type="button"
        aria-label="Scroll to next section"
        disabled={atBottom}
        onClick={() => scrollSection(1)}
        className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
      >
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SectionScroller;