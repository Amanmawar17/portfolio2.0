import { IconData } from "../data/data";

function TechnTools() {
  return (
    <div className="py-20 grid max-w-sm md:max-w-lg lg:max-w-screen-2xl m-auto px-4 lg:px-10">
      <h3 className="ml-4 text-3xl font-medium font-sans">Languages and Tools <span className="font-Noto text-lg ml-2 text-primary">I Know.....</span></h3>
      <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 place-items-center mt-10">
        {IconData.map((item, index)=>(
          <li key={index} id={index} title={item.toolip} className="list-none">
            <item.icon className="grayscale hover:grayscale-0 hover:scale-110 dark:grayscale-[60%] dark:hover:grayscale-0" size={45}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechnTools;
