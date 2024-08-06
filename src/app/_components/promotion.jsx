import React from "react";
import FillButton from "./fillbutton";

function Promotion() {
  return (
    <div className=" md:mt-0 bg-fixed bg-cover bg-[url('/solar1.jpg')]">
      <div className="flex flex-col bg-scroll bg-blue-950 w-full h-full  bg-opacity-70 items-center justify-center px-20">
        <h1 className="text-center text-2xl md:text-4xl py-10 pt-32 text-white font-semibold">
          Talk to us about your needs
        </h1>
        <p className="text-xl md:text-2xl text-white ">
          Solutions tailored and scaled to suit your business type and size
        </p>
        <div className="py-10 z-10 text-white">
          <FillButton name={"CONTACT US"} link={"/"} />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
