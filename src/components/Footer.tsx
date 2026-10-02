import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-sage md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-serif text-xl text-paper">GrowUp</p>
        <p>Fintech content, researched and written to rank and to be read.</p>
        <a href={SITE.contact} className="text-mint hover:text-paper">Start a project</a>
      </div>
    </footer>
  );
}
