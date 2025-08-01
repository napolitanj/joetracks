import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import SneffelsGuide from "./components/SneffelsGuide.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/joe-napolitan.com">
      <Routes>
        {/* Standalone route — no shared layout */}
        <Route path="/sneffels-guide" element={<SneffelsGuide />} />

        {/* Catch-all SPA routes (must go last) */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
