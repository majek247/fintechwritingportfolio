import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Article from "./pages/Article";

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
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
