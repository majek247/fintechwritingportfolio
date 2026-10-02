import type { ArtKind } from "../components/Art";

export type Section = {
  heading: string;
  body: string[];
  list?: { title: string; text: string }[];
  quote?: string;
  art?: { kind: ArtKind; caption: string };
};

export type ArticleData = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  hero: ArtKind;
  meta: { format: string; length: string; seo: string; audience: string };
  takeaways: string[];
  sections: Section[];
};

export const articles: ArticleData[] = [
  {
    slug: "open-banking-2025",
    category: "Open banking",
    title: "Open Banking in 2025: Key Trends, Benefits and What’s Next",
    dek: "A plain-English guide to how open banking is reshaping payments, lending and personal finance, and what businesses should prepare for next.",
    readTime: "9 min read",
    hero: "bank",
    meta: {
      format: "Long-form guide with visuals",
      length: "2,000 words",
      seo: "Open banking, fintech trends, data security",
      audience: "Fintech founders, product leaders, finance teams",
    },
    takeaways: [
      "What open banking is and how consent-based data sharing works",
      "The four trends shaping open banking in 2025",
      "Real benefits for businesses and everyday users",
      "Where the market is heading next",
    ],
    sections: [
      {
        heading: "What is open banking?",
        body: [
          "Open banking lets customers share their financial data with trusted third parties through secure APIs, with their explicit consent. Instead of handing over passwords or uploading statements, a customer approves a request and the app receives only the data it needs.",
          "The result is a more competitive market. Banks, fintechs and retailers can build on the same rails, while customers decide who sees what, for how long, and can withdraw access at any time.",
        ],
        art: { kind: "nodes", caption: "One customer, many providers, one consent layer." },
      },
      {
        heading: "Four trends shaping 2025",
        body: ["Adoption is moving from early experiments to everyday infrastructure. These are the shifts worth watching."],
        list: [
          { title: "Wider global adoption", text: "From the UK to Asia and the Gulf, regulators are publishing frameworks that make data sharing a standard feature, not a pilot." },
          { title: "AI-powered personalization", text: "Transaction data now feeds tools that forecast cash flow, flag unusual spend and suggest better products in context." },
          { title: "Embedded finance", text: "Software platforms use open banking connections to offer payments and credit without sending users elsewhere." },
          { title: "Stronger data security", text: "Tokenized access, shorter consent windows and clearer audit trails are becoming the baseline customers expect." },
        ],
      },
      {
        heading: "Benefits for businesses and customers",
        body: [
          "For businesses, account-to-account payments can cut card fees, speed up settlement and reduce failed collections. Verified income and spending data also makes affordability checks faster and fairer.",
          "For customers, the gain is clarity. One view of every account, quicker onboarding, and offers that reflect how they actually manage money rather than a generic credit score.",
        ],
        quote: "Trust is the product. Open banking only scales when customers can see, understand and control every connection.",
      },
      {
        heading: "What’s next",
        body: [
          "Expect the conversation to move from data sharing to open finance: pensions, savings, insurance and investments joining the same permission model. Variable recurring payments and instant account-to-account checkout are the next practical step for merchants.",
          "The winners will not be the firms with the most connections. They will be the ones that make consent simple, explain value clearly, and treat security as a feature customers can feel.",
        ],
        art: { kind: "growth", caption: "Adoption compounds as use cases move from data to payments." },
      },
    ],
  },
  {
    slug: "embedded-finance",
    category: "Embedded finance",
    title: "Embedded Finance: Why Every Brand Is Becoming a Bank",
    dek: "Payments, lending and insurance are moving inside the apps people already use. Here is how the model works and where the risk really sits.",
    readTime: "8 min read",
    hero: "embed",
    meta: {
      format: "Explainer with stack diagram",
      length: "1,800 words",
      seo: "Embedded finance, banking-as-a-service, fintech partnerships",
      audience: "SaaS founders, marketplace operators, product managers",
    },
    takeaways: [
      "How embedded finance works behind the checkout",
      "Why software platforms are adding financial products",
      "Where compliance and partner risk sit",
      "How to choose a first embedded product",
    ],
    sections: [
      {
        heading: "Finance without leaving the app",
        body: [
          "Embedded finance puts financial services inside a non-financial product. A ride-hailing app pays drivers instantly. An accounting tool offers working-capital loans. A furniture retailer splits a payment into three at checkout.",
          "The customer sees one smooth experience. Behind it, a licensed partner handles the money, the rules and the reporting.",
        ],
        art: { kind: "embed", caption: "The best financial product is the one that feels like part of the app." },
      },
      {
        heading: "Why platforms are adding it",
        body: [
          "Financial products raise revenue per customer and make a platform harder to leave. A business that holds your payments, payouts and credit is embedded in how you operate, not just a tool you log in to.",
          "It also improves data. Seeing real transaction flows helps a platform price risk better than a lender who only sees an application form.",
        ],
        art: { kind: "growth", caption: "Financial features lift revenue per customer over time." },
      },
      {
        heading: "The stack behind the checkout",
        body: ["Four layers decide whether an embedded product works well, and who is accountable when it does not."],
        list: [
          { title: "Brand and customer", text: "Owns the relationship, the interface and the support experience." },
          { title: "Platform (banking-as-a-service)", text: "Provides APIs for accounts, cards, payments and lending." },
          { title: "Licensed bank or institution", text: "Holds the funds and carries the regulatory licence." },
          { title: "Compliance layer", text: "Handles identity checks, monitoring and reporting." },
        ],
        art: { kind: "stack", caption: "Responsibility is shared, but the customer blames the brand." },
      },
      {
        heading: "Getting your first product right",
        body: [
          "Start with the money movement your customers already do. Payouts, invoicing and payments are lower risk than lending and give you data to learn from before you take on credit exposure.",
          "Ask partners hard questions early: who owns customer onboarding, how are disputes handled, and what happens if the partner bank changes strategy? The strongest programmes plan for those answers before launch.",
        ],
        quote: "If your customers cannot tell where your product ends and the bank begins, you have done it well. Your contract still needs to know.",
      },
    ],
  },
  {
    slug: "ai-fraud-detection",
    category: "Risk and security",
    title: "AI-Powered Fraud Detection: Stopping Payment Fraud in Real Time",
    dek: "Instant payments leave seconds to decide. How machine learning scores risk, where it fails, and what good looks like for a fintech team.",
    readTime: "7 min read",
    hero: "fraud",
    meta: {
      format: "Thought-leadership article",
      length: "1,600 words",
      seo: "Fraud detection, machine learning, real-time payments",
      audience: "Risk leads, payments engineers, compliance teams",
    },
    takeaways: [
      "Why real-time payments changed the fraud problem",
      "How models score a transaction in milliseconds",
      "The false-positive cost most teams never budget for",
      "A practical checklist for fintech risk teams",
    ],
    sections: [
      {
        heading: "Seconds, not days",
        body: [
          "Card payments gave risk teams hours to review and reverse. Instant payments do not. Once money leaves, recovery depends on the receiving bank, and for some fraud types it rarely happens.",
          "That pushes the decision to the moment of payment, when the system has milliseconds to judge whether a transfer looks like the customer or like someone pretending to be them.",
        ],
        art: { kind: "fraud", caption: "Every approval or flag is made before the money moves." },
      },
      {
        heading: "How models score a transaction",
        body: [
          "A modern model combines hundreds of signals: amount, payee history, device, location, typing behaviour and how this payment compares with the customer’s normal pattern. It returns a risk score, and rules decide whether to approve, challenge or block.",
          "The strongest systems pair machine learning with simple, explainable rules. Models catch new patterns, while rules give analysts and regulators something they can read.",
        ],
      },
      {
        heading: "The cost of crying wolf",
        body: [
          "Every blocked genuine payment is a frustrated customer, and many will not try again. Teams that only measure fraud losses miss this side of the ledger.",
          "Track both: money lost to fraud and revenue lost to false declines. The right threshold is where the combined cost is lowest, not where fraud is lowest.",
        ],
        quote: "A fraud model that stops every attack and every customer is not a security win. It is a growth problem.",
        art: { kind: "growth", caption: "Balance fraud loss against false-decline loss." },
      },
      {
        heading: "A practical checklist",
        body: ["Before you tune another model, check that the foundations are in place."],
        list: [
          { title: "Clean labels", text: "Confirmed fraud and confirmed genuine outcomes feed back into training quickly." },
          { title: "Step-up, not just block", text: "Use extra verification for medium-risk payments instead of a hard decline." },
          { title: "Explainable decisions", text: "Analysts can see why a payment was flagged and override it." },
          { title: "Scam awareness", text: "Warnings in the payment flow help customers who are being coached by a fraudster." },
        ],
      },
    ],
  },
];

export const getArticle = (slug?: string) => articles.find((a) => a.slug === slug);
