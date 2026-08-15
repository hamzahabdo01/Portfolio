import { useEffect } from "react";
import BioSection from "@/components/portfolio/BioSection";
import HeroSection from "@/components/portfolio/HeroSection";
import Navigation from "@/components/portfolio/Navigation";
import SectionScroller from "@/components/portfolio/SectionScroller";
import WorkSection from "@/components/portfolio/WorkSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) return;

    const isNestedScrollable = (element: Element | null): boolean => {
      if (!element) return false;
      const style = getComputedStyle(element);
      const scrollable =
        style.overflowY === "auto" || style.overflowY === "scroll";
      return scrollable && element.scrollHeight > element.clientHeight;
    };

    const preventPageScroll = (event: Event) => {
      const target = event.target as Element | null;
      if (!target) return;

      const scrollRoot = document.getElementById("page-scroll");
      let node: Element | null = target;
      while (node && node !== scrollRoot) {
        if (isNestedScrollable(node)) return;
        node = node.parentElement;
      }

      event.preventDefault();
    };

    const preventKeyScroll = (event: KeyboardEvent) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (keys.includes(event.key)) event.preventDefault();
    };

    const scrollRoot = document.getElementById("page-scroll");
    scrollRoot?.addEventListener("wheel", preventPageScroll, { passive: false });
    scrollRoot?.addEventListener("touchmove", preventPageScroll, {
      passive: false,
    });
    window.addEventListener("keydown", preventKeyScroll);

    return () => {
      document.body.style.overflow = previousOverflow;
      scrollRoot?.removeEventListener("wheel", preventPageScroll);
      scrollRoot?.removeEventListener("touchmove", preventPageScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, []);

  return (
    <div
      id="page-scroll"
      className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth overscroll-y-contain"
    >
      <Navigation />
      <SectionScroller />
      <HeroSection />
      <BioSection />
      <WorkSection />
      <Footer />
    </div>
  );
};

export default Index;
