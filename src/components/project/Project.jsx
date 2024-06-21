import Tilt from "react-parallax-tilt";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { project } from "../../Data/data";

function Card(value) {
  const { id, img, title, github, live, tech, desc } = value.details;
  return (
    <Tilt
      scale={1.1}
      transitionEasing="0.9"
      glareEnable={true}
      glareMaxOpacity={0.5}
    >
      <div className="text-accentwhite dark:text-extra1">
        <div
          className="flex justify-evenly"
          key={id}
        >
          <div className="max-w-xs rounded-sm shadow-2xl dark:shadow-sm dark:shadow-accentwhite">
            <img
              className="w-full h-48"
              src={img}
              alt={title + "'s" + "image"}
            />
            <div className="py-4">
              <div className="font-bold text-xl mx-5 flex items-center">
                <h2 className="dark:text-accentwhite dark:hover:text-extra1 text-black">
                  {title}
                </h2>
                <ul className="flex items-center">
                  <li>
                    <a href={github} target="_blank" rel="noreferrer">
                      <FaGithub className="dark:text-accentwhite text-black mx-3" />
                    </a>
                  </li>
                  <li className="">
                    <a href={live} target="_blank" rel="noreferrer">
                      <BsGlobe className="dark:text-accentwhite text-black" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mx-5">
              <h3 className="dark:text-accentwhite text-black">
                Tech: <span className="text-extra1 text-sm">{tech}</span>
              </h3>
              <p className="dark:text-accentwhite text-black text-base">
                {desc}
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

function Project() {
  return (
    <section className="py-8 min-h-[82vh]" id="project">
      <div className="flex justify-center flex-col items-center px-8">
        <h1 className="text-5xl text-extra1 font-semibold py-2">Projects</h1>

        <section className="my-10 px-10">
          <div className="grid grid-cols-1 gap-14 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
            {project.map((item, index) => (
              <Card details={item} key={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Project;
