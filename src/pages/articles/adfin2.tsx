 "use client";

import type { CSSProperties } from "react";

export type AdfinStubbsParkinProps = {
  portfolioHref?: string;
  demoHref?: string;
  customerWebsiteHref?: string;
  /** Put the supplied image folder in public/images, or override this path. */
  assetBasePath?: string;
};

const sourceUrl = "https://adfin.com/customer-stories/stubbs-parkin";
const milestones = [
  {
    date: "23 FEBRUARY",
    title: "Payments move first.",
    body: "Adfin goes live inside Client Engager. The mandate migration begins.",
  },
  {
    date: "APRIL",
    title: "Around 150 clients join.",
    body: "Harrison Latham and Company becomes part of the practice.",
  },
  {
    date: "JULY",
    title: "Another 40 follow.",
    body: "The client base grows again. The payment process is already in place.",
  },
];
const improvements = [
  [
    "A shared view of payments",
    "The wider team can see payment status from the client record, without asking someone else to check.",
  ],
  [
    "Direct Debit from the start",
    "Mandate setup sits within the proposal process, instead of becoming another task after the engagement letter.",
  ],
  [
    "A choice for every client",
    "Direct Debit, card, Apple Pay, Google Pay, bank payment and bank transfer are handled in one place.",
  ],
];

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={back ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
function Tick() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <circle cx="12" cy="11.5" r="1.8" />
      <path d="M9 17.5c.4-2 1.6-3 3-3s2.6 1 3 3" />
    </svg>
  );
}
function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5.5 10.5v7M10 10.5v7M14 10.5v7M18.5 10.5v7" />
      <path d="M3 20h18" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <path d="M3 10.5h18M6.5 14.5h3" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19v-5M12 19V8M18 19v-8" />
    </svg>
  );
}


export default function AdfinStubbsParkinCaseStudy({
  portfolioHref = "https://www.seo-growup.com/writing-portfolio",
  demoHref = "https://adfin.com/",
  customerWebsiteHref = "https://www.stubbsparkin.co.uk/",
  assetBasePath = "/images",
}: AdfinStubbsParkinProps) {
  const base = assetBasePath.replace(/\/$/, "");
  const office = `${base}/office-editorial.png`;
  const portrait = `${base}/stubbs-thumb-webflow.jpeg`;
  return (
    <article
      className="asp"
      id="asp-top"
      style={{ "--asp-office": `url("${office}")` } as CSSProperties}
    >
      <style>{styles}</style>
      <a className="asp-skip" href="#asp-story">
        Skip to the story
      </a>

      <header className="asp-hero asp-hero--blended">
        <img
          className="asp-hero-backdrop"
          src="/images/stubbs-parkin-hero.png"
          alt="Illustrative Stubbs Parkin office exterior"
          width="1672"
          height="941"
          fetchPriority="high"
        />

        <div className="asp-container asp-hero-grid">
          <div className="asp-hero-copy">
            <p className="asp-eyebrow asp-light-label">
              A growing practice. A better payment process.
            </p>
            <h1>
              Nearly 200
              <br />
              new clients.
              <br />
              <em>
                No avalanche of
                <br />
                payment admin.
              </em>
            </h1>
            <p className="asp-deck">
              Stubbs Parkin brought payments into Client Engager, giving the team a
              clearer view of who had paid as the practice welcomed nearly 200 new
              clients.
            </p>
            <div className="asp-hero-links">
              <a className="asp-button" href="#asp-story">
                Read their story <Arrow />
              </a>
              <a className="asp-text-link" href={demoHref}>
                Explore Adfin <Arrow />
              </a>
            </div>
            <div className="asp-hero-meta">
              <span>ACCOUNTANCY</span>
              <span>SOUTHPORT, UK</span>
              <span>2026</span>
            </div>
          </div>
          <div className="asp-hero-visual">
 
          </div>
        </div>
      </header>


      <div id="asp-story" className="asp-container asp-container--wide">
        <section className="asp-metrics" aria-label="Results at a glance">
          <div className="asp-metric">
            <span className="asp-metric-label">PAYMENT RELIABILITY</span>
            <strong>
              95<span>%</span>
            </strong>
            <p>of payments arrived on or before the due date.</p>
            <div className="asp-mini-track" aria-hidden="true">
              <i />
            </div>
          </div>
          <div className="asp-metric">
            <span className="asp-metric-label">A QUIET SWITCH</span>
            <strong>231</strong>
            <p>Direct Debit mandates moved in three days.</p>
            <span className="asp-metric-note">
              <Tick /> No client re-signing
            </span>
          </div>
          <div className="asp-metric">
            <span className="asp-metric-label">MONTHLY COLLECTIONS</span>
            <strong className="asp-metric-range">
              113 <span>→</span> 168
            </strong>
            <p>payments collected in March and July respectively.</p>
            <span className="asp-metric-note">More volume through one process</span>
          </div>
          <div className="asp-metric">
            <span className="asp-metric-label">A GROWING PRACTICE</span>
            <strong>
              <span>~</span>200
            </strong>
            <p>new clients welcomed as the practice expanded.</p>
            <span className="asp-metric-note">Two intakes. One connected workflow.</span>
          </div>
        </section>

        <section className="asp-about asp-section" id="asp-practice">
               <div className="asp-about-visual">
            <img
              src="/images/stubbs-parkin-practice-branded.png"
              alt="Illustrative stone office frontage"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <p className="asp-about-caption">
              A local practice.
              <br />
              Personal by nature.
            </p>
          </div>
          <div className="asp-about-copy">
            <p className="asp-eyebrow">01 / The practice</p>
            <h2>
              A growing firm.
              <br />
              <em>
                A personal way
                <br />
                of doing things.
              </em>
            </h2>
            <p>
              Stubbs Parkin is a family-run accountancy practice in Southport, Merseyside,
              with a team of around 15. Client relationships are at the centre of the
              business.
            </p>
            <p>
              Growth meant more than adding names to a client list. The team wanted to
              keep making time for questions, advice and the conversations that make a
              local practice feel local.
            </p>
            <dl className="asp-facts">
              <div>
                <dt>BASED IN</dt>
                <dd>Southport, Merseyside</dd>
              </div>
              <div>
                <dt>THE BUSINESS</dt>
                <dd>Family-run accountancy</dd>
              </div>
              <div>
                <dt>THE WORKSPACE</dt>
                <dd>Client Engager + Adfin</dd>
              </div>
            </dl>
            <a
              className="asp-text-link asp-ink-link"
              href={customerWebsiteHref}
              target="_blank"
              rel="noreferrer"
            >
              Meet Stubbs Parkin <Arrow />
            </a>
          </div>
        </section>
      </div>

   






 <section className="asp-expansion">
  <div className="asp-container asp-container--wide">
    <div className="asp-expansion-heading">
      <div>
        <p className="asp-expansion-eyebrow">
          02 / The growth moment
        </p>

        <h2>
          A bigger client base.
          <br />
          <em>The same personal touch.</em>
        </h2>
      </div>

      <p className="asp-expansion-intro">
        First, around 150 clients joined through Harrison
        Latham and Company. Then another 40 arrived in July.
        Payments needed to work as part of the team’s day.
      </p>
    </div>

    <div className="asp-expansion-layout">
      <figure className="asp-expansion-art">
        <img
          src="/images/stubbs-parkin-growth-glass.png"
          alt="Nearly 200 new clients in 2026: around 150 joined in April and another 40 in July."
          width="1670"
          height="941"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="asp-expansion-track">
        <ol className="asp-expansion-events">
          {milestones.map((m, i) => (
            <li key={m.date}>
              <span
                className="asp-expansion-number"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className="asp-expansion-node"
                aria-hidden="true"
              />

              <div className="asp-expansion-event">
                <span className="asp-expansion-date">
                  {m.date} 2026
                </span>

                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="asp-expansion-finish"
          aria-hidden="true"
        >
          <Tick />
        </div>
      </div>
    </div>
  </div>
</section>


<section className="asp-connected-story" id="asp-change">
  <div className="asp-container asp-container--wide">
    <p className="asp-eyebrow">
      03–04 / From disconnected to connected
    </p>

    <div className="asp-connected-heading">
      <h2>
        One client record.
        <br />
        <em>Payments in the same place.</em>
      </h2>

      <p>
        Adfin brought payment visibility into Client Engager,
        with Direct Debit in the proposal flow and six payment
        options in one place.
      </p>
    </div>

    <div className="asp-connected-comparison">
      <div className="asp-connected-before">
        <p className="asp-connected-label">Before Adfin</p>
        <h3 className="asp-connected-title">
          Three places to check.
        </h3>

        <div className="asp-connected-old">
          <ol className="asp-connected-tools">
            <li>
              <span
                className="asp-connected-icon"
                aria-hidden="true"
              >
                <DocIcon />
              </span>

              <div>
                <h4>Client Engager</h4>
                <p>Client details and engagement letters</p>
              </div>
            </li>

            <li>
              <span
                className="asp-connected-icon"
                aria-hidden="true"
              >
                <BankIcon />
              </span>

              <div>
                <h4>Direct Debit provider</h4>
                <p>Mandates set up after engagement</p>
              </div>
            </li>

            <li>
              <span
                className="asp-connected-icon"
                aria-hidden="true"
              >
                <CardIcon />
              </span>

              <div>
                <h4>Card payment system</h4>
                <p>Card payments handled elsewhere</p>
              </div>
            </li>
          </ol>

          <div className="asp-connected-gap">
            <span
              className="asp-connected-gap-dot"
              aria-hidden="true"
            />
            <p>
              Payment visibility
              <br />
              was limited.
            </p>
          </div>
        </div>

        <div className="asp-connected-consequence">
          <p className="asp-connected-label">
            The consequence
          </p>
          <p>
            More clients meant more checking between systems.
          </p>
        </div>
      </div>

      <div className="asp-connected-after">
        <p className="asp-connected-label">With Adfin</p>
        <h3 className="asp-connected-title">
          A shared view, inside Client Engager.
        </h3>

        <figure className="asp-connected-image">
          <img
            src="/images/stubbs-parkin-client-engager.png"
            alt="Illustrative payments dashboard for Stubbs Parkin, showing payment status, an active Direct Debit mandate and recent payments."
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <ul className="asp-connected-benefits">
          <li>
            <span aria-hidden="true"><Tick /></span>
            Shared payment visibility
          </li>
          <li>
            <span aria-hidden="true"><Tick /></span>
            Mandates in the proposal
          </li>
          <li>
            <span aria-hidden="true"><Tick /></span>
            Six payment options
          </li>
        </ul>
      </div>
    </div>

    <blockquote className="asp-connected-quote">
      <p>
        “You don’t want eight different tabs open for eight
        different softwares.”
      </p>

      <cite>
        <strong>Becky Jama</strong>
        <span>Practice Manager, Stubbs Parkin</span>
      </cite>
    </blockquote>
  </div>
</section>






<section className="asp-migration">
  <div className="asp-container asp-container--wide">
    <div className="asp-migration-heading">
      <div>
        <p className="asp-eyebrow asp-light-label">05 / The switch</p>

        <h2>
          Three days.
          <br />
          <em>No re-signing.</em>
        </h2>

        <p>
          The practice moved its existing Direct Debit mandates to Adfin. Clients
          received an email about the change, without being asked to sign up again.
        </p>
      </div>

      <div className="asp-migration-number">
        <span className="asp-migration-tag">
          <i />
          3-DAY MIGRATION
        </span>

        <div className="asp-migration-stat">
          <strong>231</strong>

          <span>
            EXISTING MANDATES.
            <br />
            ONE QUIET MIGRATION.
          </span>
        </div>
      </div>
    </div>

    <ol className="asp-migration-timeline">
      <li>
        <span className="asp-migration-node">01</span>
        <small>23 FEBRUARY 2026</small>
        <h3>The switch begins.</h3>
        <p>Migration of the existing mandates starts.</p>
      </li>

      <li>
        <span className="asp-migration-node">02</span>
        <small>CLIENT COMMUNICATION</small>
        <h3>A simple email.</h3>
        <p>The practice explains the change to clients.</p>
      </li>

      <li>
        <span className="asp-migration-node asp-migration-complete">
          <Tick />
        </span>
        <small>26 FEBRUARY 2026</small>
        <h3>231 mandates live.</h3>
        <p>The move is complete. No client re-signing.</p>
      </li>
    </ol>
  </div>
</section>

      <section className="asp-container asp-container--wide asp-section asp-results" id="asp-results">
        <div className="asp-results-heading">
          <div>
            <p className="asp-eyebrow">06 / What changed</p>
            <h2>
              More payments.
              <br />
              <em>Still arriving on time.</em>
            </h2>
          </div>
          <p>
            Monthly collections rose from 113 payments in March to 168 in July. Across the
            reported period, 95% of payments arrived on or before their due date.
          </p>
        </div>


<div className="asp-results-grid">
  <figure className="asp-collections">
    <div className="asp-chart-heading">
      <div>
        <p className="asp-eyebrow">MONTHLY COLLECTIONS</p>
        <h3>More volume. One process.</h3>
      </div>

      <span className="asp-chart-delta">
        +55
        <small>payments / month</small>
      </span>
    </div>

    <div
      className="asp-line-chart"
      role="img"
      aria-label="Monthly collections increased from 113 payments in March to 168 payments in July 2026."
    >
      <div className="asp-line-grid" aria-hidden="true">
        <span>200</span>
        <span>150</span>
        <span>100</span>
        <span>50</span>
        <span>0</span>
      </div>

      <svg
        viewBox="0 0 700 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aspLineArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b9d7bd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#b9d7bd" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="asp-line-area"
          d="M70 220 C145 170 190 174 270 158 C365 140 420 130 510 92 C565 69 600 62 640 54 L640 265 L70 265 Z"
          fill="url(#aspLineArea)"
        />

        <path
          className="asp-line-path"
          d="M70 220 C145 170 190 174 270 158 C365 140 420 130 510 92 C565 69 600 62 640 54"
        />

        <line className="asp-line-guide" x1="70" y1="220" x2="70" y2="265" />
        <line className="asp-line-guide" x1="640" y1="54" x2="640" y2="265" />

        <circle className="asp-line-point" cx="70" cy="220" r="8" />
        <circle className="asp-line-point" cx="640" cy="54" r="8" />
      </svg>

      <strong className="asp-line-value asp-line-value--march">113</strong>
      <strong className="asp-line-value asp-line-value--july">168</strong>

      <span className="asp-line-month asp-line-month--march">
        MARCH 2026
      </span>

      <span className="asp-line-month asp-line-month--july">
        JULY 2026
      </span>
    </div>

    <figcaption>
      Reported monthly payment counts. Baseline starts at zero.
    </figcaption>
  </figure>

  <div className="asp-reliability">
    <div className="asp-reliability-heading">
      <span className="asp-eyebrow">PAYMENT RELIABILITY</span>

      <span className="asp-status-circle">
        <Tick />
      </span>
    </div>

    <strong>
      95<span>%</span>
    </strong>

    <h3>
      On or before
      <br />
      the due date.
    </h3>

    <div
      className="asp-reliability-track"
      role="progressbar"
      aria-label="95 percent of payments arrived on or before the due date"
      aria-valuenow={95}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <i />
    </div>

    <div className="asp-reliability-foot">
      <strong>94–98%</strong>

      <p>
        on time each month
        <br />
        from March to August
      </p>
    </div>
  </div>
</div>



        <p className="asp-source-note">
          Source:{" "}
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Adfin’s published customer story
          </a>
          , using platform data from February–September 2026. Direct Debit timing is
          measured by collection date.
        </p>
      </section>

    
    <section className="asp-people">
  <div className="asp-container asp-container--wide asp-people-grid">
    <figure className="asp-people-portrait">
      <img
        src={portrait}
        alt="Becky Jama, Practice Manager at Stubbs Parkin."
        loading="lazy"
        decoding="async"
      />

      <figcaption className="asp-people-caption">
        <blockquote>
          “My role is to be there for the clients.”
        </blockquote>

        <div className="asp-people-attribution">
          <strong>Becky Jama</strong>
          <span>Practice Manager, Stubbs Parkin</span>
        </div>
      </figcaption>
    </figure>

    <div className="asp-people-copy">
      <p className="asp-eyebrow">
        07 / The everyday difference
      </p>

      <h2>
        Less chasing.
        <br />
        <em>More time for people.</em>
      </h2>

      <p className="asp-people-intro">
        The result shows up in the working day: a clearer
        picture of payments, fewer manual tasks and more
        time to answer client questions.
      </p>

      <ol className="asp-people-benefits">
        {improvements.map(([title, body], i) => (
          <li key={title}>
            <span
              className="asp-people-number"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
</section>

      <section className="asp-container asp-container--wide asp-cta-section">
        <div className="asp-cta">
          <div>
            <p className="asp-eyebrow asp-light-label">YOUR NEXT STAGE OF GROWTH</p>
            <h2>
              More clients should
              <br />
              mean more opportunity.
              <br />
              <em>Not more payment admin.</em>
            </h2>
            <p>
              See how Adfin connects payment collection with the systems your practice
              already uses.
            </p>
            <a className="asp-button" href={demoHref}>
              Explore Adfin <Arrow />
            </a>
          </div>
          <div className="asp-cta-side">
            <span className="asp-cta-brand">
              adfin<span>×</span>Client Engager
            </span>
            <ul>
              <li>
                <Tick /> Payment visibility across the team
              </li>
              <li>
                <Tick /> Direct Debit within the proposal flow
              </li>
              <li>
                <Tick /> Multiple ways for clients to pay
              </li>
            </ul>
            <span className="asp-cta-caption">ONE CONNECTED PAYMENT PROCESS.</span>
          </div>
        </div>
      </section>

      <footer className="asp-container asp-container--wide asp-footer">
        <div>
          <a href={portfolioHref}>
            <Arrow back /> Back to writing portfolio
          </a>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Read the original Adfin story <Arrow />
          </a>
        </div>
        <p>
          Independent portfolio redesign. Office and coastal imagery are AI-generated
          illustrations; payment UI uses sample data.
        </p>
      </footer>
    </article>
  );
}




const styles = `
/* All styles are scoped to .asp. No UI library or external font dependency. */
.asp {
  --ink: #153d33;
  --muted: #65746d;
  --green: #0c4635;
  --deep: #052e24;
  --mint: #d4efb6;
  --line: #dfe5dd;
  --paper: #fafaf6;
  background: var(--paper);
  color: var(--ink);
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  isolation: isolate;
}
.asp,
.asp *,
.asp *::before,
.asp *::after {
  box-sizing: border-box;
}
.asp :where(h1, h2, h3, p, figure, blockquote, dl, dd, ul, ol) {
  margin: 0;
}
.asp :where(ul, ol) {
  padding: 0;
}
.asp a {
  color: inherit;
  text-decoration: none;
}
.asp img {
  display: block;
  max-width: 100%;
}
.asp svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}
.asp h1,
.asp h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  letter-spacing: -0.055em;
  text-wrap: balance;
}
.asp h1 {
  font-size: clamp(44px, 4.35vw, 66px);
  line-height: 1.045;
}
.asp h2 {
  font-size: clamp(36px, 3.45vw, 51px);
  line-height: 1.1;
}
.asp h1 em,
.asp h2 em {
  font-weight: 400;
  font-style: normal;
  color: #6a816e;
}
.asp h3 {
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: -0.025em;
}
.asp p {
  color: var(--muted);
}
.asp-container {
  width: min(1200px, calc(100% - 96px));
  margin-inline: auto;
}
.asp-container--wide {
  width: min(1340px, calc(100% - 96px));
}
.asp-section {
  padding-block: 96px;
}
.asp-eyebrow {
  font-size: 10px !important;
  line-height: 1.5;
  letter-spacing: 0.16em;
  font-weight: 700;
  color: #5c7164 !important;
  text-transform: uppercase;
  margin-bottom: 22px !important;
}
.asp-light-label {
  color: #b1c6b6 !important;
}
.asp-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  background: var(--mint);
  color: var(--deep) !important;
  padding: 16px 23px;
  min-height: 52px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 650;
  transition:
    background 0.2s,
    transform 0.2s;
}
.asp-button:hover {
  background: #e3fac9;
  transform: translateY(-2px);
}
.asp-text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
}
.asp-text-link svg {
  width: 17px;
}
.asp-text-link:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.asp a:focus-visible {
  outline: 3px solid #75ac67;
  outline-offset: 5px;
}
.asp [id] {
  scroll-margin-top: 85px;
}
.asp-skip {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.asp-skip:focus {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 99;
  width: auto;
  height: auto;
  clip-path: none;
  background: #fff;
  padding: 10px 20px;
}
/* Hero */
.asp-hero {
  background: var(--deep);
  color: #fff;
  overflow: hidden;
}
.asp-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 78px;
  border-bottom: 1px solid #ffffff1f;
  font-size: 11px;
}
.asp-back {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #c8d7cd !important;
}
.asp-back svg {
  width: 16px;
}
.asp-top-label {
  font-size: 9px;
  letter-spacing: 0.12em;
  display: flex;
  gap: 18px;
  align-items: center;
  color: #b9c9be;
}
.asp-top-label i {
  height: 3px;
  width: 3px;
  background: #b9c9be;
  border-radius: 50%;
}
.asp-hero-grid {
  display: grid;
  grid-template-columns: 1.06fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 650px;
  padding-block: 120px 78px;
}
.asp-hero-copy {
  position: relative;
  z-index: 2;
}
.asp-hero .asp-eyebrow {
  font-size: 9px !important;
  letter-spacing: 0.15em;
}
.asp-hero h1 em {
  color: #c0d4b8;
}
.asp-deck {
  color: #bfcfc4 !important;
  max-width: 490px;
  font-size: 15px;
  line-height: 1.8;
  margin-top: 26px !important;
}
.asp-hero-links {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 30px;
}
.asp-hero-meta {
  display: flex;
  gap: 17px;
  margin-top: 40px;
  color: #94b09e;
  font-size: 8px;
  letter-spacing: 0.12em;
}
.asp-hero-meta span + span {
  border-left: 1px solid #ffffff30;
  padding-left: 17px;
}
.asp-hero-visual {
  position: relative;
  align-self: stretch;
  min-height: 470px;
  margin-right: -36px;
}
.asp-hero-photo {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: 38% center;
  border-radius: 2px;
}
.asp-photo-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    #03271e38 0%,
    transparent 35%,
    #03271ea1 100%
  );
}
.asp-hero-wordmark {
  position: absolute;
  top: 30px;
  left: 30px;
  color: #fff;
  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 12px #0006;
}
.asp-hero-wordmark small {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 8px;
  letter-spacing: 0.22em;
  margin-top: 3px;
}
.asp-payment-card {
  position: absolute;
  width: 335px;
  bottom: 30px;
  left: -36px;
  background: #ffffffed;
  backdrop-filter: blur(16px);
  border: 1px solid #fff9;
  border-radius: 7px;
  padding: 22px 24px;
  color: var(--ink);
  box-shadow: 0 20px 50px #021b1830;
}
.asp-payment-card-top {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 650;
}
.asp-payment-check {
  width: 29px;
  height: 29px;
  border: 1px solid #c6dbbe;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.asp-payment-check svg {
  width: 16px;
}
.asp-payment-card-top small {
  display: block;
  font-size: 9px;
  font-weight: 400;
  color: #7a897c;
  margin-top: 1px;
}
.asp-live-dot {
  width: 5px;
  height: 5px;
  background: #478454;
  border-radius: 50%;
  margin-left: auto;
}
.asp-payment-card-value {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 22px;
}
.asp-payment-card-value strong {
  font-family: Georgia, serif;
  font-weight: 400;
  font-size: 58px;
  letter-spacing: -0.07em;
  line-height: 1;
}
.asp-payment-card-value strong span {
  font-size: 38px;
}
.asp-payment-card-value p {
  font-size: 10px;
  line-height: 1.55;
}
.asp-payment-rail {
  height: 5px;
  background: #dce5d6;
  margin-top: 18px;
  border-radius: 4px;
  overflow: hidden;
}
.asp-payment-rail i {
  display: block;
  height: 100%;
  width: 95%;
  background: #427958;
}
.asp-payment-card-foot {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  align-items: center;
  font-size: 8px;
  color: #617264;
}
.asp-payment-card-foot > span:last-child {
  font-size: 16px;
  font-weight: 700;
  color: var(--green);
  letter-spacing: -0.07em;
}

.asp-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 45px 0;
  border-bottom: 1px solid var(--line);
}
.asp-metric {
  padding-inline: 28px;
  border-left: 1px solid var(--line);
}
.asp-metric:first-child {
  padding-left: 0;
  border: 0;
}
.asp-metric:last-child {
  padding-right: 0;
}
.asp-metric-label {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #788677;
}
.asp-metric > strong {
  display: block;
  font-family: Georgia, serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1.2;
  letter-spacing: -0.055em;
  margin: 10px 0;
}
.asp-metric > strong > span {
  font-size: 0.62em;
}
.asp-metric > strong.asp-metric-range {
  font-size: 40px;
  line-height: 1.56;
  white-space: nowrap;
}
.asp-metric-range span {
  color: #7f947a;
}
.asp-metric p {
  font-size: 12px;
  line-height: 1.6;
  max-width: 220px;
  min-height: 40px;
}
.asp-metric-note {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 8px;
  color: #677a64;
  margin-top: 14px;
}
.asp-metric-note svg {
  width: 12px;
  height: 12px;
}
.asp-mini-track {
  height: 4px;
  background: #e6ebdf;
  max-width: 174px;
  margin-top: 20px;
}
.asp-mini-track i {
  display: block;
  width: 95%;
  height: 100%;
  background: #678463;
}
/* About */
.asp-about {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 92px;
  align-items: center;
}
.asp-about-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 45%,
    rgba(10, 25, 18, 0.15) 68%,
    rgba(8, 22, 15, 0.72) 100%
  );
}
.asp-about-visual {
  position: relative;
  height: 525px;
}
    .asp-about-visual > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 23% center;
}
.asp-about-caption {
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 28px;
  z-index: 1;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #f4f2e8 !important;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
  margin: 0 !important;
}
  
.asp-about-copy > p:not(.asp-eyebrow) {
  font-size: 14px;
  line-height: 1.8;
  margin-top: 20px;
}
.asp-facts {
  margin: 26px 0 !important;
  border-top: 1px solid var(--line);
}
.asp-facts > div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 15px;
  padding: 11px 0;
  border-bottom: 1px solid var(--line);
  align-items: center;
}
.asp-facts dt {
  font-size: 8px;
  letter-spacing: 0.11em;
  color: #7b8879;
}
.asp-facts dd {
  font-size: 12px;
  font-weight: 500;
}
.asp-ink-link {
  color: var(--ink) !important;
}


/* Growth */
 .asp-growth {
  background: #f4f7ef;
  padding: 88px 0 96px;
  border: 0;
  overflow: hidden;
}

.asp-growth-heading {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 110px;
  align-items: end;
}

.asp-growth-heading > p {
  max-width: 410px;
  font-size: 14px;
  line-height: 1.85;
  color: #52604f;
}

.asp-growth-story {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 100px;
  margin-top: 68px;
  align-items: center;
}

.asp-growth-visual {
  display: grid;
  place-items: center;
  min-height: 470px;
}

.asp-growth-orbit {
  position: relative;
  width: min(100%, 470px);
  aspect-ratio: 1;
  isolation: isolate;
}

.asp-growth-orbit-layer {
  position: absolute;
  display: block;
  pointer-events: none;
}

.asp-growth-orbit-layer--main {
  inset: 9%;
  z-index: 1;
  border-radius: 48% 52% 45% 55%;
  background:
    radial-gradient(circle at 32% 25%, rgba(154, 183, 135, 0.22), transparent 30%),
    linear-gradient(145deg, #163d2b 0%, #27553c 58%, #3b6747 100%);
  transform: rotate(-9deg);
  box-shadow: 0 24px 55px rgba(25, 57, 39, 0.14);
}

.asp-growth-orbit-layer--secondary {
  right: 1%;
  bottom: 6%;
  width: 64%;
  height: 48%;
  z-index: 0;
  border-radius: 52% 48% 55% 45%;
  background: linear-gradient(140deg, #b9cba9, #dce6d4);
  transform: rotate(-13deg);
}

.asp-growth-arcs {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.asp-growth-arcs path {
  fill: none;
  stroke: rgba(225, 236, 215, 0.72);
  stroke-width: 1.4;
}

.asp-growth-arcs circle {
  fill: #d8e7cf;
}

.asp-growth-number {
  position: absolute;
  z-index: 3;
  top: 28%;
  left: 22%;
  color: #f4f4ec;
}

.asp-growth-number > span {
  display: block;
  margin-bottom: 6px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: #c5d8bc;
}

.asp-growth-number > strong {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(104px, 11vw, 158px);
  font-weight: 400;
  line-height: 0.82;
  letter-spacing: -0.1em;
}

.asp-growth-number > p {
  margin: 18px 0 0 7px;
  max-width: 120px;
  font-size: 12px;
  line-height: 1.45;
  color: #dce8d5;
}

.asp-growth-orbit-label {
  position: absolute;
  z-index: 4;
  display: grid;
  gap: 2px;
  color: #234936;
}

.asp-growth-orbit-label strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
}

.asp-growth-orbit-label small {
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5d735b;
}

.asp-growth-orbit-label--april {
  top: 16%;
  right: 8%;
}

.asp-growth-orbit-label--july {
  right: 2%;
  bottom: 18%;
}

.asp-growth-orbit-note {
  position: absolute;
  z-index: 4;
  left: 4%;
  bottom: 2%;
  margin: 0;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #71856b;
}

.asp .asp-timeline {
  --num: 76px;
  --node: 32px;
  --axis: calc(var(--num) + var(--node) / 2);
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* One continuous hairline, ending at the centre of the check circle */
.asp .asp-timeline::before {
  content: "";
  position: absolute;
  top: 14px;
  bottom: 16px;
  left: var(--axis);
  width: 1px;
  background: #b9c9b3;
}

.asp .asp-timeline li {
  position: relative;
  display: grid;
  grid-template-columns: var(--num) var(--node) minmax(0, 1fr);
  padding: 0 0 54px;
  border: 0;
}

/* Hollow node: filled with the section colour so the line hides behind it */
.asp .asp-timeline li:not(.asp-timeline-finish)::before {
  content: "";
  position: absolute;
  top: 6px;
  left: calc(var(--axis) - 8px);
  width: 16px;
  height: 16px;
  border: 1.5px solid #6f8c6e;
  border-radius: 50%;
  background: #f4f7ef;
}

.asp .asp-timeline-number {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #9db296;
}

.asp .asp-timeline-content {
  grid-column: 3;
  padding-left: 22px;
}

.asp .asp-timeline-date {
  display: block;
  margin-bottom: 10px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.22em;
  line-height: 1.6;
  color: #5f7560;
}

.asp .asp-timeline h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.035em;
  color: #17382a;
}

.asp .asp-timeline p {
  max-width: 400px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #667563;
}

/* Final solid check circle */
.asp .asp-timeline-finish {
  display: block !important;
  height: 32px;
  padding: 0 !important;
}

.asp .asp-timeline-finish > span {
  position: absolute;
  top: 0;
  left: var(--num);
  display: grid;
  place-items: center;
  width: var(--node);
  height: var(--node);
  border-radius: 50%;
  background: #17382a;
  color: #fff;
}

.asp .asp-timeline-finish svg {
  width: 15px;
  height: 15px;
  stroke-width: 2;
}

@media (max-width: 800px) {
  .asp .asp-timeline { --num: 52px; --node: 28px; }
  .asp .asp-timeline-number { font-size: 30px; }
  .asp .asp-timeline h3 { font-size: 23px; }
  .asp .asp-timeline-content { padding-left: 16px; }
}

@media (max-width: 560px) {
  .asp .asp-timeline { --num: 40px; --node: 24px; }
  .asp .asp-timeline-number { font-size: 24px; }
  .asp .asp-timeline h3 { font-size: 21px; }
  .asp .asp-timeline p { font-size: 12px; }
  .asp .asp-timeline li { padding-bottom: 40px; }
}




/* Friction map */
.asp-problem-heading,
.asp-results-heading {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 100px;
  align-items: end;
}
.asp-problem-heading > p,
.asp-results-heading > p {
  font-size: 14px;
  line-height: 1.8;
}
.asp-friction-map {
  margin-top: 44px;
  border: 1px solid #dce2d6;
  background: #fff;
}
.asp-friction-top {
  display: flex;
  justify-content: space-between;
  padding: 17px 25px;
  border-bottom: 1px solid #e3e7df;
  background: #f4f5ef;
  font-size: 9px;
  color: #7b8677;
}
.asp-friction-top > span:first-child {
  letter-spacing: 0.14em;
  font-weight: 600;
  color: #49624b;
}
.asp-friction-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.asp-friction-step {
  padding: 30px 30px 25px;
  position: relative;
}
.asp-friction-step + .asp-friction-step {
  border-left: 1px dashed #d8dfd1;
}
.asp-friction-num {
  font-family: Georgia, serif;
  font-size: 30px;
  color: #91a084;
}
.asp-friction-step h3 {
  font-size: 17px;
  font-weight: 500;
  margin-top: 12px;
}
.asp-friction-step > p {
  font-size: 11px;
  margin-top: 6px;
  min-height: 36px;
}
.asp-friction-pain {
  display: flex;
  gap: 9px;
  margin-top: 23px;
  padding-top: 17px;
  border-top: 1px solid #eee2d8;
  color: #95785f;
  font-size: 11px;
  line-height: 1.6;
}
.asp-friction-pain > span {
  width: 5px;
  height: 5px;
  background: #b99b7c;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}
.asp-friction-bottom {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 18px 25px;
  background: #f7f6f0;
  border-top: 1px solid #e5e6dc;
}
.asp-friction-bottom > span {
  font-size: 8px;
  letter-spacing: 0.12em;
  white-space: nowrap;
  color: #7a816d;
}
.asp-friction-bottom p {
  font-size: 11px;
}
/* Connected workflow */
.asp-workflow {
  padding: 80px 0;
  background: #f0f3ed;
  border-block: 1px solid #e2e8dc;
}
.asp-workflow-grid {
  display: grid;
  grid-template-columns: 0.83fr 1.17fr;
  gap: 75px;
  align-items: center;
}
.asp-workflow-grid > div > p:not(.asp-eyebrow) {
  font-size: 14px;
  line-height: 1.8;
  margin-top: 22px;
}
.asp-inline-outcomes {
  display: grid;
  gap: 7px;
  margin-top: 23px;
}
.asp-inline-outcomes > span {
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b654b;
}
.asp-inline-outcomes svg {
  width: 13px;
  height: 13px;
}
.asp-small-quote {
  padding: 24px 0 0;
  margin-top: 26px !important;
  border-top: 1px solid #cedac7;
}
.asp-small-quote p {
  font-family: Georgia, serif;
  font-size: 22px;
  line-height: 1.4;
  color: #3d6147;
  letter-spacing: -0.02em;
}
.asp-small-quote cite {
  display: block;
  font-size: 9px;
  font-style: normal;
  color: #788773;
  margin-top: 15px;
}
.asp-small-quote cite strong {
  display: block;
  font-size: 10px;
  color: #294b35;
  margin-bottom: 2px;
}
.asp-record-figure {
  min-width: 0;
}
.asp-record {
  background: #fff;
  border: 1px solid #dce4d6;
  border-radius: 9px;
  box-shadow: 0 24px 60px -25px #1b3a2026;
  overflow: hidden;
}
.asp-record-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: #f9fbf7;
  border-bottom: 1px solid #e8ece3;
  font-size: 10px;
}
.asp-record-top > span:first-child {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 650;
}
.asp-app-mark {
  display: grid;
  place-items: center;
  width: 23px;
  height: 23px;
  border-radius: 5px;
  background: #1e4436;
  color: #fff;
  font-size: 11px;
  letter-spacing: -0.1em;
}
.asp-muted {
  font-size: 8px;
  color: #82907b;
}
.asp-client-head {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 22px;
}
.asp-avatar {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background: #eef1e7;
  color: #70805e;
  font-size: 10px;
  font-weight: 700;
}
.asp-client-head > div {
  display: grid;
}
.asp-client-head strong {
  font-size: 12px;
}
.asp-client-head small {
  font-size: 9px;
  color: #8d9986;
  margin-top: 1px;
}
.asp-active {
  margin-left: auto;
  font-size: 8px;
  color: #5e7a4e;
  display: flex;
  align-items: center;
  gap: 5px;
}
.asp-active i,
.asp-mandate i {
  width: 4px;
  height: 4px;
  background: #639657;
  border-radius: 50%;
}
.asp-tabs {
  display: flex;
  gap: 26px;
  padding: 0 22px;
  border-bottom: 1px solid #e5eadf;
  color: #8d9787;
  font-size: 9px;
}
.asp-tabs > * {
  padding: 0 0 12px;
}
.asp-tabs strong {
  border-bottom: 2px solid #315d39;
  color: #315d39;
  font-weight: 600;
}
.asp-record-body {
  padding: 24px;
}
.asp-record-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.asp-record-title small {
  font-size: 7px;
  letter-spacing: 0.13em;
  color: #8a9880;
}
.asp-record-title h3 {
  font-size: 16px;
  font-weight: 500;
  margin-top: 3px;
}
.asp-powered {
  font-size: 20px;
  letter-spacing: -0.07em;
  font-weight: 700;
  color: #386546;
}
.asp-record-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 25px 0;
}
.asp-record-panels > div {
  border: 1px solid #e1e8d9;
  border-radius: 4px;
  padding: 18px;
}
.asp-record-panels > div > small {
  font-size: 9px;
  color: #809074;
  display: block;
}
.asp-payment-value {
  font-size: 30px;
  letter-spacing: -0.06em;
  display: block;
  font-weight: 500;
  margin: 7px 0 10px;
  line-height: 1.2;
}
.asp-payment-value > span {
  font-size: 17px;
  color: #92a082;
}
.asp-positive {
  display: flex;
  gap: 4px;
  align-items: center;
  color: #538249;
  font-size: 8px;
}
.asp-positive svg {
  width: 12px;
  height: 12px;
}
.asp-dd {
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin: 13px 0;
}
.asp-mandate {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  color: #6e875c;
}
.asp-record-table table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 9px;
}
.asp-record-table caption {
  text-align: left;
  font-weight: 600;
  font-size: 10px;
  padding: 0 0 9px;
}
.asp-record-table th {
  font-weight: 400;
  color: #8a9980;
  font-size: 8px;
  padding: 9px 0;
  border-block: 1px solid #e8ecdf;
}
.asp-record-table td {
  padding: 11px 0;
  border-bottom: 1px solid #edf0e7;
  color: #637657;
}
.asp-record-table td:nth-child(2) {
  font-weight: 500;
  color: #3b5130;
}
.asp-record-table td:last-child > span {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  color: #567c42;
}
.asp-record-table svg {
  width: 11px;
  height: 11px;
}
.asp-record-bottom {
  padding-top: 16px;
}
.asp-record-figure figcaption {
  font-size: 8px;
  color: #809175;
  margin: 12px 0 0;
  text-align: center;
}



/* Migration */
.asp-migration {
  position: relative;
  overflow: hidden;
  padding: 82px 0 76px;
  background: #063f31;
  color: #ffffff;
}

.asp-migration::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.28;
  pointer-events: none;
  background-image:
    linear-gradient(
      90deg,
      transparent 0,
      transparent 119px,
      rgba(210, 235, 216, 0.16) 120px,
      transparent 121px
    );
  background-size: 120px 100%;
}

.asp-migration::after {
  content: "";
  position: absolute;
  top: -170px;
  right: -180px;
  width: 620px;
  height: 620px;
  border: 1px solid rgba(190, 222, 194, 0.12);
  border-radius: 50%;
  box-shadow:
    0 0 0 58px rgba(190, 222, 194, 0.04),
    0 0 0 116px rgba(190, 222, 194, 0.025);
  pointer-events: none;
}

.asp-migration .asp-container,
.asp-migration .asp-container--wide {
  position: relative;
  z-index: 1;
}

.asp-migration-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 110px;
  align-items: center;
}

.asp-migration h2 em {
  color: #c9dfb9;
}

.asp-migration-heading p:not(.asp-eyebrow) {
  max-width: 490px;
  margin-top: 24px;
  color: #b8d0bf;
  font-size: 13px;
  line-height: 1.8;
}

.asp-migration-number {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.asp-migration-tag {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 15px;
  border: 1px solid rgba(202, 228, 201, 0.28);
  border-radius: 999px;
  color: #d3e7c6;
  font-size: 8px;
  letter-spacing: 0.17em;
}

.asp-migration-tag i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #b39aff;
}

.asp-migration-stat {
  display: flex;
  align-items: center;
  gap: 26px;
}

.asp-migration-stat > strong {
  color: #d9e9c9;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(112px, 12vw, 164px);
  font-weight: 400;
  letter-spacing: -0.1em;
  line-height: 0.82;
}

.asp-migration-stat > span {
  padding-left: 25px;
  border-left: 1px solid rgba(216, 237, 210, 0.55);
  color: #b7d0b8;
  font-size: 8px;
  letter-spacing: 0.16em;
  line-height: 1.9;
}

.asp-migration-timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-top: 70px !important;
}

.asp-migration-timeline > li {
  position: relative;
  padding: 38px 30px 0 0;
  border-top: 1px solid #789b80;
}

.asp-migration-node {
  position: absolute;
  top: -14px;
  left: 0;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid #8aad8a;
  border-radius: 50%;
  background: #063f31;
  color: #bed5bd;
  font-size: 8px;
}

.asp-migration-node svg {
  width: 13px;
  height: 13px;
}

.asp-migration-complete {
  border-color: #d9e9ba;
  background: #d9e9ba;
  color: #174d35;
}

.asp-migration-timeline small {
  display: block;
  color: #a8c3aa;
  font-size: 8px;
  letter-spacing: 0.14em;
}

.asp-migration-timeline h3 {
  margin-top: 11px;
  color: #f3f7ef;
  font-size: 20px;
  font-weight: 400;
}

.asp-migration-timeline p {
  max-width: 270px;
  margin-top: 8px;
  color: #abc4ae;
  font-size: 11px;
  line-height: 1.65;
}




/* Results */
.asp-results {
  background: #ffffff;
  width: 100%;
  max-width: none;
  padding-inline: 0;
  margin-inline: 0;
}
.asp-results > * {
  width: min(1340px, calc(100% - 96px));
  margin-inline: auto;
}

.asp-results-heading {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 110px;
  align-items: end;
}

.asp-results-heading > p {
  max-width: 470px;
  font-size: 14px;
  line-height: 1.8;
  color: #53645e;
}

.asp-results-grid {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 46px;
  margin-top: 58px;
  align-items: stretch;
}

.asp-results-grid > * {
  min-width: 0;
}

.asp-collections {
  padding: 0;
  border: 0;
  background: #ffffff;
}

.asp-chart-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
}

.asp-chart-heading > div {
  min-width: 0;
}

.asp-chart-heading .asp-eyebrow {
  margin-bottom: 10px !important;
  font-size: 8px !important;
}

.asp-chart-heading h3 {
  color: #17352b;
  font-size: 22px;
  font-weight: 500;
}

.asp-chart-delta {
  color: #24704d;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 45px;
  letter-spacing: -0.06em;
  line-height: 0.9;
  white-space: nowrap;
}

.asp-chart-delta small {
  display: block;
  margin-top: 8px;
  color: #7a8c83;
  font-family: Arial, sans-serif;
  font-size: 8px;
  letter-spacing: 0;
  text-align: right;
}

.asp-line-chart {
  position: relative;
  height: 300px;
  margin-top: 42px;
  padding-left: 42px;
}

.asp-line-grid {
  position: absolute;
  inset: 0 0 0 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #899992;
  font-size: 8px;
}

.asp-line-grid span {
  position: relative;
  display: flex;
  align-items: center;
  height: 0;
}

.asp-line-grid span::after {
  content: "";
  height: 1px;
  margin-left: 14px;
  flex: 1;
  border-top: 1px dashed #dbe5df;
}

.asp-line-chart svg {
  position: absolute;
  inset: 0 0 0 42px;
  width: calc(100% - 42px);
  height: 100%;
  overflow: visible;
}

.asp-line-path {
  fill: none;
  stroke: #216747;
  stroke-width: 4;
  stroke-linecap: round;
}

.asp-line-area {
  stroke: none;
}

.asp-line-guide {
  stroke: #9bbbaa;
  stroke-dasharray: 4 5;
  stroke-width: 1;
}

.asp-line-point {
  fill: #216747;
  stroke: #ffffff;
  stroke-width: 4;
}

.asp-line-value {
  position: absolute;
  z-index: 2;
  color: #17352b;
  font-size: 17px;
  font-weight: 600;
}

.asp-line-value--march {
  top: 39%;
  left: 25%;
}

.asp-line-value--july {
  top: 8%;
  right: 8%;
}

.asp-line-month {
  position: absolute;
  bottom: -27px;
  color: #72847b;
  font-size: 8px;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.asp-line-month--march {
  left: 20%;
}

.asp-line-month--july {
  right: 5%;
}

.asp-collections figcaption {
  margin-top: 47px;
  color: #8b9a91;
  font-size: 8px;
}

.asp-reliability {
  padding: 40px;
  border: 0;
  border-radius: 14px;
  background: #edf6e8;
}

.asp-reliability-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}

.asp-reliability-heading .asp-eyebrow {
  margin: 0 !important;
  color: #597364;
  font-size: 8px !important;
}

.asp-status-circle {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid #a9c5aa;
  border-radius: 50%;
  color: #2a704d;
}

.asp-status-circle svg {
  width: 14px;
  height: 14px;
}

.asp-reliability > strong {
  display: block;
  margin-top: 35px;
  color: #23623f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 112px;
  font-weight: 400;
  letter-spacing: -0.08em;
  line-height: 0.82;
}

.asp-reliability > strong > span {
  font-size: 0.62em;
}

.asp-reliability h3 {
  margin-top: 17px;
  color: #2d623f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.08;
}

.asp-reliability-track {
  height: 6px;
  margin-top: 36px;
  background: #cfe0c9;
}

.asp-reliability-track i {
  display: block;
  width: 95%;
  height: 100%;
  background: #2b704a;
}

.asp-reliability-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 34px;
}

.asp-reliability-foot > strong {
  color: #356b48;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 29px;
  font-weight: 400;
  letter-spacing: -0.05em;
}

.asp-reliability-foot > p {
  color: #778c7c;
  font-size: 9px;
  line-height: 1.5;
}

.asp-source-note {
  max-width: 860px;
  margin-top: 22px !important;
  color: #83928b;
  font-size: 9px;
  line-height: 1.7;
}

.asp-source-note a {
  text-decoration: underline;
  text-underline-offset: 3px;
}



/* Human outcome */
.asp-human {
  background: #f0f1e9;
  border-block: 1px solid #e3e6db;
  padding: 80px 0;
}
.asp-human-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.asp-human-image {
  position: relative;
  min-height: 550px;
  align-self: stretch;
  overflow: hidden;
}
.asp-human-image > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 32% center;
}
.asp-human-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 10%,
    #112c2266 50%,
    #0a251dee 100%
  );
}
.asp-human-quote {
  position: absolute;
  left: 33px;
  right: 28px;
  bottom: 33px;
  z-index: 1;
  color: #fff;
}
.asp-human-quote > span {
  font-size: 8px;
  letter-spacing: 0.16em;
  color: #d2d9ba;
}
.asp-human-quote blockquote {
  font-family: Georgia, serif;
  font-size: 33px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 20px 0 !important;
}
.asp-human-quote cite {
  font-size: 11px;
  font-style: normal;
}
.asp-human-quote cite span {
  display: block;
  color: #b7c2ae;
  font-size: 9px;
  margin-top: 2px;
}
.asp-human-copy > p:not(.asp-eyebrow) {
  font-size: 14px;
  margin-top: 23px;
  line-height: 1.8;
}
.asp-improvements {
  margin-top: 30px;
}
.asp-improvements > div {
  display: flex;
  gap: 21px;
  padding: 20px 0;
  border-top: 1px solid #d6decd;
}
.asp-improvements > div > span {
  font-family: Georgia, serif;
  font-size: 20px;
  color: #89a079;
}
.asp-improvements h3 {
  font-size: 15px;
  font-weight: 500;
}
.asp-improvements p {
  font-size: 12px;
  margin-top: 6px;
  line-height: 1.7;
}
/* Closing */
.asp-cta-section {
  padding-block: 80px 45px;
}
.asp-cta {
  padding: 60px;
  background: var(--deep);
  color: #fff;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 70px;
  align-items: center;
}
.asp-cta h2 {
  font-size: 42px;
}
.asp-cta h2 em {
  color: #bfd5ad;
}
.asp-cta p:not(.asp-eyebrow) {
  color: #a5bba7;
  font-size: 13px;
  line-height: 1.8;
  margin-top: 23px;
  max-width: 410px;
}
.asp-cta .asp-button {
  margin-top: 27px;
}
.asp-cta-side {
  border-left: 1px solid #ffffff21;
  padding-left: 45px;
}
.asp-cta-brand {
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.06em;
  display: flex;
  align-items: center;
  gap: 19px;
  white-space: nowrap;
}
.asp-cta-brand > span {
  font-size: 17px;
  font-weight: 300;
  color: #6e9776;
}
.asp-cta-side ul {
  list-style: none;
  margin-top: 28px;
}
.asp-cta-side li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  padding-block: 13px;
  border-bottom: 1px solid #ffffff15;
  color: #c5d5bc;
}
.asp-cta-side li svg {
  width: 13px;
  height: 13px;
  color: #a6c58e;
}
.asp-cta-caption {
  display: block;
  font-size: 7px;
  letter-spacing: 0.13em;
  margin-top: 27px;
  color: #819f84;
}
.asp-footer {
  padding-bottom: 35px;
}
.asp-footer > div {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 10px;
}
.asp-footer a {
  display: flex;
  align-items: center;
  gap: 8px;
}
.asp-footer svg {
  width: 14px;
  height: 14px;
}
.asp-footer > p {
  font-size: 8px;
  margin-top: 20px !important;
  color: #899382;
}
/* Responsive */
@media (min-width: 1500px) {
  .asp-hero-grid {
    gap: 90px;
  }
  .asp-hero-visual {
    margin-right: -50px;
  }
}
@media (max-width: 1100px) {
  .asp-container {
    width: calc(100% - 64px);
  }
  .asp-container--wide {
    width: calc(100% - 64px);
  }
  .asp-results > * {
    width: calc(100% - 64px);
  }
  .asp-hero-grid {
    gap: 40px;
    min-height: 610px;
    padding-block: 100px 70px;
  }
  .asp-hero-visual {
    margin-right: 0;
    min-height: 440px;
  }
  .asp-hero h1 {
    font-size: 48px;
  }
  .asp-payment-card {
    width: 300px;
    left: -22px;
    padding: 20px;
  }
  .asp-about,
  .asp-growth-heading,
  .asp-growth-story,
  .asp-workflow-grid,
  .asp-human-grid,
  .asp-problem-heading,
  .asp-results-heading {
    gap: 45px;
  }
  .asp-metric {
    padding-inline: 20px;
  }
  .asp-metric-label {
    font-size: 7px;
  }
  .asp-metric > strong.asp-metric-range {
    font-size: 32px;
    line-height: 1.95;
  }
   
  .asp-migration-heading {
    gap: 65px;
  }
  .asp-migration-number {
    gap: 20px;
  }
  .asp-migration-number > strong {
    font-size: 115px;
  }
  .asp-migration-number > span {
    font-size: 7px;
  }
  .asp-cta {
    padding: 42px;
    gap: 40px;
  }
  .asp-cta h2 {
    font-size: 36px;
  }
  .asp-cta-side {
    padding-left: 25px;
  }
  .asp-cta-brand {
    font-size: 18px;
  }
  .asp-record-body {
    padding: 19px;
  }
  .asp-reliability {
    padding: 30px;
  }
  .asp-record-panels > div {
    padding: 14px;
  }
  .asp-record-panels {
    gap: 10px;
  }
  .asp-workflow-grid {
    grid-template-columns: 0.8fr 1.2fr;
  }
}
@media (max-width: 800px) {
  .asp-container {
    width: calc(100% - 44px);
  }
  .asp-section {
    padding-block: 64px;
  }
  .asp-top-label {
    font-size: 7px;
    gap: 10px;
  }
  .asp-hero-grid {
    grid-template-columns: 1fr;
    gap: 38px;
    padding-block: 90px 45px;
  }
  .asp-hero h1 {
    font-size: clamp(44px, 7vw, 64px);
    max-width: 640px;
  }
  .asp-deck {
    max-width: 580px;
  }
  .asp-hero-meta {
    margin-top: 27px;
  }
  .asp-hero-visual {
    min-height: 410px;
    margin-left: 24px;
  }
  .asp-hero-photo {
    object-position: center 45%;
  }
  .asp-payment-card {
    width: 320px;
    left: -24px;
    bottom: 24px;
  }

  .asp-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-block: 12px;
  }
  .asp-metric {
    padding: 24px !important;
  }
  .asp-metric:nth-child(3) {
    border-left: 0;
  }
  .asp-metric:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
  .asp-metric-label {
    font-size: 8px;
  }
  .asp-metric > strong.asp-metric-range {
    font-size: 39px;
    line-height: 1.6;
  }
  .asp-about {
    gap: 38px;
    grid-template-columns: 1fr 1fr;
  }
  .asp-about-visual {
    height: 520px;
  }
    
  .asp-about h2 {
    font-size: 34px;
  }
  .asp-about-copy > p:not(.asp-eyebrow) {
    font-size: 12px;
  }
  .asp-facts > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .asp-facts dd {
    font-size: 11px;
  }
  .asp-growth-heading,
  .asp-problem-heading,
  .asp-results-heading {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .asp-growth-heading > p {
    max-width: 600px;
  }
  .asp-growth-story {
    gap: 40px;
    grid-template-columns: 0.9fr 1.1fr;
  }
  .asp-dot-field {
    gap: 5px;
  }
 
  .asp-client-count > strong {
    font-size: 88px;
  }
  .asp-client-count > p {
    font-size: 10px;
  }
  .asp-friction-step {
    padding: 20px;
  }
  .asp-friction-step h3 {
    font-size: 15px;
  }
  .asp-friction-top > span:last-child {
    display: none;
  }
  .asp-friction-step > p {
    min-height: 45px;
  }
  .asp-workflow-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .asp-workflow-grid > div > h2 br {
    display: none;
  }
  .asp-small-quote {
    max-width: 600px;
  }
  .asp-record-figure {
    max-width: 650px;
    width: 100%;
    justify-self: center;
  }
  .asp-migration-heading {
    gap: 35px;
    grid-template-columns: 1fr 0.8fr;
  }
  .asp-migration-number {
    display: block;
  }
  .asp-migration-number > strong {
    font-size: 110px;
    display: block;
  }
  .asp-migration-number > span {
    display: block;
    margin-top: 17px;
    font-size: 8px;
  }
  .asp-results-grid {
    grid-template-columns: 1.25fr 1fr;
    gap: 16px;
  }
  .asp-collections {
    padding: 23px;
  }
  .asp-chart-heading h3 {
    font-size: 16px;
  }
  .asp-chart-heading {
    gap: 12px;
  }
  .asp-chart-delta {
    font-size: 32px;
  }
  .asp-chart-delta small {
    font-size: 7px;
  }
  .asp-chart-bars {
    gap: 28px;
  }
  .asp-reliability {
    padding: 25px;
  }
  .asp-reliability > strong {
    font-size: 86px;
  }
  .asp-reliability-foot {
    display: block;
  }
  .asp-reliability-foot p {
    margin-top: 8px;
  }
  .asp-human-grid {
    gap: 35px;
  }
  .asp-human-image {
    min-height: 530px;
  }
  .asp-human-quote {
    left: 24px;
  }
  .asp-human-quote blockquote {
    font-size: 28px;
  }
  .asp-human-copy h2 {
    font-size: 35px;
  }
  .asp-human-copy > p:not(.asp-eyebrow) {
    font-size: 12px;
  }
  .asp-improvements p {
    font-size: 11px;
  }
  .asp-improvements > div {
    gap: 12px;
  }
  .asp-cta {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .asp-cta-side {
    border-left: 0;
    border-top: 1px solid #ffffff21;
    padding: 27px 0 0;
  }
  .asp-cta-side ul {
    margin-top: 16px;
  }
  .asp-cta h2 {
    font-size: 40px;
  }
}
@media (max-width: 560px) {
  .asp-container {
    width: calc(100% - 36px);
  }
  .asp-topbar {
    min-height: 61px;
  }
  .asp-top-label {
    display: none;
  }
  .asp-hero-grid {
    padding-top: 72px;
    gap: 30px;
  }
  .asp-hero .asp-eyebrow {
    font-size: 8px !important;
    max-width: 260px;
    line-height: 1.8;
  }
  .asp-hero h1 {
    font-size: 43px;
    letter-spacing: -0.055em;
  }
  .asp-deck {
    font-size: 13px;
    line-height: 1.8;
    margin-top: 23px !important;
  }
  .asp-hero-links {
    gap: 20px;
    flex-wrap: wrap;
  }
  .asp-button {
    padding: 14px 18px;
    min-height: 48px;
    font-size: 12px;
    gap: 20px;
  }
  .asp-text-link {
    font-size: 11px;
  }
  .asp-hero-meta {
    font-size: 7px;
    gap: 12px;
  }
  .asp-hero-meta span + span {
    padding-left: 12px;
  }
  .asp-hero-visual {
    min-height: 350px;
    margin-left: 13px;
  }
  .asp-hero-wordmark {
    left: 20px;
    top: 20px;
    font-size: 18px;
  }
  .asp-payment-card {
    width: min(286px, calc(100% + 3px));
    left: -13px;
    bottom: 18px;
    padding: 18px 20px;
  }
  .asp-payment-card-value {
    margin-top: 18px;
    gap: 17px;
  }
  .asp-payment-card-value strong {
    font-size: 50px;
  }
  .asp-payment-card-value p {
    font-size: 9px;
  }
  .asp-payment-card-top {
    font-size: 11px;
  }
  .asp-story-nav > .asp-container {
    min-height: 52px;
  }
  .asp-story-nav .asp-container > div {
    gap: 21px;
    font-size: 10px;
  }
  .asp-nav-cta {
    font-size: 9px;
  }
  .asp-nav-cta svg {
    display: none;
  }
  .asp-metric {
    padding: 23px 17px !important;
  }
  .asp-metric:nth-child(odd) {
    padding-left: 0 !important;
  }
  .asp-metric:nth-child(even) {
    padding-right: 0 !important;
  }
  .asp-metric-label {
    font-size: 6.5px;
    letter-spacing: 0.08em;
  }
  .asp-metric > strong {
    font-size: 43px;
  }
  .asp-metric > strong.asp-metric-range {
    font-size: 28px;
    line-height: 1.85;
  }
  .asp-metric p {
    font-size: 10px;
    min-height: 48px;
  }
  .asp-metric-note {
    font-size: 7px;
    line-height: 1.5;
    min-height: 20px;
  }
  .asp-about {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .asp-about-visual {
    height: 350px;
  }
  .asp-about-plaque > p {
    font-size: 25px;
  }
  .asp-about-plaque > div {
    display: flex;
  }
  .asp-about-plaque > div > span {
    display: block;
  }
  .asp-about-copy h2 {
    font-size: 38px;
  }
  .asp-about-copy h2 br:last-child {
    display: none;
  }
  .asp-about-copy > p:not(.asp-eyebrow) {
    font-size: 13px;
  }
  .asp-facts > div {
    grid-template-columns: 115px 1fr;
  }
  .asp-eyebrow {
    font-size: 8px !important;
    margin-bottom: 17px !important;
  }
  .asp h2 {
    font-size: 37px;
  }
  .asp-growth {
    padding: 55px 0;
  }
  .asp-growth-heading > p {
    font-size: 13px;
  }
  .asp-growth-story {
    grid-template-columns: 1fr;
    gap: 33px;
    margin-top: 34px;
  }
  .asp-client-count {
    grid-template-columns: auto 1fr;
    max-width: 370px;
  }
  .asp-client-count > strong {
    font-size: 105px;
  }
  .asp-client-count > p {
    font-size: 14px;
    max-width: 140px;
    padding-bottom: 8px;
  }
  .asp-dot-field {
    gap: 7px;
  }
  .asp-dot-field i {
    max-width: 7px;
  }
  .asp-dot-legend {
    font-size: 9px;
  }
 
  .asp-problem-heading > p,
  .asp-results-heading > p {
    font-size: 13px;
  }
  .asp-friction-map {
    margin-top: 30px;
  }
  .asp-friction-top {
    padding: 15px 20px;
  }
  .asp-friction-columns {
    grid-template-columns: 1fr;
  }
  .asp-friction-step {
    padding: 23px 22px 23px 61px;
  }
  .asp-friction-num {
    position: absolute;
    top: 22px;
    left: 20px;
    font-size: 24px;
  }
  .asp-friction-step h3 {
    margin-top: 0;
    font-size: 16px;
  }
  .asp-friction-step > p {
    min-height: 0;
    font-size: 11px;
  }
  .asp-friction-step + .asp-friction-step {
    border-left: 0;
    border-top: 1px dashed #d8dfd1;
  }
  .asp-friction-pain {
    margin-top: 13px;
    padding-top: 11px;
    font-size: 10px;
  }
  .asp-friction-bottom {
    display: block;
    padding: 17px 20px;
  }
  .asp-friction-bottom p {
    margin-top: 6px;
    font-size: 10px;
  }
  .asp-workflow {
    padding: 55px 0;
  }
  .asp-workflow-grid > div > p:not(.asp-eyebrow) {
    font-size: 13px;
  }
  .asp-small-quote p {
    font-size: 23px;
  }
  .asp-record-top {
    padding: 12px 15px;
  }
  .asp-record-top > .asp-muted {
    font-size: 6px;
  }
  .asp-client-head {
    padding: 17px 15px;
  }
  .asp-client-head strong {
    font-size: 11px;
  }
  .asp-client-head small {
    font-size: 8px;
  }
  .asp-tabs {
    gap: 20px;
    padding: 0 15px;
    font-size: 8px;
  }
  .asp-record-body {
    padding: 17px 15px;
  }
  .asp-record-title h3 {
    font-size: 14px;
  }
  .asp-powered {
    font-size: 18px;
  }
  .asp-record-panels {
    padding: 18px 0;
    gap: 9px;
  }
  .asp-record-panels > div {
    padding: 12px 9px;
  }
  .asp-payment-value {
    font-size: 25px;
  }
  .asp-payment-value > span {
    font-size: 13px;
  }
  .asp-dd {
    font-size: 13px;
    margin: 12px 0;
  }
  .asp-record-panels > div > small {
    font-size: 8px;
  }
  .asp-positive {
    font-size: 7px;
  }
  .asp-record-figure figcaption {
    font-size: 7px;
  }
  .asp-migration {
    padding: 55px 0;
  }
  .asp-migration-heading {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .asp-migration-number {
    display: flex;
    gap: 25px;
  }
  .asp-migration-number > strong {
    font-size: 98px;
  }
  .asp-migration-number > span {
    margin-top: 0;
  }
  .asp-migration-heading p:not(.asp-eyebrow) {
    font-size: 13px;
  }
  .asp-migration-timeline {
    grid-template-columns: 1fr;
    margin-top: 35px !important;
    padding-left: 12px !important;
  }
  .asp-migration-timeline > li {
    border-top: 0;
    border-left: 1px solid #6e997c;
    padding: 0 0 28px 30px;
  }
  .asp-migration-timeline > li:last-child {
    padding-bottom: 0;
    border-left-color: transparent;
  }
  .asp-migration-node {
    left: -13px;
    top: 0;
  }
  .asp-migration-timeline h3 {
    font-size: 21px;
    margin-top: 5px;
  }
  .asp-migration-timeline p {
    font-size: 12px;
    max-width: none;
    margin-top: 5px;
  }
  .asp-results-grid {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
  .asp-chart-heading h3 {
    font-size: 18px;
  }
  .asp-chart-delta {
    font-size: 37px;
  }
  .asp-bar-chart {
    height: 215px;
    margin-top: 38px;
  }
  .asp-reliability {
    padding: 27px;
  }
  .asp-reliability > strong {
    font-size: 100px;
    margin-top: 0;
  }
  .asp-reliability h3 {
    font-size: 29px;
  }
  .asp-reliability h3 br {
    display: none;
  }
  .asp-reliability-foot {
    display: flex;
    margin-top: 22px;
  }
  .asp-reliability-foot > p {
    margin-top: 0;
    font-size: 9px;
  }
  .asp-human {
    padding: 55px 0;
  }
  .asp-human-grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }
  .asp-human-image {
    min-height: 390px;
  }
  .asp-human-quote {
    left: 26px;
    bottom: 26px;
  }
  .asp-human-quote blockquote {
    font-size: 33px;
  }
  .asp-human-copy h2 {
    font-size: 37px;
  }
  .asp-human-copy > p:not(.asp-eyebrow) {
    font-size: 13px;
  }
  .asp-improvements p {
    font-size: 12px;
  }
  .asp-improvements > div {
    gap: 19px;
  }
  .asp-cta-section {
    padding-block: 50px 30px;
  }
  .asp-cta {
    padding: 29px 25px;
    gap: 29px;
  }
  .asp-cta h2 {
    font-size: 33px;
  }
  .asp-cta p:not(.asp-eyebrow) {
    font-size: 12px;
  }
  .asp-cta-side li {
    font-size: 10px;
  }
  .asp-footer > div {
    font-size: 9px;
    flex-wrap: wrap;
  }
  .asp-footer > p {
    font-size: 7px;
    line-height: 1.8;
  }
  .asp-footer {
    padding-bottom: 25px;
  }
}
@media (max-width: 360px) {
  .asp-chart-heading {
    gap: 8px;
  }
  .asp-chart-heading h3 {
    font-size: 16px;
  }
  .asp-chart-delta {
    font-size: 30px;
  }
  .asp-chart-delta small {
    font-size: 6.5px;
  }
  .asp-about-plaque > div > span {
    display: none;
  }
  .asp-story-nav .asp-container > div {
    gap: 16px;
  }
  .asp-chart-bars {
    gap: 22px;
  }
  .asp-bar-column > span {
    font-size: 7px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .asp * {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }
}
@media print {
  .asp {
    background: #fff;
  }
  .asp-story-nav,
  .asp-hero-links,
  .asp-cta-section,
  .asp-skip {
    display: none;
  }
  .asp-container {
    width: 100%;
  }
  .asp-section {
    padding-block: 35px;
  }
  .asp-hero {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .asp-migration,
  .asp-reliability {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .asp-footer a {
    text-decoration: underline;
  }
}

/* =====================================================
   BLENDED BUILDING HERO
   ===================================================== */

.asp-hero.asp-hero--blended {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: clamp(700px, 53vw, 900px);
  padding: 80px 0 70px;
  background: #052e24;
  color: #fff;
}

/* One image behind the entire hero */
.asp-hero--blended .asp-hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center;
}

/* Subtle extra shade behind the copy */
.asp-hero--blended::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(5, 46, 36, .22) 0%,
    rgba(5, 46, 36, .08) 35%,
    transparent 60%
  );
}

/* Copy and payment card sit above the photograph */
.asp-hero--blended .asp-hero-grid {
  position: relative;
  z-index: 2;
  width: min(1340px, calc(100% - 96px));
  margin-inline: auto;
  padding: 0;
  min-height: 0;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 64px;
  align-items: end;
}

 .asp-hero--blended .asp-hero-copy {
  max-width: 620px;
  padding-top: 80px;
}

.asp-hero--blended .asp-eyebrow {
  margin-bottom: 28px !important;
  color: #b6cec0 !important;
  font-size: 9px !important;
  line-height: 1.7;
  letter-spacing: .16em;
}

.asp-hero--blended h1 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 4.65vw, 78px);
  font-weight: 400;
  line-height: 1.065;
  letter-spacing: -.05em;
  text-wrap: initial;
  color: #fff;
}

.asp-hero--blended h1 em {
  font-style: normal;
  color: #bfd3b5;
}

.asp-hero--blended .asp-deck {
  max-width: 550px;
  margin-top: 29px !important;
  margin-bottom: 0 !important;
  font-size: 15px;
  line-height: 1.85;
  color: #c0d1c8 !important;
}

.asp-hero--blended .asp-hero-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;
  margin-top: 32px;
}

.asp-hero--blended .asp-button {
  padding: 17px 24px;
  border-radius: 4px;
  background: #d4efb6;
}

.asp-hero--blended .asp-text-link {
  color: #fff;
}

.asp-hero--blended .asp-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 43px;
  font-size: 8px;
  letter-spacing: .12em;
  color: #91ad9e;
}

.asp-hero--blended .asp-hero-meta span + span {
  padding-left: 18px;
  border-left: 1px solid rgba(255, 255, 255, .18);
}

/* Right column now contains only the live payment card */
.asp-hero--blended .asp-hero-visual {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  align-self: end;
  min-height: 0;
  margin: 0;
  padding: 0 0 0 4px;
}

/* Compact, understated proof card */
.asp-hero--blended .asp-payment-card {
  position: relative;
  inset: auto;
  width: 280px;
  max-width: 100%;
  padding: 22px 23px 17px;

  background: rgba(251, 252, 244, .94);
  border: 1px solid rgba(255, 255, 255, .55);
  border-radius: 7px;
  backdrop-filter: blur(12px);

  color: #143c32;
  box-shadow: 0 15px 40px rgba(0, 24, 14, .12);
}

.asp-hero--blended .asp-payment-card-top {
  gap: 12px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -.025em;
}

.asp-hero--blended .asp-payment-check {
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  border-color: #b9d4b2;
  color: #56825a;
}

.asp-hero--blended .asp-payment-card-top small,
.asp-hero--blended .asp-live-dot,
.asp-hero--blended .asp-payment-card-foot > span:first-child {
  display: none;
}

.asp-hero--blended .asp-payment-card-value {
  display: block;
  margin-top: 17px;
}

.asp-hero--blended .asp-payment-card-value strong {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -.07em;
}

.asp-hero--blended .asp-payment-card-value strong span {
  font-size: .67em;
}

.asp-hero--blended .asp-payment-card-value p {
  margin-top: 9px;
  font-size: 9px;
  line-height: 1.6;
  color: #6b7a70;
}

.asp-hero--blended .asp-payment-rail {
  height: 3px;
  margin-top: 17px;
  background: #d0d9ca;
}

.asp-hero--blended .asp-payment-rail i {
  width: 95%;
  background: #235f45;
}

.asp-hero--blended .asp-payment-card-foot {
  justify-content: flex-end;
  margin-top: 10px;
}

.asp-hero--blended .asp-payment-card-foot > span:last-child {
  font-size: 20px;
  line-height: 1.2;
}

/* Activate the nav overlay by adding the class in step 5 */
body:has(.asp-hero--blended) .site-nav--adfin-hero {
  position: absolute;
  inset: 0 0 auto;
  z-index: 50;
  width: 100%;
  background: transparent !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

/* Reserve space inside the hero for the overlaid nav */
body:has(.site-nav--adfin-hero) .asp-hero--blended {
  padding-top: 150px;
}

/* Tablet */
@media (max-width: 1100px) {
  .asp-hero.asp-hero--blended {
    min-height: 690px;
    padding-bottom: 55px;
  }

  .asp-hero--blended .asp-hero-grid {
    width: calc(100% - 64px);
    gap: 40px;
  }

  .asp-hero--blended h1 {
    font-size: 50px;
  }

  .asp-hero--blended .asp-deck {
    font-size: 13px;
  }

  .asp-hero--blended .asp-payment-card {
    width: 255px;
    padding: 20px;
  }
}

/* Stacked layout */
@media (max-width: 800px) {
  .asp-hero.asp-hero--blended {
    min-height: 0;
    padding: 55px 0 40px;
  }

  body:has(.site-nav--adfin-hero) .asp-hero--blended {
    padding-top: 115px;
  }

  .asp-hero--blended .asp-hero-grid {
    width: calc(100% - 44px);
    grid-template-columns: minmax(0, 1fr);
    gap: 35px;
  }

  .asp-hero--blended .asp-hero-backdrop {
    object-position: 67% center;
  }

  .asp-hero--blended::after {
    background: linear-gradient(
      180deg,
      rgba(5, 46, 36, .97) 0%,
      rgba(5, 46, 36, .92) 46%,
      rgba(5, 46, 36, .55) 70%,
      rgba(5, 46, 36, .10) 100%
    );
  }

  .asp-hero--blended h1 {
    font-size: clamp(43px, 7.8vw, 62px);
  }

  .asp-hero--blended .asp-hero-visual {
    min-height: 280px;
    padding: 0;
  }

  .asp-hero--blended .asp-payment-card {
    width: 260px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .asp-hero--blended .asp-hero-grid {
    width: calc(100% - 36px);
    gap: 25px;
  }

  body:has(.site-nav--adfin-hero) .asp-hero--blended {
    padding-top: 105px;
  }

  .asp-hero--blended .asp-eyebrow {
    max-width: 285px;
    margin-bottom: 23px !important;
    font-size: 7px !important;
  }

  .asp-hero--blended h1 {
    font-size: clamp(36px, 10.8vw, 49px);
  }

  .asp-hero--blended .asp-deck {
    margin-top: 23px !important;
    font-size: 12px;
  }

  .asp-hero--blended .asp-hero-links {
    gap: 20px;
    margin-top: 25px;
  }

  .asp-hero--blended .asp-button {
    padding: 14px 18px;
  }

  .asp-hero--blended .asp-hero-meta {
    gap: 12px;
    margin-top: 30px;
    font-size: 7px;
  }

  .asp-hero--blended .asp-hero-meta span + span {
    padding-left: 12px;
  }

  .asp-hero--blended .asp-hero-visual {
    min-height: 245px;
  }

  .asp-hero--blended .asp-payment-card {
    width: 245px;
  }
}

/* =====================================================
   PROCESS FLOW DIAGRAM
   ===================================================== */
.asp .asp-flow {
  --flow-line: #0f6b50;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(190px, 0.6fr) minmax(0, 1fr);
  align-items: center;
  margin-top: 56px;
}

/* Cards */
.asp .asp-flow-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.asp .asp-flow-num {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 32px;
  line-height: 1;
  color: #9fc1ae;
}
.asp .asp-flow h3 {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
}
.asp .asp-flow-head p {
  margin-top: 6px;
  font-size: 15px;
  line-height: 1.5;
  color: #cfe3d7;
}
.asp .asp-flow-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
.asp .asp-flow-icon svg {
  width: 30px;
  height: 30px;
  stroke-width: 1.5;
}
.asp .asp-flow-pain {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 15px;
  line-height: 1.5;
  color: #e5f1ea;
}
.asp .asp-flow-pain i {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #bfe0c9;
}

/* Dark source card */
.asp .asp-flow-source {
  padding: 32px 36px 28px;
  border-radius: 12px;
  background: linear-gradient(160deg, #11654c 0%, #0b4f3b 100%);
  color: #fff;
  box-shadow: 0 24px 50px -28px rgba(5, 46, 36, 0.55);
}

/* White target cards */
.asp .asp-flow-targets {
  display: grid;
  gap: 28px;
  margin-left: 56px;
}
.asp .asp-flow-target {
  position: relative;
  padding: 26px 28px 24px;
  border: 1px solid #e1e9df;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 14px 36px -26px rgba(16, 61, 48, 0.35);
}
.asp .asp-flow-target .asp-flow-num {
  font-size: 28px;
  color: #6f8579;
}
.asp .asp-flow .asp-flow-target h3 {
  font-size: 22px;
  color: #10382b;
}
.asp .asp-flow-target .asp-flow-head p {
  font-size: 14.5px;
  color: #5d6f64;
}
.asp .asp-flow-target .asp-flow-icon {
  background: #e6f1ea;
  color: #1b5b45;
}
.asp .asp-flow-target .asp-flow-pain {
  margin-top: 20px;
  padding-top: 0;
  border-top: 0;
  font-size: 14.5px;
  color: #51655a;
}
.asp .asp-flow-target .asp-flow-pain i {
  background: #8fb7a0;
}

/* Elbow connectors + hollow nodes */
.asp .asp-flow-target::before {
  content: "";
  position: absolute;
  left: -56px;
  width: 56px;
  border-left: 1.5px solid var(--flow-line);
  pointer-events: none;
}
.asp .asp-flow-target:first-child::before {
  top: 50%;
  height: calc(50% + 14px);
  border-top: 1.5px solid var(--flow-line);
  border-top-left-radius: 16px;
}
.asp .asp-flow-target:last-child::before {
  bottom: 50%;
  height: calc(50% + 14px);
  border-bottom: 1.5px solid var(--flow-line);
  border-bottom-left-radius: 16px;
}
.asp .asp-flow-target::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -7px;
  width: 13px;
  height: 13px;
  margin-top: -6.5px;
  border: 2px solid var(--flow-line);
  border-radius: 50%;
  background: #fff;
}

/* Centre: broken link */
.asp .asp-flow-gap {
  position: relative;
  align-self: stretch;
  min-height: 160px;
}
.asp .asp-flow-seg {
  position: absolute;
  top: calc(50% - 0.75px);
  height: 0;
  border-top: 1.5px solid var(--flow-line);
}
.asp .asp-flow-seg--l {
  left: 0;
  width: calc(50% - 118px);
}
.asp .asp-flow-seg--l::before {
  content: "";
  position: absolute;
  left: -7px;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--flow-line);
  box-shadow: 0 0 0 3px var(--paper);
}
.asp .asp-flow-seg--r {
  right: 0;
  width: calc(50% - 118px);
}
.asp .asp-flow-seg--dash {
  left: calc(50% - 118px);
  width: 236px;
  top: calc(50% - 1px);
  height: 2px;
  border-top: 0;
  background: repeating-linear-gradient(90deg, #ec6f57 0 18px, transparent 18px 30px);
}
.asp .asp-flow-alert {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ec6a4f;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 0 0 8px var(--paper);
}
.asp .asp-flow-label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(50% + 40px);
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1.6;
  text-transform: uppercase;
  color: #10382b;
}
.asp .asp-flow-pill {
  position: absolute;
  top: calc(50% + 38px);
  left: 50%;
  transform: translateX(-50%);
  padding: 9px 18px;
  border-radius: 999px;
  background: #fde8e2;
  color: #e0583f;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
}
.asp .asp-flow-gap::before,
.asp .asp-flow-gap::after {
  content: "";
  position: absolute;
  left: 50%;
  border-left: 1.5px dotted #cfd8cb;
}
.asp .asp-flow-gap::before {
  top: calc(50% - 150px);
  bottom: calc(50% + 100px);
}
.asp .asp-flow-gap::after {
  top: calc(50% + 100px);
  bottom: calc(50% - 150px);
}

/* Consequence bar */
.asp .asp-flow-consequence {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 56px;
  padding: 22px 30px;
  border: 1px solid #e4e9df;
  border-radius: 12px;
  background: #f5f6f0;
}
.asp .asp-flow-consequence .asp-flow-icon {
  width: 58px;
  height: 58px;
  border-radius: 10px;
  background: #e8eee5;
  color: #27493a;
}
.asp .asp-flow-consequence .asp-flow-icon svg {
  width: 26px;
  height: 26px;
}
.asp .asp-flow-divider {
  align-self: stretch;
  width: 1px;
  background: #dde3d9;
}
.asp .asp-flow-consequence small {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5c7164;
}
.asp .asp-flow-consequence p {
  margin-top: 4px;
  font-size: 21px;
  line-height: 1.4;
  letter-spacing: -0.015em;
  color: #10382b;
}

/* Tablet / mobile: stack, drop the connectors */
@media (max-width: 900px) {
  .asp .asp-flow {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 40px;
  }
  .asp .asp-flow-gap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    min-height: 0;
    padding: 24px 0;
  }
  .asp .asp-flow-gap::before,
  .asp .asp-flow-gap::after,
  .asp .asp-flow-seg,
  .asp .asp-flow-label {
    display: none;
  }
  .asp .asp-flow-alert,
  .asp .asp-flow-pill {
    position: static;
    transform: none;
    box-shadow: none;
  }
  .asp .asp-flow-targets {
    margin-left: 0;
  }
  .asp .asp-flow-target::before,
  .asp .asp-flow-target::after {
    display: none;
  }
}
@media (max-width: 560px) {
  .asp .asp-flow-source {
    padding: 24px 22px;
  }
  .asp .asp-flow-target {
    padding: 22px 20px;
  }
  .asp .asp-flow-icon {
    width: 54px;
    height: 54px;
  }
  .asp .asp-flow-icon svg {
    width: 24px;
    height: 24px;
  }
  .asp .asp-flow h3 {
    font-size: 21px;
  }
  .asp .asp-flow .asp-flow-target h3 {
    font-size: 20px;
  }
  .asp .asp-flow-consequence {
    gap: 16px;
    padding: 18px;
  }
  .asp .asp-flow-divider {
    display: none;
  }
  .asp .asp-flow-consequence p {
    font-size: 17px;
  }
}

/* =====================================================
   CLIENT ENGAGER IMAGE
   ===================================================== */
.asp .asp-workflow-grid {
  grid-template-columns: 0.72fr 1.28fr;
  gap: 64px;
}

.asp .asp-workflow-shot {
  margin: 0;
  min-width: 0;
}

/* No border, radius or overflow clipping: the image has its own
   card, shadow and decorative details, which would be cut off */
.asp .asp-workflow-shot img {
  display: block;
  width: 100%;
  height: auto;
  max-width: none;
}

@media (max-width: 1100px) {
  .asp .asp-workflow-grid {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
  }
}

@media (max-width: 800px) {
  .asp .asp-workflow-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
}



/* =====================================================
   COMBINED BEFORE / AFTER SECTION
   ===================================================== */

.asp .asp-connected-story {
  padding: clamp(64px, 7vw, 108px) 0;
  background: #fff;
  color: #111b23;
  scroll-margin-top: 96px;
}

.asp .asp-connected-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
  align-items: center;
  gap: 56px;
  margin-bottom: 58px;
}

.asp .asp-connected-heading h2 {
  margin: 0;
  color: #111b23;
  font-size: clamp(38px, 4.1vw, 62px);
  line-height: 1.06;
  letter-spacing: -0.055em;
  text-wrap: initial;
}

.asp .asp-connected-heading h2 em {
  color: #063f35;
  font-style: normal;
}

.asp .asp-connected-heading > p {
  margin: 0;
  padding-left: 32px;
  border-left: 1px solid #e1e6e5;
  color: #697580;
  font-size: 16px;
  line-height: 1.8;
}

.asp .asp-connected-comparison {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 44px;
  align-items: start;
}

.asp .asp-connected-before,
.asp .asp-connected-after {
  min-width: 0;
}

.asp .asp-connected-after {
  padding-left: 40px;
  border-left: 1px solid #e3e8e6;
}

.asp .asp-connected-label {
  margin: 0 0 13px;
  color: #73808a;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.asp .asp-connected-after > .asp-connected-label {
  color: #07513f;
}

.asp .asp-connected-title {
  margin: 0;
  color: #111b23;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 2.45vw, 36px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.045em;
}

/* Quiet tool rows, with a broken connector alongside. */

.asp .asp-connected-old {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 126px;
  gap: 20px;
  margin-top: 24px;
}

.asp .asp-connected-tools {
  margin: 0;
  padding: 0;
  list-style: none;
}

.asp .asp-connected-tools > li {
  display: flex;
  align-items: center;
  gap: 17px;
  min-height: 116px;
  padding: 24px 0;
}

.asp .asp-connected-tools > li + li {
  border-top: 1px solid #e5e9e7;
}

.asp .asp-connected-icon {
  display: grid;
  place-items: center;
  flex: 0 0 54px;
  width: 54px;
  height: 58px;
  border-radius: 13px;
  background: #f3f6f4;
  color: #203c35;
}

.asp .asp-connected-icon svg {
  width: 27px;
  height: 27px;
  stroke-width: 1.5;
}

.asp .asp-connected-tools h4 {
  margin: 0 0 6px;
  color: #16221f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.035em;
}

.asp .asp-connected-tools p {
  margin: 0;
  color: #748079;
  font-size: 13px;
  line-height: 1.65;
}

.asp .asp-connected-gap {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-block: 49px;
  border-left: 1px dashed #efb5ad;
}

.asp .asp-connected-gap::before,
.asp .asp-connected-gap::after {
  position: absolute;
  left: -15px;
  width: 15px;
  border-top: 1px dashed #efb5ad;
  content: "";
}

.asp .asp-connected-gap::before {
  top: 0;
}

.asp .asp-connected-gap::after {
  bottom: 0;
}

.asp .asp-connected-gap-dot {
  position: absolute;
  top: 50%;
  left: -5px;
  width: 9px;
  height: 9px;
  border: 1px solid #ec9c91;
  border-radius: 50%;
  background: #fff5f2;
  transform: translateY(-50%);
}

.asp .asp-connected-gap > p {
  position: relative;
  margin: 0;
  padding: 12px 10px;
  border-radius: 8px;
  background: #fff2ef;
  color: #b75b50;
  font-size: 11px;
  line-height: 1.65;
}

.asp .asp-connected-gap > p::before {
  position: absolute;
  top: 50%;
  right: 100%;
  width: 18px;
  border-top: 1px dashed #efb5ad;
  content: "";
}

.asp .asp-connected-consequence {
  margin-top: 26px;
  padding-top: 24px;
  border-top: 1px solid #e3e8e5;
}

.asp .asp-connected-consequence > p:last-child {
  margin: 0;
  max-width: 390px;
  color: #35443e;
  font-size: 16px;
  line-height: 1.7;
}

/* Existing PNG: preserve its transparency and baked-in details. */

.asp .asp-connected-image {
  margin: 18px 0 0;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.asp .asp-connected-image img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.asp .asp-connected-image figcaption {
  margin-top: 8px;
  color: #7a858c;
  font-size: 11px;
  line-height: 1.6;
}

.asp .asp-connected-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 22px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.asp .asp-connected-benefits li {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #5d6a72;
  font-size: 12px;
  line-height: 1.5;
}

.asp .asp-connected-benefits li > span {
  display: grid;
  place-items: center;
  flex: 0 0 26px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e6f1ea;
  color: #1b5b45;
}

.asp .asp-connected-benefits svg {
  width: 14px;
  height: 14px;
  stroke-width: 2;
}

/* One shared quote closes the entire story. */

.asp .asp-connected-quote {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 38px;
  margin: 44px 0 0;
  padding: 28px 0 0;
  border-top: 1px solid #d9e1dd;
}

.asp .asp-connected-quote > p {
  margin: 0;
  color: #083e33;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(23px, 2.2vw, 31px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.04em;
}

.asp .asp-connected-quote cite {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 28px;
  border-left: 1px solid #dfe5e1;
  font-size: 12px;
  font-style: normal;
  line-height: 1.6;
}

.asp .asp-connected-quote cite strong {
  color: #17241e;
  font-weight: 650;
}

.asp .asp-connected-quote cite span {
  color: #748079;
}

/* Tablet */

@media (max-width: 1100px) {
  .asp .asp-connected-heading {
    gap: 32px;
  }

  .asp .asp-connected-comparison {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 28px;
  }

  .asp .asp-connected-after {
    padding-left: 28px;
  }

  .asp .asp-connected-old {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .asp .asp-connected-gap {
    margin: 4px 0 0 27px;
    padding: 14px 0 0 20px;
  }

  .asp .asp-connected-gap::before,
  .asp .asp-connected-gap::after,
  .asp .asp-connected-gap-dot,
  .asp .asp-connected-gap > p::before {
    display: none;
  }

  .asp .asp-connected-gap > p br {
    display: none;
  }

  .asp .asp-connected-tools > li {
    min-height: 100px;
    padding-block: 20px;
  }
}

/* Mobile */

@media (max-width: 800px) {
  .asp .asp-connected-heading {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 38px;
  }

  .asp .asp-connected-heading > p {
    max-width: 570px;
    padding-left: 0;
    border-left: 0;
    font-size: 15px;
  }

  .asp .asp-connected-comparison {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .asp .asp-connected-after {
    padding: 32px 0 0;
    border-left: 0;
    border-top: 1px solid #e3e8e6;
  }

  .asp .asp-connected-tools > li {
    min-height: 0;
  }

  .asp .asp-connected-consequence > p:last-child {
    max-width: none;
  }

  .asp .asp-connected-quote {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-top: 34px;
  }

  .asp .asp-connected-quote cite {
    padding-left: 0;
    border-left: 0;
  }
}

@media (max-width: 480px) {
  .asp .asp-connected-heading h2 {
    font-size: 38px;
  }

  .asp .asp-connected-title {
    font-size: 28px;
  }

  .asp .asp-connected-benefits {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

/* =====================================================
   EVERYDAY DIFFERENCE — PORTRAIT / EDITORIAL LAYOUT
   ===================================================== */

.asp .asp-people {
  padding: clamp(56px, 6vw, 96px) 0;
  background: #f3f8f4;
  border-block: 1px solid #e5ede7;
}

.asp .asp-people-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
  align-items: stretch;
  gap: clamp(36px, 4.5vw, 72px);
}

/* Photograph */

.asp .asp-people-portrait {
  position: relative;
  isolation: isolate;
  min-width: 0;
  min-height: 660px;
  margin: 0;
  overflow: hidden;
  border-radius: 16px;
  background: #073e33;
}

.asp .asp-people-portrait > img {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: 50% 30%;
}

/*
 * A smooth forest-green fade.
 * The upper photograph remains clear.
 * The lower area becomes dark enough for white quote text.
 */

.asp .asp-people-portrait::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(4, 48, 38, 0) 32%,
    rgba(4, 48, 38, 0.04) 43%,
    rgba(4, 48, 38, 0.28) 56%,
    rgba(4, 48, 38, 0.76) 72%,
    rgba(4, 48, 38, 0.96) 88%,
    #043026 100%
  );
}

/* Quote sits above the gradient. */

.asp .asp-people-caption {
  position: absolute;
  right: clamp(24px, 3vw, 44px);
  bottom: clamp(28px, 3vw, 44px);
  left: clamp(24px, 3vw, 44px);
  z-index: 2;
  color: #fff;
}

.asp .asp-people-caption blockquote {
  margin: 0;
  max-width: 490px;
  color: #fff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(32px, 3.1vw, 46px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.04em;
  text-wrap: balance;
}

.asp .asp-people-attribution {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 25px;
  line-height: 1.5;
}

.asp .asp-people-attribution strong {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.asp .asp-people-attribution span {
  color: #deebe4;
  font-size: 12px;
}

/* Editorial heading and supporting copy */

.asp .asp-people-copy {
  align-self: center;
  min-width: 0;
  padding-block: 24px;
}

.asp .asp-people-copy > .asp-eyebrow {
  margin-bottom: 28px !important;
  color: #35544a !important;
  letter-spacing: 0.19em;
}

.asp .asp-people-copy h2 {
  margin: 0;
  color: #111d19;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(40px, 3.8vw, 58px);
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -0.055em;
  text-wrap: initial;
}

.asp .asp-people-copy h2 em {
  color: #073f34;
  font-style: normal;
}

.asp .asp-people-intro {
  margin: 28px 0 0;
  max-width: 570px;
  color: #6c7b77;
  font-size: 16px;
  line-height: 1.8;
}

/* Three restrained benefit rows */

.asp .asp-people-benefits {
  margin: 34px 0 0;
  padding: 0;
  list-style: none;
}

.asp .asp-people-benefits > li {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: start;
  gap: 22px;
  padding: 26px 0;
  border-top: 1px solid #d5e0d9;
}

.asp .asp-people-benefits > li:last-child {
  padding-bottom: 0;
}

.asp .asp-people-number {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #ece7fa;
  color: #233a32;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.asp .asp-people-benefits h3 {
  margin: 0 0 7px;
  color: #142b23;
  font-family: inherit;
  font-size: 18px;
  font-weight: 650;
  line-height: 1.35;
  letter-spacing: -0.025em;
}

.asp .asp-people-benefits p {
  margin: 0;
  color: #6c7b77;
  font-size: 14px;
  line-height: 1.75;
}

/* Tablet */

@media (max-width: 1100px) {
  .asp .asp-people-grid {
    gap: 36px;
  }

  .asp .asp-people-copy h2 {
    font-size: 44px;
  }

  .asp .asp-people-benefits > li {
    gap: 16px;
    padding-block: 22px;
  }

  .asp .asp-people-caption blockquote {
    font-size: 35px;
  }
}

/* Mobile */

@media (max-width: 800px) {
  .asp .asp-people-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .asp .asp-people-portrait {
    width: 100%;
    min-height: 0;
    aspect-ratio: 4 / 5;
    max-width: 600px;
    justify-self: center;
  }

  .asp .asp-people-copy {
    padding-block: 0;
  }

  .asp .asp-people-copy h2 {
    font-size: clamp(38px, 6.5vw, 52px);
  }

  .asp .asp-people-caption blockquote {
    font-size: clamp(30px, 5.5vw, 42px);
  }
}

@media (max-width: 480px) {
  .asp .asp-people-portrait {
    border-radius: 12px;
  }

  .asp .asp-people-caption {
    right: 24px;
    bottom: 26px;
    left: 24px;
  }

  .asp .asp-people-caption blockquote {
    font-size: 30px;
  }

  .asp .asp-people-attribution {
    margin-top: 18px;
  }

  .asp .asp-people-copy > .asp-eyebrow {
    margin-bottom: 20px !important;
  }

  .asp .asp-people-intro {
    margin-top: 22px;
    font-size: 15px;
  }

  .asp .asp-people-benefits {
    margin-top: 28px;
  }

  .asp .asp-people-benefits > li {
    grid-template-columns: 38px minmax(0, 1fr);
    gap: 15px;
    padding-block: 22px;
  }

  .asp .asp-people-number {
    width: 38px;
    height: 38px;
    border-radius: 9px;
    font-size: 18px;
  }

  .asp .asp-people-benefits h3 {
    font-size: 17px;
  }
}


/* =====================================================
   GROWTH MOMENT — DARK GREEN / GLASS ARTWORK
   ===================================================== */

.asp .asp-expansion {
  position: relative;
  isolation: isolate;
  padding: clamp(64px, 7vw, 108px) 0;
  background:
    radial-gradient(
      ellipse at 24% 68%,
      rgba(17, 105, 76, 0.2),
      transparent 58%
    ),
    #03271f;
  color: #f7faf6;
  border-block: 1px solid rgba(184, 226, 199, 0.08);
}

/* Heading */

.asp .asp-expansion-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.9fr);
  align-items: center;
  gap: clamp(36px, 5vw, 80px);
  margin-bottom: 50px;
}

.asp .asp-expansion-eyebrow {
  margin: 0 0 24px;
  color: #b9dfc9;
  font-size: 10px;
  font-weight: 650;
  line-height: 1.5;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.asp .asp-expansion-heading h2 {
  margin: 0;
  color: #f8faf5;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 4vw, 62px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.05em;
  text-wrap: initial;
}

.asp .asp-expansion-heading h2 em {
  color: #cde9bd;
  font-style: normal;
}

.asp .asp-expansion-intro {
  margin: 24px 0 0;
  max-width: 440px;
  color: #b9d0c5;
  font-size: 15px;
  line-height: 1.85;
}

/* Artwork / timeline layout */

.asp .asp-expansion-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(36px, 5vw, 76px);
}

.asp .asp-expansion-art {
  position: relative;
  isolation: isolate;
  min-width: 0;
  margin: 0;
  padding: 28px 0 0;
}

/* Very quiet technical grid behind the transparent PNG. */

.asp .asp-expansion-art::before {
  content: "";
  position: absolute;
  inset: 0 0 45px;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(
      rgba(146, 221, 184, 0.07) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(146, 221, 184, 0.07) 1px,
      transparent 1px
    );
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    #000 15%,
    transparent 72%
  );
  mask-image: radial-gradient(
    ellipse at center,
    #000 15%,
    transparent 72%
  );
}

/* Fine circular outline, kept behind the artwork. */

.asp .asp-expansion-art::after {
  content: "";
  position: absolute;
  top: 0;
  left: 12%;
  z-index: -1;
  width: 76%;
  aspect-ratio: 1;
  border: 1px solid rgba(155, 225, 191, 0.13);
  border-radius: 50%;
  pointer-events: none;
}

.asp .asp-expansion-art img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.asp .asp-expansion-art figcaption {
  margin: 22px 12px 0;
  color: #c4d9cc;
  font-size: 11px;
  font-weight: 450;
  line-height: 1.8;
  letter-spacing: 0.16em;
  text-align: center;
}

/* Timeline */

.asp .asp-expansion-track {
  --number-width: 52px;
  --node-width: 24px;
  --track-gap: 16px;
  --axis: calc(
    var(--number-width) +
    var(--track-gap) +
    var(--node-width) / 2
  );
  position: relative;
  min-width: 0;
}

.asp .asp-expansion-track::before {
  content: "";
  position: absolute;
  top: 15px;
  bottom: 18px;
  left: var(--axis);
  width: 1px;
  background: linear-gradient(
    180deg,
    rgba(168, 222, 191, 0.65),
    rgba(168, 222, 191, 0.35)
  );
}

.asp .asp-expansion-events {
  margin: 0;
  padding: 0;
  list-style: none;
}

.asp .asp-expansion-events > li {
  position: relative;
  display: grid;
  grid-template-columns:
    var(--number-width)
    var(--node-width)
    minmax(0, 1fr);
  align-items: start;
  column-gap: var(--track-gap);
  margin: 0;
  padding: 0 0 42px;
}

.asp .asp-expansion-number {
  color: #b7e3c7;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
}

.asp .asp-expansion-node {
  position: relative;
  z-index: 1;
  justify-self: center;
  width: 16px;
  height: 16px;
  margin-top: 7px;
  border: 2px solid #ace2c2;
  border-radius: 50%;
  background: #03271f;
}

.asp .asp-expansion-events > li:nth-child(2)
  .asp-expansion-node {
  border-color: #d5bff2;
}

.asp .asp-expansion-event {
  min-width: 0;
}

.asp .asp-expansion-date {
  display: block;
  margin-bottom: 10px;
  color: #c3e5d0;
  font-size: 9px;
  font-weight: 650;
  line-height: 1.6;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.asp .asp-expansion-event h3 {
  margin: 0;
  color: #f4f8ef;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 2.2vw, 32px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.asp .asp-expansion-event p {
  margin: 10px 0 0;
  max-width: 380px;
  color: #b8cec2;
  font-size: 14px;
  line-height: 1.8;
}

.asp .asp-expansion-finish {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  margin-left: calc(var(--axis) - 18px);
  border: 1px solid #bceccb;
  border-radius: 50%;
  background: #b5e9c7;
  color: #073e2d;
}

.asp .asp-expansion-finish svg {
  width: 19px;
  height: 19px;
  stroke-width: 2.4;
}

/* Tablet */

@media (max-width: 1100px) {
  .asp .asp-expansion-heading {
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 32px;
  }

  .asp .asp-expansion-layout {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 30px;
  }

  .asp .asp-expansion-track {
    --number-width: 38px;
    --track-gap: 10px;
  }

  .asp .asp-expansion-number {
    font-size: 31px;
  }

  .asp .asp-expansion-event h3 {
    font-size: 26px;
  }
}

/* Mobile */

@media (max-width: 800px) {
  .asp .asp-expansion-heading {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 30px;
  }

  .asp .asp-expansion-intro {
    max-width: 580px;
    margin: 0;
  }

  .asp .asp-expansion-layout {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .asp .asp-expansion-art {
    width: 100%;
    max-width: 680px;
    justify-self: center;
    padding-top: 18px;
  }

  .asp .asp-expansion-track {
    --number-width: 44px;
    --track-gap: 14px;
  }

  .asp .asp-expansion-events > li {
    padding-bottom: 34px;
  }
}

@media (max-width: 480px) {
  .asp .asp-expansion-heading h2 {
    font-size: 38px;
  }

  .asp .asp-expansion-intro {
    font-size: 14px;
  }

  .asp .asp-expansion-art figcaption {
    margin-top: 16px;
    font-size: 10px;
    letter-spacing: 0.08em;
  }

  .asp .asp-expansion-track {
    --number-width: 34px;
    --node-width: 20px;
    --track-gap: 10px;
  }

  .asp .asp-expansion-number {
    font-size: 28px;
  }

  .asp .asp-expansion-event h3 {
    font-size: 25px;
  }

  .asp .asp-expansion-event p {
    font-size: 13px;
  }
}





`;
