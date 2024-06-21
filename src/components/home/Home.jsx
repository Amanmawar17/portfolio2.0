import Tilt from "react-parallax-tilt";
import hero from "../../assets/hero.svg";
import TypeIt from "typeit-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TechnTools from "./techntools/TechnTools";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home" className="pt-10 md:h-full lg:h-[81vh]">
        <div className="flex justify-evenly flex-col-reverse lg:flex-row items-center font-mono">
          <div className="flex-col max-w-lg lg:w-1/2">
            <h1 className="text-5xl py-3">Heyy! There, 🫰</h1>
            <h4
              className="tw text-2xl py-2 font-semibold font-Noto"
              id="animate-text"
            >
              I`m a{" "}
              <span className="text-primary">
                <TypeIt
                  options={{ loop: true }}
                  getBeforeInit={(instance) => {
                    instance
                      .type(" Software Developer")
                      .pause(750)
                      .delete(18)
                      .pause(500)
                      .type("Full Stack Developer")
                      .pause(500)
                      .delete(20)
                      .type("Freelancer");

                    // Remember to return it!
                    return instance;
                  }}
                />
              </span>
            </h4>
            <p className="text-base py-3 font-Rale font-light">
              I`m an aspiring Full-Stack developer based in India. I am excited
              about making Saas and Open Source Projects.
            </p>
            <div className="flex justify-start font-semibold py-3">
              <NavLink to="/resume" className="">
                <button className="outline outline-2 outline-primary rounded-sm bg-primary hover:bg-accentwhite text-base10 
                dark:hover:bg-accentblack hover:text-primary p-2">
                  Resume
                </button>
              </NavLink>
              <NavLink to="/project" className="ml-4 ease-in">
                <button
                  className="outline-2 outline outline-secondary rounded-sm text-secondary hover:bg-secondary 
                hover:text-base10 p-2"
                >
                  Projects
                </button>
              </NavLink>
            </div>
          </div>
          <div id="hero" className="flex justify-center flex-col items-center">
            <Tilt
              scale={1.1}
              transitionEasing="0.8"
              glareEnable={true}
              glareMaxOpacity={0.5}
            >
              <div className="text-center w-full">
                <img
                  className="h-80 rounded-full m-auto"
                  src={hero}
                  alt="Photo!"
                />
                <div className="my-2">
                  <h1 className="mb-2 text-lg font-medium">Aman mawar</h1>
                  <h3 className="text-lg ">Full Stack Devloper</h3>
                </div>
                <div className="flex justify-evenly items-center my-3 max-w-xs mx-auto">
                  <a href="https://github.com/Amanmawar17" target="_blank">
                    <FaGithub className="text-primary h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aman-mawar-2139161b1/"
                    target="blank"
                  >
                    <FaLinkedin className="text-primary h-6 w-6" />
                  </a>
                  <a href="https://twitter.com/aman_mawar" target="blank">
                    <FaXTwitter className="text-primary h-6 w-6" />
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
      <TechnTools />
    </>
  );
}

export default Home;
