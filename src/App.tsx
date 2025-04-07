import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/src/styles/App.css";
import BannerImage from "./components/BannerImage";
import Navbar from "./components/Navbar";
import Bio from "./components/pages/Bio";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <BannerImage></BannerImage>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
