"use client";

import { useEffect, useState } from "react";

/**
 * 5 Best AI Note-Taking Tools for UK Financial Advisers in 2026
 * Researched 2 Oct 2026 from vendor pricing pages, trade press and adviser forums.
 * Optional screenshots: /public/images/ai-notes/{id}.png (hidden if missing).
 */

type Quote = { who: string; text: string; src: string; url: string };
type Tool = {
  id: string; name: string; domain: string; url: string; best: string; intro: string;
  features: string[]; pros: string[]; cons: string[];
  price: { headline: string; detail: string }; users: Quote[]; verdict: string;
};

const BT = "https://thebigtent.paraplannersassembly.co.uk/discussion/2150/what-ai-tools-or-services-are-you-using-or-looking-at";

const tools: Tool[] = [
  {
    id: "saturn", name: "Saturn", domain: "saturnos.com", url: "https://www.saturnos.com/",
    best: "Multi-adviser firms that want notes, reports and compliance checks inside one platform",
    intro: "Saturn started with meeting notes and has grown into a wider advice operating system. Its Meeting Notes 2.0 release (September 2025) was built to keep the context of the whole conversation, and the company says it needs 80% fewer facts added by hand afterwards. It is the most widely adopted tool here, with more than 750 firms and around 6,500 UK advisers.",
    features: ["Meeting notes for in-person, phone, Teams and Zoom meetings", "Templates by meeting type (review, onboarding, discovery)", "Vulnerability flags built into the notes", "Suitability reports, onboarding and pension transfer paperwork", "Guardian compliance suite for file checks and meeting observations", "Mandatory adviser review before anything is released"],
    pros: ["Largest user base of the five, so the product gets pressure-tested", "Advisers describe the notes as detailed and accurate", "Fits firm-wide rollout: templates, integrations and compliance together", "Fast release pace, with acquisitions to deepen report writing"],
    cons: ["No public price list. You need a sales conversation", "Report writing was still seen as early in 2025, with a lot of manual intervention expected", "More platform than a one-adviser practice may need"],
    price: { headline: "Not published", detail: "Quote-based. We found no public per-adviser price, so budget from a demo quote and ask what is included in each module." },
    users: [
      { who: "Paraplanning firm using Saturn in production", text: "Fully implemented across reviews and onboarding. Notes come out neat, sectioned and fluent in advice terminology, and it flags vulnerability.", src: "The Big Tent, March 2025", url: BT },
      { who: "Firm that compared four tools", text: "Chose Saturn over PlannerPal, AdvisoryAI and Aveni because the notes were detailed and accurate and the pace suited them.", src: "The Big Tent, March 2025", url: BT },
      { who: "Jonathon Jay, Hoxton Wealth (vendor-published)", text: "Advisers hold about ten meetings a week and used to spend 30 to 45 minutes on notes after each. He puts the saving at five to seven hours a week.", src: "Saturn website", url: "https://www.saturnos.com/" },
    ],
    verdict: "The safest shortlist pick for a growing firm, with the caveat that you will negotiate price blind.",
  },
  {
    id: "advisoryai", name: "AdvisoryAI", domain: "advisoryai.com", url: "https://advisoryai.com/",
    best: "Firms that want clear, published pricing and the option to add report writing and compliance checks later",
    intro: "AdvisoryAI sells three separate tools under one platform called Atlas: Evie for meeting notes, Emma for suitability reports and Colin for compliance checks. It is the only vendor here that publishes every price, offers monthly billing and a 14-day trial, and says it serves 2,000+ advisers across 400+ UK firms.",
    features: ["Evie: notes, pre-meeting prep, soft facts, follow-up email summaries", "Zoom, Google Meet and Teams plus a mobile app for face-to-face meetings", "Emma: suitability reports from your own templates, fact-finds, LOA pack summaries", "Colin: file and report checks with compliance scores and citations", "Integrations with Intelliflo, Curo, Xplan and Plannr", "Enterprise tier with firm-level MI dashboard for 30+ advisers"],
    pros: ["Transparent pricing, no annual lock-in, 30-day money-back guarantee", "Broadest back-office coverage: four CRMs listed", "Evaluators called it the most impressive demo of the four", "Modular: start with notes, add reports later"],
    cons: ["The most expensive option in an adviser comparison we found", "Three products means three adoption jobs", "Its own pricing page shows two sets of numbers (see below)"],
    price: { headline: "£89 to £99 per user per month for notes", detail: "Plan cards show Evie £89, Emma £269 and Colin £89 per user per month + VAT. The FAQ and page metadata say £99, £299 and £99, which looks like a monthly versus annual toggle. Any two products £369 a month, all three £429 (as stated on the FAQ). 14-day free trial, no credit card. Confirm which figure applies to you." },
    users: [
      { who: "Firm that compared four tools", text: "Called AdvisoryAI the most impressive and also the most expensive. The suitability module had potential but would take time to get right.", src: "The Big Tent, March 2025", url: BT },
      { who: "Paraplanning firm using it since July 2023", text: "Advisers all use the meeting-notes template with good results. The adviser still has to edit the note before it reaches the paraplanner.", src: "The Big Tent, February 2025", url: "https://thebigtent.paraplannersassembly.co.uk/discussion/2263/advisory-ai" },
      { who: "Louie Butlin, Brooks Macdonald (vendor-published)", text: "An annual meeting note used to take about 1.5 hours and now takes 15 minutes.", src: "AdvisoryAI website", url: "https://advisoryai.com/solutions/advisers" },
    ],
    verdict: "Best for firms that want to price it before talking to sales, and the best trial terms of the five.",
  },
  {
    id: "aveni", name: "Aveni Assist", domain: "aveni.ai", url: "https://aveni.ai/aveni-assist/",
    best: "Larger or network-style firms that want notes, admin and conduct monitoring from one UK AI vendor",
    intro: "Aveni Assist joins the meeting, then produces summaries, actions, client emails, CRM updates, fact-find content and suitability drafting. It runs on Aveni's own FinLLM and sits alongside Aveni Detect, which reviews customer interactions for conduct risk. Quilter is among named customers, and Advanta Wealth has publicly praised the rollout.",
    features: ["Teams, Zoom, Webex, Google Meet, mobile app and uploaded recordings", "Hard and soft fact capture structured for CRMs", "Client emails, fact-find population and suitability content", "Transcript references on outputs for audit", "Role-based access, encryption and a searchable audit trail", "Intelliflo Office integration, with Xplan listed as coming soon in Aveni's help docs"],
    pros: ["Broadest workflow in one product, plus QA and monitoring from the same vendor", "Traceability back to the transcript supports Consumer Duty evidence", "Credible enterprise customers", "UK-based implementation team"],
    cons: ["No public price and no free trial", "We found no independent reviews on Capterra, GetApp or Software Advice", "One firm that trialled it in 2024 found notes detailed but less accurate (single anecdote, now dated)", "Some third-party listings show Xplan as integrated, Aveni's own docs say coming soon. Verify"],
    price: { headline: "On request", detail: "Licence-based subscription with usage elements, per Aveni. Pricing is available on request and no free trial is offered, according to review-site listings. Ask for a paid pilot on your own recordings." },
    users: [
      { who: "Firm that compared four tools", text: "Said Aveni's notes were detailed but lacked accuracy, which is why they went elsewhere.", src: "The Big Tent, March 2025", url: BT },
      { who: "Kevin D'Arcy, Advanta Wealth (vendor-published)", text: "Reports really positive team feedback and an excellent response to the tool, with good support through rollout.", src: "Aveni website", url: "https://aveni.ai/" },
      { who: "Aveni's own claim", text: "A network of 70 advisers reported saving 1,400 hours a month. That is roughly 20 hours per adviser and is a vendor figure.", src: "Aveni blog", url: "https://aveni.ai/blog/7-best-ai-tools-for-uk-financial-advisers-in-2026/" },
    ],
    verdict: "A strong fit if you want monitoring as well as notes. Insist on a pilot, because independent feedback is thin.",
  },
  {
    id: "plannerpal", name: "PlannerPal", domain: "plannerpal.co.uk", url: "https://www.plannerpal.co.uk/",
    best: "Firms on Intelliflo or Xplan that want preparation, notes and CRM updates linked together",
    intro: "PlannerPal has been the quickest to add new angles. Its Pre-Meeting Prep Pack (January 2026) assembles valuations, goals and past actions before the meeting, and video analysis (April 2026) reads what was on screen, such as cashflow models. It connects to Teams and Zoom without a recording bot.",
    features: ["No-bot capture via Teams and Zoom", "Customisable meeting notes and multiple templates", "CRM cross-checking against live Intelliflo and Xplan data", "Pre-Meeting Prep Pack from CRM records, valuations and past notes", "Video analysis of shared screens", "Branded reports, emails and adviser-approved CRM update suggestions"],
    pros: ["Strongest story on the work before the meeting", "Notes enriched with live CRM data", "No visible bot in client calls", "Official Intelliflo integration partner"],
    cons: ["No public pricing found", "An evaluating firm in 2024 found the notes too basic. The product has changed a lot since", "Fewer independent adviser reviews than Saturn or AdvisoryAI"],
    price: { headline: "Not published", detail: "We found no public price. Ask for per-adviser pricing, whether the prep pack and video analysis are included, and the minimum term." },
    users: [
      { who: "Firm that compared four tools (2024 evaluation)", text: "Found the notes too basic and lacking detail. Feedback predates customisable notes and video analysis.", src: "The Big Tent, March 2025", url: BT },
      { who: "Mark Powling, financial adviser, Adaurum", text: "Video analysis lets him see exactly what was on screen at any point, which makes notes faster and clearer.", src: "The Intermediary, April 2026", url: "https://theintermediary.co.uk/2026/04/plannerpal-introduces-video-powered-meeting-notes-for-financial-advisers/" },
      { who: "PlannerPal's own claim", text: "Advisers save 30 to 90 minutes of admin per client meeting. Vendor figure.", src: "PlannerPal website", url: "https://www.plannerpal.co.uk/" },
    ],
    verdict: "Worth a look if prep time is your hidden cost. Check the notes yourself, since early feedback was lukewarm.",
  },
  {
    id: "recordsure", name: "Recordsure", domain: "recordsure.com", url: "https://recordsure.com/conversation-review-ai/recordsure-ai-meeting-notes/",
    best: "Compliance-led firms that need transcript evidence behind every AI-written line",
    intro: "Recordsure takes the opposite approach to the speed-first tools. Recordsure Capture records in-person or video conversations, an AI drafts the summary, and a validation step shows supporting and conflicting transcript excerpts for a human to check. It is part of TCC Group and partners with Intelliflo and Iress.",
    features: ["Capture of in-person and online conversations with a searchable transcript", "AI-assisted summary with supporting transcript excerpts", "Conflicting-evidence highlighting for each summary element", "Human validation step before the note is used", "Transfer into practice management systems", "ReviewAI for case and file review teams"],
    pros: ["Clearest evidence trail and a visible human check", "Backed by a compliance business (TCC Group)", "Works for in-person meetings, not only video calls", "Pairs naturally with file review"],
    cons: ["No public pricing", "Suitability drafting is not the core job", "The meeting-notes page was last updated in 2024 and we found no independent adviser reviews", "Validation adds a step, so the time saving is smaller than speed-first tools"],
    price: { headline: "Not published", detail: "Demo-led pricing. Recordsure claims notes are created more than 80% faster. Ask what the validation workflow costs in reviewer time, not just licence fees." },
    users: [
      { who: "Recordsure's own claim", text: "Meeting summaries created more than 80% faster, with validation tools to check accuracy before use. Vendor figure.", src: "Recordsure website", url: "https://recordsure.com/conversation-review-ai/recordsure-ai-meeting-notes/" },
      { who: "Independent adviser feedback", text: "We found no adviser reviews on forums, Capterra or G2. Ask Recordsure for two UK reference customers and call them.", src: "Research gap, October 2026", url: "https://recordsure.com/resources/case-studies" },
    ],
    verdict: "The one to pick when your compliance team's first question is 'show me the evidence'.",
  },
];

const criteria = [
  ["Note accuracy", "Does it catch soft facts and vulnerability cues, and does it get numbers right?"],
  ["Back-office handoff", "Which CRM fields write back, and which still need re-keying?"],
  ["Suitability support", "Drafting or checking, with the adviser still signing off."],
  ["Evidence", "Can a reviewer trace a statement to the transcript?"],
  ["Price clarity", "Is the cost published, and is there a trial?"],
  ["Independent proof", "Do real advisers outside the vendor's website back it up?"],
];

const table: [string, string, string, string, string][] = [
  ["saturn", "Quote only", "Via sales", "Reports + Guardian", "Intelliflo, Xplan and others (confirm)"],
  ["advisoryai", "£89–£99 per user/mo", "14 days, no card", "Emma, separate £269–£299", "Intelliflo, Curo, Xplan, Plannr"],
  ["aveni", "On request", "None listed", "Drafting support", "Intelliflo Office (Xplan coming)"],
  ["plannerpal", "Not published", "Via sales", "Reports, branded", "Intelliflo, Xplan, Curo, Plannr"],
  ["recordsure", "Not published", "Via sales", "Not core", "PMS transfer (Intelliflo, Iress partner)"],
];

const sources = [
  ["Fidelity Adviser Solutions: AI adoption accelerates across advice firms", "https://adviserservices.fidelity.co.uk/news-insights/financial-advisor-insights/press-releases/ai-adoption-accelerates-across-advice-firms/"],
  ["AdvisoryAI: pricing", "https://advisoryai.com/pricing"],
  ["The Big Tent (Paraplanners Assembly): AI tools thread", BT],
  ["The Big Tent: Advisory AI thread", "https://thebigtent.paraplannersassembly.co.uk/discussion/2263/advisory-ai"],
  ["Money Marketing: Saturn unveils AI operating system", "https://www.moneymarketing.co.uk/news/saturn-unveils-ai-operating-system-to-cut-advice-costs/"],
  ["The Intermediary: Saturn upgrades AI meeting notes tool", "https://theintermediary.co.uk/2025/09/saturn-upgrades-ai-meeting-notes-tool-for-advisers/"],
  ["Aveni Assist: Software Advice listing", "https://www.softwareadvice.co.uk/software/525113/Aveni-Assist"],
  ["Aveni: 7 best AI tools for UK financial advisers", "https://aveni.ai/blog/7-best-ai-tools-for-uk-financial-advisers-in-2026/"],
  ["PlannerPal: Intelliflo partner page", "https://www.intelliflo.com/partners/integrated-partners/plannerpal/"],
  ["The Intermediary: PlannerPal video-powered meeting notes", "https://theintermediary.co.uk/2026/04/plannerpal-introduces-video-powered-meeting-notes-for-financial-advisers/"],
  ["Professional Paraplanner: PlannerPal pre-meeting tool", "https://professionalparaplanner.co.uk/plannerpal-launches-pre-meeting-ai-tool-for-advisers/"],
  ["Recordsure: AI meeting notes", "https://recordsure.com/conversation-review-ai/recordsure-ai-meeting-notes/"],
  ["Dynamic Planner: pricing", "https://dynamicplanner.com/?p=2095"],
];

const sub = ["Key features", "Pros", "Cons", "Pricing", "What users say"];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

function Mark({ t, size = 40 }: { t: Tool; size?: number }) {
  const [bad, setBad] = useState(false);
  return (
    <span className="mk" style={{ width: size, height: size }}>
      {bad ? t.name[0] : <img alt="" width={size} height={size} src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=128`} onError={() => setBad(true)} />}
    </span>
  );
}

export default function Article({ contactHref = "https://www.seo-growup.com/get-in-touch" }: { contactHref?: string }) {
  const [active, setActive] = useState("");
  const [noShot, setNoShot] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const ids = ["how", "criteria", "tools", ...tools.map((t) => t.id), "choose"];
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-20% 0px -70% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const byId = (id: string) => tools.find((t) => t.id === id)!;

  return (
    <div className="p">
      <style>{css}</style>

      <header className="hero">
        <div className="wrap">
          <div className="crumb">Buyer's guide / Financial advice technology</div>
          <h1>5 Best AI Note-Taking Tools for UK Financial Advisers in 2026</h1>
          <p className="deck">Real prices, what advisers on the ground say, and where each tool falls short. Researched from vendor pricing pages, trade press and adviser forums.</p>
          <div className="by"><b>GrowUp Editorial</b><span>Researched 2 October 2026</span><span>12 min read</span></div>
        </div>
      </header>

      <div className="wrap layout">
        <aside className="toc">
          <div className="toch">Table of Contents</div>
          <a href="#how" className={active === "how" ? "on" : ""}>How we researched this</a>
          <a href="#criteria" className={active === "criteria" ? "on" : ""}>What to look for in an AI note-taker</a>
          <a href="#tools" className={active === "tools" ? "on" : ""}>5 best tools compared</a>
          {tools.map((t, i) => (
            <div key={t.id}>
              <a href={`#${t.id}`} className={active === t.id ? "on" : ""}>{i + 1}. {t.name}</a>
              {active === t.id && <div className="subs">{sub.map((s) => <a key={s} href={`#${t.id}-${slug(s)}`}>{s}</a>)}</div>}
            </div>
          ))}
          <a href="#choose" className={active === "choose" ? "on" : ""}>Which should you choose?</a>
          <div className="tocta"><b>Writing for a fintech that sells to advisers?</b><a href={contactHref}>Talk to GrowUp</a></div>
        </aside>

        <article>
          <p className="lead">A transcript is the easy part. What separates these tools is what happens next: whether the note holds the soft facts, whether the CRM updates itself, and whether a reviewer can see why the AI wrote what it wrote.</p>
          <p>Adoption is already mainstream. Fidelity's June 2026 survey of 200 advisers found 48% using or implementing AI for meeting transcription and notes, up from 25% in 2025, with 42% on report personalisation and 40% on suitability assessment and reporting.<sup><a href="#src-1">1</a></sup> The question now is which tool holds up in your own meetings.</p>

          <h2 id="how">How we researched this</h2>
          <p>We read each vendor's current product and pricing pages, trade-press coverage from Money Marketing, The Intermediary and Professional Paraplanner, review-site listings, and the Paraplanners Assembly forum, where advisers and paraplanners compare these tools openly. We separate three kinds of evidence: what the vendor says, what a named customer says on the vendor's site, and what independent users say elsewhere.</p>
          <div className="note"><b>Read this before you rely on it.</b> This is a GrowUp portfolio piece built around an Aveni brief. Aveni is included and does not get an overall win. Independent user feedback is thin and some of it is 18+ months old, so each quote carries its date. Prices change. Confirm everything on the vendor's site and in a trial before buying.</div>

          <h2 id="criteria">What to look for in an AI note-taker</h2>
          <div className="grid">{criteria.map(([a, b]) => <div key={a}><b>{a}</b><p>{b}</p></div>)}</div>

          <h2 id="tools">5 best AI note-taking tools for UK financial advisers in 2026</h2>
          <div className="tw">
            <table>
              <thead><tr><th>Tool</th><th>Best for</th><th>Price</th><th>Free trial</th><th>Suitability</th><th>CRM</th></tr></thead>
              <tbody>
                {table.map(([id, price, trial, suit, crm]) => {
                  const t = byId(id);
                  return (
                    <tr key={id}>
                      <td><a href={`#${id}`} className="tn"><Mark t={t} size={34} /><span><b>{t.name}</b><small>{t.domain}</small></span></a></td>
                      <td className="bf">{t.best}</td>
                      <td><b className={price.startsWith("£") ? "pr" : "pn"}>{price}</b></td>
                      <td>{trial}</td><td>{suit}</td><td>{crm}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="legend">Only AdvisoryAI publishes prices. Order reflects breadth of independent evidence, not an overall score.</p>

          <div className="note"><b>Check your planning platform first.</b> Dynamic Planner includes live transcription and structured meeting summaries in its licence, from £124 per adviser per month plus a £130 set-up fee for smaller firms.<sup><a href="#src-13">13</a></sup> If you already use it, you may not need a separate tool.</div>

          {tools.map((t, i) => (
            <section key={t.id} className="tool">
              <h2 id={t.id}><Mark t={t} size={44} />{i + 1}. {t.name}</h2>
              <p className="bestfor"><b>Best for:</b> {t.best}</p>
              <p>{t.intro}</p>

              {!noShot[t.id] && <div className="shot"><img src={`/images/ai-notes/${t.id}.png`} alt={`${t.name} screenshot`} onError={() => setNoShot({ ...noShot, [t.id]: true })} /></div>}

              <h3 id={`${t.id}-key-features`}>Key features</h3>
              <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>

              <div className="pc">
                <div className="pro"><h3 id={`${t.id}-pros`}>Pros</h3><ul>{t.pros.map((f) => <li key={f}>{f}</li>)}</ul></div>
                <div className="con"><h3 id={`${t.id}-cons`}>Cons</h3><ul>{t.cons.map((f) => <li key={f}>{f}</li>)}</ul></div>
              </div>

              <h3 id={`${t.id}-pricing`}>Pricing</h3>
              <div className="price"><strong>{t.price.headline}</strong><p>{t.price.detail}</p></div>

              <h3 id={`${t.id}-what-users-say`}>What do users say about {t.name.split(" ")[0]}?</h3>
              <div className="quotes">
                {t.users.map((q) => (
                  <blockquote key={q.who + q.src}>
                    <p>{q.text}</p>
                    <footer><b>{q.who}</b> <a href={q.url} target="_blank" rel="noreferrer">{q.src}</a></footer>
                  </blockquote>
                ))}
              </div>

              <p className="verdict"><b>Our take:</b> {t.verdict}</p>
              <a className="visit" href={t.url} target="_blank" rel="noreferrer">Visit {t.name}</a>
            </section>
          ))}

          <h2 id="choose">Which should you choose?</h2>
          <div className="fit">
            {[
              ["You want a price before a sales call", "AdvisoryAI. It is the only one with published pricing and a no-card trial."],
              ["You want the most proven option at scale", "Saturn, with the widest adoption and the strongest independent praise for note quality."],
              ["Compliance needs proof behind every line", "Recordsure for validation, or Aveni for transcript references plus conduct monitoring."],
              ["Prep and CRM linkage is the bottleneck", "PlannerPal, tested on your own Xplan or Intelliflo data."],
              ["You already pay for a planning platform", "Check whether transcription is bundled before buying a standalone tool."],
            ].map(([a, b]) => <div key={a}><b>{a}</b><p>{b}</p></div>)}
          </div>
          <p>Whatever you choose, run a 30-day pilot on your own recordings and track three numbers: minutes saved per meeting, material corrections before filing, and advisers still using it at day 30. As one forum user put it, the adviser still has to edit the note, and the tool only reflects the quality of the meeting.<sup><a href="#src-4">4</a></sup></p>

          <div className="srcs"><h3>Sources</h3><ol>{sources.map(([n, u], i) => <li key={u} id={`src-${i + 1}`}><a href={u} target="_blank" rel="noreferrer">{n}</a></li>)}</ol></div>
        </article>
      </div>
    </div>
  );
}

const css = String.raw`
.p{--ink:#0b1220;--mut:#5b6472;--line:#e3e6ec;--bg:#f6f7f9;--ac:#2b4bff;--acs:#eef1ff;--ok:#0f7a4d;--no:#b4322a;--serif:'Iowan Old Style','Palatino Linotype',Georgia,serif;--sans:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;background:#fff;color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.7}
.p *{box-sizing:border-box}.p a{color:inherit;text-decoration:none}.p h1,.p h2,.p h3,.p p,.p ul,.p ol,.p blockquote{margin:0}.wrap{width:min(1180px,calc(100% - 48px));margin-inline:auto}
.hero{background:var(--ink);color:#fff;padding:84px 0 72px}.crumb{font-size:13px;color:#8e9ab3;margin-bottom:26px}.hero h1{font-family:var(--serif);font-weight:700;font-size:clamp(38px,5.4vw,68px);line-height:1.04;letter-spacing:-.03em;max-width:900px}.deck{max-width:660px;margin-top:26px;font-size:19px;line-height:1.6;color:#c5cddd}.by{display:flex;flex-wrap:wrap;gap:6px 22px;margin-top:34px;font-size:14px;color:#8e9ab3}.by b{color:#fff;font-weight:600}
.layout{display:grid;grid-template-columns:260px minmax(0,1fr);gap:72px;padding-top:56px;align-items:start}
.toc{position:sticky;top:24px;max-height:calc(100vh - 48px);overflow:auto;border-right:1px solid var(--line);padding-right:24px;font-size:14px;line-height:1.4}.toch{font-weight:700;font-size:15px;margin-bottom:14px}.toc>a,.toc>div>a{display:block;padding:8px 0 8px 12px;margin-left:-12px;color:var(--mut);border-left:2px solid transparent}.toc a.on{color:var(--ink);font-weight:600;border-left-color:var(--ac)}.subs{padding-left:14px}.subs a{display:block;padding:5px 0;font-size:13px;color:var(--mut)}.subs a:hover,.toc a:hover{color:var(--ac)}
.tocta{margin-top:22px;padding:18px;border-radius:10px;background:var(--ink);color:#fff}.tocta b{display:block;font-size:14px;line-height:1.35}.tocta a{display:block;margin-top:14px;text-align:center;padding:10px;border-radius:8px;background:var(--ac);color:#fff;font-weight:600}
article{min-width:0;max-width:780px}article>p{margin-bottom:20px}.lead{font-family:var(--serif);font-size:23px;line-height:1.55;margin-bottom:24px!important}sup a{color:var(--ac);font-weight:700;font-size:11px;padding-left:2px}
h2{font-family:var(--serif);font-size:36px;line-height:1.15;letter-spacing:-.02em;margin:64px 0 20px;scroll-margin-top:24px;display:flex;align-items:center;gap:14px}h3{font-size:19px;font-weight:700;margin:34px 0 12px;scroll-margin-top:24px}
.note{border-left:3px solid var(--ac);background:var(--acs);padding:16px 20px;font-size:15px;line-height:1.6;margin:22px 0;border-radius:0 8px 8px 0}
.grid{display:grid;grid-template-columns:repeat(2,1fr);border:1.5px solid var(--ink);border-radius:10px;overflow:hidden;margin:22px 0}.grid>div{padding:18px 20px;border-bottom:1.5px solid var(--line)}.grid>div:nth-child(odd){border-right:1.5px solid var(--line)}.grid b{font-size:15px}.grid p{font-size:14px;line-height:1.5;color:var(--mut);margin-top:4px}
.tw{overflow:auto;border:1.5px solid var(--ink);border-radius:12px;margin:26px 0 12px}table{border-collapse:collapse;width:100%;min-width:940px}th{background:var(--ink);color:#fff;font-size:12.5px;font-weight:600;text-align:left;padding:14px 16px;white-space:nowrap}td{padding:16px;border-top:1px solid var(--line);vertical-align:middle;font-size:13.5px;line-height:1.45}tbody tr:nth-child(even){background:var(--bg)}tbody tr:hover{background:var(--acs)}.tn{display:flex;gap:12px;align-items:center}.tn b{display:block;font-size:15px}.tn small{color:var(--mut);font-size:12px}.bf{color:#3b4350;max-width:260px}.pr{color:var(--ok)}.pn{color:var(--mut);font-weight:600}
.mk{display:inline-flex;align-items:center;justify-content:center;flex:none;border:1px solid var(--line);border-radius:10px;background:#fff;font:700 18px var(--serif);overflow:hidden}.mk img{width:70%;height:70%;object-fit:contain}.legend{font-size:13px;color:var(--mut)}
.tool{border-top:1px solid var(--line);margin-top:56px}.tool h2{margin-top:44px}.bestfor{font-size:19px;line-height:1.55;margin-bottom:16px}.tool p{margin-bottom:16px}
.shot{margin:24px 0;border-radius:12px;overflow:hidden;border:1.5px solid var(--ink)}.shot img{width:100%;display:block}
.tool ul{padding-left:20px}.tool li{margin-bottom:8px;padding-left:4px}.tool li::marker{color:var(--ac)}
.pc{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:10px}.pc>div{border-radius:12px;padding:6px 22px 18px;border:1.5px solid}.pro{border-color:var(--ok)}.pro h3{color:var(--ok)}.pro li::marker{color:var(--ok)}.con{border-color:var(--no)}.con h3{color:var(--no)}.con li::marker{color:var(--no)}.pc li{font-size:15px;line-height:1.55}
.price{border:1.5px solid var(--ink);border-radius:12px;padding:18px 22px;background:var(--bg)}.price strong{font-family:var(--serif);font-size:24px}.price p{font-size:15px;color:#3b4350;margin:8px 0 0!important}
.quotes{display:grid;gap:12px}.quotes blockquote{border-left:3px solid var(--ac);background:var(--bg);padding:16px 20px;border-radius:0 10px 10px 0}.quotes p{font-size:16px;margin:0 0 10px!important}.quotes footer{font-size:13px;color:var(--mut)}.quotes footer b{color:var(--ink)}.quotes footer a{color:var(--ac);text-decoration:underline;margin-left:6px}
.verdict{margin-top:24px!important;padding:16px 20px;background:var(--ink);color:#e6ebf5;border-radius:10px;font-size:16px}.verdict b{color:#8fa2ff}
.visit{display:inline-block;margin-top:6px;padding:12px 20px;border-radius:8px;background:var(--ac);color:#fff!important;font-weight:600;font-size:14px}.visit:hover{background:var(--ink)}
.fit{border:1.5px solid var(--ink);border-radius:12px;overflow:hidden;margin:22px 0}.fit>div{padding:18px 22px;border-top:1.5px solid var(--line)}.fit>div:first-child{border-top:0}.fit b{font-size:16px}.fit p{font-size:15px;color:var(--mut);margin-top:4px;line-height:1.55}
.srcs{margin-top:56px;padding-top:24px;border-top:1px solid var(--line)}.srcs h3{margin-top:0}.srcs ol{padding-left:20px;font-size:14px;color:var(--mut)}.srcs li{margin-bottom:8px}.srcs a:hover{color:var(--ac);text-decoration:underline}
@media(max-width:960px){.layout{grid-template-columns:1fr;gap:0}.toc{display:none}}
@media(max-width:600px){.p{font-size:16px}h2{font-size:28px}.grid,.pc{grid-template-columns:1fr}.grid>div:nth-child(odd){border-right:0}.hero{padding:56px 0 48px}}
@media(prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
`;