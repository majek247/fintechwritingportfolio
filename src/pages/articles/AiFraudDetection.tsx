import ArticleShell from "../../components/ArticleShell";
import { Section, P, Quote, Cards, Figure } from "../../components/blocks";

export default function AiFraudDetection() {
  return (
    <ArticleShell slug="ai-fraud-detection">
      <Section heading="Seconds, not days">
        <P>Card payments gave risk teams hours to review and reverse. Instant payments do not. Once money leaves, recovery depends on the receiving bank, and for some fraud types it rarely happens.</P>
        <P>That pushes the decision to the moment of payment, when the system has milliseconds to judge whether a transfer looks like the customer or like someone pretending to be them.</P>
        <Figure kind="fraud" caption="Every approval or flag is made before the money moves." />
      </Section>

      <Section heading="How models score a transaction">
        <P>A modern model combines hundreds of signals: amount, payee history, device, location, typing behaviour and how this payment compares with the customer’s normal pattern. It returns a risk score, and rules decide whether to approve, challenge or block.</P>
        <P>The strongest systems pair machine learning with simple, explainable rules. Models catch new patterns, while rules give analysts and regulators something they can read.</P>
      </Section>

      <Section heading="The cost of crying wolf">
        <P>Every blocked genuine payment is a frustrated customer, and many will not try again. Teams that only measure fraud losses miss this side of the ledger.</P>
        <P>Track both: money lost to fraud and revenue lost to false declines. The right threshold is where the combined cost is lowest, not where fraud is lowest.</P>
        <Quote>A fraud model that stops every attack and every customer is not a security win. It is a growth problem.</Quote>
        <Figure kind="growth" caption="Balance fraud loss against false-decline loss." />
      </Section>

      <Section heading="A practical checklist">
        <P>Before you tune another model, check that the foundations are in place.</P>
        <Cards items={[
          { title: "Clean labels", text: "Confirmed fraud and confirmed genuine outcomes feed back into training quickly." },
          { title: "Step-up, not just block", text: "Use extra verification for medium-risk payments instead of a hard decline." },
          { title: "Explainable decisions", text: "Analysts can see why a payment was flagged and override it." },
          { title: "Scam awareness", text: "Warnings in the payment flow help customers who are being coached by a fraudster." },
        ]} />
      </Section>
    </ArticleShell>
  );
}
