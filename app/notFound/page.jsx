"üse client"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import notfound from "../assets/notfound.svg";
import Image from "next/image";

function NotFound() {
  const [count, setCount] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(timer);
      navigate("/");
    }

    return () => clearInterval(timer);
  }, [count, navigate]);
  return (
    <section className="h-screen grid place-content-center">
      <div className="max-w-xl shadow-2xl px-8 py-12">
        <h3>I think you come to a wrong page, due to some error.</h3>
        <Image src={notfound} alt="not found image" className="w-3/4 m-auto" />
        <div className="grid gap-5 place-content-center">
          <h4>Redirecting to the Home page in {count} seconds.</h4>{" "}
          <a href="/" className="flex justify-center">
          <button
            className="outline outline-2 outline-primary rounded-sm bg-primary hover:bg-accentwhite text-base10 
                dark:hover:bg-accentblack hover:text-primary p-2"
          >
            Back to Home
          </button></a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
