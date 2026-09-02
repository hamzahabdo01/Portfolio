import SkeletonImage from "@/components/ui/SkeletonImage";
import portrait from "../../assets/hero/hamzah-portrait.webp";
import { Github, Send } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer id="contact" className="flex min-h-dvh flex-col overflow-hidden bg-black text-white px-5 pt-14 pb-3 sm:px-8 sm:pt-16 lg:h-dvh lg:min-h-0 lg:shrink-0 lg:snap-start lg:snap-always lg:px-10">
      <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col">
        {/* Main CTA */}
        <div className="flex flex-1 flex-col justify-center gap-6 lg:gap-10">
          {/* Headline */}
          <div className="text-left">
            <h2 className="text-[clamp(1.6rem,4vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">
              Scaling <br /> <span className="italic">Start-ups</span> <br />for Growth.
            </h2>
          </div>

          {/* Quick Links + Contact */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:justify-end sm:gap-14 sm:pr-24 lg:pr-40">
            {/* Quick Links */}
            <div className="w-full max-w-[310px] sm:w-auto sm:max-w-none">
              <h3 className="mb-5 text-base font-semibold">/Quick links</h3>
              <div className="flex max-w-[310px] flex-wrap justify-center gap-2 sm:justify-start">
                <a href="#bio" onClick={(event) => scrollToSection(event, "bio")} className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#f786be] px-3 py-2 text-xs font-bold uppercase tracking-wider text-black/95 transition-colors hover:bg-[#f786be]/80">
                  Bio
                </a>
                <a href="#work" onClick={(event) => scrollToSection(event, "work")} className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#f786be] px-3 py-2 text-xs font-bold uppercase tracking-wider text-black/95 transition-colors hover:bg-[#f786be]/80">
                  Work
                </a>
                <a href="https://t.me/+251991847935" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#f786be] px-3 py-2 text-xs font-bold uppercase tracking-wider text-black/95 transition-colors hover:bg-[#f786be]/80">
                  <Send className="h-3.5 w-3.5" />
                  Telegram
                </a>
                <a href="https://wa.me/251991847935" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#f786be] px-3 py-2 text-xs font-bold uppercase tracking-wider text-black/95 transition-colors hover:bg-[#f786be]/80">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
                <a href="https://github.com/hamzahabdo01" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#f786be] px-3 py-2 text-xs font-bold uppercase tracking-wider text-black/95 transition-colors hover:bg-[#f786be]/80">
                  <Github className="h-3.5 w-3.5" />
                  Github
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="w-full max-w-[310px] sm:w-auto sm:max-w-none">
              <h3 className="mb-5 text-base font-semibold">/Contact</h3>
              <div className="flex items-start gap-4 sm:block">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white/20 sm:hidden">
                  <SkeletonImage
                    src={portrait}
                    alt="Hamzah Abdo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className=" text-sm text-white/70">
                  <a href="mailto:hamzah@creativestudio.com" className="flex min-h-[44px] items-center transition-colors hover:text-white">
                    hamza.abdo19@gmail.com
                  </a>
                  <a href="tel:+251911000000" className="flex min-h-[44px] items-center transition-colors hover:text-white">
                    +251 991847935
                  </a>
                  <p className="flex min-h-[44px] items-center leading-relaxed">
                    Addis Ababa,
                    Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Creative is */}
        <div className="shrink-0 border-t border-white/10 py-1.5 sm:py-3">
          <div className="flex items-center justify-center gap-4 sm:justify-start sm:gap-6">
            <div className="hidden h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white/20 sm:block sm:h-44 sm:w-44">
              <SkeletonImage
                src={portrait}
                alt="Hamzah Abdo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-[clamp(1.6rem,7vw,12rem)] font-bold tracking-[-0.04em] leading-none whitespace-nowrap sm:text-[clamp(3rem,11vw,12rem)]">
              Creative is joy
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex shrink-0 flex-col items-center justify-between gap-2 border-t border-white/10 py-3 text-xs font-medium text-white/40 sm:flex-row sm:gap-4 sm:py-4">
          <p>© 2026 Hamzah Abdo.</p>
          <div className="flex gap-6">
            <a href="#" className="flex min-h-[44px] items-center transition-colors hover:text-white/70">Terms and Conditions</a>
            <a href="#" className="flex min-h-[44px] items-center transition-colors hover:text-white/70">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
