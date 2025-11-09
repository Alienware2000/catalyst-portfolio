import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Atmosphere from "./components/Atmosphere.jsx";
import Navbar from "./components/Navbar.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";
import { useEffect, useState } from "react";

function Shell() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  const [showIntro, setShowIntro] = useState(false);

  // Run once on initial mount: show overlay on first load / hard refresh
  useEffect(() => {
    try {
      const nav = performance.getEntriesByType("navigation")[0];
      const isReload = nav && nav.type === "reload";
      if (isReload) {
        setShowIntro(true);
        return;
      }
    } catch {}
    const seen = typeof window !== "undefined" && sessionStorage.getItem("introShown") === "1";
    if (!seen) {
      setShowIntro(true);
      try { sessionStorage.setItem("introShown", "1"); } catch {}
    }
  }, []);

  return (
    <>
      <Atmosphere />
      {showIntro && showNavbar && <IntroOverlay name="David Antwi" duration={1800} />}
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
