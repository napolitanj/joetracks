import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/src/styles/App.css";
import BannerImage from "./components/BannerImage";
import Navbar from "./components/Navbar";
import Bio from "./components/pages/Bio";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Contact from "./components/pages/Contact";
import EditorPage from "./components/pages/Editor";
import AccessDenied from "./components/pages/AccessDenied";

function App() {
  return (
    <Router>
      <BannerImage></BannerImage>
      <Navbar></Navbar>
      <main className="route-content-wrapper">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/editor/:slug" element={<EditorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
