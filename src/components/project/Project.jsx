import Tilt from "react-parallax-tilt";

function Project() {
  return (
    <section className="py-8 min-h-[82vh]" id="project">
      <div className="flex justify-center flex-col items-center px-8">
        <h1 className="text-5xl text-extra1 font-semibold py-2">Projects</h1>
        <div className="grid grid-cols-3 place-content-evenly my-4 text-white gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          <Tilt scale={1.1}
              transitionEasing="0.8"
              glareEnable={true}
              glareMaxOpacity={0.5}>
          <div className="card w-80 outline outline-1">
            <figure>
              <img
                className=""
                src="assets/images/demo-card.png"
                alt="Project's image"
              />
            </figure>
            <div className="flex p-2 items-center">
              <h1 className="mr-2">Frontend Projects</h1>
              <a
                href="https://github.com/Amanmawar17/frontend-projects"
                target="_blank"
              ></a>
            </div>
            <div className="p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                assumenda voluptates sapiente.
              </p>
            </div>
          </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Project;
