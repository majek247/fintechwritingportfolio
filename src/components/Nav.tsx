import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="flex items-center gap-2 font-serif text-2xl text-paper">
          <svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 52 26 16l12 22 6-10 12 24z" fill="#7BE0A4" /></svg>
          GrowUp
        </Link>
        <nav className="hidden items-center gap-9 text-sm text-sage md:flex">
          <Link to="/" className="hover:text-paper">Portfolio</Link>
          <a href="/#articles" className="hover:text-paper">Articles</a>
          <a href="/#approach" className="hover:text-paper">Approach</a>
        </nav>
        <a href={SITE.contact} className="rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-paper">
          Let’s talk
        </a>
      </div>
    </header>
  );
}
