import ArticleShell from "../../components/ArticleShell";
import { Section, P, Quote, Cards, Figure } from "../../components/blocks";

export default function EmbeddedFinance() {
  return (
    <ArticleShell slug="embedded-finance">
      <Section heading="Finance without leaving the app">
        <P>Embedded finance puts financial services inside a non-financial product. A ride-hailing app pays drivers instantly. An accounting tool offers working-capital loans. A furniture retailer splits a payment into three at checkout.</P>
        <P>The customer sees one smooth experience. Behind it, a licensed partner handles the money, the rules and the reporting.</P>
        <Figure kind="embed" caption="The best financial product is the one that feels like part of the app." />
      </Section>

      <Section heading="Why platforms are adding it">
        <P>Financial products raise revenue per customer and make a platform harder to leave. A business that holds your payments, payouts and credit is embedded in how you operate, not just a tool you log in to.</P>
        <P>It also improves data. Seeing real transaction flows helps a platform price risk better than a lender who only sees an application form.</P>
        <Figure kind="growth" caption="Financial features lift revenue per customer over time." />
      </Section>

      <Section heading="The stack behind the checkout">
        <P>Four layers decide whether an embedded product works well, and who is accountable when it does not.</P>
        <Cards items={[
          { title: "Brand and customer", text: "Owns the relationship, the interface and the support experience." },
          { title: "Platform (banking-as-a-service)", text: "Provides APIs for accounts, cards, payments and lending." },
          { title: "Licensed bank or institution", text: "Holds the funds and carries the regulatory licence." },
          { title: "Compliance layer", text: "Handles identity checks, monitoring and reporting." },
        ]} />
        <Figure kind="stack" caption="Responsibility is shared, but the customer blames the brand." />
      </Section>

      <Section heading="Getting your first product right">
        <P>Start with the money movement your customers already do. Payouts, invoicing and payments are lower risk than lending and give you data to learn from before you take on credit exposure.</P>
        <P>Ask partners hard questions early: who owns customer onboarding, how are disputes handled, and what happens if the partner bank changes strategy? The strongest programmes plan for those answers before launch.</P>
        <Quote>If your customers cannot tell where your product ends and the bank begins, you have done it well. Your contract still needs to know.</Quote>
      </Section>
    </ArticleShell>
  );
}
