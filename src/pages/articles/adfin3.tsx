"use client";

export type AdfinStubbsParkinProps = {
  portfolioHref?: string;
  demoHref?: string;
  customerWebsiteHref?: string;
};

const sourceUrl = "https://adfin.com/customer-stories/stubbs-parkin";

const metrics = [
  ["95%", "of payments arrived on or before the due date"],
  ["231", "Direct Debit mandates migrated in three days (no re-signing)"],
  ["57%", "increase in monthly collections (113 → 168 payments)"],
  ["~200", "new clients onboarded without letting admin overwhelm the team"],
];

const timeline = [
  ["23 February 2026", "Switched to Adfin and began migrating Direct Debit mandates."],
  ["April 2026", "Brought Harrison Latham and Company into the firm (+ ~150 clients)."],
  ["July 2026", "Added another 40 clients."],
  ["Ongoing", "Payment volumes increased, but admin stayed under control and service quality remained high."],
];

const problems = [
  ["Client Engager", "Client details and engagement letters", "Only a few people could see who had paid"],
  ["Separate Direct Debit provider", "Mandate setup after engagement", "Manual follow-ups to chase payments"],
  ["Separate card payment system", "Card payments handled elsewhere", "No single view across the client lifecycle"],
];

const bars: [string, number, number][] = [["Mar", 113, 45], ["Apr", 127, 58], ["May", 142, 72], ["Jun", 156, 86], ["Jul", 168, 100]];

const benefits = [
  ["Full visibility for everyone", "Payment status is visible on every client record, not just a few people."],
  ["Less credit control admin", "Fewer manual follow-ups and more predictable cash flow."],
  ["More time for client relationships", "The team can focus on advice and support, not chasing payments."],
];

const checks = [
  "Embedded in Client Engager",
  "Direct Debit, card, Apple Pay, Google Pay and more",
  "Automated collections and reminders",
  "Full payment visibility across your team",
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
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


function TimelineIcon({ type }: { type: number }) {
  const icons = [
    <svg key="cal" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>,
    <svg key="plus" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6v12M6 12h12" />
    </svg>,
    <svg key="people" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 13.5c2.3.2 4 1.6 4.5 4" />
    </svg>,
    <svg key="bars" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19v-6M12 19V6M18 19v-9" />
    </svg>,
  ];
  return icons[type];
}

function ProblemIcon({ type }: { type: number }) {
  const icons = [
    <svg key="win" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 15l2 2 4-4" />
    </svg>,
    <svg key="doc" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h8l4 4v14H7z" />
      <path d="M15 3v4h4M10 13h6M10 17h6" />
    </svg>,
    <svg key="card" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 15h3" />
    </svg>,
  ];
  return icons[type];
}

function MetricIcon({ type }: { type: number }) {
  const icons = [
    // Payment on time
    <svg key="payment" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>,

    // Direct Debit migration
    <svg key="migration" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h10l-2.5-2.5" />
      <path d="M17 17H7l2.5 2.5" />
      <path d="M17 7l2.5 2.5L17 12" />
      <path d="M7 17l-2.5-2.5L7 12" />
    </svg>,

    // Growth
    <svg key="growth" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 17 10 12l3 3 6-7" />
      <path d="M14 8h5v5" />
    </svg>,

    // New clients
    <svg key="clients" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 13.5c2.3.2 4 1.6 4.5 4" />
    </svg>,
  ];

  return icons[type];
}

function ClientRecord() {
  return (
    <div className="sp-record">
      <div className="sp-rec-top"><span>Client record</span><span>×</span></div>
      <div className="sp-rec-head">
        <i className="sp-avatar">SP</i>
        <strong>Harrison Latham &amp; Co.</strong>
        <em className="sp-pill">Active client</em>
        <em className="sp-pill blue">Client Engager</em>
      </div>
      <div className="sp-tabs"><span>Overview</span><span>Invoices</span><span className="on">Payments</span><span>Mandates</span><span>Documents</span></div>
      <div className="sp-rec-grid">
        <div className="sp-box">
          <small>Amount due</small>
          <b>£1,200</b>
          <small>Due 1 May 2026</small>
          <span className="sp-paid"><Tick /> Paid on time</span>
        </div>
        <div className="sp-box">
          <small>Payment method</small>
          <div className="sp-dd"><i /><div><strong>Direct Debit</strong><small>Mandate active (DD-2287)</small></div></div>
          <a href="#top">View mandate <Arrow /></a>
        </div>
      </div>
      <small className="sp-th">Transaction history</small>
      {["1 May 2026", "1 Apr 2026", "1 Mar 2026"].map((d) => (
        <div className="sp-tx" key={d}><span>{d}</span><b>£1,200</b><span className="ok"><Tick /> Payment received</span><span>Direct Debit</span></div>
      ))}
    </div>
  );
}

export default function AdfinStubbsParkinCaseStudy({
  portfolioHref = "https://www.seo-growup.com/writing-portfolio",
  demoHref = "https://adfin.com/",
  customerWebsiteHref = "https://www.stubbsparkin.co.uk",
}: AdfinStubbsParkinProps) {
  return (
    <div className="sp" id="top">
      <style>{css}</style>

      {/* HERO */}
      <header className="sp-hero">
 
        <div className="sp-wrap sp-hero-grid">
          <div>
            <p className="sp-crumb">Customer stories &nbsp;›&nbsp; Stubbs Parkin</p>
            <h1>Nearly 200 new clients. No avalanche of payment admin.</h1>
            <p className="sp-deck">Stubbs Parkin used Adfin inside Client Engager to absorb rapid growth, keep payment visibility across the team and continue delivering a high-quality client experience.</p>
            <a className="sp-btn mint" href={demoHref}>Book a demo <Arrow /></a>
          </div>
          <div className="sp-hero-art">
  <img src="/images/stubbshero.png" alt="Stubbs Parkin office with Adfin payment cards" />
</div>
        </div>
      </header>



    {/* METRICS + ABOUT */}
    <section className="sp-story-intro">
      <div className="sp-wrap">

        {/* METRICS */}
   <div className="sp-metric-grid">
  {metrics.map(([v, l]) => (
    <div className="sp-metric" key={v}>
      <div className="sp-metric-content">
        <strong>{v}</strong>
        <span>{l}</span>
      </div>
    </div>
  ))}
</div>




        {/* ABOUT */}
        <div className="sp-about">
          <div className="sp-about-copy">
            <p className="sp-label">About Stubbs Parkin</p>

            <h2>
              A growing practice
              <br />
              with big ambitions.
            </h2>

            <p>
              Stubbs Parkin is a family-run accountancy practice in
              Southport, Merseyside, with a team of around 15. The firm has
              a long history of supporting local businesses and individuals,
              with a focus on building lasting client relationships.
            </p>
          </div>

          <div className="sp-about-card">
            <div className="sp-logo">
              STUBBS PARKIN
              <small>CHARTERED ACCOUNTANTS</small>
            </div>

            <div className="sp-facts">
              <div className="sp-fact">
                <span className="sp-fact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3.5 19c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5" />
                    <circle cx="17" cy="9" r="2.4" />
                    <path d="M15.5 13.4c2.2.2 4 1.7 4.5 4.1" />
                  </svg>
                </span>

                <div>
                  <b>15</b>
                  <span>team members</span>
                </div>
              </div>

              <div className="sp-fact">
                <span className="sp-fact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </span>

                <div>
                  <b>Southport,</b>
                  <span>Merseyside</span>
                </div>
              </div>

              <div className="sp-fact">
                <span className="sp-fact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="8" cy="9" r="2.6" />
                    <circle cx="16" cy="9" r="2.6" />
                    <path d="M3.5 19c.4-2.7 2.2-4.4 4.5-4.4S12.1 16.3 12.5 19" />
                    <path d="M11.5 19c.4-2.7 2.2-4.4 4.5-4.4s4.1 1.7 4.5 4.4" />
                  </svg>
                </span>

                <div>
                  <b>Family-run</b>
                  <span>practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


      {/* GROWTH */}
      <section className="sp-growth">
        <div className="sp-wrap">
          <div className="sp-split sp-grow-top">
            <div>
              <p className="sp-label">The growth moment</p>
              <h2>A year of rapid growth.</h2>
              <p>In 2026, Stubbs Parkin brought Harrison Latham and Company into the firm, adding roughly 150 clients, then another 40 clients in July. Nearly 200 new clients in total — without letting payment admin get in the way.</p>
            </div>
            <div className="sp-big"><small>“Nearly</small><b>200</b><span>new clients<br />in 2026”</span></div>
          </div>
          <div className="sp-timeline">
            {timeline.map(([d, t], i) => (
              <div className="sp-tl-item" key={d}>
                <i className="sp-dot" />
                <span className="sp-ico"><TimelineIcon type={i} /></span>
                <div><strong>{d}</strong><p>{t}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sp-wrap sp-split sp-pad">
        <div>
          <p className="sp-label">Where the process broke</p>
          <h2>Different tools. Too much manual work.</h2>
          <p>Before Adfin, payments sat outside Client Engager. Direct Debit setup happened after engagement letters, card payments ran through a separate system, and only a few people could see who had paid. As the client base grew, this created extra work for the team and a disjointed experience for clients.</p>
        </div>
        <div className="sp-problems">
          {problems.map(([a, b, c], i) => (
            <div className="sp-prob-col" key={a}>
              <div className="sp-prob">
                <span className="sp-prob-ico"><ProblemIcon type={i} /></span>
                <strong>{a}</strong>
                <small>{b}</small>
              </div>
              {i < problems.length - 1 && <span className="sp-prob-arrow"><Arrow /></span>}
              <span className="sp-down"><Arrow /></span>
              <div className="sp-redflag"><i>!</i>{c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="sp-wrap sp-split sp-pad sp-top0">
        <div>
          <p className="sp-label">One client record became the control centre</p>
          <h2>Payments, right where the team works.</h2>
          <p>With Adfin inside Client Engager, payment status is now visible on every client record. Direct Debit is part of the proposal flow, and clients can pay by Direct Debit, card, Apple Pay, Google Pay, bank payment or bank transfer — all from the same place.</p>
          <blockquote className="sp-quote sp-mint">
            <span>“</span>
            <div><p>It&apos;s three or four fewer clicks, repeated many times a day. It makes a real difference for the team.</p><strong>Becky Jama</strong><small>Practice Manager, Stubbs Parkin</small></div>
          </blockquote>
        </div>
        <ClientRecord />
      </section>

      {/* MIGRATION */}
      <section className="sp-dark">
        <div className="sp-wrap sp-split">
          <div>
            <p className="sp-label">The migration that clients barely noticed</p>
            <h2>231 mandates in three days. No re-signing.</h2>
            <p>Stubbs Parkin migrated 231 existing Direct Debit mandates to Adfin in just three days. Clients weren&apos;t asked to re-sign, and the switch happened with minimal disruption.</p>
          </div>
          <div className="sp-steps">
            {[["01", "23 Feb 2026", "Switch begins", "Migration process starts."], ["02", "", "Client email sent", "Clients informed about the change."], ["03", "26 Feb 2026", "231 mandates live", "All mandates successfully migrated."]].map(([n, d, t, b]) => (
              <div key={n}><small>{n}</small><b>{d}</b><strong>{t}</strong><p>{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="sp-wrap sp-split sp-pad">
        <div>
          <p className="sp-label">What happened as volume increased</p>
          <h2>More payments. Same great service.</h2>
          <p>As the client base grew, monthly collections through Adfin increased by 57%, from 113 payments in March to 168 payments in July. 95% of payments arrived on or before the due date, with 94–98% on-time across the period.</p>
        </div>
        <div className="sp-results">
          <div className="sp-chart">
            <div className="sp-chart-head"><strong>Monthly collections through Adfin</strong><span className="sp-growthpill"><b>+57%</b><small>113 → 168 payments</small></span></div>
            <div className="sp-bars">
              {bars.map(([m, v, h]) => (
                <div key={m}><b>{v}</b><i style={{ height: `${h}%`, opacity: 0.45 + h / 200 }} /><span>{m}</span></div>
              ))}
            </div>
          </div>
          <div className="sp-ontime">
            <small>Payments on or before due date</small>
            <b>94–98%</b><span>each month</span>
            <b>95%</b><span>average over the period</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sp-wrap sp-split sp-pad sp-top0">
        <div>
          <p className="sp-label">Less admin. More time for clients.</p>
          <h2 className="sp-light">A better experience for the team and their clients.</h2>
          <p>With payment visibility, automated collections and fewer manual tasks, Stubbs Parkin can focus on what matters most — answering client questions, providing advice and building long-term relationships.</p>
        </div>
        <div className="sp-benefits">
          {benefits.map(([t, b]) => (<div key={t}><i /><strong>{t}</strong><p>{b}</p></div>))}
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="sp-band">
        <div className="sp-pier" aria-hidden="true" />
        <blockquote className="sp-quote">
          <span>“</span>
          <div><p>Adfin has taken away so much of the credit control. It gives our team more time to answer client questions and provide the advice they need.</p><strong>Becky Jama</strong><small>Practice Manager, Stubbs Parkin</small></div>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="sp-wrap sp-split">
          <div>
            <p className="sp-label">Ready to grow your practice?</p>
            <h2>Grow the client base. Not the payment admin.</h2>
            <p>Join accountancy firms using Adfin to automate collections, improve cash flow and create a better experience for their clients.</p>
            <a className="sp-btn mint" href={demoHref}>Book a demo <Arrow /></a>
          </div>
          <ul className="sp-checks">{checks.map((c) => <li key={c}><i><Tick /></i>{c}</li>)}</ul>
        </div>
      </section>

      <footer className="sp-wrap sp-foot">
        <a href={portfolioHref}>← Back to writing portfolio</a>
        <span><a href={sourceUrl} target="_blank" rel="noreferrer">Original Adfin story</a> · <a href={customerWebsiteHref} target="_blank" rel="noreferrer">Stubbs Parkin</a></span>
      </footer>
    </div>
  );
}

const css = `
.sp{--g:#0b3b2e;--g2:#08281f;--mint:#bff6c8;--ink:#12302a;--mute:#5d6e65;--line:#dfe6df;--paper:#ffffff;font-family:Inter,Arial,sans-serif;background:var(--paper);color:var(--ink);line-height:1.6;font-size:15px}
.sp *{box-sizing:border-box}.sp h1,.sp h2,.sp p,.sp blockquote,.sp ul{margin:0;padding:0}.sp a{color:inherit;text-decoration:none}
.sp svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sp-wrap{width:min(1180px,calc(100% - 64px));margin-inline:auto}
.sp h1,.sp h2,.sp-big b,.sp-metric-grid strong,.sp-quote p,.sp-logo{font-family:Georgia,'Times New Roman',serif;font-weight:400}
.sp h2{font-size:42px;line-height:1.1;letter-spacing:-.03em;margin-bottom:18px;color:#0f2d25}
.sp-light{font-weight:300!important}
.sp p{color:var(--mute)}
.sp-label{text-transform:uppercase;letter-spacing:.16em;font-size:10px;font-weight:700;margin-bottom:14px!important;color:#7a897f!important}
.sp-pad{padding:64px 0}.sp-top0{padding-top:20px}
.sp-split{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center}
.sp-btn{display:inline-flex;align-items:center;gap:10px;background:var(--mint);color:#0d3a2b;font-weight:700;font-size:13px;padding:12px 20px;border-radius:999px}.sp-btn.sm{padding:9px 16px;font-size:12px}

.sp-hero{background:radial-gradient(ellipse 55% 80% at 78% 50%,#0f4a38 0%,transparent 70%),linear-gradient(105deg,#06231b 0%,#093629 55%,#0b3a2d 100%);color:#fff;overflow:hidden}
  
.sp-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:140px 0 110px}
.sp-crumb{font-size:11px;color:#b6cbbd!important;margin-bottom:20px!important}
.sp-hero h1{font-size:54px;line-height:1.05;letter-spacing:-.035em;margin-bottom:22px}
.sp-deck{color:#c9d9cf!important;font-size:16px;max-width:520px;margin-bottom:28px!important}


.sp-hero-art{position:relative;display:grid;place-items:center;min-height:380px}
.sp-hero-art::before{content:"";position:absolute;inset:6% 4%;background:radial-gradient(ellipse 60% 55% at 50% 55%,rgba(120,230,160,.22) 0%,rgba(60,170,110,.10) 45%,transparent 72%);filter:blur(24px);pointer-events:none}
.sp-hero-art img{position:relative;width:100%;height:auto;max-height:440px;object-fit:contain;
  -webkit-mask-image:radial-gradient(ellipse 78% 74% at 50% 50%,#000 58%,transparent 100%);
  mask-image:radial-gradient(ellipse 78% 74% at 50% 50%,#000 58%,transparent 100%);
  filter:drop-shadow(0 30px 40px rgba(0,0,0,.35));
  animation:spFloat 7s ease-in-out infinite}
@keyframes spFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@media(prefers-reduced-motion:reduce){.sp-hero-art img{animation:none}}

.sp-avatar{width:26px;height:26px;border-radius:50%;background:#dfe7e1;display:grid;place-items:center;font-style:normal;font-size:9px;font-weight:700;flex:none}
.sp-pill{font-style:normal;background:#dff5df;color:#1f6a45;font-size:9px;font-weight:600;padding:3px 8px;border-radius:5px;width:max-content}.sp-pill.blue{background:#e3effa;color:#2a5f8f}
.sp-paid{display:flex;align-items:center;gap:6px;background:#e3f6e6;color:#1b603c;padding:6px 10px;border-radius:6px;font-size:10px;font-weight:600;margin-top:6px}.sp-paid.dark{background:#0b4a35;color:#fff}.sp-paid svg{width:11px}



/* =========================================================
   METRICS + ABOUT
   Editorial customer-story intro
   ========================================================= */

.sp-story-intro{
  background:#ffffff;
  color:#152b25;
}

/* ---------- METRICS ---------- */

.sp-metric-grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  padding:38px 0 42px;
  border-bottom:1px solid #edf0eb;
}

.sp-metric{
  min-width:0;
  padding:0 34px;
  border-left:1px solid #e7eae5;
  display:block;
}

.sp-metric:first-child{
  border-left:0;
  padding-left:0;
}

.sp-metric:last-child{
  padding-right:0;
}

 

.sp-metric-content{
  min-width:0;
}

.sp-metric-content strong{
  display:block;
  margin:0 0 8px;
  font-family:Georgia,'Times New Roman',serif;
  font-weight:400;
  font-size:46px;
  line-height:.92;
  letter-spacing:-.045em;
  color:#123c30;
}

.sp-metric:nth-child(2) .sp-metric-content strong{
  color:#14211e;
}

.sp-metric-content span{
  display:block;
  max-width:190px;
  font-size:13px;
  line-height:1.45;
  font-weight:500;
  letter-spacing:-.01em;
  color:#56635f;
}


/* ---------- ABOUT ---------- */

.sp-about{
  display:grid;
  grid-template-columns:minmax(0,.93fr) minmax(0,1.07fr);
  gap:76px;
  align-items:center;
  padding:52px 0 58px;
}

.sp-about-copy{
  align-self:center;
}

.sp-about-copy .sp-label{
  margin-bottom:17px!important;
  color:#66766f!important;
  font-size:10px;
  font-weight:700;
  line-height:1;
  letter-spacing:.23em;
}

.sp-about-copy h2{
  max-width:530px;
  margin:0 0 20px;
  font-family:Georgia,'Times New Roman',serif;
  font-weight:400;
  font-size:45px;
  line-height:1.03;
  letter-spacing:-.045em;
  color:#152520;
}

.sp-about-copy p{
  max-width:510px;
  font-size:14px;
  line-height:1.58;
  letter-spacing:-.012em;
  color:#5e6864;
}


/* ---------- STUBBS PARKIN PANEL ---------- */

.sp-about-card{
  min-height:220px;
  padding:34px 38px 30px;
  display:flex;
  flex-direction:column;
  justify-content:center;

  background:#f9fbf8;
  border:0;
  border-radius:4px;
  box-shadow:none;
  text-align:center;
}

.sp-logo{
  display:grid;
  gap:5px;
  margin-bottom:31px;

  font-family:Georgia,'Times New Roman',serif;
  font-size:25px;
  line-height:1;
  font-weight:400;
  letter-spacing:.105em;
  color:#21302c;
}

.sp-logo small{
  font-family:Inter,Arial,sans-serif;
  font-size:8.5px;
  line-height:1;
  font-weight:600;
  letter-spacing:.30em;
  color:#607069;
}

.sp-facts{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
}

.sp-fact{
  min-width:0;
  display:flex!important;
  flex-direction:column;
  align-items:flex-start!important;
  justify-content:flex-start!important;
  gap:12px!important;

  padding:0 26px!important;
  border-left:1px solid #e7eae5!important;
  text-align:left;
}

.sp-fact:first-child{
  border-left:0!important;
  padding-left:10px!important;
}

.sp-fact:last-child{
  padding-right:0!important;
}

.sp-fact-icon{
  width:34px;
  height:34px;
  border-radius:50%;
  background:#f0f7f1;
  display:grid!important;
  place-items:center;
  color:#59836f!important;
}

.sp-fact-icon svg{
  width:19px;
  height:19px;
  fill:none;
  stroke:currentColor;
  stroke-width:1.55;
  stroke-linecap:round;
  stroke-linejoin:round;
}

.sp-fact > div{
  display:grid!important;
  gap:1px!important;
  padding:0!important;
  border:0!important;
}

.sp-fact b{
  display:block;
  font-size:12.5px;
  line-height:1.35;
  font-weight:650;
  letter-spacing:-.015em;
  color:#293934;
}

.sp-fact span:not(.sp-fact-icon){
  display:block;
  font-size:11.5px;
  line-height:1.35;
  color:#68736f;
}


/* ---------- RESPONSIVE ---------- */

@media(max-width:900px){
  .sp-metric-grid{
    grid-template-columns:1fr 1fr;
    row-gap:30px;
  }

  .sp-metric{
    padding:0 24px;
  }

  .sp-metric:nth-child(3){
    border-left:0;
    padding-left:0;
  }

  .sp-about{
    grid-template-columns:1fr;
    gap:36px;
    padding:52px 0;
  }

  .sp-about-copy h2{
    font-size:40px;
  }
}

@media(max-width:560px){
  .sp-metric-grid{
    grid-template-columns:1fr;
    gap:0;
    padding:22px 0;
  }

  .sp-metric,
  .sp-metric:first-child,
  .sp-metric:nth-child(3),
  .sp-metric:last-child{
    padding:20px 0;
    border-left:0;
    border-top:1px solid #edf0eb;
  }

  .sp-metric:first-child{
    border-top:0;
  }

  .sp-metric-content strong{
    font-size:42px;
  }

  .sp-about{
    padding:44px 0;
  }

  .sp-about-copy h2{
    font-size:34px;
  }

  .sp-about-card{
    padding:30px 22px;
  }

  .sp-facts{
    grid-template-columns:1fr;
  }

  .sp-fact,
  .sp-fact:first-child,
  .sp-fact:last-child{
    padding:18px 0!important;
    border-left:0!important;
    border-top:1px solid #e7eae5!important;
  }

  .sp-fact:first-child{
    border-top:0!important;
  }
}

.sp-growth{background:linear-gradient(180deg,#eef6ee 0%,#e6f2e7 100%);padding:80px 0 72px}
.sp-grow-top{align-items:start;grid-template-columns:1.6fr 1fr;margin-bottom:56px}
.sp-big{justify-self:end;background:rgba(255,255,255,.6);border:1px solid rgba(15,61,48,.08);border-radius:18px;padding:24px 36px;display:grid;gap:2px;font-size:14px;line-height:1.35;color:#2f4a40;box-shadow:0 18px 40px -24px rgba(15,61,48,.25)}
.sp-big small{font-size:13px;color:#5d6e65}
.sp-big b{font-size:68px;line-height:1;color:#0f2d25;letter-spacing:-.03em}
.sp-timeline{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #b3d6bb;position:relative}
.sp-tl-item{display:grid;grid-template-columns:44px 1fr;gap:14px;align-items:start;padding:32px 20px 0 0;position:relative}
.sp-tl-item+.sp-tl-item{border-left:1px solid rgba(15,61,48,.1);padding-left:24px;margin-top:0}
.sp-dot{position:absolute;top:-6px;left:-1px;width:11px;height:11px;border-radius:50%;background:#2f9a62;box-shadow:0 0 0 4px #e3f1e5}
.sp-tl-item:first-child .sp-dot{left:0}
.sp-ico{width:44px;height:44px;border-radius:50%;background:#fff;display:grid;place-items:center;color:#2a7a52;box-shadow:0 6px 16px -8px rgba(15,61,48,.3)}
.sp-ico svg{width:19px;height:19px;stroke-width:1.6}
.sp-timeline strong{display:block;font-size:13px;color:#0f2d25;margin-bottom:4px}
.sp-timeline p{font-size:12px;line-height:1.55}

.sp-problems{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
.sp-prob-col{position:relative;display:flex;flex-direction:column;align-items:center;gap:12px}
.sp-prob{width:100%;flex:1;background:#f4f7f2;border:1px solid #e8eee6;border-radius:14px;padding:18px 16px;display:grid;gap:6px;align-content:start;min-height:150px}
.sp-prob-ico{width:38px;height:38px;border-radius:10px;background:#fff;display:grid;place-items:center;color:#2a7a52;margin-bottom:6px;box-shadow:0 4px 12px -6px rgba(15,61,48,.25)}
.sp-prob-ico svg{width:18px;height:18px;stroke-width:1.6}
.sp-prob strong{font-size:13px;line-height:1.3;color:#0f2d25}
.sp-prob small{font-size:11.5px;line-height:1.5;color:#7b8a81}
.sp-prob-arrow{position:absolute;top:56px;right:-23px;width:16px;height:16px;display:grid;place-items:center;color:#2a7a52}
.sp-down{color:#d2574a;display:grid;place-items:center}.sp-down svg{transform:rotate(90deg);width:16px;height:16px}
.sp-redflag{width:100%;background:#fcefed;border:1px solid #f6d9d5;color:#8a4a40;border-radius:12px;padding:12px 14px;font-size:11.5px;line-height:1.45;display:flex;gap:9px;align-items:flex-start}
.sp-redflag i{flex:none;width:16px;height:16px;border-radius:50%;border:1.5px solid #d2574a;color:#d2574a;font-style:normal;font-weight:800;font-size:9px;display:grid;place-items:center;margin-top:1px}

.sp-record{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;box-shadow:0 14px 40px rgba(16,43,36,.08);font-size:10px}
.sp-rec-top{display:flex;justify-content:space-between;color:#78867e;padding-bottom:10px;border-bottom:1px solid #eef1ee}.sp-rec-head{display:flex;align-items:center;gap:8px;padding:12px 0}.sp-rec-head strong{font-size:12px;margin-right:auto}
.sp-tabs{display:flex;gap:22px;background:#f2f6f2;margin:0 -16px;padding:0 16px;color:#78867e}.sp-tabs span{padding:9px 0}.sp-tabs .on{color:#0b5438;font-weight:700;border-bottom:2px solid #0b5438}
.sp-rec-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}.sp-box{border:1px solid var(--line);border-radius:8px;padding:12px;display:grid;gap:2px}.sp-box b{font-size:22px}.sp-box .sp-paid{background:#0b4a35;color:#fff;justify-content:center}
.sp-dd{display:flex;gap:8px;align-items:center;margin:8px 0}.sp-dd i{width:26px;height:26px;border-radius:6px;background:#dff5df}.sp-dd div{display:grid}.sp-box a{color:#126243;font-weight:700;display:flex;gap:5px;align-items:center}
.sp-th{font-weight:700;color:var(--ink)!important;font-size:10px!important}.sp-tx{display:grid;grid-template-columns:1fr .5fr 1.2fr .8fr;padding:9px 0;border-top:1px solid #eef1ee;color:#78867e}.sp-tx .ok{color:#27714a;display:flex;align-items:center;gap:5px}

.sp-quote{display:grid;grid-template-columns:40px 1fr;gap:10px;align-items:start}.sp-quote>span{font-family:Georgia,serif;font-size:60px;line-height:.9;color:#1d7a51;font-weight:700}
.sp-quote p{font-size:19px;line-height:1.4;color:#163a2f;margin-bottom:12px}.sp-quote strong{display:block;font-size:12px}.sp-quote small{font-size:12px;color:var(--mute)}
.sp-mint{background:#e7f2e8;border-radius:10px;padding:22px;margin-top:26px}

.sp-dark{background:linear-gradient(120deg,#082a20,#0a3a2c);color:#fff;padding:52px 0}.sp-dark h2{color:#fff}.sp-dark p{color:#c3d6c9}.sp-dark .sp-label{color:#a8d7b1!important}
.sp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sp-steps>div{border:1px solid rgba(190,231,198,.22);border-radius:12px;padding:16px;display:grid;gap:4px;align-content:start}.sp-steps small{color:#a5c8af;font-size:10px}.sp-steps b{font-size:12px;min-height:18px}.sp-steps strong{font-size:14px}.sp-steps p{font-size:11px;line-height:1.5}

.sp-results{display:grid;grid-template-columns:1.6fr .8fr;gap:14px}.sp-chart,.sp-ontime{background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px}
.sp-chart-head{display:flex;justify-content:space-between;gap:10px;font-size:11px;margin-bottom:14px}
.sp-growthpill{background:#cdf3d4;border-radius:8px;padding:6px 12px;display:grid;text-align:center}.sp-growthpill b{font-family:Georgia,serif;font-size:20px;font-weight:400;color:#14523a}.sp-growthpill small{font-size:8px}
.sp-bars{display:flex;gap:14px;align-items:end;height:150px}.sp-bars>div{flex:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:4px}.sp-bars i{width:100%;background:#4fb67a;border-radius:3px 3px 0 0;display:block}.sp-bars b{font-size:10px}.sp-bars span{font-size:9px;color:#78867e}
.sp-ontime{display:flex;flex-direction:column}.sp-ontime small{font-size:10px;font-weight:600;color:var(--ink);margin-bottom:10px}.sp-ontime b{font-family:Georgia,serif;font-weight:400;font-size:34px;color:#15523b;line-height:1.1}.sp-ontime b:nth-of-type(2){margin-top:20px}.sp-ontime span{font-size:10px;color:var(--mute)}

.sp-benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sp-benefits>div{background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px;display:grid;gap:6px;align-content:start}.sp-benefits i{width:30px;height:30px;border-radius:8px;background:#dff4e2}.sp-benefits strong{font-size:13px;line-height:1.3}.sp-benefits p{font-size:11px;line-height:1.5}

.sp-band{display:grid;grid-template-columns:1fr 1.4fr;background:#fff}.sp-pier{background:linear-gradient(180deg,#e9a77c 0%,#d78b8d 35%,#4d5f78 60%,#2c3f4d 100%);min-height:180px}.sp-band .sp-quote{padding:34px 60px;align-content:center}

.sp-cta{background:linear-gradient(120deg,#08281f,#0c4b36);color:#fff;padding:54px 0}.sp-cta h2{color:#fff;font-size:38px}.sp-cta p{color:#c2d4c7;margin-bottom:20px}.sp-cta .sp-label{color:#aee9b6!important}
.sp-checks{list-style:none;background:rgba(5,30,23,.6);border:1px solid rgba(190,244,201,.2);border-radius:12px;padding:22px;display:grid;gap:14px;font-size:12px}.sp-checks li{display:flex;gap:12px;align-items:center}.sp-checks i{width:20px;height:20px;border-radius:4px;background:var(--mint);color:#0d3a2b;display:grid;place-items:center;flex:none}
.sp-foot{display:flex;justify-content:space-between;padding:26px 0;font-size:11px;color:#6f7f76}

@media(max-width:900px){.sp-wrap{width:calc(100% - 32px)}.sp-split,.sp-hero-grid,.sp-grow-top,.sp-results,.sp-band{grid-template-columns:1fr}.sp-nav nav{display:none}.sp-hero h1{font-size:38px}.sp h2{font-size:32px}.sp-metric-grid,.sp-timeline,.sp-problems,.sp-benefits,.sp-steps{grid-template-columns:1fr 1fr}.sp-big{justify-self:start}.sp-band .sp-quote{padding:24px 16px}}
@media(max-width:560px){.sp-metric-grid,.sp-timeline,.sp-problems,.sp-benefits,.sp-steps{grid-template-columns:1fr}.sp-hero-art{min-height:420px}.sp-toast{top:190px}}
`;