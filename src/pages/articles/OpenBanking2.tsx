"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Self-contained React + TypeScript page. No Tailwind or icon library required.
 * Put the supplied PNG at public/images/open-banking-2026-hero.png.
 * Render this component directly; it includes its own article shell and hero.
 * Route: /writing-portfolio/open-banking-2026 (configure in your router).
 * Set showNavigation={false} if your application already renders a header.
 */
type Props = {
  heroImageSrc?: string;
  portfolioHref?: string;
  contactHref?: string;
  showNavigation?: boolean;
};

const contents = [
  ["at-a-glance", "At a glance"],
  ["finance-teams", "What open banking actually does"],
  ["how-it-works", "How an open banking connection works"],
  ["savings", "Where finance teams save"],
  ["payments", "How open banking changes payments"],
  ["risk", "Fraud, failures and liability"],
  ["next", "Open finance and AI"],
  ["evaluate", "How to evaluate open banking"],
] as const;

const sources = [
  { name: "Open Banking Limited", title: "One billion payments and 100 billion API calls", date: "30 July 2026", url: "https://www.openbanking.org.uk/news/open-banking-surpasses-one-billion-payments-and-100-billion-api-calls/" },
  { name: "Open Banking Limited", title: "API performance stats", date: "July 2026 data", url: "https://www.openbanking.org.uk/api-performance/" },
  { name: "Credit Connect", title: "Open Banking passes one billion payments milestone", date: "28 July 2026", url: "https://www.credit-connect.co.uk/news/open-banking-passes-one-billion-payments-milestone/" },
  { name: "UKTN", title: "Expanded open banking could add £43bn to UK economy", date: "10 March 2026", url: "https://www.uktech.news/fintech/expanded-open-banking-could-add-43bn-to-uk-economy-20260310" },
  { name: "TechRound", title: "What is open banking and is it the next step in unlocking billions?", date: "March 2026", url: "https://techround.co.uk/news/open-banking-next-step-billions-uk-economy-2/" },
  { name: "Open Banking Expo", title: "Open Finance risk: seven things that happened in July", date: "August 2026", url: "https://www.openbankingexpo.com/insights/open-finance-risk-seven-things-that-happened-in-july-you-need-to-know-about/" },
  { name: "Open Banking Expo", title: "FCA announces commercial VRP scheme", date: "16 December 2025", url: "https://www.openbankingexpo.com/news/fca-announces-commercial-vrp-scheme-to-get-underway-in-2025/" },
  { name: "Monek", title: "Commercial VRP and Pay by Bank in 2026: should UK merchants care yet?", date: "2026", url: "https://www.monek.com/resources/news/cvrp-pay-by-bank-uk-merchants-2026/" },
  { name: "Skadden", title: "HM Treasury proposes major overhaul of UK payments regulation", date: "July 2026", url: "https://www.skadden.com/insights/publications/2026/07/hm-treasury-proposes-major-overhaul" },
  { name: "Financial Conduct Authority", title: "Open finance: our vision for a smart data future", date: "14 April 2026", url: "https://www.fca.org.uk/publication/corporate/open-finance-roadmap.pdf" },
  { name: "Open Banking Expo", title: "FCA unveils UK’s Open Finance roadmap to 2030", date: "14 April 2026", url: "https://www.openbankingexpo.com/news/financial-conduct-authority-unveils-uks-open-finance-roadmap-to-2030/" },
  { name: "TLT", title: "FCA’s open finance roadmap", date: "April 2026", url: "https://www.tlt.com/insights-and-events/insight/fcas-open-finance-roadmap" },
  { name: "Open Banking Limited", title: "What is open banking?", date: "Background explainer", url: "https://www.openbanking.org.uk/what-is-open-banking/" },
  { name: "Open Banking Limited", title: "Variable Recurring Payments", date: "Background explainer", url: "https://www.openbanking.org.uk/variable-recurring-payments-vrps/" },
];

const costItems = [
  { title: "Provider charges", text: "The headline rate and anything on top of it." },
  { title: "Customer completion rate", text: "A cheaper payment that fewer customers finish is not cheaper." },
  { title: "Payment confirmation", text: "How quickly and how clearly you learn the money is on its way." },
  { title: "Settlement arrangements", text: "When you can actually use the funds." },
  { title: "Refunds", text: "Who initiates them and how they match back to the original payment." },
  { title: "Reconciliation", text: "How much of your team’s time goes on working out which payment belongs to which invoice." },
  { title: "Support", text: "What happens when a customer says they paid and your system says they did not." },
];

const failureItems = [
  { title: "If the data is stale", text: "What does the screen show, and can your team see when the account last refreshed?" },
  { title: "If a payment status is uncertain", text: "Can the customer safely retry, who investigates, and what evidence do you receive when it succeeds?" },
  { title: "If a provider is unavailable", text: "Which records can you export, and can finance keep operating manually until it is back?" },
  { title: "If a permission changes", text: "What happens when consent expires, a user disconnects an account, or an employee who owned the connection leaves?" },
];

const roadmapItems = [
  { title: "2026 · Collaboration and prioritisation", text: "Industry work to decide what open finance should deliver first, with a discussion paper on the first scheme due in Q4." },
  { title: "2027 · Design and coordination", text: "Framework design, including work with HM Treasury on the long-term regulatory framework." },
  { title: "2028 to 2030 · Scaling and delivery", text: "New schemes delivered on a repeating cycle of use-case selection, design, testing, consultation and launch." },
];

const layerItems = [
  { title: "What happened?", text: "The underlying financial record: the transaction, the balance, the payment status." },
  { title: "What does the system think it means?", text: "Categorisation and interpretation. This is where a confident but wrong label can enter your numbers." },
  { title: "What should you do about it?", text: "Recommendation or action. Keep the approval step obvious and separate from the suggestion." },
];

const consentItems = [
  { title: "Instead of “Connect your bank”", text: "Try “Confirm your income without uploading three months of statements”." },
  { title: "Instead of “Link account”", text: "Try “Bring your business balances into one cash view”." },
  { title: "Instead of “Set up recurring bank payments”", text: "Try “Approve future payments up to the limits you choose”." },
];

const procurementItems = [
  { title: "Which banks and account types are actually covered?", text: "Check coverage against the banks your customers or entities really use, not the provider’s headline number." },
  { title: "How fresh is the data?", text: "Ask how often balances and transactions refresh, how stale data is labelled, and what happens when a connection stops updating." },
  { title: "What happens when a payment is not cleanly successful?", text: "You need a clear path for pending payments, failed payments, retries, refunds and reconciliation exceptions." },
  { title: "How are consent changes handled?", text: "Know what happens when access expires, a customer disconnects an account or the employee who set up the connection leaves." },
  { title: "Who owns the ugly operational cases?", text: "Ask who investigates incidents, what evidence support can see, what you can export and how finance keeps working during an outage." },
  { title: "What are you paying for beyond the connection?", text: "Compare commercial terms alongside implementation work, support, reporting, reconciliation and the internal time the workflow still needs." },
];

function Icon({ name, size = 20 }: { name: "arrow" | "back" | "bank" | "lock" | "chart" | "file" | "people" | "layers" | "check" | "link" | "chevron"; size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    back: <><path d="M19 12H5m6-6-6 6 6 6" /></>,
    bank: <><path d="m3 8 9-5 9 5H3Zm2 3v7m7-7v7m7-7v7M3 21h18M3 18h18" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>,
    chart: <><path d="M4 4v16h16M8 15l4-5 4 2 4-7" /></>,
    file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8m-8 4h6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-3-5" /></>,
    layers: <><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    link: <><path d="m10 14 4-4m-5 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m0 10a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-1 1" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Section({ id, number, heading, children }: { id: string; number: string; heading: string; children: ReactNode }) {
  return <section className="ob-section" id={id} aria-labelledby={`${id}-heading`}><div className="ob-section-kicker"><span>{number}</span><span /></div><h2 id={`${id}-heading`}>{heading}</h2>{children}</section>;
}
function P({ children, lead = false }: { children: ReactNode; lead?: boolean }) { return <p className={lead ? "ob-lead" : undefined}>{children}</p>; }
function Cite({ n }: { n: number }) { return <sup><a className="ob-cite" href={`#ob-source-${n}`} aria-label={`Source ${n}`}>{n}</a></sup>; }
function Quote({ children }: { children: ReactNode }) { return <blockquote className="ob-quote"><span className="ob-label">The commercial takeaway</span><p>{children}</p></blockquote>; }
function Note({ title, children }: { title: string; children: ReactNode }) { return <aside className="ob-note"><Icon name="lock" /><div><span className="ob-label">{title}</span><p>{children}</p></div></aside>; }
function BuildList({ items }: { items: { title: string; text: string }[] }) {
  return <div className="ob-build-list">{items.map((x, i) => <div key={x.title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{x.title}</h3><p>{x.text}</p></div><Icon name="arrow" size={19} /></div>)}</div>;
}

function GlanceFigure() {
  const items = [
    { value: "40.16m", text: "open banking payments were made in June alone, including 32.43m one-off payments and 7.73m sweeping VRPs." },
    { value: "2.81bn", text: "API calls were made in June, then climbed even higher to around 2.94bn in July." },
    { value: "18.81m", text: "people and businesses were actively connected to open banking services in June." },
    { value: "99.80%", text: "API availability across June, meaning open banking services were available almost all of the time." },
    { value: "1bn+", text: "open banking payments have now been made since launch, alongside more than 100bn API calls." },
    { value: "1 in 6,000", text: "open banking payments were fraudulent in 2025, compared with around 1 in 2,500 payments across the wider industry." },
  ];
  return <figure className="ob-glance-figure"><div className="ob-glance">{items.map(x => <div key={x.value}><strong>{x.value}</strong><span>{x.text}</span></div>)}</div><figcaption>UK CMA9 reporting · Open Banking Limited <Cite n={1} /> <Cite n={2} /> · Fraud rates reported via Open Banking Expo, citing Open Banking Limited’s Payments &amp; Fraud Monitor <Cite n={6} /></figcaption></figure>;
}
function TwoThingsFigure() {
  const accounts = [
    { name: "Main account", bank: "Bank 1", amount: "£212,400" },
    { name: "Payroll", bank: "Bank 2", amount: "£64,180" },
    { name: "Euro account", bank: "Bank 3", amount: "£18,920" },
  ];
  return <figure className="ob-figure ob-perm">
    <div className="ob-figure-head">
      <span className="ob-label">Two permissions</span>
      <span className="ob-small-tag">Read ≠ Move</span>
    </div>
    <div className="ob-perm-grid">
      <div className="ob-perm-col">
        <div className="ob-perm-cap"><span className="ob-perm-pill is-read">Read</span><strong>Account information</strong><em>AIS</em></div>
        <div className="ob-win">
          <div className="ob-win-bar"><i /><i /><i /><span>yourapp.com/cash</span></div>
          <div className="ob-win-body">
            <div className="ob-win-title"><strong>Cash position</strong><span className="ob-live"><b />Synced</span></div>
            <div className="ob-win-total"><small>Across 3 banks</small><strong>£295,500</strong></div>
            {accounts.map(a => <div className="ob-win-row" key={a.name}>
              <span className="ob-win-ico"><Icon name="bank" size={14} /></span>
              <div className="ob-win-name"><strong>{a.name}</strong><small>{a.bank}</small></div>
              <span className="ob-win-amt">{a.amount}</span>
            </div>)}
          </div>
        </div>
        <div className="ob-perm-foot">Sees balances. Cannot move money.</div>
      </div>

      <div className="ob-perm-col">
        <div className="ob-perm-cap"><span className="ob-perm-pill is-move">Move</span><strong>Payment initiation</strong><em>PIS</em></div>
        <div className="ob-win">
          <div className="ob-win-bar"><i /><i /><i /><span>yourapp.com/pay</span></div>
          <div className="ob-win-body">
            <div className="ob-win-title"><strong>Pay invoice</strong><span className="ob-live is-amber"><b />Awaiting approval</span></div>
            <div className="ob-win-total"><small>Amount</small><strong>£8,000</strong></div>
            <div className="ob-win-row"><div className="ob-win-name"><small>To</small><strong>Northfield Ltd</strong></div></div>
            <div className="ob-win-row"><div className="ob-win-name"><small>Reference</small><strong>INV-2041</strong></div></div>
            <div className="ob-win-btn"><Icon name="lock" size={14} />Approve with your bank</div>
          </div>
        </div>
        <div className="ob-perm-foot">Moves money only after the customer approves.</div>
      </div>
    </div>
    <figcaption>Illustrative screens with example values, not a live banking interface.</figcaption>
  </figure>;
}


function ConnectionJourneyFigure() {
  const steps = [
    { icon: "layers" as const, owner: "Your product", title: "Click Connect bank", bank: false },
    { icon: "bank" as const, owner: "Bank selection", title: "Choose the bank", bank: false },
    { icon: "lock" as const, owner: "Customer’s bank", title: "Sign in and approve", bank: true },
    { icon: "check" as const, owner: "Your product", title: "Permission goes live", bank: false },
  ];
  const health = [
    { label: "Accounts", value: "3 connected" },
    { label: "Last refresh", value: "08:42 today" },
    { label: "Access", value: "Balances + transactions" },
    { label: "Consent", value: "Active" },
  ];
  return <figure className="ob-figure ob-cx">
    <div className="ob-figure-head">
      <span className="ob-label">A typical bank connection</span>
      <span className="ob-small-tag">From click to usable data</span>
    </div>
    <ol className="ob-cx-steps">
      {steps.map(s => <li key={s.title} className={s.bank ? "is-bank" : undefined}>
        <span className="ob-cx-dot"><Icon name={s.icon} size={20} /></span>
        <small>{s.owner}</small>
        <strong>{s.title}</strong>
      </li>)}
    </ol>
    <div className="ob-win ob-cx-win">
      <div className="ob-win-bar"><i /><i /><i /><span>yourapp.com/connections</span></div>
      <div className="ob-win-body">
        <div className="ob-win-title"><strong>Connection health</strong><span className="ob-live"><b />Connected</span></div>
        <div className="ob-cx-grid">
          {health.map(h => <div key={h.label}><small>{h.label}</small><strong>{h.value}</strong></div>)}
        </div>
      </div>
    </div>
    <figcaption>Illustrative journey. Exact screens, refresh timing and consent periods vary by bank and provider.</figcaption>
  </figure>;
}

function CashFigure() {
  const total = 600000;
  const fmt = (n: number) => "£" + n.toLocaleString("en-GB");
  const parts = [
    { label: "Payroll", source: "Payroll system", value: 180000, cls: "c1" },
    { label: "VAT", source: "Tax", value: 96000, cls: "c2" },
    { label: "Approved supplier run", source: "Payables", value: 140000, cls: "c3" },
    { label: "Loan repayment due", source: "Lender", value: 25000, cls: "c4" },
  ];
  const usable = total - parts.reduce((sum, p) => sum + p.value, 0);
  return <figure className="ob-figure ob-cs">
    <div className="ob-figure-head">
      <span className="ob-label">Bank balance vs usable cash</span>
      <span className="ob-small-tag">Illustrative example</span>
    </div>
    <div className="ob-win">
      <div className="ob-win-bar"><i /><i /><i /><span>yourapp.com/cash</span></div>
      <div className="ob-win-body">
        <div className="ob-win-title"><strong>Cash position this week</strong><span className="ob-live"><b />Bank synced</span></div>
        <div className="ob-win-total"><small>Bank balance</small><strong>{fmt(total)}</strong></div>
        <div className="ob-cs-bar" role="img" aria-label={`${fmt(total)} bank balance, of which ${fmt(usable)} is usable this week`}>
          {parts.map(p => <span key={p.label} className={p.cls} style={{ width: `${(p.value / total) * 100}%` }} />)}
          <span className="c5" style={{ width: `${(usable / total) * 100}%` }} />
        </div>
        {parts.map(p => <div className="ob-cs-row" key={p.label}>
          <i className={`ob-cs-dot ${p.cls}`} />
          <div className="ob-win-name"><strong>{p.label}</strong><small>{p.source}</small></div>
          <span className="ob-win-amt">−{fmt(p.value)}</span>
        </div>)}
        <div className="ob-cs-row is-result">
          <i className="ob-cs-dot c5" />
          <div className="ob-win-name"><strong>Usable cash this week</strong><small>What is actually free to use</small></div>
          <span className="ob-win-amt">{fmt(usable)}</span>
        </div>
      </div>
    </div>
    <figcaption>Example figures. The balance comes from the bank connection; the obligations come from payroll, tax and payables systems.</figcaption>
  </figure>;
}



function PaymentsFigure() {
  const single = 32.43, sweeping = 7.73, total = single + sweeping;
  return <figure className="ob-figure ob-payment-figure"><div className="ob-figure-head"><span className="ob-label">UK open banking payments</span><span className="ob-small-tag">June 2026 · CMA9</span></div><div className="ob-payment-total"><strong>40.16<span>m</span></strong><p>payments in one month</p></div><div className="ob-stacked-bar" role="img" aria-label="40.16 million payments: 32.43 million single domestic payments and 7.73 million sweeping variable recurring payments"><span style={{ width: `${single / total * 100}%` }} /><span style={{ width: `${sweeping / total * 100}%` }} /></div><div className="ob-chart-legend"><div><i /><span>Single domestic payments<strong>32.43m</strong></span></div><div><i /><span>Sweeping VRPs<strong>7.73m</strong></span></div></div><figcaption>Source: Open Banking Limited, 30 July 2026. Sweeping VRPs are transfers between a customer’s own accounts. This chart does not represent commercial VRP volumes. <Cite n={1} /></figcaption></figure>;
}

function VrpFigure() {
  return <figure className="ob-figure ob-vrp-figure"><div className="ob-figure-head"><span className="ob-label">Permission with clear boundaries</span><span className="ob-small-tag">Illustrative consent</span></div><div className="ob-vrp-title"><span className="ob-icon-tile"><Icon name="lock" size={25} /></span><div><strong>One permission. Agreed limits.</strong><span>The service can act within the customer’s instructions.</span></div></div><div className="ob-limit-grid"><div><span>Per payment</span><strong>Up to £500</strong></div><div><span>Monthly total</span><strong>Up to £1,500</strong></div><div><span>Permission ends</span><strong>31 Dec 2026</strong></div></div><div className="ob-vrp-status"><span><Icon name="check" size={16} /> Within the approved limits</span><span>Customer can withdraw permission</span></div><figcaption>Example values explain the concept; they are not scheme defaults or a live banking interface.</figcaption></figure>;
}

function FinanceFigure() {
  return <figure className="ob-figure ob-finance-figure"><div className="ob-figure-head"><span className="ob-label">A broader financial picture</span><span className="ob-small-tag">Conceptual model</span></div><div className="ob-finance-map"><div className="ob-finance-centre"><Icon name="lock" size={26} /><strong>Customer permission</strong><span>Specific access. Clear purpose.</span></div><div className="ob-finance-orbits">{[{ name: "bank" as const, title: "Banking", text: "Balances & transactions" }, { name: "file" as const, title: "Credit", text: "Borrowing & commitments" }, { name: "chart" as const, title: "Wealth", text: "Savings & investments" }, { name: "lock" as const, title: "Protection", text: "Insurance information" }].map(x => <div key={x.title}><Icon name={x.name} /><strong>{x.title}</strong><span>{x.text}</span></div>)}</div></div><figcaption>Open finance aims to extend permissioned sharing beyond payment accounts. This is a future model, not a claim that every category is already available through standard UK APIs.</figcaption></figure>;
}

export default function OpenBanking({ heroImageSrc = "/images/open-banking-2026-hero.png", portfolioHref = "/writing-portfolio", contactHref = "https://www.seo-growup.com/get-in-touch", showNavigation = false }: Props = {}) {
  const articleRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string>(contents[0][0]);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(14);
  const [shareStatus, setShareStatus] = useState("");
  const shareTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;
    const text = article.querySelector(".ob-editorial")?.textContent || "";
    setMinutes(Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 230)));
    let frame: number | null = null;
    const update = () => {
      const rect = article.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      setProgress(Math.max(0, Math.min(100, -rect.top / travel * 100)));
      let current: string = contents[0][0];
      for (const [id] of contents) { const section = article.querySelector<HTMLElement>(`#${id}`); if (section && section.getBoundingClientRect().top <= 170) current = id; }
      setActive(current);
      frame = null;
    };
    const queue = () => { if (frame === null) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => { window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); if (frame !== null) window.cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => () => { if (shareTimer.current) clearTimeout(shareTimer.current); }, []);

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(window.location.href); setShareStatus("Link copied"); }
      else if (navigator.share) { await navigator.share({ title: "Open Banking in 2026", url: window.location.href }); setShareStatus("Shared"); }
      else { setShareStatus("Copy the URL from your address bar"); }
    } catch { setShareStatus("Copy the URL from your address bar"); }
    if (shareTimer.current) clearTimeout(shareTimer.current);
    shareTimer.current = setTimeout(() => setShareStatus(""), 4000);
  }

  const tocLinks = contents.map(([id, label], i) => <a key={id} href={`#${id}`} className={active === id ? "is-active" : undefined} aria-current={active === id ? "location" : undefined}><span>{String(i + 1).padStart(2, "0")}</span>{label}</a>);

  return <div className="ob-page" data-article-slug="open-banking-2026">
    <style>{styles}</style>
    <a className="ob-skip" href="#ob-article">Skip to article</a>
    <div className="ob-progress" aria-hidden="true"><div style={{ width: `${progress}%` }} /></div>
    <header className="ob-hero">
      {showNavigation && <nav className="ob-nav ob-container" aria-label="Main navigation"><a className="ob-logo" href="https://www.seo-growup.com/" aria-label="GrowUp home"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true"><path d="M5 22 18 5M10 15C2 14 4 5 4 5s10 1 6 10Zm3-5C12 1 23 2 23 2s1 10-10 8Zm1 7c1-8 10-7 10-7s-1 10-10 7Z" fill="currentColor" /></svg>GrowUp<span>®</span></a><div className="ob-nav-links"><a href="https://www.seo-growup.com/">Home</a><a href={portfolioHref} className="is-current">Writing portfolio</a><a href="https://www.seo-growup.com/b2b-saas-copywriting-agency">Our services</a><a href="https://www.seo-growup.com/web-design-portfolio">Our work</a></div><a className="ob-button ob-button-green" href={contactHref}>Let’s talk <Icon name="arrow" size={17} /></a></nav>}
      <div className="ob-hero-main ob-container"><div className="ob-hero-copy"><a className="ob-back" href={portfolioHref}><Icon name="back" size={17} />Back to portfolio</a><div className="ob-category"><span />Fintech writing sample</div><h1>Open Banking in 2026: <span>Key Trends, Benefits and What Finance Leaders Need to Know</span></h1><p className="ob-deck">A practical guide for finance leaders on what open banking does in 2026, where the savings and the risks sit, and what to ask before you build it into your workflow.</p><div className="ob-hero-meta"><span>GrowUp Editorial</span><span>{minutes} min read</span><time dateTime="2026-10-02">October 2026</time></div><a className="ob-read-link" href="#ob-article">Read the guide <Icon name="arrow" size={18} /></a></div><div className="ob-hero-art"><img src={heroImageSrc} alt="Emerald smartphone showing connected finances, with secure connection and smarter decision badges" width="1223" height="1286" decoding="async" loading="eager" /></div></div>
    </header>

    <main className="ob-container ob-main">
      <section className="ob-overview" aria-labelledby="ob-overview-heading"><h2 className="ob-label" id="ob-overview-heading">Article overview</h2><dl>{[{ icon: "file" as const, label: "Content type", value: "Long-form guide" }, { icon: "people" as const, label: "Primary reader", value: "Finance leaders" }, { icon: "chart" as const, label: "Search intent", value: "Education + evaluation" }, { icon: "layers" as const, label: "Commercial angle", value: "Payments and finance workflow" }].map(item => <div key={item.label}><span className="ob-icon-tile"><Icon name={item.icon} size={18} /></span><div><dt>{item.label}</dt><dd>{item.value}</dd></div></div>)}</dl></section>
      <div className="ob-reading-layout">
        <aside className="ob-toc"><div className="ob-label">In this article</div><nav aria-label="Article contents">{tocLinks}</nav><div className="ob-toc-footer"><span>{Math.round(progress)}% read</span><button onClick={copyLink} type="button"><Icon name="link" size={15} />Copy link</button></div><p role="status" className="ob-share-status">{shareStatus}</p></aside>
        <details className="ob-mobile-toc"><summary>In this article <Icon name="chevron" size={18} /></summary><nav aria-label="Article contents on mobile">{tocLinks}</nav></details>

        <article className="ob-article" id="ob-article" ref={articleRef} aria-label="Open Banking in 2026">
          <div className="ob-editorial">
            <Section id="at-a-glance" number="01" heading="At a glance: UK open banking, June 2026">
              <P lead>Open banking is no longer something finance teams need to evaluate as an emerging technology. It is already moving money, pulling bank data into financial systems and connecting millions of customers and businesses to products built around their bank accounts.</P>

              <P lead>The more useful question in 2026 is what that infrastructure can actually remove from the finance workload.</P>

              <P lead>Can it give you a more current view of cash across several banks? Match incoming payments without somebody working through a spreadsheet? Let a customer pay directly from their bank account? Give a lender permissioned transaction data instead of another PDF statement?</P>

              <P lead>The scale of the UK market helps put that question in context.</P>

              <GlanceFigure />
            </Section>

            <Section id="finance-teams" number="02" heading="What open banking actually does for finance teams">
              <P>Strip away the terminology and open banking does two useful things: it lets a product read your bank data, and it lets a customer approve a payment from that product. They are separate permissions, and each is only worth having if it replaces work your team currently does by hand.</P>

<TwoThingsFigure />


              <P>In practice, those two permissions show up in four jobs.  </P>

<h3>See cash without logging into every bank</h3>
<P>If your money sits across three banks, a multicurrency account and two legal entities, the morning cash check can mean five logins before anyone makes a decision. Open banking can bring those balances and transactions into one place automatically. It does not build your treasury process for you, but it removes the first job: collecting the numbers before finance can actually work with them.</P>

<h3>Pull transaction data into finance systems automatically</h3>
<P>A lot of finance work still starts with someone downloading a statement, exporting a CSV or checking whether yesterday’s spreadsheet is still current. With permission, transaction data can flow directly into accounting, treasury, cash-flow or affordability tools. That means fewer exports to manage, fewer stale files and less time checking which version of the bank data is current.</P>

<h3>Let customers pay straight from their bank account</h3>
<P>Instead of giving a customer bank details and waiting for them to make a transfer elsewhere, you can let them choose their bank, approve the payment with that bank and return to your product. </P>
  
  
<P><span style={{ display: "block", marginTop: "-15px" }}>That can also make reconciliation easier because the payment journey already knows what the customer was paying for. Finance is less likely to end up staring at a £24,000 bank transfer and trying to work out which invoice it belongs to.</span></P>


<h3>Use bank data instead of chasing statements</h3>
<P>The same idea applies to lending and affordability checks. </P>
  
<P><span style={{ display: "block", marginTop: "-15px" }}>Instead of asking a customer to download and upload several months of bank statements, they can give permission for the relevant account data to be shared directly. That can cut out document collection, chasing and some of the manual checking around it.</span></P>   
             
              <Quote>Open banking earns its place when it removes repetitive finance work, not when it simply adds another connection. The value is in faster decisions, cleaner data and fewer manual handoffs.</Quote>
            </Section>
<Section
  id="how-it-works"
  number="03"
  heading="How an open banking connection works, step by step"
>
  <P>
A typical open banking connection starts inside your product, moves to the customer’s bank for authentication and approval, then returns with the permission needed to continue. From there, the provider can access the agreed data, refresh the connection and support the finance workflow around it.
  </P>

  <ConnectionJourneyFigure />

  <h3>The customer signs in with their bank</h3>

  <P>
   When the customer chooses their bank, authentication happens with the bank itself, not inside your product. They sign in, review the request and approve it there before returning to your service. Your product should never receive their online-banking password; Open Banking Limited says login details should only be entered with the customer’s own bank.
    <Cite n={13} />
  </P>

  <h3>The customer approves exactly what can be accessed</h3>

  <P>
The connection does not give your product unrestricted access to the account. The customer approves a defined permission, such as access to balances and transactions or authority to initiate a particular payment. That permission can be limited, withdrawn or expire, so “connected” does not mean permanent access.
  </P>

  <h3>The connection still needs to stay current</h3>

  <P>
A connection can be active while the data behind it is stale. Finance should be able to see which accounts are connected, when each one last refreshed, what permission is active and whether anything needs reconnecting. If yesterday’s balance is feeding today’s cash position, the interface should make that obvious rather than presenting it as current.
  </P>


</Section>



            <Section id="savings" number="04" heading="Where open banking can save finance teams time and money">
           
             <P>Open banking can save money when it removes manual work from a finance process. The biggest gains usually come from collecting bank data faster, matching payments with less intervention and replacing document-heavy workflows with permissioned transaction data.</P>


<P><span style={{ display: "block", marginTop: "-15px" }}>EY analysis commissioned by Open Banking Limited puts cumulative UK benefit at £8.3 billion and models much larger annual benefits as the market matures.<Cite n={4} /></span></P>


        
              <h3>Build the cash position with fewer bank logins</h3>

     <P>If finance starts Monday by opening several bank accounts, copying balances into a treasury sheet and adjusting for payroll, VAT and suppliers, open banking can remove the bank-by-bank collection step.</P>


<P><span style={{ display: "block", marginTop: "-15px" }}>The bank connection gives you the starting balance automatically. Payroll, tax and payables data still need to be added before you know what cash is actually available, so the connection speeds up the process rather than replacing the treasury calculation.</span></P>


              <CashFigure />

              <h3>Match incoming payments to invoices faster</h3>
            
        <P>A £24,000 payment arriving in the bank is not especially useful if someone still has to search through invoices to work out what it settles.</P>

<P><span style={{ display: "block", marginTop: "-15px" }}>A better open banking payment flow can carry the payment reference and invoice context with the transaction. That reduces the manual matching between money arriving in the bank and the receivable sitting in the finance system.</span></P>


<P><span style={{ display: "block", marginTop: "-15px" }}>EY’s modelling also points to lower administration costs and automation benefits for smaller businesses, including an estimated £2.3 billion annual GDP uplift within five years.<Cite n={5} /></span></P>


            <h3>Collect financial data without chasing statements</h3>

  <P>Lending and affordability teams can use permissioned transaction data instead of starting every review with several months of uploaded bank statements.</P>

<P><span style={{ display: "block", marginTop: "-15px" }}>That can reduce the time spent collecting documents, chasing missing files and checking whether the information is still current. The lender still makes the decision, and incomplete account coverage or unusual transactions can still require manual review.</span></P>


    <h3>Measure the saving against the old process</h3>

  <P>Before implementation, write down what the current workflow costs you.</P>

<P><span style={{ display: "block", marginTop: "-15px" }}>Track things such as minutes spent building the cash position, unmatched payments each month, documents requested per applicant, and time spent chasing missing information.</span></P>


<P><span style={{ display: "block", marginTop: "-15px" }}>If those numbers do not improve afterwards, the open banking connection may be working perfectly while the business case is not.</span></P>
           
           
            </Section>

 <Section id="payments" number="05" heading="How open banking changes payments: Pay by Bank and VRPs">
  <P>So far, most of the examples have been about using open banking to bring bank data into a finance workflow. The other side is payments. Instead of only reading an account, open banking can let a customer authorise money to move directly from their bank.</P>

  <P><span style={{ display: "block", marginTop: "-15px" }}>That is where Pay by Bank and Variable Recurring Payments (VRPs) come in. Pay by Bank handles individual bank-to-bank payments; VRPs extend the idea to payments that can repeat within limits the customer has already approved.</span></P>

  <PaymentsFigure />

<h3>When Pay by Bank actually makes financial sense</h3>

<P>A lower processing fee does not automatically make Pay by Bank the cheaper option. If more customers abandon the journey, finance spends longer investigating uncertain payments or refunds become harder to reconcile, some of that saving disappears.</P>

<P><span style={{ display: "block", marginTop: "-15px" }}>Compare the whole payment journey before changing the rail:</span></P>

<BuildList items={costItems} />



              <P>The answer will vary by use case. On a £30,000 B2B invoice, cleaner reconciliation might matter more than shaving a few basis points from processing. On a £14 ecommerce order, a slightly worse checkout completion rate can erase the saving. Account funding, tax, rent, utilities, loan repayments and marketplace payouts should not be treated as the same payment problem.</P>

        <h3>Where VRPs extend open banking beyond one-off payments</h3>

<P>Pay by Bank usually deals with one payment at a time: the customer approves it and the money moves. VRPs extend open banking payments by letting the customer approve a set of rules in advance, such as a maximum amount, frequency or expiry date.<Cite n={14} /></P>

<P><span style={{ display: "block", marginTop: "-15px" }}>Payments can then happen within those limits without asking the customer for a fresh approval every time.</span></P>

<VrpFigure />

       <h3>Sweeping and commercial VRPs solve different payment jobs</h3>

<P>The distinction matters because the headline numbers can be misleading. June’s 7.73 million sweeping VRPs were transfers between a customer’s own accounts, not recurring merchant payments.<Cite n={1} /></P>

<P><span style={{ display: "block", marginTop: "-15px" }}>Commercial VRPs are the version that matters more for collections because they allow money to move from a customer to a business under an ongoing consent.</span></P>



              <P>Commercial VRPs moved forward in 2026, with the UK Payments Initiative beginning a first wave covering regulated financial services, regulated utilities and central and local government payments.<Cite n={7} /> <Cite n={8} /> Coverage and scheme rules still matter. Before a vendor says “we support VRP”, ask which use cases are live, which banks are covered, how limits are set, what it costs and what happens with cancellations, refunds and disputes.<Cite n={9} /></P>
            </Section>

            <Section id="risk" number="06" heading="Open banking risks: fraud, failures and liability">
              <P>The fraud rate is encouraging. Open Banking Limited’s 2025 figures, reported by Open Banking Expo, put fraudulent open banking payments at roughly one in 6,000, versus about one in 2,500 across the wider payments industry.<Cite n={6} /> That tells you something useful about frequency. It does not answer who carries the loss on a large payment, how reimbursement works or what finance does while a payment status is unclear.</P>

              <h3>Most operational problems look boring until they happen</h3>
              <P>A bank is unavailable. A feed has not refreshed since yesterday. A customer disconnects the account. A payment leaves one side but your product has not received a final status. Those are the moments that decide whether finance trusts the workflow, so write down the failure state before launch.</P>

              <BuildList items={failureItems} />

              <h3>Know who owns the exception</h3>
              <P>Ask the provider how bank-level incidents are exposed, how often data refreshes, how pending and failed payments are distinguished, what evidence support receives and what your team can export if the provider is unavailable. Uptime matters, but the operating procedure around the downtime matters more when your team is trying to close the books or answer a customer.</P>

              <Note title="The operating question">Who owns failures, refunds, stale data, disconnected accounts and customer questions? If the answer is “we will work that out when it happens”, the workflow is not ready.</Note>
            </Section>

            <Section id="next" number="07" heading="What comes next: open finance and AI">
              <P>Open banking gives you payment-account data. It does not give you a complete financial picture. A £1,600 mortgage payment can appear in transaction history without telling you the outstanding mortgage balance, and a monthly investment transfer does not tell you what the portfolio is worth.</P>

              <h3>Open finance extends the picture beyond current accounts</h3>
              <P>Open finance aims to extend permissioned sharing into areas such as credit, savings, investments, pensions, mortgages and insurance. That could make some finance and lending workflows richer, but it is still a roadmap rather than a reason to build today’s business case on future data access.</P>

              <FinanceFigure />

              <P>The FCA published its open finance roadmap on 14 April 2026, with a path running to 2030 and early focus on SME lending and mortgage access.<Cite n={10} /> <Cite n={11} /></P>
              <BuildList items={roadmapItems} />

              <h3>AI can explain connected data, but it should not become the source of truth</h3>
              <P>Once transactions and balances are connected, AI can categorise spending, spot recurring commitments, explain a cash movement, flag an unusual transaction or suggest where a shortfall might appear. That is useful right up until a wrong classification starts feeding other decisions.</P>

              <P>A £75,000 receipt mislabelled as recurring revenue can distort a cash forecast, a lending view and an AI-generated finance summary at the same time. Keep these three layers separate even if the product presents them in one interface:</P>
              <BuildList items={layerItems} />

              <P>If the system estimates something, label it. If confidence is low, let the user inspect the underlying transaction. If the software proposes moving money, keep approval separate from the recommendation. Connected data makes AI more useful; it also gives a bad inference somewhere more consequential to land.</P>
            </Section>

            <Section id="evaluate" number="08" heading="How finance leaders should evaluate open banking">
              <P>Start with one finance job that is expensive, slow or irritating today. Do not start with “we need open banking”. Start with “it takes 55 minutes to build the cash position”, “18% of incoming payments need manual matching” or “credit analysts spend two days chasing statements”. That gives you something you can actually improve.</P>

              <div className="ob-trend-grid">{[{ title: "If the problem is statement collection", icon: "file" as const, items: ["Documents requested per applicant", "Customer completion time", "Missing documents and chasing time", "Abandonment before approval"] }, { title: "If the problem is reconciliation", icon: "layers" as const, items: ["Unmatched payments", "Minutes spent per match", "Payment-to-ledger latency", "Exceptions needing manual review"] }, { title: "If the problem is collections", icon: "chart" as const, items: ["Payment completion and failure rate", "Time to payment and retry rate", "Cost per successful collection", "Days sales outstanding"] }, { title: "If the problem is cash visibility", icon: "bank" as const, items: ["Time to produce the position", "Stale balances and manual adjustments", "Forecasting error", "Time spent chasing discrepancies"] }].map((x, i) => <div key={x.title}><div className="ob-trend-top"><Icon name={x.icon} size={24} /><span>0{i + 1}</span></div><h3>{x.title}</h3><ul>{x.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>

              <h3>Then ask the provider the questions that affect the workflow</h3>
              <BuildList items={procurementItems} />

              <h3>Make consent part of the experience, not a legal screen at the end</h3>
              <P>A customer should understand the benefit before they are asked to share financial data or approve future payments. These small wording changes make the exchange much clearer:</P>
              <BuildList items={consentItems} />

              <P>Open banking is mature enough in 2026 to be judged on ordinary finance metrics: time saved, collection success, reconciliation effort, data freshness, customer completion, exceptions and cost. That is a much higher bar than proving an API can connect, and it is also a more useful one.</P>

              <Quote>Choose the finance friction first. Then decide whether open banking is the best way to remove it.</Quote>
            </Section>
          </div>

          <section className="ob-sources" aria-labelledby="ob-sources-heading"><div className="ob-label">Research &amp; references</div><h2 id="ob-sources-heading">The sources behind the story.</h2><p>UK figures and policy references checked for this October 2026 sample. Quotations are reproduced as published; scenarios and example figures are illustrative, and product recommendations are GrowUp’s editorial analysis. Commercial VRP availability and economic-benefit figures should be checked against current scheme, provider and research documents rather than assumed.</p><ol>{sources.map((s, i) => <li key={s.url} id={`ob-source-${i + 1}`}><span>{String(i + 1).padStart(2, "0")}</span><a href={s.url} target="_blank" rel="noopener noreferrer"><small>{s.name} · {s.date}</small><strong>{s.title}</strong></a><Icon name="arrow" size={17} /></li>)}</ol></section>
          <section className="ob-cta"><div className="ob-label">GrowUp · Fintech copywriting</div><h2>Complex product.<br /><em>Clearer story.</em></h2><p>Research-led writing for fintech teams that need to explain the product, answer buyer questions and give readers a reason to act.</p><a className="ob-button ob-button-green" href={contactHref}>Talk about your content <Icon name="arrow" size={18} /></a></section>
          <div className="ob-article-end"><a href={portfolioHref}><Icon name="back" size={17} />Back to writing portfolio</a><a href="#ob-article">Back to the article ↑</a></div>
        </article>
      </div>
    </main>
    <footer className="ob-footer ob-container"><span>GrowUp · B2B SaaS writing & design</span><span>Fintech writing sample · 2026</span></footer>
  </div>;
}

const styles = String.raw`
.ob-page{--ob-ink:#071a17;--ob-ink-soft:#102d26;--ob-green:#b5f2a8;--ob-paper:#fbfaf6;--ob-text:#21322d;--ob-muted:#65736c;--ob-line:#dedfd6;--ob-serif:Georgia,'Times New Roman',serif;--ob-sans:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--ob-paper);color:var(--ob-text);font-family:var(--ob-sans);font-size:16px;line-height:1.5;isolation:isolate}
.ob-page *{box-sizing:border-box}.ob-page a{color:inherit;text-decoration:none}.ob-page button{font:inherit;cursor:pointer}.ob-page svg{flex-shrink:0}.ob-page img{display:block;max-width:100%;height:auto}.ob-page figure,.ob-page blockquote,.ob-page h1,.ob-page h2,.ob-page h3,.ob-page p,.ob-page dl,.ob-page dd{margin:0}.ob-page a:focus-visible,.ob-page button:focus-visible,.ob-page summary:focus-visible{outline:2px solid #61a67b;outline-offset:6px}.ob-container{width:min(1240px,calc(100% - 96px));margin-inline:auto}.ob-label{font-family:var(--ob-sans);font-size:10px;line-height:1.5;font-weight:650;letter-spacing:.17em;text-transform:uppercase}.ob-skip{position:fixed;left:20px;top:12px;z-index:60;background:#fff;padding:12px 20px;transform:translateY(-160%)}.ob-skip:focus{transform:none}.ob-progress{height:3px;position:fixed;inset:0 0 auto;z-index:50;background:transparent;pointer-events:none}.ob-progress>div{height:100%;background:#75bd83}
.ob-hero{background:radial-gradient(ellipse at 78% 64%,#174733 0%,#0a2520 33%,var(--ob-ink) 68%);color:#f8f9f3;overflow:hidden}.ob-nav{min-height:100px;display:flex;align-items:center;gap:30px;border-bottom:1px solid #d9ead915}.ob-logo{font-weight:650;font-size:24px;letter-spacing:-.07em;display:flex;gap:6px;align-items:center}.ob-logo svg{color:var(--ob-green)}.ob-logo>span{font-size:9px;align-self:flex-start;margin-top:5px;letter-spacing:0}.ob-nav-links{display:flex;gap:29px;align-items:center;margin-inline:auto;font-size:12px;color:#bdcec3}.ob-nav-links a{padding-block:8px;border-bottom:1px solid transparent}.ob-nav-links a:hover,.ob-nav-links .is-current{color:#fff;border-color:var(--ob-green)}.ob-button{display:inline-flex;align-items:center;justify-content:center;gap:20px;padding:13px 22px;border-radius:100px;font-size:12px;font-weight:650;min-height:45px;transition:background .2s,transform .2s}.ob-button-green{background:var(--ob-green);color:#10271b!important}.ob-button-green:hover{background:#d0ffc6;transform:translateY(-1px)}
.ob-hero-main{display:grid;grid-template-columns:1.1fr 1fr;gap:12px;min-height:630px;align-items:center;padding-block:42px 50px}.ob-hero-copy{position:relative;z-index:2}.ob-back{display:inline-flex;gap:8px;align-items:center;font-size:11px;color:#b2c2b7!important;margin-bottom:37px}.ob-back:hover{color:#fff!important}.ob-category{display:flex;align-items:center;gap:8px;color:var(--ob-green);font-size:10px;letter-spacing:.16em;text-transform:uppercase;width:fit-content;border:1px solid #b5f2a838;padding:6px 12px;border-radius:30px;margin-bottom:23px}.ob-category>span{width:4px;height:4px;background:currentColor;border-radius:50%}.ob-hero h1{font-family:var(--ob-serif);font-size:clamp(39px,4.2vw,61px);font-weight:400;letter-spacing:-.045em;line-height:1.09;max-width:660px;text-wrap:balance}.ob-hero h1>span{display:block}.ob-deck{max-width:465px;font-size:16px;line-height:1.8;color:#c1cec4;margin-top:24px!important}.ob-hero-meta{display:flex;flex-wrap:wrap;gap:0;font-size:13px;color:#a2b6a7;margin-top:24px}.ob-hero-meta>*+*::before{content:'·';padding-inline:12px;color:#6c8c79}.ob-read-link{display:flex;align-items:center;gap:17px;width:fit-content;font-size:13px;color:var(--ob-green)!important;margin-top:25px}.ob-hero-art{position:relative;align-self:stretch;display:flex;align-items:center;justify-content:center;min-width:0}.ob-hero-art img{width:112%;max-width:none;position:relative;z-index:1;object-fit:contain;aspect-ratio:auto;flex-shrink:0}.ob-art-caption{position:absolute;bottom:0;left:0;right:0;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#94b19d;text-align:center;z-index:2}
.ob-main{padding-bottom:48px}.ob-overview{padding:44px 0 48px;border-bottom:1px solid var(--ob-line)}.ob-overview>h2{color:#011522;font-size:9px;letter-spacing:.22em;font-weight:500;margin-bottom:30px}.ob-overview dl{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}.ob-overview dl>div{display:flex;align-items:center;gap:15px;min-width:0}.ob-overview dl>div+div{border-left:1px solid #e8e9e2;padding-left:32px}.ob-icon-tile{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:transparent;border:1px solid #cdd9c4;color:#5a8563;flex-shrink:0}.ob-overview dt{font-size:9px;color:#9aa39a;letter-spacing:.14em;text-transform:uppercase;font-weight:500;margin-bottom:6px}.ob-overview dd{font-size:12px;font-weight:500;line-height:1.45;color:#1e3329;letter-spacing:-.005em}.ob-reading-layout{display:grid;grid-template-columns:220px minmax(0,780px);gap:85px;padding-top:58px;justify-content:space-between;align-items:start}.ob-toc{position:sticky;top:50px}.ob-toc>.ob-label{color:#7b847b;padding-bottom:18px}.ob-toc nav{display:flex;flex-direction:column}.ob-toc nav a,.ob-mobile-toc nav a{display:flex;gap:12px;font-size:11px;padding:11px 0;color:#778078;line-height:1.6;border-bottom:1px solid #e8e9e1}.ob-toc nav a>span,.ob-mobile-toc nav a>span{font-size:9px;font-variant-numeric:tabular-nums;color:#adb2a8;min-width:17px;padding-top:2px}.ob-toc nav a.is-active,.ob-mobile-toc nav a.is-active{color:#174a32;font-weight:650}.ob-toc nav a.is-active>span{color:#174a32}.ob-toc nav a:hover{color:#174a32}.ob-toc-footer{display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#929a8e;margin-top:27px}.ob-toc-footer button{background:transparent;border:0;padding:4px 0;color:#506955;display:flex;gap:7px;align-items:center;font-size:10px}.ob-share-status{font-size:10px;color:#506955;min-height:2em;margin-top:8px!important}.ob-mobile-toc{display:none}.ob-article{min-width:0;scroll-margin-top:35px}.ob-editorial>div.ob-introduction>.ob-label{display:block;margin-bottom:20px;color:#687e68}.ob-editorial p{font-family:var(--ob-serif);font-size:17px;line-height:1.85;letter-spacing:.002em;margin-bottom:21px}.ob-editorial p.ob-lead{font-size:22px;line-height:1.65;letter-spacing:-.015em;color:#16372b}.ob-editorial a.ob-cite{font-family:var(--ob-sans);font-size:9px;color:#377645;padding:0 3px;font-weight:650}.ob-editorial sup{line-height:0}.ob-stat-strip{display:grid;grid-template-columns:repeat(3,1fr);margin:35px 0 8px!important;border-top:1px solid var(--ob-line);border-bottom:1px solid var(--ob-line);padding:24px 0}.ob-stat-strip>div{display:flex;flex-direction:column;gap:7px}.ob-stat-strip>div+div{padding-left:22px;border-left:1px solid var(--ob-line)}.ob-stat-strip .ob-label{font-size:8px;color:#798171;letter-spacing:.13em}.ob-stat-strip strong{font-family:var(--ob-serif);font-size:39px;font-weight:400;line-height:1.2;letter-spacing:-.04em;color:#174a32}.ob-stat-strip>div>span:last-child{font-size:9px;color:#8a9282}.ob-editorial .ob-source-note{font-family:var(--ob-sans);font-size:9px;color:#8b9487;line-height:1.6;margin-top:9px;margin-bottom:0}.ob-section{padding-top:55px;scroll-margin-top:35px}.ob-section:first-child{padding-top:0}.ob-section-kicker{display:flex;gap:16px;align-items:center;margin-bottom:17px}.ob-section-kicker>span:first-child{font-size:9px;font-variant-numeric:tabular-nums;color:#7c9078;letter-spacing:.12em}.ob-section-kicker>span:last-child{height:1px;flex:1;background:var(--ob-line)}.ob-section h2{font-family:var(--ob-serif);font-weight:400;font-size:35px;line-height:1.2;letter-spacing:-.035em;color:#122d22;margin-bottom:23px;max-width:680px;text-wrap:balance}.ob-section h3{font-family:var(--ob-sans);font-size:15px;font-weight:600;color:#1b402b;line-height:1.5;margin:27px 0 9px}.ob-quote{border-left:2px solid #8bab79;padding:6px 0 6px 28px;margin:34px 0!important}.ob-quote>.ob-label{font-size:9px;color:#7f9378}.ob-editorial .ob-quote p{font-size:27px;line-height:1.45;letter-spacing:-.025em;color:#20492f;margin:12px 0 0}.ob-note{display:flex;gap:16px;background:#eef2e8;border-top:1px solid #d1ddc5;padding:24px 25px;margin:29px 0}.ob-note>svg{color:#527449;margin-top:3px}.ob-note .ob-label{color:#527449;font-size:9px}.ob-editorial .ob-note p{font-family:var(--ob-sans);font-size:12px;line-height:1.8;margin:9px 0 0;color:#45623b}
.ob-figure{border:1px solid var(--ob-line);background:#f5f5ed;border-radius:14px;padding:25px;margin:30px 0!important;overflow:hidden}.ob-figure-head{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:27px}.ob-figure-head>.ob-label{color:#72846b;font-size:9px}.ob-small-tag{font-family:var(--ob-sans);font-size:8px;color:#85947c;border:1px solid #d6ddce;border-radius:20px;padding:4px 9px;white-space:nowrap}.ob-figure figcaption{font-family:var(--ob-sans);font-size:9px;line-height:1.8;color:#83917b;padding-top:19px;margin-top:21px;border-top:1px solid #dce2d4}.ob-flow{display:grid;grid-template-columns:repeat(3,1fr);gap:23px}.ob-flow-step{position:relative;display:flex;flex-direction:column;padding:18px;background:#fffefa;border:1px solid #dce2d4;border-radius:10px}.ob-flow-top{display:flex;justify-content:space-between;align-items:center;color:#487653;margin-bottom:23px}.ob-flow-top>span{font-size:9px;color:#a1ac96}.ob-flow-step>strong{font-size:12px;font-weight:600;color:#264b30;margin-bottom:5px}.ob-flow-step>span:not(.ob-flow-arrow){font-size:10px;line-height:1.65;color:#788971}.ob-flow-arrow{position:absolute;left:calc(100% + 2px);top:50%;transform:translateY(-50%);color:#8a9d7f}.ob-capabilities{display:grid;grid-template-columns:1fr 1fr;border-block:1px solid var(--ob-line);margin:28px 0}.ob-capabilities>div{padding:23px 20px 23px 0}.ob-capabilities>div+div{border-left:1px solid var(--ob-line);padding-left:24px}.ob-capabilities .ob-label{font-size:8px;letter-spacing:.13em;color:#718466}.ob-section .ob-capabilities h3{font-family:var(--ob-serif);font-size:23px;font-weight:400;letter-spacing:-.02em;margin:12px 0}.ob-editorial .ob-capabilities p{font-family:var(--ob-sans);font-size:11px;line-height:1.8;margin:0;color:#73806b}

.ob-connect-journey{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
}

.ob-connect-step{
  position:relative;
  min-width:0;
  min-height:178px;
  padding:18px;
  background:#fffef9;
  border:1px solid #dce2d4;
  border-radius:10px;
}

.ob-connect-step-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:22px;
  color:#527449;
}

.ob-connect-step-top>span{
  font-size:9px;
  color:#9aa58f;
  letter-spacing:.08em;
}

.ob-connect-step>small{
  display:block;
  font-family:var(--ob-sans);
  font-size:8px;
  line-height:1.4;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:#89967f;
  margin-bottom:8px;
}

.ob-connect-step>strong{
  display:block;
  font-family:var(--ob-sans);
  font-size:12px;
  line-height:1.45;
  font-weight:600;
  color:#24442f;
}

.ob-editorial .ob-connect-step>p{
  font-family:var(--ob-sans);
  font-size:10px;
  line-height:1.7;
  color:#788770;
  margin:8px 0 0;
}

.ob-connect-arrow{
  position:absolute;
  z-index:3;
  top:50%;
  left:calc(100% + 1px);
  transform:translateY(-50%);
  color:#91a286;
}

.ob-connect-health{
  margin-top:18px;
  padding:22px;
  border-radius:11px;
  background:#102d26;
  color:#eef5e9;
}

.ob-connect-health-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
  padding-bottom:18px;
  border-bottom:1px solid rgba(255,255,255,.1);
}

.ob-connect-health-head .ob-label{
  display:block;
  color:#91ad98;
  font-size:8px;
  margin-bottom:7px;
}

.ob-connect-health-head strong{
  display:block;
  font-family:var(--ob-serif);
  font-size:24px;
  line-height:1.2;
  font-weight:400;
  letter-spacing:-.025em;
  color:#edf6e8;
}

.ob-connect-live{
  display:flex;
  align-items:center;
  gap:7px;
  padding:6px 10px;
  border:1px solid rgba(181,242,168,.22);
  border-radius:30px;
  font-size:9px;
  color:#b5f2a8;
  white-space:nowrap;
}

.ob-connect-live i{
  width:6px;
  height:6px;
  border-radius:50%;
  background:#b5f2a8;
}

.ob-health-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0;
  padding-top:18px;
}

.ob-health-grid>div{
  min-width:0;
  padding-right:14px;
}

.ob-health-grid>div+div{
  padding-left:14px;
  border-left:1px solid rgba(255,255,255,.1);
}

.ob-health-grid span{
  display:block;
  font-family:var(--ob-sans);
  font-size:8px;
  line-height:1.5;
  color:#8fa79a;
  margin-bottom:7px;
}

.ob-health-grid strong{
  display:block;
  font-family:var(--ob-sans);
  font-size:10px;
  line-height:1.5;
  font-weight:550;
  color:#e4eee5;
}

.ob-trend-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#dce2d4;border:1px solid #dce2d4;border-radius:14px;overflow:hidden;margin:29px 0}.ob-trend-grid>div{background:#f5f6ef;padding:26px}.ob-trend-top{display:flex;justify-content:space-between;align-items:center;color:#597c4e}.ob-trend-top>span{font-size:9px;color:#929f87}.ob-section .ob-trend-grid h3{margin:20px 0 9px;font-size:14px}.ob-editorial .ob-trend-grid p{font-family:var(--ob-sans);font-size:11px;line-height:1.8;color:#72826a;margin:0}
.ob-payment-figure{background:var(--ob-ink);color:#e5f3dc;border-color:#173d2d}.ob-payment-figure .ob-label{color:#a0bd96}.ob-payment-figure .ob-small-tag{color:#91ab88;border-color:#36563c}.ob-payment-total{display:flex;align-items:baseline;gap:19px}.ob-payment-total>strong{font-family:var(--ob-serif);font-size:68px;font-weight:400;letter-spacing:-.065em;line-height:1.1;color:#d1f2b9}.ob-payment-total>strong>span{font-size:36px;letter-spacing:-.035em}.ob-editorial .ob-payment-total p{font-family:var(--ob-sans);font-size:10px;color:#829d7c;margin:0}.ob-stacked-bar{display:flex;height:25px;gap:3px;border-radius:5px;overflow:hidden;margin-top:25px}.ob-stacked-bar>span:first-child{background:#a5d594}.ob-stacked-bar>span:last-child{background:#426b3c}.ob-chart-legend{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:21px}.ob-chart-legend>div{display:flex;align-items:flex-start;gap:9px;color:#8dab85}.ob-chart-legend i{width:7px;height:7px;margin-top:4px;border-radius:2px;background:#a5d594}.ob-chart-legend>div:last-child i{background:#426b3c}.ob-chart-legend span{font-size:9px}.ob-chart-legend strong{display:block;margin-top:4px;color:#d6e9ca;font-weight:500;font-size:15px}.ob-payment-figure figcaption{border-color:#284431;color:#85a07a}.ob-payment-figure a.ob-cite{color:#c0e7a9}.ob-vrp-title{display:flex;gap:15px;align-items:center}.ob-vrp-title .ob-icon-tile{background:#e1e9d8;width:46px;height:46px;border-radius:12px}.ob-vrp-title strong{display:block;font-family:var(--ob-serif);font-weight:400;font-size:24px;letter-spacing:-.03em;color:#24402c}.ob-vrp-title div>span{font-size:10px;color:#7c8d70;display:block;margin-top:4px}.ob-limit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}.ob-limit-grid>div{background:#fffef9;border:1px solid #dce2d4;border-radius:9px;padding:16px}.ob-limit-grid span{font-size:9px;color:#7f8c74;display:block}.ob-limit-grid strong{font-size:14px;color:#294931;display:block;font-weight:500;margin-top:8px}.ob-vrp-status{display:flex;justify-content:space-between;align-items:center;gap:16px;font-size:9px;color:#7e8e73;margin-top:19px}.ob-vrp-status>span:first-child{display:flex;align-items:center;gap:6px;color:#416a3d}.ob-finance-map{display:grid;grid-template-columns:1fr 1.5fr;gap:30px;align-items:center}.ob-finance-centre{display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid #d0dbc3;border-radius:100%;aspect-ratio:1;padding:20px;text-align:center;color:#46723e;background:#edf1e6}.ob-finance-centre strong{font-family:var(--ob-serif);font-weight:400;font-size:22px;letter-spacing:-.025em;line-height:1.25;margin-top:16px}.ob-finance-centre span{font-size:9px;margin-top:8px;color:#899578}.ob-finance-orbits{display:grid;grid-template-columns:1fr 1fr;gap:10px}.ob-finance-orbits>div{display:flex;flex-direction:column;border:1px solid #dce2d4;background:#fffef9;border-radius:9px;padding:17px;color:#597e48}.ob-finance-orbits strong{font-size:12px;font-weight:550;margin-top:13px;color:#354f32}.ob-finance-orbits span{font-size:9px;color:#85947b;margin-top:5px}.ob-build-list{border-top:1px solid var(--ob-line);margin:28px 0}.ob-build-list>div{display:flex;gap:20px;align-items:flex-start;padding:23px 0;border-bottom:1px solid var(--ob-line)}.ob-build-list>div>span{font-size:10px;color:#8a9c7e;padding-top:4px}.ob-build-list>div>svg{color:#7e9270;margin-left:auto;margin-top:3px}.ob-build-list>div>div{flex:1}.ob-section .ob-build-list h3{margin:0 0 7px;font-size:13px}.ob-editorial .ob-build-list p{font-family:var(--ob-sans);font-size:11px;line-height:1.8;color:#74836b;margin:0}
.ob-glance-figure{margin:30px 0 28px!important}.ob-glance{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#dce2d4;border:1px solid #dce2d4;border-radius:14px;overflow:hidden}.ob-glance>div{background:#f5f6ef;padding:24px 22px;display:flex;flex-direction:column;gap:9px;min-width:0}.ob-glance strong{font-family:var(--ob-serif);font-size:36px;font-weight:400;letter-spacing:-.045em;line-height:1.1;color:#174a32}.ob-glance span{font-family:var(--ob-sans);font-size:10px;line-height:1.75;color:#011522}.ob-glance-figure figcaption{font-family:var(--ob-sans);font-size:9px;line-height:1.8;color:#8b9487;margin-top:12px}
.ob-cash-row{display:grid;grid-template-columns:160px 1fr 92px;gap:16px;align-items:center;padding:11px 0;border-bottom:1px solid #dce2d4;font-family:var(--ob-sans);font-size:10px;color:#6f7e66}.ob-cash-track{height:10px;border-radius:3px;background:#e8ebdf;overflow:hidden}.ob-cash-bar{height:100%;border-radius:3px;background:#a5d594}.ob-cash-row.is-out .ob-cash-bar{background:#c3cab9}.ob-cash-row.is-result .ob-cash-bar{background:#426b3c}.ob-cash-row.is-result{color:#264b30;font-weight:600;border-bottom:0}.ob-cash-row strong{text-align:right;font-weight:500;color:#294931;font-size:11px}.ob-trend-grid ul{margin:12px 0 0;padding-left:16px;font-family:var(--ob-sans);font-size:11px;line-height:1.9;color:#72826a}
.ob-sources{margin-top:52px;padding-top:30px;border-top:1px solid var(--ob-line)}.ob-sources>.ob-label{color:#7c8a70}.ob-sources h2{font-family:var(--ob-serif);font-size:29px;line-height:1.2;letter-spacing:-.03em;font-weight:400;color:#24422b;margin-top:12px}.ob-sources>p{font-size:11px;color:#819078;line-height:1.8;margin-top:12px;max-width:580px}.ob-sources ol{list-style:none;padding:0;margin:23px 0 0}.ob-sources li{display:flex;gap:18px;align-items:center;border-bottom:1px solid var(--ob-line);padding:17px 0;scroll-margin-top:40px}.ob-sources li>span{font-size:9px;color:#92a083}.ob-sources li>a{flex:1}.ob-sources small{font-size:9px;color:#89967f;display:block;margin-bottom:4px}.ob-sources strong{font-size:12px;font-weight:500;color:#365633}.ob-sources li svg{color:#7d946c}.ob-sources li:hover strong{color:#196431}.ob-cta{margin-top:50px;background:radial-gradient(ellipse at 100% 100%,#21442b,transparent 70%),var(--ob-ink);padding:43px 42px;border-radius:15px;color:#eef5e7}.ob-cta .ob-label{color:#9abc88;font-size:9px}.ob-cta h2{font-family:var(--ob-serif);font-size:43px;font-weight:400;line-height:1.12;letter-spacing:-.035em;margin-top:20px}.ob-cta h2 em{color:#bce4a0;font-style:italic}.ob-cta p{font-size:12px;line-height:1.8;color:#a0b395;max-width:440px;margin-top:20px}.ob-cta .ob-button{margin-top:25px}.ob-article-end{display:flex;justify-content:space-between;gap:20px;padding-block:25px;font-size:10px;color:#849277}.ob-article-end>a:first-child{display:flex;gap:8px;align-items:center}.ob-footer{display:flex;justify-content:space-between;gap:20px;padding-block:24px;border-top:1px solid var(--ob-line);font-size:9px;color:#9aa28f}
@media(min-width:1500px){.ob-hero-main{min-height:670px}.ob-hero h1{font-size:63px}}
@media(max-width:1100px){.ob-container{width:calc(100% - 64px)}.ob-nav-links{gap:20px;font-size:10px}.ob-hero-main{min-height:590px}.ob-hero h1{font-size:46px}.ob-reading-layout{gap:45px;grid-template-columns:180px minmax(0,1fr)}.ob-overview dl{gap:14px}.ob-overview dl>div+div{padding-left:14px}.ob-overview dd{font-size:10px}.ob-icon-tile{width:31px;height:31px}.ob-flow{gap:19px}.ob-flow-step{padding:14px}.ob-flow-step>strong{font-size:10px}.ob-stat-strip strong{font-size:34px}.ob-stat-strip .ob-label{font-size:7px}.ob-finance-map{gap:18px}.ob-finance-centre strong{font-size:20px}.ob-glance strong{font-size:30px}}
@media(max-width:800px){.ob-container{width:calc(100% - 44px)}.ob-nav{min-height:78px}.ob-nav-links{display:none}.ob-nav>.ob-button{margin-left:auto;padding:10px 17px;min-height:39px;font-size:10px}.ob-hero-main{grid-template-columns:1fr;padding-top:30px;padding-bottom:30px;gap:12px}.ob-hero-copy{max-width:600px}.ob-back{margin-bottom:25px}.ob-hero h1{font-size:clamp(37px,7.8vw,55px);max-width:600px}.ob-deck{max-width:520px}.ob-hero-art{height:380px;min-height:0;max-width:470px;width:100%;margin-inline:auto}.ob-hero-art img{width:100%;height:100%}.ob-art-caption{bottom:-2px;font-size:8px}.ob-overview dl{grid-template-columns:1fr 1fr;gap:24px}.ob-overview dl>div+div{border:0;padding-left:0}.ob-overview dd{font-size:11px}.ob-overview dt{font-size:10px}.ob-icon-tile{width:35px;height:35px}.ob-reading-layout{display:block;padding-top:26px}.ob-toc{display:none}.ob-mobile-toc{display:block;border-block:1px solid var(--ob-line);margin-bottom:30px;padding:15px 0}.ob-mobile-toc summary{list-style:none;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#56744c;cursor:pointer}.ob-mobile-toc summary::-webkit-details-marker{display:none}.ob-mobile-toc nav{padding-top:10px}.ob-mobile-toc nav a{font-size:12px}.ob-editorial p{font-size:17px}.ob-editorial p.ob-lead{font-size:21px}.ob-section h2{font-size:32px}.ob-section{padding-top:40px}.ob-figure{padding:22px}.ob-finance-centre{max-width:230px}.ob-article-end{font-size:9px}.ob-main{padding-bottom:25px}}
@media(max-width:480px){.ob-container{width:calc(100% - 36px)}.ob-logo{font-size:22px}.ob-nav{min-height:72px}.ob-category{font-size:9px;margin-bottom:20px}.ob-hero h1{font-size:39px;line-height:1.12;letter-spacing:-.045em}.ob-deck{font-size:13px;line-height:1.85}.ob-hero-meta{font-size:9px}.ob-hero-meta>*+*::before{padding-inline:8px}.ob-hero-art{height:330px}.ob-overview{padding:27px 0}.ob-overview dl{gap:23px 14px}.ob-overview dd{font-size:10px}.ob-overview dl>div{gap:9px}.ob-icon-tile{width:31px;height:31px}.ob-stat-strip{padding:19px 0}.ob-stat-strip strong{font-size:28px}.ob-stat-strip>div+div{padding-left:12px}.ob-stat-strip .ob-label{font-size:6px;letter-spacing:.08em}.ob-stat-strip>div>span:last-child{font-size:8px}.ob-editorial p.ob-lead{font-size:20px}.ob-section h2{font-size:29px}.ob-quote{padding-left:20px}.ob-editorial .ob-quote p{font-size:24px}.ob-figure{padding:18px}.ob-figure-head{align-items:flex-start;gap:10px;flex-wrap:wrap;margin-bottom:20px}.ob-figure-head>.ob-label{font-size:8px}.ob-flow{grid-template-columns:1fr;gap:20px}.ob-flow-step{padding:17px}.ob-flow-top{margin-bottom:14px}.ob-flow-step>strong{font-size:12px}.ob-flow-step>span:not(.ob-flow-arrow){font-size:11px}.ob-flow-arrow{left:calc(50% - 9px);top:calc(100% + 1px);transform:rotate(90deg)}.ob-capabilities{grid-template-columns:1fr}.ob-capabilities>div{padding:21px 0}.ob-capabilities>div+div{padding:21px 0;border-left:0;border-top:1px solid var(--ob-line)}.ob-trend-grid{grid-template-columns:1fr}
.ob-two-grid{grid-template-columns:1fr;gap:12px}
.ob-two-card{padding:22px 20px}
.ob-two-title h4{font-size:20px}
.ob-two-track span{font-size:9px}
.ob-trend-grid>div{padding:22px}.ob-editorial .ob-trend-grid p,.ob-editorial .ob-capabilities p,.ob-editorial .ob-build-list p{font-size:12px}.ob-section .ob-trend-grid h3{font-size:15px;margin-top:16px}.ob-payment-total{gap:12px}.ob-payment-total>strong{font-size:56px}.ob-payment-total>strong>span{font-size:27px}.ob-editorial .ob-payment-total p{font-size:9px}.ob-chart-legend{gap:12px}.ob-chart-legend span{font-size:8px}.ob-vrp-title strong{font-size:21px}.ob-vrp-title div>span{font-size:9px}.ob-limit-grid{grid-template-columns:1fr;gap:8px;margin-top:22px}.ob-limit-grid>div{display:flex;justify-content:space-between;align-items:center;padding:13px}.ob-limit-grid strong{margin:0;font-size:12px}.ob-vrp-status{flex-direction:column;align-items:flex-start;gap:9px}.ob-finance-map{grid-template-columns:1fr;gap:20px}.ob-finance-centre{width:175px;justify-self:center}.ob-finance-orbits>div{padding:16px}.ob-finance-orbits span{font-size:9px}.ob-note{padding:20px 18px;gap:12px}.ob-sources h2{font-size:26px}.ob-sources strong{font-size:11px}.ob-cta{padding:32px 25px}.ob-cta h2{font-size:37px}.ob-article-end{align-items:flex-start;flex-direction:column;gap:16px}.ob-footer{font-size:8px;gap:16px}.ob-build-list>div{gap:14px}.ob-section .ob-build-list h3{font-size:14px}.ob-glance{grid-template-columns:1fr 1fr}.ob-glance>div{padding:18px 15px}.ob-glance strong{font-size:26px}.ob-glance span{font-size:9px}.ob-cash-row{grid-template-columns:96px 1fr 70px;gap:10px}}
@media(prefers-reduced-motion:no-preference){.ob-page{scroll-behavior:smooth}.ob-page a,.ob-page button{transition:color .18s,background .18s,transform .18s}}
@media print{.ob-page{background:#fff;color:#000}.ob-progress,.ob-nav,.ob-toc,.ob-mobile-toc,.ob-cta,.ob-article-end,.ob-footer,.ob-read-link{display:none!important}.ob-hero{background:#fff;color:#000}.ob-hero-main{min-height:0;padding-block:20px;grid-template-columns:1fr}.ob-hero-art{display:none}.ob-deck,.ob-hero-meta{color:#333}.ob-container{width:100%}.ob-reading-layout{display:block;padding-top:20px}.ob-section{break-inside:auto}.ob-figure,.ob-quote,.ob-note{break-inside:avoid}.ob-payment-figure{background:#eee;color:#000}.ob-payment-total>strong,.ob-chart-legend strong{color:#000}.ob-sources a::after{content:' (' attr(href) ')';font-size:8px;overflow-wrap:anywhere}.ob-section{scroll-margin-top:0}.ob-hero h1{font-size:36px}.ob-section h2{font-size:26px}.ob-editorial p{font-size:12px;line-height:1.6}}
.ob-two-head{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:22px}
.ob-two-head .ob-label{color:#72846b;font-size:9px}
.ob-two-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ob-two-card{position:relative;display:flex;flex-direction:column;padding:26px 24px 24px;border-radius:12px;border:1px solid #dce2d4;background:#fffef9;overflow:hidden}
.ob-two-read{border-top:2px solid #b8dfa6}
.ob-two-move{border-top:2px solid #2d5a3d}
.ob-two-index{position:absolute;top:20px;right:24px;font-family:var(--ob-serif);font-size:13px;letter-spacing:-.01em;color:#c2cbbc;font-variant-numeric:tabular-nums}
.ob-two-move .ob-two-index{color:#8fa88a}
.ob-two-title{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:14px;padding-right:34px}
.ob-two-title h4{font-family:var(--ob-serif);font-size:22px;font-weight:400;letter-spacing:-.025em;line-height:1.2;color:#1b3b26;margin:0}
.ob-two-title span{font-family:var(--ob-sans);font-size:8px;font-weight:650;letter-spacing:.14em;color:#7f9471;border:1px solid #d6ddce;border-radius:20px;padding:3px 8px;line-height:1}
.ob-two-move .ob-two-title span{color:#3f6b45;border-color:#bcd1b4}
.ob-two-line{font-family:var(--ob-sans);font-size:12px;line-height:1.5;color:#5f7060;margin:0 0 22px!important;letter-spacing:-.005em}
.ob-two-track{display:flex;align-items:center;gap:8px;padding:12px 0;border-top:1px solid #eaeee1;border-bottom:1px solid #eaeee1;margin-bottom:20px}
.ob-two-track span{font-family:var(--ob-sans);font-size:10px;font-weight:550;color:#3d5a41;white-space:nowrap;letter-spacing:-.003em}
.ob-two-track i{flex:1;height:1px;background:repeating-linear-gradient(to right,#c8d3be 0,#c8d3be 3px,transparent 3px,transparent 6px);min-width:12px}
.ob-two-move .ob-two-track i{background:repeating-linear-gradient(to right,#8fa88a 0,#8fa88a 3px,transparent 3px,transparent 6px)}
.ob-two-uses{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:6px}
.ob-two-uses li{font-family:var(--ob-sans);font-size:10px;line-height:1;color:#6b7d68;background:#f2f4ea;border-radius:20px;padding:7px 11px;letter-spacing:-.003em}
.ob-two-move .ob-two-uses li{background:#eaf0e2;color:#3f6047}



.ob-perm-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.ob-perm-col{display:flex;flex-direction:column;min-width:0}
.ob-perm-cap{display:flex;align-items:center;gap:9px;margin-bottom:12px;font-family:var(--ob-sans)}
.ob-perm-cap>strong{font-size:12px;font-weight:600;color:#1b3b26}
.ob-perm-cap>em{font-style:normal;font-size:8px;font-weight:650;letter-spacing:.14em;color:#7f9471;border:1px solid #d6ddce;border-radius:20px;padding:3px 8px;line-height:1}
.ob-perm-pill{font-size:9px;font-weight:650;letter-spacing:.12em;text-transform:uppercase;border-radius:20px;padding:5px 11px;line-height:1}
.ob-perm-pill.is-read{background:#dff0d4;color:#2f6a3a}
.ob-perm-pill.is-move{background:#123a2b;color:#b5f2a8}
.ob-win{flex:1;background:#fff;border:1px solid #e1e5d8;border-radius:14px;box-shadow:0 14px 34px -18px rgba(7,26,23,.3);overflow:hidden;font-family:var(--ob-sans)}
.ob-win-bar{display:flex;align-items:center;gap:5px;padding:10px 13px;border-bottom:1px solid #eef0e8;background:#fbfbf7}
.ob-win-bar i{width:6px;height:6px;border-radius:50%;background:#dcdfd4}
.ob-win-bar span{flex:1;text-align:center;font-size:8px;color:#a3ab9d;padding-right:23px}
.ob-win-body{padding:18px 18px 20px}
.ob-win-title{display:flex;justify-content:space-between;align-items:center;gap:10px}
.ob-win-title>strong{font-size:13px;font-weight:600;color:#1b3b26}
.ob-live{display:inline-flex;align-items:center;gap:6px;font-size:9px;color:#3f7a46;background:#eaf5e2;border-radius:20px;padding:4px 9px;white-space:nowrap}
.ob-live b{width:5px;height:5px;border-radius:50%;background:#4aa05a}
.ob-live.is-amber{color:#8a6a1f;background:#f8f0da}
.ob-live.is-amber b{background:#d9a63a}
.ob-win-total{margin:18px 0 8px;display:flex;flex-direction:column;gap:4px}
.ob-win-total small{font-size:9px;color:#97a090;letter-spacing:.04em}
.ob-win-total strong{font-family:var(--ob-serif);font-size:34px;font-weight:400;letter-spacing:-.04em;line-height:1.1;color:#174a32}
.ob-win-row{display:flex;align-items:center;gap:11px;padding:12px 0;border-top:1px solid #eef0e8}
.ob-win-ico{width:28px;height:28px;border-radius:50%;background:#eef4e8;color:#4f7f55;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.ob-win-name{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
.ob-win-name strong{font-size:11px;font-weight:550;color:#263f2e}
.ob-win-name small{font-size:9px;color:#97a090}
.ob-win-amt{font-size:11px;font-weight:550;color:#263f2e;font-variant-numeric:tabular-nums}
.ob-win-btn{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:6px;background:#123a2b;color:#d6f5c4;border-radius:9px;padding:12px;font-size:11px;font-weight:600}
.ob-perm-foot{font-family:var(--ob-sans);font-size:10px;color:#7a8a72;margin-top:12px;text-align:center}
@media(max-width:800px){.ob-perm-grid{grid-template-columns:1fr;gap:26px}}
.ob-cx{font-family:var(--ob-sans)}
.ob-cx-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr)}
.ob-cx-steps li{position:relative;text-align:center;padding:0 8px;min-width:0}
.ob-cx-steps li:not(:last-child)::before{content:"";position:absolute;top:24px;left:calc(50% + 34px);width:calc(100% - 68px);height:1px;background:repeating-linear-gradient(to right,#c8d3be 0,#c8d3be 3px,transparent 3px,transparent 6px)}
.ob-cx-dot{position:relative;z-index:1;width:48px;height:48px;margin:0 auto 14px;border-radius:50%;background:#fffef9;border:1px solid #d3dccb;color:#4f7f55;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 22px -14px rgba(7,26,23,.35)}
.ob-cx-steps li.is-bank .ob-cx-dot{background:#123a2b;border-color:#123a2b;color:#b5f2a8}
.ob-cx-steps small{display:block;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:#89967f;margin-bottom:5px}
.ob-cx-steps strong{display:block;font-size:12px;font-weight:600;line-height:1.4;color:#24442f}
.ob-cx-win{margin-top:30px}
.ob-cx-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:20px;border-top:1px solid #eef0e8}
.ob-cx-grid>div{padding:16px 12px 2px 0;min-width:0}
.ob-cx-grid>div+div{padding-left:14px;border-left:1px solid #eef0e8}
.ob-cx-grid small{display:block;font-size:9px;color:#97a090;margin-bottom:6px}
.ob-cx-grid strong{display:block;font-size:12px;font-weight:600;line-height:1.4;color:#263f2e}
@media(max-width:800px){
.ob-cx-grid{grid-template-columns:1fr 1fr}
.ob-cx-grid>div:nth-child(odd){border-left:0;padding-left:0}
.ob-cx-grid>div:nth-child(even){padding-left:14px;border-left:1px solid #eef0e8}
.ob-cx-grid>div:nth-child(n+3){border-top:1px solid #eef0e8;margin-top:14px;padding-top:14px}
}
@media(max-width:600px){
.ob-cx-steps{grid-template-columns:1fr}
.ob-cx-steps li{display:grid;grid-template-columns:48px 1fr;column-gap:16px;align-content:center;text-align:left;padding:0 0 26px}
.ob-cx-steps li:last-child{padding-bottom:0}
.ob-cx-steps li:not(:last-child)::before{left:23px;top:54px;width:1px;height:calc(100% - 60px);background:repeating-linear-gradient(to bottom,#c8d3be 0,#c8d3be 3px,transparent 3px,transparent 6px)}
.ob-cx-dot{grid-row:1 / span 2;margin:0}
.ob-cx-steps small{align-self:end;margin-bottom:3px;font-size:9px}
.ob-cx-steps strong{align-self:start;font-size:13px}
.ob-cx-win{margin-top:26px}
}


.ob-cs-bar{display:flex;gap:3px;height:14px;margin:6px 0 20px}
.ob-cs-bar span{border-radius:4px;min-width:6px}
.ob-cs-bar .c1,.ob-cs-dot.c1{background:#d3dccb}
.ob-cs-bar .c2,.ob-cs-dot.c2{background:#bccbb0}
.ob-cs-bar .c3,.ob-cs-dot.c3{background:#a5ba97}
.ob-cs-bar .c4,.ob-cs-dot.c4{background:#8fa882}
.ob-cs-bar .c5,.ob-cs-dot.c5{background:#123a2b}
.ob-cs-row{display:flex;align-items:center;gap:12px;padding:12px 0;border-top:1px solid #eef0e8}
.ob-cs-dot{width:9px;height:9px;border-radius:3px;flex-shrink:0}
.ob-cs-row.is-result{background:#f1f7ec;margin:6px -18px -20px;padding:16px 18px;border-top:1px solid #dfe8d6}
.ob-cs-row.is-result .ob-win-name strong{font-size:12px;color:#123a2b}
.ob-cs-row.is-result .ob-win-amt{font-family:var(--ob-serif);font-size:22px;font-weight:400;letter-spacing:-.03em;color:#174a32}

`;