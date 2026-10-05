import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";

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

        <div className="mx-auto grid w-[min(1340px,calc(100%-96px))] items-center gap-6 pb-16 lg:grid-cols-[.82fr_1.18fr] lg:pb-20">
          <div className="relative z-10">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[.22em] text-[#1F9FA1]">
              Fintech writing portfolio
            </p>

                      <h1 className="max-w-[640px] font-serif text-[50px] font-normal leading-[.98] tracking-[-.045em] text-[#f6f2e8] md:text-[66px]">
              Fintech content<br className="hidden md:block" /> built to support{" "}
              <span className="text-[#1F9FA1]">pipeline growth.</span>
            </h1>

            <p className="mt-7 max-w-[450px] text-[17px] leading-7 text-[#c4d3cf]">
       A collection of articles, buyer guides and customer stories we’ve researched and written for fintech and financial services companies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center gap-8 rounded-full bg-[#167273] px-7 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d8f90]"
              >
                Read the articles <Arrow />
              </a>

              <a
                href="https://www.seo-growup.com/get-in-touch"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-7 rounded-full border border-[#75cfc7]/55 px-7 text-[13px] font-semibold text-[#edf8f5] transition hover:-translate-y-0.5 hover:border-[#75e4da]"
              >
                Work with us
              </a>
            </div>

 
          </div>

          <div className="relative w-full lg:-mr-[7vw]">
            <img
              src="/images/fintech-writing-dashboard.png"
              alt="Search performance dashboard showing organic traffic growth and ranking positions for fintech topics."
              className="block h-auto w-full lg:w-[122%] lg:max-w-none lg:-ml-[12%] [filter:saturate(1.12)_contrast(1.05)] drop-shadow-[0_38px_70px_rgba(0,0,0,.28)]"
            />

          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-[#f6f2e9] text-[#082722]">
        <div className="mx-auto w-[min(1340px,calc(100%-96px))] py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#17796e]">
           Our fintech work    
              </p>
                        <h2 className="mt-4 max-w-[650px] font-serif text-[43px] font-normal leading-[1.03] tracking-[-.045em] md:text-[58px]">
                Content for Different Stages of the Buying Journey
              </h2>
              <p className="mt-8 max-w-[900px] text-[18px] leading-7 text-[#011522]">
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

                  <h3 className="mt-5 max-w-[650px] font-serif text-[38px] font-normal leading-[1.02] tracking-[-.04em] text-[#f5f1e8] md:text-[49px]">
                    How Stubbs Parkin took on nearly 200 clients without{" "}
                    <span className="text-[#1F9FA1]">adding more payment admin.</span>
                  </h3>

                  <p className="mt-5 max-w-[550px] text-[15px] leading-6 text-[#c8d7d2]">
                A story-led case study showing how Adfin helped a growing accountancy practice move 231 mandates in three days, increase payment volume and keep collections running without creating more admin.
                  </p>

                  <span className="mt-7 inline-flex min-h-11 items-center gap-8 rounded-full bg-[#167273] px-6 text-[12px] font-semibold text-white">
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
                        <strong className="block font-serif text-[24px] font-normal leading-none text-white">
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
              className="group relative overflow-hidden rounded-[20px] border border-[#123f38]/10 bg-[#f1ede1] shadow-[0_10px_35px_rgba(4,27,28,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(4,27,28,.09)]"
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

                    <p className="mt-4 max-w-[340px] text-[12px] leading-[1.7] text-[#011522]">
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
              className="group relative overflow-hidden rounded-[20px] border border-[#123f38]/10 bg-[#f1ede1] shadow-[0_10px_35px_rgba(4,27,28,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(4,27,28,.09)]"
            >
              <div className="grid min-h-[350px] lg:grid-cols-[1.04fr_.96fr]">
                {/* COPY */}
                <div className="relative z-10 flex flex-col justify-between p-7 md:p-8 lg:pr-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#257970]">
                      03 · Finance guide · Industry insight
                    </p>

                    <h3 className="mt-4 max-w-[365px] font-serif text-[29px] font-normal leading-[1.04] tracking-[-.035em] text-[#082722] md:text-[32px]">
                      How Open Banking Is Changing Finance and Payments in 2026
                    </h3>

                    <p className="mt-4 max-w-[345px] text-[12px] leading-[1.7] text-[#011522]">
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
        <div className="mx-auto w-[min(1340px,calc(100%-96px))] py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#1F9FA1]">
                Our approach
              </p>
              <h2 className="mt-5 max-w-[620px] font-serif text-[46px] font-normal leading-[1.02] tracking-[-.03em] text-[#f6f2e8] md:text-[62px]">
                A clear process
                <br />
                for content that
                <br />
                <span className="text-[#1F9FA1]">drives pipeline.</span>
              </h2>
            </div>

            <p className="max-w-[580px] text-[18px] leading-8 text-[#c4d3cf] lg:border-l lg:border-white/10 lg:pl-10">
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

                <h3 className="mt-6 min-h-[64px] font-serif text-[26px] font-normal leading-[1.1] tracking-[-.02em] text-[#f4f0e7]">
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
  <section id="investment" className="scroll-mt-24 bg-white text-[#082722]">
    <div className="mx-auto w-[min(1340px,calc(100%-48px))] py-16 md:w-[min(1340px,calc(100%-96px))] lg:py-20">
      <div className="bg-[#eef4f3] px-6 py-14 md:px-12 lg:px-16">
        {/* HEADER */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#167273]">
            <span className="h-px w-3 bg-[#167273]" />
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-[43px] font-normal leading-[1.03] tracking-[-.045em] text-[#071b2c] md:text-[58px]">
            Investment Options and Packages
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-7 text-[#011522]">

            Choose a single article or an ongoing monthly programme. Both include
            research, strategic input and content written by fintech specialists.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {/* MONTHLY (featured) */}
          <div className="relative flex flex-col border border-[#167273] bg-white p-7 shadow-[0_18px_45px_rgba(18,114,115,.10)]">
            <span className="absolute -top-[11px] left-4 bg-[#167273] px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-white">
              Most popular
            </span>

            <h3 className="font-serif text-[32px] font-normal leading-[1.05] tracking-[-.035em] text-[#071b2c]">
              Monthly programme
            </h3>
            <p className="mt-4 font-serif text-[56px] font-normal leading-none tracking-[-.05em] text-[#071b2c]">
              £3,400 <span className="font-sans text-[15px] font-normal tracking-normal text-[#607078]">/mo</span>
            </p>
            <p className="mt-2 text-[14px] text-[#607078]">4 pieces per month, saving £400</p>

            <div className="mt-4 border border-[#cfe5e0] bg-[#f1f7f6] px-4 py-3 text-[13px] font-semibold text-[#0c5d57]">
              Expert review and custom visuals on every piece
            </div>

            <p className="mt-5 text-[14px] leading-6 text-[#53656b]">
              A consistent stream of research-led content for teams publishing every month.
            </p>

            <ul className="mt-5 flex-1">
              {[
                "4 articles or customer stories each month",
                "Monthly topic plan and keyword research",
                "Expert review on every piece",
                "Custom visuals for every piece",
                "Monthly report on rankings and traffic",
                "Priority turnaround",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 border-b border-[#e3ecea] py-3 text-[13px] text-[#53656b] last:border-b-0"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0e8a7d] text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-[3]" aria-hidden="true">
                      <path d="m6 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://www.seo-growup.com/get-in-touch"
              target="_blank"
              rel="noreferrer"
              className="mt-6 block bg-[#06302d] py-4 text-center text-[13px] font-semibold text-white transition hover:bg-[#0b4a43]"
            >
              Start a monthly programme
            </a>
          </div>

          {/* ONE-OFF */}
          <div className="relative flex flex-col border border-[#e3ebe9] bg-white p-7">
            <h3 className="font-serif text-[32px] font-normal leading-[1.05] tracking-[-.035em] text-[#071b2c]">
              Long-form article
            </h3>
            <p className="mt-4 font-serif text-[56px] font-normal leading-none tracking-[-.05em] text-[#071b2c]">
              £950 <span className="font-sans text-[15px] font-normal tracking-normal text-[#607078]">/article</span>
            </p>
            <p className="mt-2 text-[14px] text-[#607078]">One-off, no commitment</p>

            <div className="mt-4 border border-[#e3ebe9] bg-[#f7f9f9] px-4 py-3 text-[13px] font-semibold text-[#1f3a36]">
              Research, SEO and custom visuals included
            </div>

            <p className="mt-5 text-[14px] leading-6 text-[#53656b]">
              In-depth, research-led articles, buyer guides and specialist fintech content.
            </p>

            <ul className="mt-5 flex-1">
              {[
                "1,600 to 2,000 words",
                "Primary-source research and fact-checking",
                "Keyword and search-intent research",
                "SEO title, meta description and internal links",
                "Custom graphics and visuals",
                "Two rounds of revisions",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 border-b border-[#e3ecea] py-3 text-[13px] text-[#53656b] last:border-b-0"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0e8a7d] text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-[3]" aria-hidden="true">
                      <path d="m6 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://www.seo-growup.com/get-in-touch"
              target="_blank"
              rel="noreferrer"
              className="mt-6 block border border-[#167273] py-4 text-center text-[13px] font-semibold text-[#167273] transition hover:bg-[#167273] hover:text-white"
            >
              Commission an article
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


    {/* FAQ */}
    <section id="faq" className="scroll-mt-24 relative overflow-hidden bg-[#041b1c] text-white">


      <div className="mx-auto w-[min(1340px,calc(100%-48px))] py-20 md:w-[min(1340px,calc(100%-96px))] lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">

          {/* LEFT */}
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1F9FA1]">
              FAQ
            </p>

            <h2 className="mt-5 max-w-[520px] font-serif text-[46px] font-normal leading-[.98] tracking-[-.045em] text-[#f6f2e8] md:text-[61px]">
              Questions about our{" "}
              <span className="text-[#1F9FA1]">fintech writing</span>{" "}
              services.
            </h2>

            <p className="mt-7 max-w-[470px] text-[17px] leading-7 text-[#c4d3cf]">
              Everything you need to know about how we research, write and
              produce specialist fintech content.
            </p>

      
          </div>

          {/* RIGHT */}
          <div className="space-y-3">
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
                className="group overflow-hidden rounded-[18px] border border-[#3fcfc0]/20 bg-[#05201f] transition duration-300 open:border-[#3fcfc0]/45 open:bg-[#062b28]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 px-5 py-5 marker:hidden md:px-7 md:py-6">
                  <span className="w-9 shrink-0 font-serif text-[22px] leading-none text-[#1F9FA1] md:text-[24px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="flex-1 font-serif text-[22px] font-normal leading-[1.15] tracking-[-.025em] text-[#f4f0e7] md:text-[27px]">
                    {item.q}
                  </h3>

                  <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0b4a43] text-[#1F9FA1]">
                    <span className="absolute h-px w-4 bg-current" />
                    <span className="absolute h-4 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>

                <div className="grid grid-cols-[36px_1fr_auto] gap-5 px-5 pb-6 md:grid-cols-[36px_1fr_44px] md:px-7 md:pb-7">
                  <span />

                  <p className="max-w-[690px] text-[14px] leading-7 text-[#b9cbc6] md:text-[15px]">
                    {item.a}
                  </p>

                  <span />
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

 


    </main>
  );
}