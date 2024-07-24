"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import DarkMode from "./DarkMode";

import { navdata } from "../data/data";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const path = usePathname();
  const param = useSearchParams();
  const url = `${path}${param}`;
  const isActive = (pathname) => pathname === url;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center max-lg:p-4 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10">
        <div className="rounded-xl flex flex-col lg:flex-row justify-between items-center relative w-full">
          <div className="flex justify-between lg:justify-start w-full">
            <div className="flex items-baseline">
              <h1 className="font-semibold font-Noto text-lg md:text-2xl lg:text-3xl">
                Aman Mawar
              </h1>{" "}
              <div className="w-2 h-2 md:w-3 md:h-3 bg-primary mx-1 md:mx-2"></div>{" "}
              <span className="font-Rale text-sm md:text-lg font-medium">
                Full Stack Developer
              </span>
            </div>

            <div className="block lg:hidden">
              {isOpen ? (
                <RxCross2
                  className="h-6 w-6"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <HiOutlineMenuAlt1
                  className="h-6 w-6"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          </div>
          <div
            className={`flex flex-col lg:flex-row justify-center lg:justify-end md:text-lg text-sm items-center font-normal my-1 ${
              isOpen
                ? "py-4 absolute top-10 h-[92vh] w-screen bg-background opacity-85 z-40"
                : "hidden lg:flex"
            }`}
          >
            {navdata.map((item, index) => (
              <Link
                key={index}
                id={item.id}
                href={`/${item.pathname}`}
                className={`p-4 max-lg:text-3xl max-lg:font-medium hover:text-primary hover:border-b-primary hover:border-b-2 
                  ${
                    isActive(`/${item.pathname}`)
                      ? "text-primary border-b-2 border-b-primary"
                      : ""
                  }`}
              >
                {item.links}
              </Link>
            ))}
            <div className="mt-2 lg:mt-0">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
