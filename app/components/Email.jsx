"use client"

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

function Email() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const email = data.email;
    console.log(email);
    reset();
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bgbg04j", "template_xmzrv8j", form.current, {
        publicKey: "ZlxBkFT46KOoRbsBM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col min-w-80 lg:min-w-96">
      <label>Name</label>
      <input type="text" name="user_name" placeholder="name" className="p-3 mb-3 w-full text-foreground border-[#9294a0] 
      dark:border-extra2 border-solid border-2 rounded-radius " />
      <label>Email</label>
      <input
        type="email"
        className="p-3 mb-3 w-full text-foreground border-[#9294a0] dark:border-extra2 border-solid border-2 rounded-sm"
        placeholder="email@gmail.com"
        {...register("email", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please provide a valid email",
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <label>Message</label>
      <textarea name="message" rows="6" placeholder="message" className="p-3 mb-3 w-full text-foreground border-[#9294a0] 
      dark:border-extra2 border-solid border-2 rounded-radius" />
      <button
        type="submit"
        value="Send"
        onClick={handleSubmit(onSubmit)}
        className="w-32 lg:w-40 m-auto border-2 rounded-radius text-lg font-medium border-extra2 bg-background text-extra2 hover:bg-extra2 hover:text-background dark:hover:text-foreground p-3 my-2"
      >Send it!</button>
    </form>
  );
}
export default Email