

function Resume() {
  return (
    <section id="resume" className="py-8 min-h-[82vh]">
    <div className="flex justify-center flex-col">
        <div className="flex justify-start lg:justify-center items-center">
            <h1 className="text-5xl text-secondary font-semibold">Resume</h1>
            <button
            className="inline absolute right-3 outline-2 outline outline-secondary rounded-xl bg-white text-secondary hover:bg-secondary hover:text-base10 p-2">
            Download CV</button>
        </div>
        {/* <div className="flex flex-col justify-center items-center px-8" >
            <div className="flex justify-start sm:w-96 md:w-[600px] lg:w-[950px] my-10">
                <h1 className="text-3xl text-secondary font-semibold">Exprience</h1>    
            </div>
            <div id="card" className="bg-accentwhite rounded-3xl overflow-hidden max-w-4xl border-t-extra1 border-t-4 shadow-md">
                <div className="grid place-content-center gap-3 grid-cols-3 p-14">
                    <div className="w-64">
                        <h1 className="text-2xl font-semibold text-secondary">{{work.position}}</h1>
                        <h3 className="my-2">{{work.company}}</h3>
                        <h4 className="">{{work.duration}}</h4>
                    </div>
                    <div className="text-lg col-span-2">
                        <h1 className="font-semibold">Tech - Stack : <span className="font-medium">{{work.stack}}</span></h1>
                        <li>{{work.desc1}}</li>
                        <li>{{work.desc2}}</li>
                        <li>{{work.desc3}}</li>
                    </div>
                </div>                
            </div>
        </div>
        <div className="flex flex-col justify-center items-center px-8" >
            <div className="flex justify-start sm:w-96 md:w-[600px] lg:w-[950px] my-10">
                <h1 className="text-3xl text-secondary font-semibold">Communities</h1>    
            </div>
            <div id="cardcom" className="bg-accentwhite rounded-3xl overflow-hidden max-w-4xl border-t-extra2 border-t-4 shadow-md">
                <div className="grid place-content-center gap-3 grid-cols-3 p-14">
                    <div className="w-64">
                        <h1 className="text-2xl font-semibold text-secondary">{{com.position}}</h1>
                        <h3 className="my-2">{{com.name}}</h3>
                        <h4 className="">{{com.duration}}</h4>
                    </div>
                    <div className="text-lg col-span-2">
                        <li>{{com.desc1}}</li>
                        <li>{{com.desc2}}</li>
                    </div>
                </div>                
            </div>
        </div> */}
    </div>
</section>

  )
}

export default Resume