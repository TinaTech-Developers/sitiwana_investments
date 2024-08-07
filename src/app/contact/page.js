"use client";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import PagesHero from "../_components/pageshero";
import Promotion from "../_components/promotion";

function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l6pkkam", "template_stpplth", form.current, {
        publicKey: "Eo9uSp3q7FYq9TxKF",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <PagesHero
        head={"Contact Us"}
        subtitle={"Home / Contact Us"}
        text={
          "Get in touch with us to learn more about how our services can benefit you."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        <div className=" h-full py-8 my-8 w-full flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            // onSubmit={handleSubmit}
            className="h-full w-full p-8  border border-blue-900"
          >
            <p className="font-bold text-xl text-center py-2">Contact Us</p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Name</p>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Email</p>
                <input
                  type="text"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Message</p>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="bg-gray-300 py-2 px-4  w-full outline-none border-none col-span-3"
                ></textarea>
              </div>
              <div className="flex items-end">
                <div className="border py-[px] border-blue-950 w-24 text-center">
                  <button
                    onClick={sendEmail}
                    type="submit"
                    className={`text-sm py-2 w-24 relative px-4  bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
                  >
                    Send
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center mt-16 p-2 bg-gray-900">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60525.10893724779!2d32.09076300382979!3d-18.537065785063447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sno%2022%20robert%20mugabe%20rusape%20zimbabwe!5e0!3m2!1sen!2szw!4v1723058633673!5m2!1sen!2szw"
            width="800"
            height="600"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-96  object-cover "
          ></iframe>
        </div>
      </div>

      <Promotion />
    </div>
  );
}

export default page;
