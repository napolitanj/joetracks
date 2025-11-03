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

function App() {
  return (
    <>
      <Navbar />
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
        </Routes>
      </main>
    </>
  );
}

export default App;
