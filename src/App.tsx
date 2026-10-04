import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Seo } from "./components/Seo";
import Home from "./pages/Home";
import OpenBanking from "./pages/articles/OpenBanking";
import EmbeddedFinance from "./pages/articles/EmbeddedFinance";
import AiFraudDetection from "./pages/articles/AiFraudDetection";
import AveniBestAINoteTakingTools from "./pages/articles/AveniBestAINoteTakingTools";
import AdfinStubbsCaseStudy from "./pages/articles/AdfinStubbsCaseStudy";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Seo
                title="GrowUp | Fintech & Financial Services Copywriting Portfolio"
                description="Research-backed fintech content. Long-form articles and case studies on open banking, embedded finance, fraud prevention and payments."
                path="/"
                type="website"
              />
              <Home />
            </>
          }
        />

        <Route
          path="/articles/open-banking-2026"
          element={
            <>
              <Seo
                title="Open Banking in 2026: What's Changed | GrowUp"
                description="REPLACE THIS with the article's real description, 150–160 characters."
                path="/articles/open-banking-2026"
              />
              <OpenBanking />
            </>
          }
        />

        <Route
          path="/articles/embedded-finance"
          element={
            <>
              <Seo
                title="Embedded Finance: A Practical Guide | GrowUp"
                description="REPLACE THIS with the article's real description, 150–160 characters."
                path="/articles/embedded-finance"
              />
              <EmbeddedFinance />
            </>
          }
        />

        <Route
          path="/articles/ai-fraud-detection"
          element={
            <>
              <Seo
                title="AI Fraud Detection in Financial Services | GrowUp"
                description="REPLACE THIS with the article's real description, 150–160 characters."
                path="/articles/ai-fraud-detection"
              />
              <AiFraudDetection />
            </>
          }
        />

        <Route
          path="/articles/best-ai-note-taking"
          element={
            <>
              <Seo
                title="The Best AI Note-Taking Tools | GrowUp"
                description="REPLACE THIS with the article's real description, 150–160 characters."
                path="/articles/best-ai-note-taking"
              />
              <AveniBestAINoteTakingTools />
            </>
          }
        />

        <Route
          path="/articles/adfin-stubbs-parkin-case-study"
          element={
            <>
              <Seo
                title="Stubbs Parkin Case Study Rewrite | GrowUp Fintech Copywriting"
                description="How Stubbs Parkin took on nearly 200 clients without adding payment admin. An independent rewrite of Adfin's case study by GrowUp."
                path="/articles/adfin-stubbs-parkin-case-study"
                image="/images/stubbs-parkin-og.png"
              />
              <AdfinStubbsCaseStudy />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Seo
                title="Page not found | GrowUp"
                description="This page doesn't exist. Return to the GrowUp fintech writing portfolio."
                path="/"
                type="website"
              />
              <Home />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}