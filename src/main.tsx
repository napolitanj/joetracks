import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import SneffelsGuide from "./components/SneffelsGuide.tsx";
import NorthManitouGuide from "./components/NorthManitouGuide.tsx";
import CalTopo from "./components/CalTopo.tsx";
import RemoteForecastingTools from "./components/RemoteForecastingTools.tsx";
import OriginExpeditions from "./components/OriginExpeditions.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Standalone route — no shared layout */}
          <Route path="/ski-mount-sneffels" element={<SneffelsGuide />} />
          <Route
            path="/north-manitou-island-guide"
            element={<NorthManitouGuide />}
          />
          <Route path="/caltopo-guide" element={<CalTopo />} />
          <Route path="/origin-expeditions" element={<OriginExpeditions />} />
          <Route
            path="/remote-forecasting-tools"
            element={<RemoteForecastingTools />}
          />
          {/* Catch-all SPA routes (must go last) */}
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
