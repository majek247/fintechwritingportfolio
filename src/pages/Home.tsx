import { Link } from "react-router-dom";
import { SITE } from "../data/site";

const ROUTES = {
  caseStudy: "/articles/adfin-stubbs-parkin-case-study",
  noteTaking: "/articles/best-ai-note-taking-tools",
  openBanking: "/articles/open-banking-2026",
};

const approach = [
  {
    n: "01",
    t: "Deep research",
    d: "Primary sources, regulator documents and real product behaviour come first. The draft starts after the evidence is clear.",
    icon: "search",
  },
  {
    n: "02",
    t: "Written to rank and to be read",
    d: "Search intent shapes the structure, while clear arguments, plain language and useful visuals keep the piece worth reading.",
    icon: "doc",
  },
  {
    n: "03",
    t: "Built for specialist audiences",
    d: "Founders, product teams, risk leads and compliance teams get the depth they need without the usual jargon fog.",
    icon: "people",
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 fill-none stroke-current stroke-[1.7] ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current stroke-[1.9]"
    >
      <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ApproachIcon({ kind }: { kind: string }) {
  if (kind === "search") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "doc") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]" aria-hidden="true">
        <path d="M6 3.5h9l3 3V20.5H6z" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M3.5 19c.5-4 2.6-6 5.5-6s5 2 5.5 6M14.5 14c2.8.2 4.8 1.8 5.3 5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#041b1c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_72%_38%,rgba(25,144,132,.16),transparent_28%),linear-gradient(135deg,#06332f_0%,#041b1c_55%,#031516_100%)] pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-220px] top-[-140px] h-[700px] w-[700px] rounded-full border border-[#6ddbd0]/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-95px] top-[-25px] h-[470px] w-[470px] rounded-full border border-dashed border-[#6ddbd0]/15"
        />

        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[.94fr_1.06fr] lg:pb-24">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[.22em] text-[#6fdbd2]">
              Fintech writing portfolio
            </p>

            <h1 className="max-w-[620px] font-serif text-[50px] font-normal leading-[.98] tracking-[-.045em] text-[#f6f2e8] md:text-[72px]">
              Fintech content that earns trust,{" "}
              <span className="text-[#6fd8cf]">and rankings.</span>
            </h1>

            <p className="mt-7 max-w-[600px] text-[16px] leading-7 text-[#c4d3cf]">
              In-depth articles and customer stories for fintech and financial
              services companies. Researched, structured for search, and written
              for the people who build and buy financial products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center gap-8 rounded-full bg-[#72e2d7] px-7 text-[13px] font-semibold text-[#05211f] transition hover:-translate-y-0.5 hover:bg-[#95eee6]"
              >
                Read the work <Arrow />
              </a>

              <a
                href={SITE.contact}
                className="inline-flex min-h-12 items-center gap-7 rounded-full border border-[#75cfc7]/55 px-7 text-[13px] font-semibold text-[#edf8f5] transition hover:-translate-y-0.5 hover:border-[#75e4da]"
              >
                Work with us
              </a>
            </div>

            <dl className="mt-11 grid max-w-[610px] grid-cols-3 border-t border-white/10 pt-7">
              {[
                ["3", "Featured pieces"],
                ["1,600+", "Words in every piece"],
                ["100%", "Research-backed"],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  className={i ? "border-l border-white/10 pl-7" : ""}
                >
                  <dt className="font-serif text-[30px] leading-none text-[#f4f1e8]">
                    {n}
                  </dt>
                  <dd className="mt-2 text-[10px] leading-4 text-[#8eaaa3]">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[690px]">
            <img
              src="/images/fintech-hero-performance.png"
              alt="Search performance dashboard showing organic traffic growth and ranking positions for fintech topics."
              className="block h-auto w-full drop-shadow-[0_38px_70px_rgba(0,0,0,.24)]"
            />
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-[#f6f2e9] text-[#082722]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#17796e]">
                Selected fintech work
              </p>
              <h2 className="mt-4 max-w-[750px] font-serif text-[43px] font-normal leading-[1.03] tracking-[-.045em] md:text-[58px]">
                Three formats. Three different jobs.
              </h2>
              <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-[#5f706c]">
                From customer stories and high-intent comparison content to
                research-led financial education, each piece is built around a
                different point in the buyer journey.
              </p>
            </div>

            <ul className="space-y-3 pb-1 text-[13px] text-[#60726d]">
              {[
                "Built on real research, not rewrites",
                "Written for business impact and search",
                "Designed to make complex topics clear",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#dff3ea] text-[#168171]">
                    <Tick />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FEATURED CASE STUDY */}
          <Link
            to={ROUTES.caseStudy}
            className="group relative mt-10 block overflow-hidden rounded-[24px] border border-[#0a443c]/15 bg-[#06332f] shadow-[0_20px_60px_rgba(4,27,28,.10)]"
          >
            <img
              src="/images/officegarden.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-55 transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,31,29,.99)_0%,rgba(4,31,29,.97)_36%,rgba(4,31,29,.58)_58%,rgba(4,31,29,.06)_100%)]" />

            <div className="relative z-10 grid min-h-[440px] lg:grid-cols-[1.04fr_.96fr]">
              <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#7be2d7]">
                    <span className="text-[#f1efe7]">01</span>
                    Customer story · Case study
                  </p>

                  <h3 className="mt-5 max-w-[650px] font-serif text-[38px] font-normal leading-[1.02] tracking-[-.04em] text-[#f5f1e8] md:text-[49px]">
                    How Stubbs Parkin took on nearly 200 clients without{" "}
                    <span className="text-[#78ddd4]">adding more payment admin.</span>
                  </h3>

                  <p className="mt-5 max-w-[590px] text-[14px] leading-6 text-[#c8d7d2]">
                    A rewritten and redesigned customer story showing how Adfin
                    helped a growing accountancy practice move 231 mandates,
                    handle more payment volume and keep collections on track.
                  </p>

                  <span className="mt-7 inline-flex min-h-11 items-center gap-8 rounded-full bg-[#70ded4] px-6 text-[12px] font-semibold text-[#05211f]">
                    View the case study <Arrow />
                  </span>
                </div>

                <div className="mt-10 grid max-w-[610px] grid-cols-3 border-t border-white/12 pt-6">
                  <div>
                    <strong className="font-serif text-[29px] font-normal text-white">~200</strong>
                    <span className="mt-1 block text-[9px] leading-4 text-[#a8bdb7]">
                      clients across two intake periods
                    </span>
                  </div>
                  <div className="border-l border-white/10 pl-5">
                    <strong className="font-serif text-[29px] font-normal text-white">231</strong>
                    <span className="mt-1 block text-[9px] leading-4 text-[#a8bdb7]">
                      mandates moved in three days
                    </span>
                  </div>
                  <div className="border-l border-white/10 pl-5">
                    <strong className="font-serif text-[29px] font-normal text-white">95%</strong>
                    <span className="mt-1 block text-[9px] leading-4 text-[#a8bdb7]">
                      paid on or before due date
                    </span>
                  </div>
                </div>
              </div>

          <div className="relative hidden min-h-[440px] lg:block">
  <div
    aria-hidden="true"
    className="
      absolute
      bottom-[42px]
      right-[84px]
      h-[290px]
      w-[290px]
      rounded-full
      border
      border-[#66d7cc]/20
    "
  />

  <div
    aria-hidden="true"
    className="
      absolute
      bottom-[76px]
      right-[116px]
      h-[225px]
      w-[225px]
      rounded-full
      border
      border-dashed
      border-[#66d7cc]/20
    "
  />

  <img
    src="/images/adfinclientengager.png"
    alt="Adfin and Client Engager payments dashboard showing paid invoices."
    className="
      absolute
      bottom-[-4px]
      right-[-28px]
      z-10
      w-[103%]
      max-w-none
      object-contain
      drop-shadow-[0_30px_48px_rgba(0,0,0,.30)]
      transition
      duration-700
      group-hover:translate-y-[-5px]
      group-hover:scale-[1.018]
    "
  />
</div>



            </div>
          </Link>



{/* TWO SUPPORTING PIECES */}
<div className="mt-5 grid gap-5 lg:grid-cols-2">
  {/* AVENI BUYER GUIDE */}
  <Link
    to={ROUTES.noteTaking}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#123f38]/10
      bg-[#fffdf8]
      shadow-[0_10px_35px_rgba(4,27,28,.05)]
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_18px_45px_rgba(4,27,28,.09)]
    "
  >
    <div className="grid min-h-[350px] lg:grid-cols-[1.04fr_.96fr]">
      {/* COPY */}
      <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 lg:pr-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#257970]">
            02 · Buyer guide · Financial advice
          </p>

          <h3 className="mt-4 max-w-[360px] font-serif text-[29px] font-normal leading-[1.04] tracking-[-.035em] text-[#082722] md:text-[32px]">
            5 Best AI Note-Taking Tools for UK Financial Advisers in 2026
          </h3>

          <p className="mt-4 max-w-[340px] text-[12px] leading-[1.7] text-[#697974]">
            A hands-on comparison of the tools advisers are actually considering,
            covering workflows, trade-offs, pricing and where each product fits best.
          </p>
        </div>

        <span className="mt-7 inline-flex w-fit items-center gap-3 text-[12px] font-semibold text-[#08746a] transition-all duration-300 group-hover:gap-5">
          Read the comparison <Arrow />
        </span>
      </div>

   {/* IMAGE */}
<div className="relative flex min-h-[300px] items-center justify-center p-4 lg:min-h-[350px] lg:p-2">
  <img
    src="/images/aveni-workflow-pricing.png"
    alt="Comparison of AI note-taking tools for UK financial advisers."
    className="
      relative
      block
      w-[98%]
      max-w-[330px]
      object-contain
      transition
      duration-700
      group-hover:scale-[1.02]
    "
  />
</div>
    </div>
  </Link>

  {/* OPEN BANKING */}
  <Link
    to={ROUTES.openBanking}
    className="
      group
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-[#123f38]/10
      bg-[#fffdf8]
      shadow-[0_10px_35px_rgba(4,27,28,.05)]
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_18px_45px_rgba(4,27,28,.09)]
    "
  >
    <div className="grid min-h-[350px] lg:grid-cols-[1.04fr_.96fr]">
      {/* COPY */}
      <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 lg:pr-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#257970]">
            03 · Finance guide · Thought leadership
          </p>

          <h3 className="mt-4 max-w-[365px] font-serif text-[29px] font-normal leading-[1.04] tracking-[-.035em] text-[#082722] md:text-[32px]">
            Open Banking in 2026: Key Trends, Benefits and What Finance Leaders Need to Know
          </h3>

          <p className="mt-4 max-w-[345px] text-[12px] leading-[1.7] text-[#697974]">
            A clear, up-to-date guide to how open banking is reshaping payments,
            lending and financial services, and what businesses should prepare for next.
          </p>
        </div>

        <span className="mt-7 inline-flex w-fit items-center gap-3 text-[12px] font-semibold text-[#08746a] transition-all duration-300 group-hover:gap-5">
          Read the article <Arrow />
        </span>
      </div>

     {/* IMAGE */}
<div className="relative flex min-h-[300px] items-center justify-center p-4 lg:min-h-[350px] lg:p-2">
  <img
    src="/images/openbanking2026.png"
    alt="Open Banking in 2026 editorial visual with regulation, use cases and business impact."
    className="
      relative
      block
      w-[98%]
      max-w-[335px]
      object-contain
      transition
      duration-700
      group-hover:scale-[1.02]
    "
  />
</div>
    </div>
  </Link>
</div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-[linear-gradient(135deg,#052b28_0%,#041b1c_100%)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#6fdad1]">
                How the writing gets results
              </p>

              <h2 className="mt-5 max-w-[430px] font-serif text-[42px] font-normal leading-[1.02] tracking-[-.04em] text-[#f4f0e7] md:text-[52px]">
                Research-led.
                <br />
                Search-optimised.
                <br />
                Built for fintech.
              </h2>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {approach.map((x, index) => (
                <div
                  key={x.t}
                  className={`min-w-0 py-2 md:px-7 ${
                    index ? "md:border-l md:border-white/10" : ""
                  }`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[11px] border border-[#6bd8ce]/20 bg-[#0b4a43] text-[#79ded5]">
                    <ApproachIcon kind={x.icon} />
                  </span>

                  <div className="mt-5 flex items-start gap-4">
                    <span className="pt-1 font-serif text-[22px] text-[#f0eee5]">
                      {x.n}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold leading-5 text-[#f0f5f2]">
                        {x.t}
                      </h3>
                      <p className="mt-4 text-[11px] leading-[1.75] text-[#98b0aa]">
                        {x.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-14 overflow-hidden rounded-[20px] border border-[#63cfc5]/25 bg-[#07302d] px-7 py-8 md:px-10 lg:grid lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-[#61d8cc]/10 shadow-[0_0_0_28px_rgba(97,216,204,.025),0_0_0_56px_rgba(97,216,204,.018)]"
            />

            <div className="relative z-10">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#6fdad1]">
                Ready to discuss your next piece?
              </p>
              <h2 className="mt-3 max-w-[760px] font-serif text-[32px] font-normal leading-[1.05] tracking-[-.035em] text-[#f5f1e8] md:text-[42px]">
                Need fintech content that holds up to an expert reader?
              </h2>
            </div>

            <div className="relative z-10 mt-7 flex flex-wrap items-center gap-6 lg:mt-0 lg:justify-end">
              <a
                href={SITE.contact}
                className="inline-flex min-h-12 items-center gap-10 rounded-full bg-[#73e1d6] px-8 text-[13px] font-semibold text-[#05211f] transition hover:-translate-y-0.5 hover:bg-[#93ece4]"
              >
                Let’s talk <Arrow />
              </a>

              <p className="max-w-[260px] text-[10px] leading-5 text-[#98ada8]">
                Long-form articles, case studies and thought leadership for
                fintech and financial services companies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
