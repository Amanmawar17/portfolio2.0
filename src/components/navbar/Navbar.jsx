import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../footer/Footer";
import DarkMode from "./DarkMode";
import {navdata} from "../../data/data"

function Navbar() {
  const [active, setActive] = useState("");

  return (
    <>
      <nav className="flex justify-center max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10 h-[12vh]">
        <div className="rounded-xl flex justify-between items-center w-full">
          <div className="flex justify-start w-full items-baseline">
            <h1 className="font-semibold font-Noto text-3xl">Aman Mawar</h1>{" "}
            <div className="w-3 h-3 bg-primary mx-2"></div>{" "}
            <span className="font-Rale font-medium">Full Stack Developer</span>
          </div>
          <ul className="flex w-full justify-end md:text-lg text-sm items-center font-normal my-1">
            {navdata.map((item,index) => (
              <li key={index} id={item.id}
              className={`p-3 hover:text-primary hover:border-b-primary hover:border-b-2 
            ${
              active === `${item.pathname}` ? "border-b-2 border-b-primary text-primary " : ""
            } `}
              onClick={() => setActive(`${item.pathname}`)}
            >
              <NavLink to={item.pathname}>{item.links}</NavLink>
            </li>
            ))}
            <div className="p-2">
              <DarkMode />
            </div>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
