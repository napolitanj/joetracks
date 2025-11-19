import { Routes, Route } from "react-router-dom";
import "/src/styles/App.css";
import Navbar from "./components/Navbar";
import Bio from "./components/pages/Bio";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Contact from "./components/pages/Contact";
import EditorPage from "./components/pages/Editor";
import AccessDenied from "./components/pages/AccessDenied";
import PortfolioEditor from "./components/PortfolioEditor";
import Login from "./components/Login";
import PortfolioCategory from "./components/PortfolioCategory";
import Marketing from "./components/Marketing";
import Writing from "./components/Writing";
import SneffelsGuide from "./components/SneffelsGuide";
import NorthManitouGuide from "./components/NorthManitouGuide";
import CalTopo from "./components/CalTopo";
import RemoteForecastingTools from "./components/RemoteForecastingTools";
import OriginExpeditions from "./components/OriginExpeditions";
import ScrollToTop from "./components/tools/ScrollToTop";
import ProgramManagement from "./components/ProgramManagement";
import SoftwareTechSupport from "./components/SoftwareTechSupport";
import OutdoorLeadership from "./components/OutdoorLeadership";
import MichiganSkiTracker from "./components/pages/MichiganSkiTracker";
import CoordTool from "./dev/coords";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="route-content-wrapper">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/editor/:slug" element={<EditorPage />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/portfolioeditor" element={<PortfolioEditor />} />
          <Route path="/portfolioeditor/:id" element={<PortfolioEditor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio/:category" element={<PortfolioCategory />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/programmanagement" element={<ProgramManagement />} />
          <Route path="/outdoorleadership" element={<OutdoorLeadership />} />
          <Route path="/ski-mount-sneffels" element={<SneffelsGuide />} />
          <Route
            path="/softwaretechsupport"
            element={<SoftwareTechSupport />}
          />
          <Route
            path="/north-manitou-island-guide"
            element={<NorthManitouGuide />}
          />
          <Route path="/caltopo-guide" element={<CalTopo />} />
          <Route
            path="/remote-forecasting-tools"
            element={<RemoteForecastingTools />}
          />
          <Route path="/origin-expeditions" element={<OriginExpeditions />} />
          <Route
            path="/michigan-ski-tracker"
            element={<MichiganSkiTracker />}
          />
          <Route path="/coord-tool" element={<CoordTool />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
