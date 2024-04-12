import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../footer/Footer";
import DarkMode from "./DarkMode";

function Navbar() {
  const [active, setActive] = useState("");

  return (
    <>
      <nav className="flex justify-center max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10 h-[12vh]">
        <div className="rounded-xl flex justify-between items-center w-full">
          <div className="flex justify-start w-full items-baseline">
            <h1 className="font-semibold font-Noto text-3xl">Aman Mawar</h1>{" "}
            <div className="w-3 h-3 bg-extra1 mx-2"></div>{" "}
            <span className="font-Rale font-medium">Full Stack Developer</span>
          </div>
          <ul className="flex w-full justify-end md:text-lg text-sm items-center font-normal my-1">
            <li className={`p-3 hover:text-primary hover:border-b-primary hover:border-b-2 
            ${ active === "" ? "border-b-2 border-b-primary text-primary " : ""} `} onClick={() => setActive("")}>
              <NavLink to="" >About</NavLink>
            </li>
            <li className={`p-3 hover:text-secondary hover:border-b-secondary hover:border-b-2 
            ${ active === "resume" ? "text-secondary border-b-secondary border-b-2" : ""
                  }`} onClick={() => setActive("resume")} >
            <NavLink to="/resume" >Resume</NavLink>
            </li>
            <li className={`p-3 hover:text-extra1 hover:border-b-extra1 hover:border-b-2 ${ active === "project" ? "border-b-2 border-b-extra1 text-extra1 " : ""} `} onClick={() => setActive("project")}>
            <NavLink to="/project">Project</NavLink>
            </li>
            <li className={`p-3 hover:text-extra2 hover:border-b-extra2 hover:border-b-2 ${ active === "contact" ? "border-b-2 border-b-extra2 text-extra2 " : ""} `} onClick={() => setActive("contact")}>
            <NavLink to="/contact">Contact</NavLink>
            </li>
            <div className="p-2">
              <DarkMode/>
            </div>
          </ul>
        </div>
      </nav>
      <Outlet/>
      <Footer />
    </>
  );
}

export default Navbar;
