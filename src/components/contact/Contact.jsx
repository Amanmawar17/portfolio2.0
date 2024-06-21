import Email from "./Email.jsx";
import contact from "../../assets/contact.svg";
function Contact() {
  return (
    <section className="flex flex-col justify-center items-center py-8 min-h-[82vh] ">
      <h1 className="font-Rale text-5xl text-extra2 font-semibold">
        Get In Touch
      </h1>
      <div className="flex justify-evenly items-center py-10 w-full">
        <Email />
        <div>
          <img src={contact} alt="contact_svg" className="h-96" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
