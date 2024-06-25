import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Blog from "./pages/blog/Blog";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Navbar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
