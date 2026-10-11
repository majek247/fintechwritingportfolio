import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";

const ANIM_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
@keyframes hero-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes hero-img { from { opacity: 0; transform: translateX(40px) scale(.97); } to { opacity: 1; transform: none; } }
@keyframes rise { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
.hero-anim { animation: hero-rise .9s cubic-bezier(.22,1,.36,1) backwards; }
.hero-anim-img { animation: hero-img 1.1s cubic-bezier(.22,1,.36,1) .35s backwards; }
.montserrat-page, .montserrat-page .font-serif, .montserrat-page .font-sans { font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; }
.reveal { opacity: 0; }
.reveal.is-in { opacity: 1; animation: rise .9s cubic-bezier(.22,1,.36,1) backwards; }
@media (prefers-reduced-motion: reduce) {
  .hero-anim, .hero-anim-img, .reveal.is-in { animation: none; }
  .reveal { opacity: 1; }
}
`;

const ROUTES = {
  caseStudy: "/articles/adfin-stubbs-parkin-case-study",
  noteTaking: "/articles/best-ai-note-taking-tools",
  openBanking: "/articles/open-banking-2026",
};


const steps = [
  {
    n: "01",
    icon: "search",
    t: "Identify high-value opportunities",
    d: "We analyse your product, competitors and buyer journey to find the topics that can attract, influence and convert your ideal customers.",
  },
  {
    n: "02",
    icon: "doc",
    t: "Research and plan with evidence",
    d: "We use primary sources, regulator guidance, product testing and customer insights to build a focused content plan with clear commercial intent.",
  },
  {
    n: "03",
    icon: "pencil",
    t: "Write and optimise for buyers and search",
    d: "We turn research into clear, structured content that matches search intent and answers real buyer questions, with compelling narratives and useful visuals.",
  },
  {
    n: "04",
    icon: "chart",
    t: "Measure, report and iterate",
    d: "We track rankings, engagement and pipeline influence, then refine and expand what works to keep driving results over time.",
  },
];


const caseStats = [
  { icon: "people", n: "~200", l: "clients added across two major intake periods" },
  { icon: "doc", n: "231", l: "mandates moved in three days" },
  { icon: "tick", n: "95%", l: "of payments collected on or before due date" },
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

function ApproachIcon({ kind, small = false }: { kind: string; small?: boolean }) {
  const size = small ? "h-4 w-4" : "h-5 w-5";

  if (kind === "search") {
    return (
      <svg viewBox="0 0 24 24" className={`${size} fill-none stroke-current stroke-[1.6]`} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "doc") {
    return (
      <svg viewBox="0 0 24 24" className={`${size} fill-none stroke-current stroke-[1.6]`} aria-hidden="true">
        <path d="M6 3.5h9l3 3V20.5H6z" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h6" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "tick") {
    return (
      <svg viewBox="0 0 24 24" className={`${size} fill-none stroke-current stroke-[1.8]`} aria-hidden="true">
        <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={`${size} fill-none stroke-current stroke-[1.6]`} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M3.5 19c.5-4 2.6-6 5.5-6s5 2 5.5 6M14.5 14c2.8.2 4.8 1.8 5.3 5" strokeLinecap="round" />
    </svg>
  );
}

function StepIcon({ kind }: { kind: string }) {
  const cls = "h-5 w-5 fill-none stroke-current stroke-[1.6]";
  if (kind === "search")
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5" strokeLinecap="round" />
      </svg>
    );
  if (kind === "doc")
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="M6 3.5h9l3 3V20.5H6z" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h6" strokeLinecap="round" />
      </svg>
    );
  if (kind === "pencil")
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
        <path d="m4 20 1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z" strokeLinejoin="round" />
        <path d="m14.5 6.5 3 3" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
      <path d="M6 20v-7M12 20V5M18 20v-10" strokeLinecap="round" />
    </svg>
  );
}

const mockShell =
  "rounded-[14px] border border-[#3fcfc0]/15 bg-[#041716] p-4";

function MockOpportunities() {
  const rows = [
    ["Comparisons", 85, "High"],
    ["Alternatives", 85, "High"],
    ["Pricing", 55, "Medium"],
    ["Use cases", 50, "Medium"],
    ["Regulation", 40, "Medium"],
  ] as const;
  return (
    <div className={mockShell}>
      <p className="mb-3 text-[8px] font-semibold uppercase tracking-[.18em] text-[#8eaaa3]">
        Top opportunities
      </p>
      <div className="space-y-2.5">
        {rows.map(([l, w, lvl]) => (
          <div key={l} className="flex items-center gap-2 text-[10px] text-[#d5e2de]">
            <span className="w-[96px] shrink-0">{l}</span>
            <span className="h-[5px] flex-1 rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-[#4de3d2]"
                style={{ width: `${w}%`, opacity: lvl === "High" ? 1 : 0.7 }}
              />
            </span>
            <span className="w-[38px] text-right text-[9px] text-[#8eaaa3]">{lvl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockSources() {
  const items = [
    ["Regulatory sources", "#5b8def"],
    ["Product testing", "#4d9bff"],
    ["Customer interviews", "#6f7dff"],
    ["Competitor analysis", "#d46bd0"],
    ["Content plan", "#5aa8ff"],
  ];
  return (
    <div className="space-y-1.5">
      {items.map(([l, c], i) => (
        <div
          key={l}
          className="flex items-center gap-2.5 rounded-[9px] border border-[#3fcfc0]/15 bg-[#071f1e] px-3 py-2 text-[10px] text-[#e3eeea]"
          style={{ marginLeft: i * 6 }}
        >
          <span className="h-3.5 w-3.5 rounded-[4px]" style={{ background: c }} />
          {l}
        </div>
      ))}
    </div>
  );
}

function MockWorkflow() {
  const steps = ["Outline", "Draft", "SEO optimisation", "Expert review", "Visuals", "Publish"];
  return (
    <div className={`${mockShell} flex gap-3 p-3`}>
      <ul className="w-[46%] space-y-2 text-[9px] text-[#e3eeea]">
        {steps.map((s) => (
          <li key={s} className="flex items-center gap-1.5">
            <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#4de3d2] text-[#05211f]">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-none stroke-current stroke-[3]">
                <path d="m6 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {s}
          </li>
        ))}
      </ul>
      <div className="flex-1 space-y-1.5 border-l border-white/10 pl-3">
        <span className="block h-1.5 w-full rounded-full bg-white/25" />
        <span className="block h-1 w-4/5 rounded-full bg-white/10" />
        <span className="block h-1 w-full rounded-full bg-white/10" />
        <span className="block h-12 w-full rounded-[6px] bg-gradient-to-br from-[#2a8f84] to-[#0b4a43]" />
        <span className="block h-1 w-3/5 rounded-full bg-white/10" />
        <span className="block h-1 w-4/5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function MockResults() {
  return (
    <div className="space-y-2">
      <div className={`${mockShell} relative p-3`}>
        <p className="text-[10px] text-[#d5e2de]">Pipeline influenced</p>
        <p className="mt-1 font-serif text-[24px] leading-none text-white">£1.2M</p>
        <span className="absolute right-3 top-3 rounded-full border border-[#4de3d2]/40 bg-[#0b4a43] px-2 py-0.5 text-[9px] text-[#7be2d7]">
          +180% ↑
        </span>
        <svg viewBox="0 0 160 44" className="mt-2 h-10 w-full fill-none" aria-hidden="true">
          <polyline
            points="4,38 26,30 48,32 70,22 92,24 114,14 136,10 156,6"
            stroke="#4de3d2"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Organic traffic", "+156%"],
          ["Demo requests", "+72%"],
          ["Revenue influenced", "£1.2M"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-[10px] border border-[#3fcfc0]/15 bg-[#041716] p-2">
            <p className="text-[8px] leading-3 text-[#8eaaa3]">{l}</p>
            <p className="mt-1 font-serif text-[15px] leading-none text-[#4de3d2]">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const mocks = [
  <MockOpportunities key="m1" />,
  <MockSources key="m2" />,
  <MockWorkflow key="m3" />,
  <MockResults key="m4" />,
];

const faqItems = [
  {
    q: "What fintech subjects do you cover?",
    a: "We cover payments, open banking, lending, wealthtech, insurtech, regtech, financial infrastructure, accounting software and adjacent B2B finance topics. We do not rely on surface-level familiarity. Before writing, we build enough context around the product, market, regulation and buyer to understand what matters, what needs evidence and where the real complexity sits.",
  },
  {
    q: "Can you help decide which fintech topics to write about?",
    a: "Yes. We prioritise topics against commercial relevance, buyer intent, sales friction, product priorities and search demand. That usually means identifying where content can support evaluation, answer recurring objections or strengthen important revenue pages. We would rather build a focused backlog of high-value opportunities than produce a large editorial calendar with no clear role in the buying journey.",
  },
  {
    q: "Is your fintech content optimised for SEO?",
    a: "Yes, where search is relevant. We research intent, competing pages, keyword language, internal-link opportunities and the depth required to compete. But SEO does not dictate the piece. The article still needs a clear argument, useful evidence and enough originality to be credible with an informed buyer. Search helps shape the structure; it does not replace editorial judgement.",
  },
  {
    q: "Do you write under our brand, or ghostwrite for our executives?",
    a: "We do both. Brand-led content is written to match your established positioning and tone. For executive ghostwriting, we go further into point of view, experience, language and argument so the piece reflects how that person actually thinks.  ",
  },
  {
    q: "Can you work with our in-house fintech experts?",
    a: "Yes. We regularly work with product, compliance, sales, customer success and leadership teams to strengthen technical accuracy and bring first-hand insight into the content. We use focused interviews to get to the useful detail quickly, then turn that input into clear arguments, examples and evidence.",
  },
  {
    q: "How long does a fintech article take?",
    a: "Most long-form pieces take around one to two weeks from approved brief to final draft. Timing depends on research depth, technical complexity and the number of reviewers involved. A buyer guide may move quickly; a regulated or interview-led piece will need more time. We agree the review path upfront so quality is protected without creating unnecessary delays.",
  },
  {
    q: "Do you do test pieces?",
    a: "Yes. A single paid article is often the best way to assess fit before moving into an ongoing programme. We treat it as a proper engagement, with the same research, briefing, writing and revision standards as monthly work. It gives both sides a clear view of quality, working style and review process before committing to a larger content cadence.",
  },
  {
    q: "What do you need from us to get started?",
    a: "We typically need your core product material, website, positioning documents, existing content and any useful customer or sales insight. If the subject requires specialist input, we may also schedule a short interview with the relevant expert. From there, we define the audience, angle, evidence base, search opportunity and review process before the first draft begins.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

useEffect(() => {
  const id = window.location.hash.replace("#", "");
  if (!id) return;
  const t = setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  }, 50);
  return () => clearTimeout(t);
}, []);

useEffect(() => {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}, []);



  return (
    <main className="montserrat-page overflow-hidden bg-[#041b1c] text-white">
      <style>{ANIM_CSS}</style>

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-[linear-gradient(180deg,#05393a_0%,#031f20_60%,#021516_100%)] pb-[90px] pt-[150px]"
        style={{ fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <div className="mx-auto w-[min(1340px,calc(100%_-_32px))] md:w-[min(1340px,calc(100%_-_96px))]">
          {/* EYEBROW */}
          <div className="hero-anim mb-[34px] flex items-center">
            <span className="mr-[10px] inline-block h-px w-[22px] shrink-0 bg-[#3d8f8a]" />
            <p className="text-[13px] font-medium uppercase leading-none tracking-[.02em] text-[#8fd9cf]">
              Fintech writing portfolio
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[1.08fr_.92fr]">
            {/* LEFT: HEADLINE */}
            <div>
              <h1
                style={{ animationDelay: "120ms" }}
                className="hero-anim text-[clamp(34px,4.2vw,54px)] font-bold leading-[1.18] tracking-[-0.01em] text-[#f2fbf9]"
              >
                Fintech content built to<br className="hidden lg:block" /> support pipeline growth.
              </h1>
            </div>

            {/* RIGHT: COPY + CTAs */}
            <div
              style={{ animationDelay: "240ms" }}
              className="hero-anim flex flex-col justify-center lg:border-l lg:border-[#cdeee8]/[.14] lg:pl-11"
            >
              <p className="mb-[30px] max-w-[480px] text-[18px] font-normal leading-[1.7] text-[#a9d9d1]">
                A collection of articles, buyer guides and customer stories we’ve researched and written for fintech and financial services companies.
              </p>

              <div className="flex flex-wrap gap-[14px]">
                <a
                  href="#work"
                  className="inline-flex items-center whitespace-nowrap rounded-[3px] border border-[#167273] bg-[#167273] px-[26px] py-[15px] text-[15px] font-semibold tracking-[.01em] text-white transition-colors duration-200 hover:border-[#1f8f8f] hover:bg-[#1f8f8f]"
                >
                  Read the articles
                </a>

                <a
                  href="https://www.seo-growup.com/get-in-touch"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center whitespace-nowrap rounded-[3px] border border-[#cdeee8]/[.28] bg-transparent px-[26px] py-[15px] text-[15px] font-semibold tracking-[.01em] text-[#cdeee8] transition-colors duration-200 hover:border-[#167273] hover:bg-[#167273] hover:text-white"
                >
                  Work with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-white text-[#082722]">
        <div className="mx-auto w-[min(1340px,calc(100%_-_32px))] py-20 md:w-[min(1340px,calc(100%_-_96px))] lg:py-24">
          <div className="grid gap-8 lg:grid-cols-1">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#17796e]">
       Featured articles 
              </p>
              <h2 className="mt-4 max-w-[1300px] font-serif text-[40px] font-semibold leading-[1.05] tracking-[-.045em] md:text-[54px]">
            Explore our FinTech writing samples.
              </h2>
              <p className="mt-8 max-w-[1100px] text-[18px] leading-7 text-[#011522]">
          From customer proof and high-intent comparisons to research-led financial education, each piece is designed to build trust, answer buyer questions and move prospects closer to a decision.
              </p>
            </div>

          </div>

          {/* FEATURED CASE STUDY */}
          <Link
            to={ROUTES.caseStudy}
reloadDocument

            className="group relative mt-10 block overflow-hidden rounded-[24px] border border-[#0a443c]/15 bg-[#06332f] shadow-[0_20px_60px_rgba(4,27,28,.10)]"
          >
            <img
              src="/images/officegarden.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,31,29,.98)_0%,rgba(4,31,29,.94)_34%,rgba(4,31,29,.45)_58%,rgba(4,31,29,0)_100%)]" />

            <div className="relative z-10 grid min-h-[440px] lg:grid-cols-[1.04fr_.96fr]">
              <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#1F9FA1]">
                    <span className="text-[#1F9FA1]">01</span>
                    Customer story · Case study
                  </p>

                  <h3 className="mt-5 max-w-[650px] font-serif text-[34px] font-semibold leading-[1.1] tracking-[-.04em] text-[#f5f1e8] md:text-[40px]">
                    How Stubbs Parkin took on nearly 200 clients without{" "}
                    <span className="text-[#1F9FA1]">adding more payment admin.</span>
                  </h3>

                  <p className="mt-5 max-w-[550px] text-[15px] leading-[1.75] text-[#c8d7d2]">
                A story-led case study showing how Adfin helped a growing accountancy practice move 231 mandates in three days, increase payment volume and keep collections running without creating more admin.
                  </p>

                  <span className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#167273] px-6 text-[12px] font-semibold text-white transition-all duration-300 group-hover:gap-5 group-hover:bg-[#1d8f90]">
                    View the case study <Arrow />
                  </span>
                </div>

                <div className="mt-10 grid max-w-[640px] grid-cols-3 gap-4 border-t border-white/12 pt-6">
                  {caseStats.map((s, i) => (
                    <div
                      key={s.n}
                      className={`flex items-start gap-3 ${i ? "border-l border-white/10 pl-4" : ""}`}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-[#6bd8ce]/25 bg-[#0b4a43]/80 text-[#79ded5]">
                        <ApproachIcon kind={s.icon} small />
                      </span>
                      <div>
                        <strong className="block font-serif text-[22px] font-semibold leading-none text-white">
                          {s.n}
                        </strong>
                        <span className="mt-1 block text-[9px] leading-4 text-[#fafafa]">
                          {s.l}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden min-h-[440px] lg:block">
                <div
                  aria-hidden="true"
                  className="absolute bottom-[42px] right-[84px] h-[290px] w-[290px] rounded-full border border-[#66d7cc]/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[76px] right-[116px] h-[225px] w-[225px] rounded-full border border-dashed border-[#66d7cc]/20"
                />

                <img
                  src="/images/adfinclientengager.png"
                  alt="Adfin and Client Engager payments dashboard showing paid invoices."
                  className="absolute bottom-[-4px] right-[-28px] z-10 w-[112%] max-w-none object-contain drop-shadow-[0_30px_48px_rgba(0,0,0,.30)] transition duration-700 group-hover:translate-y-[-5px] group-hover:scale-[1.018]"
                />
              </div>
            </div>
          </Link>

          {/* TWO SUPPORTING PIECES */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {/* AVENI BUYER GUIDE */}
            <Link
              to={ROUTES.noteTaking}
reloadDocument
              className="group relative overflow-hidden rounded-[20px] border border-[#123f38]/15 bg-transparent transition duration-300 hover:-translate-y-1 hover:border-[#167273]/30"
            >
              <div className="grid min-h-[350px] lg:grid-cols-[1.04fr_.96fr]">
                {/* COPY */}
                <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 lg:pr-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#257970]">
                      02 · Buyer guide · Financial advice
                    </p>

                    <h3 className="mt-4 max-w-[380px] font-serif text-[26px] font-semibold leading-[1.1] tracking-[-.035em] text-[#082722] md:text-[28px]">
                      5 Best AI Note-Taking Tools for UK Financial Advisers in 2026
                    </h3>

                    <p className="mt-4 max-w-[340px] text-[14px] leading-[1.7] text-[#011522]">
             We compared five AI note-taking tools for UK financial advisers across workflows, pricing, strengths, limitations and best-fit use cases.
                    </p>
                  </div>

                  <span className="mt-7 inline-flex min-h-10 w-fit items-center gap-3 rounded-full bg-[#167273] px-5 text-[12px] font-semibold text-white transition-all duration-300 group-hover:gap-5 group-hover:bg-[#1d8f90]">
                    Read the comparison <Arrow />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="relative flex min-h-[300px] items-center justify-center p-4 lg:min-h-[350px] lg:p-2">
                  <img
                    src="/images/aveni-workflow-pricing.png"
                    alt="Comparison of AI note-taking tools for UK financial advisers."
                    className="relative block w-[108%] max-w-[390px] object-contain transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Link>

            {/* OPEN BANKING */}
            <Link
              to={ROUTES.openBanking}
reloadDocument
              className="group relative overflow-hidden rounded-[20px] border border-[#123f38]/15 bg-transparent transition duration-300 hover:-translate-y-1 hover:border-[#167273]/30"
            >
              <div className="grid min-h-[350px] lg:grid-cols-[1.04fr_.96fr]">
                {/* COPY */}
                <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 lg:pr-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#257970]">
                      03 · Finance guide · Industry insight
                    </p>

                    <h3 className="mt-4 max-w-[380px] font-serif text-[26px] font-semibold leading-[1.1] tracking-[-.035em] text-[#082722] md:text-[28px]">
                      How Open Banking Is Changing Finance and Payments in 2026
                    </h3>

                    <p className="mt-4 max-w-[345px] text-[14px] leading-[1.7] text-[#011522]">
                      A research-led guide to how open banking is reshaping payments,
                      lending and financial services, and what businesses should prepare for next.
                    </p>
                  </div>

                  <span className="mt-7 inline-flex min-h-10 w-fit items-center gap-3 rounded-full bg-[#167273] px-5 text-[12px] font-semibold text-white transition-all duration-300 group-hover:gap-5 group-hover:bg-[#1d8f90]">
                    Read the article <Arrow />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="relative flex min-h-[300px] items-center justify-center p-4 lg:min-h-[350px] lg:p-2">
                  <img
                    src="/images/openbanking2026.png"
                    alt="Open Banking in 2026 editorial visual with regulation, use cases and business impact."
                    className="relative block w-[112%] max-w-[420px] object-contain transition duration-700 group-hover:scale-[1.02] lg:translate-x-3"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* APPROACH */}
      <section id="approach" className="bg-[#041b1c]">
        <div className="mx-auto w-[min(1340px,calc(100%_-_32px))] py-20 md:w-[min(1340px,calc(100%_-_96px))] lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#1F9FA1]">
                Our approach
              </p>
              <h2 className="mt-5 max-w-[650px] font-serif text-[46px] font-semibold leading-[1.05] tracking-[-.03em] text-[#f6f2e8] md:text-[62px]">
                A clear process
                <br />
                for content that
                <br />
                <span className="text-[#1F9FA1]">drives pipeline.</span>
              </h2>
            </div>

            <p className="max-w-[780px] text-[18px] leading-8 text-[#c4d3cf] lg:border-l lg:border-white/10 lg:pl-10">
              We combine fintech expertise, rigorous research and search-led
              strategy to create content that reaches the right buyers,
              supports your sales cycle and shows clear commercial impact.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative flex flex-col rounded-[22px] border border-[#3fcfc0]/20 bg-[#05201f] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#3fcfc0]/35 font-serif text-[18px] text-[#f0eee5]">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#3fcfc0]/35 text-[#4de3d2]">
                    <StepIcon kind={s.icon} />
                  </span>
                </div>

                <h3 className="mt-6 min-h-[64px] font-serif text-[26px] font-semibold leading-[1.15] tracking-[-.02em] text-[#f4f0e7]">
                  {s.t}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-[#b9cbc6]">{s.d}</p>

                <div className="mt-auto pt-6">{mocks[i]}</div>

                {i < steps.length - 1 && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute -right-5 top-[43px] hidden h-px w-5 bg-[#4de3d2]/30 lg:block"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -right-[14px] top-[40px] z-10 hidden h-[7px] w-[7px] rounded-full bg-[#4de3d2] shadow-[0_0_10px_rgba(77,227,210,.8)] lg:block"
                    />
                  </>
                )}
              </div>
            ))}
          </div>


   </div>
  </section>


  {/* INVESTMENT */}
  <section id="investment" className="scroll-mt-24 bg-white text-[#011522]">
    <div className="mx-auto w-[min(1340px,calc(100%_-_32px))] py-16 md:w-[min(1340px,calc(100%_-_96px))] lg:py-20">
      <div className="bg-[#eef4f3] px-6 py-[70px] md:px-10">
        {/* HEADER */}
        <div className="mx-auto mb-16 text-center">
          <div className="mb-[22px] flex items-center justify-center gap-[10px]">
            <span className="h-[2px] w-[22px] bg-[#167273]" />
            <span className="text-[13px] font-semibold uppercase tracking-[.02em] text-[#0f5859]">
              Pricing
            </span>
          </div>
          <h2 className="mb-[18px] text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.2] tracking-[-.01em] text-[#0a2e2e]">
            Investment Options and Packages
          </h2>
          <p className="mx-auto max-w-[840px] text-[19px] leading-[1.7] text-[#011522]">
            Choose a single article or an ongoing monthly programme. Both include
            research, strategic input and content written by fintech specialists.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {[
            {
              featured: true,
              badge: "Most popular",
              name: "Monthly programme",
              price: "£3,400",
              unit: "/mo",
              note: "4 pieces per month, saving £400",
              stats: [
                ["4 pieces", "Every month"],
                ["£400", "Saved vs one-off"],
                ["1 report", "Monthly rankings"],
              ],
              intro:
                "A consistent stream of research-led content for teams publishing every month.",
              groups: [
                {
                  label: "Strategy",
                  items: [["Monthly topic plan and keyword research", false]],
                },
                {
                  label: "Content",
                  items: [
                    ["4 articles or customer stories each month", true],
                    ["Expert review on every piece", true],
                    ["Custom visuals for every piece", true],
                  ],
                },
                {
                  label: "Reporting & delivery",
                  items: [
                    ["Monthly report on rankings and traffic", false],
                    ["Priority turnaround", false],
                  ],
                },
              ],
              bestFor: "teams publishing every month who want a steady stream of content.",
              cta: "Start a monthly programme",
            },
            {
              featured: false,
              name: "Long-form article",
              price: "£950",
              unit: "/article",
              note: "One-off, no commitment",
              stats: [
                ["1,600+", "Words, up to 2,000"],
                ["2 rounds", "Of revisions"],
                ["1 piece", "Research to publish"],
              ],
              intro:
                "In-depth, research-led articles, buyer guides and specialist fintech content.",
              groups: [
                {
                  label: "Research",
                  items: [
                    ["Primary-source research and fact-checking", false],
                    ["Keyword and search-intent research", false],
                  ],
                },
                {
                  label: "Writing & SEO",
                  items: [
                    ["1,600 to 2,000 words", true],
                    ["SEO title, meta description and internal links", false],
                  ],
                },
                {
                  label: "Delivery",
                  items: [
                    ["Custom graphics and visuals", true],
                    ["Two rounds of revisions", false],
                  ],
                },
              ],
              bestFor: "a single high-value guide, comparison or article with no commitment.",
              cta: "Commission an article",
            },
          ].map((p, pi) => (
            <div
              key={p.name}
              style={{ animationDelay: `${pi * 150}ms` }}
              className={`reveal relative box-border flex flex-[1_1_400px] flex-col px-6 pb-8 pt-9 md:px-10 md:pb-10 md:pt-11 ${
                p.featured
                  ? "border-2 border-[#167273] bg-[#fbfefd] shadow-[0_20px_40px_rgba(10,46,46,.08)]"
                  : "border border-[#0a2e2e]/10 bg-white"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-4 left-7 z-10 bg-[#167273] px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[.04em] text-white">
                  {p.badge}
                </span>
              )}

              <h3 className="mb-[18px] text-[24px] font-extrabold tracking-[-.005em] text-[#0a2e2e]">
                {p.name}
              </h3>

              <div className="mb-1 flex items-baseline gap-1.5">
                <span className="text-[42px] font-extrabold leading-none text-[#0a2e2e]">
                  {p.price}
                </span>
                <span className="text-[16px] font-medium text-[#7c928c]">{p.unit}</span>
              </div>
              <p className="mb-6 text-[13.5px] text-[#7c928c]">{p.note}</p>

              {/* STATS STRIP */}
              <div
                className={`mb-[22px] flex border ${
                  p.featured
                    ? "border-[#167273]/20 bg-[#f4faf9]"
                    : "border-[#0a2e2e]/10 bg-[#fafbfa]"
                }`}
              >
                {p.stats.map(([v, l], i) => (
                  <div
                    key={v}
                    className={`flex-1 px-2.5 py-3.5 text-center ${
                      i > 0
                        ? p.featured
                          ? "border-l border-[#167273]/20"
                          : "border-l border-[#0a2e2e]/10"
                        : ""
                    }`}
                  >
                    <div className="text-[18px] font-extrabold leading-[1.1] text-[#0a2e2e] md:text-[20px]">
                      {v}
                    </div>
                    <div className="mt-1 text-[11.5px] text-[#4b625d]">{l}</div>
                  </div>
                ))}
              </div>

              <p className="mb-3 text-[15.5px] leading-[1.7] text-[#011522]">{p.intro}</p>

              {/* GROUPED FEATURES */}
              <div className="mb-[26px] flex-1">
                {p.groups.map((g, gi) => (
                  <div key={g.label}>
                    <div
                      className={`pb-1 text-[12px] font-bold uppercase tracking-[.06em] text-[#167273] ${
                        gi === 0 ? "pt-3.5" : "pt-4"
                      }`}
                    >
                      {g.label}
                    </div>
                    {g.items.map(([text, bold], ii) => {
                      const isLast = gi === p.groups.length - 1 && ii === g.items.length - 1;
                      return (
                        <div
                          key={text as string}
                          className={`flex items-start gap-3 py-3 ${
                            isLast ? "" : "border-b border-[#0a2e2e]/[.08]"
                          }`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            className="mt-[3px] shrink-0"
                            aria-hidden="true"
                          >
                            <circle cx="8" cy="8" r="8" fill="#167273" />
                            <path
                              d="M4.5 8.2L6.7 10.5L11.5 5.5"
                              stroke="#fff"
                              strokeWidth="1.4"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            className={`text-[15px] leading-[1.55] ${
                              bold ? "font-semibold text-[#0a2e2e]" : "text-[#26433f]"
                            }`}
                          >
                            {text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* BEST FOR */}
              <div className="mb-[26px] border-t border-[#0a2e2e]/10 pt-5">
                <span className="text-[13.5px] font-semibold text-[#0f5859]">Best for </span>
                <span className="text-[13.5px] text-[#4b625d]">{p.bestFor}</span>
              </div>

              <a
                href="https://www.seo-growup.com/get-in-touch"
                target="_blank"
                rel="noreferrer"
                className={`mt-auto block w-full px-6 py-4 text-center text-[15px] font-bold tracking-[.01em] transition-colors duration-200 ${
                  p.featured
                    ? "bg-[#0a2e2e] text-white hover:bg-[#167273]"
                    : "border-[1.5px] border-[#167273] bg-transparent text-[#167273] hover:bg-[#167273] hover:text-white"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>


    {/* FAQ */}
    <section id="faq" className="scroll-mt-24 relative overflow-hidden bg-[linear-gradient(180deg,#031f20_0%,#021516_100%)] text-white">
      <div className="mx-auto w-[min(1340px,calc(100%_-_32px))] py-[100px] md:w-[min(1340px,calc(100%_-_96px))]">
        {/* HEADER */}
        <div className="reveal mx-auto mb-[68px] text-center">
          <div className="mb-[34px] flex items-center justify-center gap-[10px]">
            <span className="h-px w-[22px] bg-[#3d8f8a]" />
            <p className="text-[13px] font-medium uppercase leading-none tracking-[.02em] text-[#8fd9cf]">
              FAQ
            </p>
            <span className="h-px w-[22px] bg-[#3d8f8a]" />
          </div>

          <h2 className="mx-auto mb-5 max-w-[1100px] font-sans text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.22] tracking-[-0.01em] text-[#f2fbf9]">
            Questions about our fintech writing services.
          </h2>

          <p className="mx-auto max-w-[1020px] text-[18px] leading-[1.7] text-[#a9d9d1]">
            Everything you need to know about how we research, write and
            produce specialist fintech content.
          </p>
        </div>

        {/* LIST */}
        <div style={{ animationDelay: "150ms" }} className="reveal mx-auto">
          {faqItems.map((item, i) => (
            <details
              key={item.q}
              open={openFaq === i}
              onToggle={(e) => {
                if (e.currentTarget.open) {
                  setOpenFaq(i);
                } else if (openFaq === i) {
                  setOpenFaq(null);
                }
              }}
              className={`group py-[30px] ${i > 0 ? "border-t border-[#cdeee8]/[.14]" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold leading-[1.4] text-[#f2fbf9] marker:hidden md:text-[19px] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="inline-block shrink-0 text-[24px] font-light leading-none text-[#8fd9cf] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-[1300px] text-[16px] leading-[1.8] text-[#a9d9d1] md:text-[18px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    </main>
  );
}