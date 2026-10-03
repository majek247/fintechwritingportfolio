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

/** Static illustration, deliberately labelled. No fictional client is presented as a real account. */
function ClientRecord() {
  return (
    <figure className="asp-record-figure">
      <div className="asp-record">
        <div className="asp-record-top">
          <span>
            <b className="asp-app-mark">ce</b> Client Engager
          </span>
          <span className="asp-muted">Client record / Payments</span>
        </div>
        <div className="asp-client-head">
          <span className="asp-avatar">SC</span>
          <div>
            <strong>Sample client</strong>
            <small>Monthly accounting services</small>
          </div>
          <span className="asp-active">
            <i /> Active
          </span>
        </div>
        <div className="asp-tabs" aria-label="Illustrated navigation">
          <span>Overview</span>
          <span>Invoices</span>
          <strong>Payments</strong>
          <span>Documents</span>
        </div>
        <div className="asp-record-body">
          <div className="asp-record-title">
            <div>
              <small>PAYMENTS OVERVIEW</small>
              <h3>Everything in one view.</h3>
            </div>
            <span className="asp-powered">adfin</span>
          </div>
          <div className="asp-record-panels">
            <div>
              <small>Latest payment</small>
              <strong className="asp-payment-value">
                £1,200<span>.00</span>
              </strong>
              <span className="asp-positive">
                <Tick /> Received on time
              </span>
            </div>
            <div>
              <small>Collection method</small>
              <strong className="asp-dd">Direct Debit</strong>
              <span className="asp-mandate">
                <i /> Mandate active
              </span>
            </div>
          </div>
          <div className="asp-record-table">
            <table>
              <caption>Recent payments</caption>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {["1 Jul 2026", "1 Jun 2026", "1 May 2026"].map((date) => (
                  <tr key={date}>
                    <td>{date}</td>
                    <td>£1,200.00</td>
                    <td>
                      <span>
                        <Tick /> Paid
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="asp-record-bottom">
            <span className="asp-positive">
              <Tick /> Payment status available to the team
            </span>
          </div>
        </div>
      </div>
      <figcaption>
        Illustrative workflow. Sample data, not an actual product screenshot.
      </figcaption>
    </figure>
  );
}

export default function AdfinStubbsParkinCaseStudy({
  portfolioHref = "https://www.seo-growup.com/writing-portfolio",
  demoHref = "https://adfin.com/",
  customerWebsiteHref = "https://www.stubbsparkin.co.uk/",
  assetBasePath = "/images/adfin-stubbs-parkin",
}: AdfinStubbsParkinProps) {
  const base = assetBasePath.replace(/\/$/, "");
  const office = `${base}/office-editorial.png`;
  const coast = `${base}/coast-editorial.png`;
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

      <header className="asp-hero">
        <div className="asp-container asp-topbar">
          <a href={portfolioHref} className="asp-back">
            <Arrow back /> Writing portfolio
          </a>
          <span className="asp-top-label">
            CUSTOMER STORY <i /> ADFIN × STUBBS PARKIN
          </span>
        </div>
        <div className="asp-container asp-hero-grid">
          <div className="asp-hero-copy">
            <p className="asp-eyebrow asp-light-label">
              A growing practice. A better payment process.
            </p>
            <h1>
              Nearly 200 new clients.
              <br />
              <em>No avalanche of payment admin.</em>
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
            <img
              className="asp-hero-photo"
              src={office}
              width="1536"
              height="1024"
              alt="Illustrative Victorian office exterior with a green door"
              fetchPriority="high"
            />
            <div className="asp-photo-shade" />
            <div className="asp-hero-wordmark">
              STUBBS PARKIN<small>THE CUSTOMER STORY</small>
            </div>
            <div className="asp-payment-card">
              <div className="asp-payment-card-top">
                <span className="asp-payment-check">
                  <Tick />
                </span>
                <span>
                  Payments, connected.<small>Adfin inside Client Engager</small>
                </span>
                <span className="asp-live-dot" />
              </div>
              <div className="asp-payment-card-value">
                <strong>
                  95<span>%</span>
                </strong>
                <p>
                  of payments arrived
                  <br />
                  on or before the due date.
                </p>
              </div>
              <div className="asp-payment-rail">
                <i />
              </div>
              <div className="asp-payment-card-foot">
                <span>Less chasing. A clearer view.</span>
                <span>adfin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="asp-story-nav" aria-label="On this page">
        <div className="asp-container">
          <span>
            STUBBS PARKIN <i>/</i> THE STORY
          </span>
          <div>
            <a href="#asp-practice">The practice</a>
            <a href="#asp-change">The change</a>
            <a href="#asp-results">The results</a>
          </div>
          <a href={demoHref} className="asp-nav-cta">
            Explore Adfin <Arrow />
          </a>
        </div>
      </nav>

      <div id="asp-story" className="asp-container">
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
              src={office}
              alt="Illustrative stone office frontage"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <div className="asp-about-plaque">
              <span>ROOTED IN SOUTHPORT</span>
              <p>
                A local practice.
                <br />
                Personal by nature.
              </p>
              <div>
                <strong>~15</strong>
                <span>
                  people on
                  <br />
                  the team
                </span>
              </div>
            </div>
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

      <section className="asp-growth">
        <div className="asp-container">
          <div className="asp-growth-heading">
            <div>
              <p className="asp-eyebrow">02 / The growth moment</p>
              <h2>
                A bigger client base.
                <br />
                <em>The same personal touch.</em>
              </h2>
            </div>
            <p>
              First, around 150 clients joined through Harrison Latham and Company. Then
              another 40 arrived in July. Payments needed to work as part of the team’s
              day.
            </p>
          </div>
          <div className="asp-growth-story">
            <div className="asp-client-count">
              <span>NEARLY</span>
              <strong>200</strong>
              <p>new clients in 2026</p>
              <div className="asp-dot-field" aria-hidden="true">
                {Array.from({ length: 190 }, (_, i) => (
                  <i key={i} className={i >= 150 ? "asp-dot-new" : undefined} />
                ))}
              </div>
              <div className="asp-dot-legend">
                <span>
                  <i /> ~150 in April
                </span>
                <span>
                  <i /> 40 in July
                </span>
              </div>
            </div>
            <ol className="asp-timeline">
              {milestones.map((m, i) => (
                <li key={m.date}>
                  <span className="asp-timeline-number">0{i + 1}</span>
                  <div>
                    <span className="asp-timeline-date">{m.date} 2026</span>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                  {i === 2 && (
                    <span className="asp-timeline-end">
                      <Tick />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="asp-container asp-section asp-problem" id="asp-change">
        <div className="asp-problem-heading">
          <div>
            <p className="asp-eyebrow">03 / Where the process broke</p>
            <h2>
              One client.
              <br />
              <em>Too many places to look.</em>
            </h2>
          </div>
          <p>
            Before Adfin, payments sat outside Client Engager. Direct Debit setup followed
            the engagement letter, card payments used another system, and only a few
            people could see who had paid.
          </p>
        </div>
        <div className="asp-friction-map">
          <div className="asp-friction-top">
            <span>THE OLD WORKFLOW</span>
            <span>Three separate places. Extra work between them.</span>
          </div>
          <div className="asp-friction-columns">
            {[
              [
                "01",
                "Client Engager",
                "Client details and engagement letters",
                "Payment visibility stopped short of the wider team.",
              ],
              [
                "02",
                "Direct Debit provider",
                "Mandates set up after engagement",
                "A separate follow-up before collections could start.",
              ],
              [
                "03",
                "Card payment system",
                "Card payments handled elsewhere",
                "Another tool to open. Another place to check.",
              ],
            ].map(([n, title, body, pain]) => (
              <div className="asp-friction-step" key={n}>
                <span className="asp-friction-num">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="asp-friction-pain">
                  <span />
                  {pain}
                </div>
              </div>
            ))}
          </div>
          <div className="asp-friction-bottom">
            <span>THE CONSEQUENCE</span>
            <p>As more clients joined, the gaps between those tools created more work.</p>
          </div>
        </div>
      </section>

      <section className="asp-workflow">
        <div className="asp-container asp-workflow-grid">
          <div>
            <p className="asp-eyebrow">04 / A connected way to work</p>
            <h2>
              Payments, right
              <br />
              where the
              <br />
              <em>team works.</em>
            </h2>
            <p>
              With Adfin inside Client Engager, payment status is visible from the client
              record. Direct Debit is part of the proposal flow, and six payment options
              sit in the same place.
            </p>
            <div className="asp-inline-outcomes">
              <span>
                <Tick /> Shared payment visibility
              </span>
              <span>
                <Tick /> Mandates in the proposal
              </span>
              <span>
                <Tick /> Fewer separate systems
              </span>
            </div>
            <blockquote className="asp-small-quote">
              <p>
                “You don’t want eight different tabs open for eight different softwares.”
              </p>
              <cite>
                <strong>Becky Jama</strong>Practice Manager, Stubbs Parkin
              </cite>
            </blockquote>
          </div>
          <ClientRecord />
        </div>
      </section>

      <section className="asp-migration">
        <div className="asp-container">
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
              <strong>231</strong>
              <span>
                EXISTING MANDATES.
                <br />
                ONE QUIET MIGRATION.
              </span>
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

      <section className="asp-container asp-section asp-results" id="asp-results">
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
                +55<small>payments / month</small>
              </span>
            </div>
            <div
              className="asp-bar-chart"
              role="img"
              aria-label="Monthly collections increased from 113 in March to 168 in July 2026."
            >
              <div className="asp-bar-grid" aria-hidden="true">
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>
              <div className="asp-chart-bars">
                <div className="asp-bar-column">
                  <strong>113</strong>
                  <i style={{ height: "56.5%" }} />
                  <span>MARCH 2026</span>
                </div>
                <div className="asp-bar-column">
                  <strong>168</strong>
                  <i style={{ height: "84%" }} />
                  <span>JULY 2026</span>
                </div>
              </div>
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
            <div className="asp-reliability-track" aria-hidden="true">
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

      <section className="asp-human">
        <div className="asp-container asp-human-grid">
          <div className="asp-human-image">
            <img
              src={coast}
              width="1536"
              height="1024"
              alt="Illustrative British coastal pier at sunset"
              loading="lazy"
            />
            <div className="asp-human-quote">
              <span>THE REASON IT MATTERS</span>
              <blockquote>
                “My role is to be there
                <br />
                for the clients”
              </blockquote>
              <cite>
                Becky Jama<span>Practice Manager, Stubbs Parkin</span>
              </cite>
            </div>
          </div>
          <div className="asp-human-copy">
            <p className="asp-eyebrow">07 / The everyday difference</p>
            <h2>
              Less chasing.
              <br />
              <em>More time for people.</em>
            </h2>
            <p>
              The result shows up in the working day: a clearer picture of payments, fewer
              manual tasks and more time to answer client questions.
            </p>
            <div className="asp-improvements">
              {improvements.map(([title, body], i) => (
                <div key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="asp-container asp-cta-section">
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

      <footer className="asp-container asp-footer">
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
  padding-block: 68px 78px;
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
/* Reading navigation and proof */
.asp-story-nav {
  position: sticky;
  top: 0;
  background: #fafaf6f5;
  backdrop-filter: blur(12px);
  z-index: 20;
  border-bottom: 1px solid var(--line);
}
.asp-story-nav > .asp-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 62px;
  gap: 20px;
}
.asp-story-nav > .asp-container > span {
  font-size: 8px;
  font-weight: 650;
  letter-spacing: 0.12em;
}
.asp-story-nav i {
  font-style: normal;
  padding: 0 12px;
  color: #a2afa5;
}
.asp-story-nav .asp-container > div {
  display: flex;
  gap: 28px;
  font-size: 11px;
  color: #68756d;
}
.asp-story-nav a:hover {
  color: #1a5134;
}
.asp-nav-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 650;
}
.asp-nav-cta svg {
  width: 15px;
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
.asp-about-plaque {
  position: absolute;
  bottom: 26px;
  left: 26px;
  right: 26px;
  padding: 24px;
  background: #fafbf3f0;
  backdrop-filter: blur(16px);
}
.asp-about-plaque > span {
  font-size: 8px;
  letter-spacing: 0.14em;
  color: #5b715e;
}
.asp-about-plaque > p {
  font-family: Georgia, serif;
  font-size: 27px;
  line-height: 1.15;
  color: var(--ink);
  margin-top: 12px;
}
.asp-about-plaque > div {
  position: absolute;
  right: 25px;
  bottom: 25px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.asp-about-plaque strong {
  font-family: Georgia, serif;
  font-size: 41px;
  font-weight: 400;
  letter-spacing: -0.07em;
}
.asp-about-plaque > div span {
  font-size: 8px;
  line-height: 1.5;
  color: #6b796a;
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
  background: #eef1e8;
  padding: 78px 0 84px;
  border-block: 1px solid #e1e7da;
}
.asp-growth-heading {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 100px;
  align-items: end;
}
.asp-growth-heading > p {
  font-size: 14px;
  line-height: 1.8;
  max-width: 420px;
}
.asp-growth-story {
  display: grid;
  grid-template-columns: 0.88fr 1.15fr;
  gap: 100px;
  margin-top: 54px;
  align-items: center;
}
.asp-client-count {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  align-items: end;
}
.asp-client-count > span {
  grid-column: 1 / -1;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: #748366;
}
.asp-client-count > strong {
  font-family: Georgia, serif;
  font-weight: 400;
  line-height: 0.9;
  font-size: clamp(86px, 9vw, 130px);
  letter-spacing: -0.08em;
  margin-top: 8px;
}
.asp-client-count > p {
  font-size: 13px;
  padding-bottom: 7px;
  max-width: 110px;
  color: #5f725a;
}
.asp-dot-field {
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  gap: 7px;
  grid-column: 1 / -1;
  margin-top: 28px;
}
.asp-dot-field i {
  aspect-ratio: 1;
  border-radius: 50%;
  background: #547855;
  max-width: 7px;
}
.asp-dot-field i.asp-dot-new {
  background: #b0c99a;
}
.asp-dot-legend {
  grid-column: 1 / -1;
  display: flex;
  gap: 25px;
  font-size: 9px;
  color: #6d7b64;
  margin-top: 16px;
}
.asp-dot-legend span {
  display: flex;
  align-items: center;
  gap: 6px;
}
.asp-dot-legend i {
  width: 6px;
  height: 6px;
  background: #547855;
  border-radius: 50%;
}
.asp-dot-legend span + span i {
  background: #b0c99a;
}
.asp-timeline {
  list-style: none;
}
.asp-timeline li {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 24px;
  position: relative;
  padding: 22px 0;
  border-top: 1px solid #cbd7c2;
}
.asp-timeline-number {
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: 400;
  color: #7b9470;
  line-height: 1.1;
  padding-top: 3px;
}
.asp-timeline-date {
  display: block;
  font-size: 8px;
  letter-spacing: 0.12em;
  color: #708063;
  margin-bottom: 7px;
}
.asp-timeline h3 {
  font-size: 20px;
  font-weight: 500;
}
.asp-timeline p {
  font-size: 12px;
  margin-top: 6px;
  max-width: 380px;
}
.asp-timeline-end {
  position: absolute;
  right: 0;
  top: 25px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #becdaf;
  display: grid;
  place-items: center;
}
.asp-timeline-end svg {
  width: 13px;
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
  background: #07382b;
  color: #fff;
  padding: 73px 0 67px;
  position: relative;
  overflow: hidden;
}
.asp-migration::before {
  content: "";
  position: absolute;
  width: 550px;
  height: 550px;
  border: 1px solid #ffffff05;
  border-radius: 50%;
  right: -220px;
  top: -150px;
  box-shadow:
    0 0 0 60px #ffffff02,
    0 0 0 120px #ffffff02;
  pointer-events: none;
}
.asp-migration .asp-container {
  position: relative;
}
.asp-migration-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 130px;
  align-items: center;
}
.asp-migration h2 em {
  color: #bdd3ad;
}
.asp-migration-heading p:not(.asp-eyebrow) {
  max-width: 450px;
  margin-top: 23px;
  color: #adc2b1;
  font-size: 13px;
  line-height: 1.8;
}
.asp-migration-number {
  display: flex;
  align-items: center;
  gap: 27px;
}
.asp-migration-number > strong {
  font-family: Georgia, serif;
  font-size: 140px;
  line-height: 1;
  letter-spacing: -0.08em;
  font-weight: 400;
  color: #d6e8c3;
}
.asp-migration-number > span {
  font-size: 8px;
  letter-spacing: 0.15em;
  line-height: 1.9;
  color: #a5bea6;
}
.asp-migration-timeline {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 53px !important;
}
.asp-migration-timeline > li {
  border-top: 1px solid #6e997c;
  position: relative;
  padding: 35px 30px 0 0;
}
.asp-migration-node {
  position: absolute;
  top: -13px;
  left: 0;
  width: 25px;
  height: 25px;
  background: #07382b;
  border: 1px solid #739a78;
  border-radius: 50%;
  font-size: 8px;
  color: #b1c7a7;
  display: grid;
  place-items: center;
}
.asp-migration-complete {
  background: #c9e5aa;
  color: #244c30;
  border-color: #c9e5aa;
}
.asp-migration-node svg {
  width: 13px;
  height: 13px;
}
.asp-migration-timeline small {
  font-size: 8px;
  letter-spacing: 0.1em;
  color: #9eba9f;
}
.asp-migration-timeline h3 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  color: #f0f6ea;
}
.asp-migration-timeline p {
  font-size: 11px;
  max-width: 260px;
  color: #a4bba7;
  margin-top: 8px;
}
/* Results */
.asp-results-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  margin-top: 42px;
}
.asp-results-grid > * {
  min-width: 0;
}
.asp-chart-heading > div {
  min-width: 0;
}
.asp-collections {
  background: #fff;
  border: 1px solid var(--line);
  padding: 32px;
}
.asp-chart-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 25px;
}
.asp-chart-heading .asp-eyebrow {
  font-size: 8px !important;
  margin-bottom: 8px !important;
}
.asp-chart-heading h3 {
  font-size: 20px;
  font-weight: 500;
}
.asp-chart-delta {
  font-family: Georgia, serif;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.045em;
  color: #4f6b40;
  white-space: nowrap;
}
.asp-chart-delta small {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 8px;
  letter-spacing: 0;
  color: #7b8970;
  margin-top: 6px;
}
.asp-bar-chart {
  height: 245px;
  position: relative;
  margin-top: 38px;
  padding-left: 40px;
  margin-bottom: 38px;
}
.asp-bar-grid {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 8px;
  color: #8c9785;
}
.asp-bar-grid > span {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 0;
}
.asp-bar-grid > span::after {
  content: "";
  height: 1px;
  background: #edf0e7;
  flex: 1;
}
.asp-chart-bars {
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  gap: 40px;
  position: relative;
}
.asp-bar-column {
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
}
.asp-bar-column > i {
  display: block;
  background: #d1dcc5;
  border-radius: 3px 3px 0 0;
  flex-shrink: 0;
}
.asp-bar-column + .asp-bar-column > i {
  background: #456c40;
}
.asp-bar-column > strong {
  font-size: 17px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.1;
}
.asp-bar-column > span {
  position: absolute;
  top: calc(100% + 14px);
  left: 0;
  right: 0;
  text-align: center;
  font-size: 8px;
  letter-spacing: 0.1em;
  color: #788670;
  white-space: nowrap;
}
.asp-collections figcaption {
  font-size: 8px;
  color: #8b9780;
}
.asp-reliability {
  background: #e7eedc;
  border: 1px solid #dce5d0;
  padding: 33px 36px;
}
.asp-reliability-heading {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: start;
}
.asp-reliability-heading .asp-eyebrow {
  font-size: 8px !important;
  margin: 0 !important;
}
.asp-status-circle {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid #b5c7a3;
  border-radius: 50%;
  color: #5d7a47;
}
.asp-status-circle svg {
  width: 14px;
  height: 14px;
}
.asp-reliability > strong {
  font-family: Georgia, serif;
  font-size: 106px;
  letter-spacing: -0.07em;
  line-height: 1.15;
  font-weight: 400;
  display: block;
  margin-top: 23px;
  color: #365e31;
}
.asp-reliability > strong > span {
  font-size: 0.64em;
}
.asp-reliability h3 {
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.15;
  color: #45623a;
  letter-spacing: -0.035em;
}
.asp-reliability-track {
  height: 5px;
  background: #cddbbe;
  margin-top: 28px;
}
.asp-reliability-track i {
  display: block;
  width: 95%;
  height: 100%;
  background: #5b7d44;
}
.asp-reliability-foot {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin-top: 29px;
}
.asp-reliability-foot > strong {
  font-family: Georgia, serif;
  font-weight: 400;
  font-size: 27px;
  letter-spacing: -0.04em;
  color: #45623a;
}
.asp-reliability-foot > p {
  font-size: 9px;
  color: #748464;
}
.asp-source-note {
  font-size: 9px;
  line-height: 1.7;
  margin-top: 20px !important;
  max-width: 860px;
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
  .asp-hero-grid {
    gap: 40px;
    min-height: 610px;
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
  .asp-about-plaque {
    left: 18px;
    right: 18px;
    padding: 20px;
  }
  .asp-about-plaque > p {
    font-size: 23px;
  }
  .asp-about-plaque > div {
    right: 17px;
    bottom: 19px;
  }
  .asp-about-plaque > div > span {
    display: none;
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
    padding-block: 45px;
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
  .asp-story-nav .asp-container > span {
    display: none;
  }
  .asp-story-nav .asp-container > div {
    gap: 23px;
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
  .asp-about-plaque > div {
    display: none;
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
  .asp-timeline {
    padding-left: 0;
  }
  .asp-timeline li {
    gap: 15px;
    grid-template-columns: 25px 1fr;
  }
  .asp-timeline h3 {
    font-size: 17px;
  }
  .asp-timeline p {
    font-size: 11px;
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
    padding-top: 36px;
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
  .asp-timeline li {
    padding: 22px 0;
    gap: 20px;
    grid-template-columns: 30px 1fr;
  }
  .asp-timeline h3 {
    font-size: 20px;
  }
  .asp-timeline p {
    font-size: 12px;
    padding-right: 12px;
  }
  .asp-timeline-end {
    right: 3px;
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
`;
