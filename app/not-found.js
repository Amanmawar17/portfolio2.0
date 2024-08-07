"use client"
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

import notfound from "../app/assets/notfound.svg";
import Image from 'next/image';

function NotFound() {
  const [count, setCount] = useState(5);
  const navigate = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(timer);
      navigate.push("/");
    }

    return () => clearInterval(timer);
  }, [count, navigate]);
  return (
    <section className="h-screen grid place-content-center">
      <div className="max-w-xl shadow-2xl px-8 py-12 bg-input rounded-radius">
        <h3>I think you come to a wrong page, due to some error.</h3>
        <Image src={notfound} alt="not found image" className="w-3/4 m-auto" />
        <div className="grid gap-5 place-content-center">
          <h4>Redirecting to the Home page in {count} seconds.</h4>{" "}
          <Link href="/" className="flex justify-center">
          <button
            className="outline outline-2 outline-primary rounded-sm bg-primary hover:bg-input text-background hover:text-primary p-2"
          >
            Back to Home
          </button></Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;