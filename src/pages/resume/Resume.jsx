import {experience} from "../../data/data"

function Card(value){
    const { id, position, duration, company, tech, desc } = value.details;
    return(
        <div key={id} className="grid grid-flow-col place-content-center gap-20 max-w-3xl px-6 py-10 rounded-sm dark:bg-accentwhite dark:text-black shadow-2xl dark:shadow-sm">
            <div>
                <h3 className="text-lg ">{position}</h3>
                <p className="text-sm">{duration}</p>
                <h4 className="text-xl text-secondary">{company}</h4>
            </div>
            <div>
                <h3>Tech-Stack: <span className="text-sm text-secondary">{tech}</span> </h3>
                <ul>
                    {desc.map((item, index)=>(
                    <li key={index} className="list-disc">{item}</li>
                    ))}
                    </ul>
            </div>
        </div>
    )
}

function Resume() {
  return (
    <section id="resume" className="py-8 min-h-[82vh]">
    <div className="flex justify-center flex-col">
        <div className="flex justify-start lg:justify-center items-center">
            <h1 className="text-5xl text-primary dark:text-accentwhite font-semibold">Resume</h1>
            <button
            className="inline absolute right-3 rounded-sm bg-secondary text-base10 hover:bg-secondary/80 p-2">
            Download CV</button>
        </div>
        <section className="grid place-content-center py-8">
            <div className="">
                {experience.map((item, index) => (
                    <Card details={item} key={index} />
                )
                )}
            </div>
        </section>
    </div>
</section>

  )
}

export default Resume