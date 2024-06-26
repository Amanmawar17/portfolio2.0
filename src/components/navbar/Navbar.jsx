import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import Footer from "../footer/Footer";
import DarkMode from "./DarkMode";

import { navdata } from "../../data/data";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center p-2 max-w-xs max-sm:max-w-md md:max-w-2xl lg:max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10 h-[12vh]">
        <div className="rounded-xl flex justify-between items-center w-full">
          <div className="flex justify-start w-full items-baseline">
            <h1 className="font-semibold font-Noto text-lg md:text-2xl lg:text-3xl">
              Aman Mawar
            </h1>{" "}
            <div className="w-2 h-2 md:w-3 md:h-3 bg-primary mx-1 md:mx-2"></div>{" "}
            <span className="font-Rale text-sm md:text-lg font-medium">
              Full Stack Developer
            </span>
          </div>
          <div className="relative">
            <div className="block lg:hidden">
              { isOpen ? <RxCross2 className="h-4 w-4 lg:h-6 lg:w-6" onClick={() => setIsOpen(!isOpen)}/> 
               :<HiOutlineMenuAlt1
               className="h-4 w-4 lg:h-6 lg:w-6"
               onClick={() => setIsOpen(!isOpen)}/>}
            </div>
            <ul
              className={`flex flex-col lg:flex-row w-full justify-center lg:justify-end md:text-lg text-sm items-center font-normal my-1 ${
                isOpen ? "py-4 rounded-sm block absolute top-10 w-48 right-4 b md:right-10 bg-accentwhite text-accentblack dark:bg-accentblack dark:text-accentwhite" : "hidden lg:flex" 
              }`}
            >
              {navdata.map((item, index) => (
                <li
                  key={index}
                  id={item.id}
                  className={`p-3 hover:text-primary hover:border-b-primary hover:border-b-2 
            ${
              active === `${item.pathname}`
                ? "border-b-2 border-b-primary text-primary "
                : ""
            } `}
                  onClick={() => setActive(`${item.pathname}`)}
                >
                  <NavLink to={item.pathname}>{item.links}</NavLink>
                </li>
              ))}
              <div className="mt-2 lg:mt-0 p-2">
                <DarkMode />
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
