import { Link } from "react-router-dom";
import Art from "../components/Art";
import { articles } from "../data/articles";
import { SITE } from "../data/site";

const approach = [
  { t: "Research before the first draft", d: "Every piece starts with primary sources, regulator documents and real product behaviour, not rewrites of the top search results." },
  { t: "Written to rank and to be read", d: "Search intent shapes the structure. Clear argument, plain language and useful visuals keep readers on the page." },
  { t: "Built for specialist audiences", d: "Founders, risk leads and product teams get depth without jargon fog, and compliance teams get claims they can defend." },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-forest via-ink to-ink pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 md:px-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="hero-in">
            <p className="mb-6 text-sm text-sage">Fintech writing portfolio</p>
            <h1 className="text-5xl leading-[1.04] md:text-7xl">
              Fintech content that earns trust, <span className="text-mint">and rankings.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-sage">
              Three long-form pieces on open banking, embedded finance and fraud prevention. Researched, structured for search, and written for the people who build and buy financial products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#articles" className="rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-paper">Read the articles</a>
              <a href={SITE.contact} className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold transition hover:border-mint hover:text-mint">Work with us</a>
            </div>
            <dl className="mt-14 flex gap-10 border-t border-white/10 pt-8">
              {[["3", "Featured deep-dives"], ["1,600+", "Words in every piece"], ["100%", "Research-backed"]].map(([n, l]) => (
                <div key={l}><dt className="font-serif text-3xl">{n}</dt><dd className="mt-1 text-xs text-sage">{l}</dd></div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-30px_rgba(123,224,164,.35)]">
            <Art kind="hero" className="block h-full w-full" />
          </div>
        </div>
      </section>

      <section id="articles" className="bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Selected fintech articles</h2>
            <p className="mt-4 text-lg text-ink/70">Each piece is shown as published: full copy, structure and visuals.</p>
          </div>
          <div className="space-y-20">
            {articles.map((a, i) => (
              <Link key={a.slug} to={`/articles/${a.slug}`} className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={`overflow-hidden rounded-[1.75rem] shadow-xl shadow-ink/10 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Art kind={a.hero} className="block aspect-[4/3] w-full transition duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pine">{a.category} · {a.readTime}</p>
                  <h3 className="mt-3 text-3xl leading-tight md:text-4xl">{a.title}</h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/70">{a.dek}</p>
                  <span className="mt-7 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold transition group-hover:gap-4 group-hover:border-pine group-hover:text-pine">Read the article <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-forest">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <h2 className="max-w-3xl text-4xl md:text-5xl">How the writing gets made</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {approach.map((x) => (
              <div key={x.t} className="border-t border-mint/40 pt-6">
                <h3 className="text-2xl">{x.t}</h3>
                <p className="mt-3 leading-relaxed text-sage">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:px-10">
          <h2 className="text-4xl md:text-6xl">Need fintech content that holds up to an expert reader?</h2>
          <a href={SITE.contact} className="mt-10 inline-block rounded-full bg-mint px-9 py-4 text-sm font-semibold text-ink transition hover:bg-paper">Let’s talk about your next piece</a>
        </div>
      </section>
    </main>
  );
}
