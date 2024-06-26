import Email from "../../components/emailform/Email.jsx";
import contact from "../../assets/contact.svg";
function Contact() {
  return (
    <section className="flex flex-col justify-center items-center py-8 min-h-[82vh] ">
      <h1 className="font-Rale text-3xl lg:text-5xl text-primary dark:text-accentwhite font-semibold">
        Get In Touch
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center py-10 w-full">
        <Email />
        <div>
          <img src={contact} alt="contact_svg" className="w-80 lg:h-96" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
