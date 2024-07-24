"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import DarkMode from "./DarkMode";

import { navdata } from "../data/data";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const path = usePathname();
  const param = useSearchParams();
  const url = `${path}${param}`
	const isActive = (pathname) => pathname === url;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center max-w-xs max-sm:max-w-md md:max-w-2xl lg:max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10">
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
                  <Link key={index} id={item.id} href={`/${item.pathname}`} className={`p-4 hover:text-primary hover:border-b-primary hover:border-b-2 
                  ${isActive(`/${item.pathname}`) ? "text-primary border-b-2 border-b-primary" : ""}`}>{item.links}</Link>
              ))}
              <div className="mt-2 lg:mt-0">
                <DarkMode />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
