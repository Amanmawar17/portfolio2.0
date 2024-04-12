import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Navbar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
