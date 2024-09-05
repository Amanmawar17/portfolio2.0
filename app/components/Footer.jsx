import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DateTime from "./DateTime";

function Footer() {
  return (
    <footer className="py-4 border-t-[1px] lg:h-fit font-mono">
        <div className="max-w-screen-2xl m-auto flex lg:flex-row flex-col justify-around items-center md:flex-row ">

        
    <div className="">
        <p className="text-xl">No Copyright issue <span className="text-secondary"> :)</span></p>
    </div>
    <div className="my-4 md:my-0 text-xl">
        <DateTime/>
    </div>
    <div className="flex justify-center items-baseline">
        <h1 className="text-xl">Socials:</h1>
        <ul className="flex">
            <li className="mx-2"><a href="https://github.com/Amanmawar17" target="_blank"><FaGithub className="h-6 w-6 hover:text-primary"/></a></li>
            <li className="mx-2"><a href="https://www.linkedin.com/in/aman-mawar-2139161b1/" target="blank"><FaLinkedin className="h-6 w-6 hover:text-primary"/></a></li>
            <li className="mx-2"><a href="https://twitter.com/aman_mawar" target="blank"><FaXTwitter className="h-6 w-6 hover:text-primary"/></a></li>
        </ul>   
    </div>
    </div>
</footer>

  )
}

export default Footer