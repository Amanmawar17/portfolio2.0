import Link from "next/link";
import { experience } from "../data/data";

function Card(value) {
  const { id, position, duration, company, tech, desc } = value.details;
  return (
    <div
      key={id}
      className="grid lg:grid-flow-col grid-flow-row place-content-center gap-4 lg:gap-20 max-w-sm lg:max-w-3xl px-6 py-10 rounded-sm dark:bg-foreground dark:text-background shadow-2xl dark:shadow-sm"
    >
      <div>
        <h3 className="text-lg ">{position}</h3>
        <p className="text-sm">{duration}</p>
        <h4 className="text-xl text-secondary">{company}</h4>
      </div>
      <div>
        <h3 className="mb-3">
          Tech-Stack: <span className="text-sm text-secondary">{tech}</span>{" "}
        </h3>
        <ul>
          {desc.map((item, index) => (
            <li key={index} className="list-disc text-xs lg:text-sm mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-8 min-h-[84vh]">
      <div className="flex justify-center flex-col">
        <div className="flex justify-start lg:justify-center items-center p-3">
          <h1 className="text-5xl text-primary font-semibold">
            Resume
          </h1>
          <button className="inline absolute right-3 rounded-sm bg-secondary text-background dark:text-foreground font-medium hover:brightness-90 p-2 cursor-pointer">
           <Link href="https://drive.google.com/file/d/1b60zqff1eqRIk-gtTogdtvmkzgEPBrOI/view?usp=sharing" target="blank">Download CV</Link> 
          </button>
        </div>
        <section className="grid place-content-center py-8">
          <div className="">
            {experience.map((item, index) => (
              <Card details={item} key={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Resume;
