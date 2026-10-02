import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OpenBanking from "./pages/articles/OpenBanking";
import EmbeddedFinance from "./pages/articles/EmbeddedFinance";
import AiFraudDetection from "./pages/articles/AiFraudDetection";

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
        <Route path="/" element={<Home />} />
        <Route path="/articles/open-banking-2025" element={<OpenBanking />} />
        <Route path="/articles/embedded-finance" element={<EmbeddedFinance />} />
        <Route path="/articles/ai-fraud-detection" element={<AiFraudDetection />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
