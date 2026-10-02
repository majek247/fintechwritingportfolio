import ArticleShell from "../../components/ArticleShell";
import { Section, P, Quote, Cards, Figure } from "../../components/blocks";

export default function OpenBanking() {
  return (
    <ArticleShell slug="open-banking-2025">
      <Section heading="What is open banking?">
        <P>Open banking lets customers share their financial data with trusted third parties through secure APIs, with their explicit consent. Instead of handing over passwords or uploading statements, a customer approves a request and the app receives only the data it needs.</P>
        <P>The result is a more competitive market. Banks, fintechs and retailers can build on the same rails, while customers decide who sees what, for how long, and can withdraw access at any time.</P>
        <Figure kind="nodes" caption="One customer, many providers, one consent layer." />
      </Section>

      <Section heading="Four trends shaping 2025">
        <P>Adoption is moving from early experiments to everyday infrastructure. These are the shifts worth watching.</P>
        <Cards items={[
          { title: "Wider global adoption", text: "From the UK to Asia and the Gulf, regulators are publishing frameworks that make data sharing a standard feature, not a pilot." },
          { title: "AI-powered personalization", text: "Transaction data now feeds tools that forecast cash flow, flag unusual spend and suggest better products in context." },
          { title: "Embedded finance", text: "Software platforms use open banking connections to offer payments and credit without sending users elsewhere." },
          { title: "Stronger data security", text: "Tokenized access, shorter consent windows and clearer audit trails are becoming the baseline customers expect." },
        ]} />
      </Section>

      <Section heading="Benefits for businesses and customers">
        <P>For businesses, account-to-account payments can cut card fees, speed up settlement and reduce failed collections. Verified income and spending data also makes affordability checks faster and fairer.</P>
        <P>For customers, the gain is clarity. One view of every account, quicker onboarding, and offers that reflect how they actually manage money rather than a generic credit score.</P>
        <Quote>Trust is the product. Open banking only scales when customers can see, understand and control every connection.</Quote>
      </Section>

      <Section heading="What’s next">
        <P>Expect the conversation to move from data sharing to open finance: pensions, savings, insurance and investments joining the same permission model. Variable recurring payments and instant account-to-account checkout are the next practical step for merchants.</P>
        <P>The winners will not be the firms with the most connections. They will be the ones that make consent simple, explain value clearly, and treat security as a feature customers can feel.</P>
        <Figure kind="growth" caption="Adoption compounds as use cases move from data to payments." />
      </Section>
    </ArticleShell>
  );
}
