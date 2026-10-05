import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";

const HERO_HEIGHT = 650; // scroll distance (px) before the nav turns solid

const LINKS = [
  { id: "work", label: "Portfolio" },
  { id: "approach", label: "Approach" },
  { id: "investment", label: "Investment" },
  { id: "faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > HERO_HEIGHT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScrollSpy = () => {
      let current: string | null = null;
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScrollSpy();
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", onScrollSpy);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/25 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`relative mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? "rounded-2xl bg-[#041b1c] px-8 py-3" : "py-6"
        }`}
        style={{
          width: scrolled
            ? "min(1340px, calc(100% - 96px))"
            : "min(1340px, calc(100% - 96px))",
        }}
      >
        <a
          href="https://www.seo-growup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="/images/growupblacklogotransparent.png"
            alt="GrowUp"
            width="180"
            height="48"
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-9 text-[15px] md:flex">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              className={`font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition ${
                active === id ? "text-[#1F9FA1]" : "text-white hover:text-[#1F9FA1]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.seo-growup.com/get-in-touch"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#167273] px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:bg-[#1d8f90]"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}