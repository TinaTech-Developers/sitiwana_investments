"use client";
import React from "react";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

function HeroCard({ text, head }) {
  //   let text = "Welcome To Our Luxury Villas";
  //   let text1 = "Click The Button Below for Bookings";

  return (
    <div className="bg-scroll bg-[url('/solar.png')] bg-cover bg-no-repeat w-sreen  h-full">
      <div className="bg-scroll bg-black bg-opacity-70 h-[600px]">
        <div className="px-6 translate-y-48 md:translate-y-64 md:translate-x-[17%] ">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white  w-80 md:w-[60%]"
          >
            <div className="flex items-center gap-2 my-4 justify-center">
              <div className="w-10 h-1 bg-blue-900"></div>
              <h1 className="text-lg uppercase">Welcome To Sitawa </h1>
              <div className="w-10 h-1 bg-blue-900"></div>
            </div>
            <div>
              <span className="w-10 h-56 bg-blue-900"></span>
            </div>
            <h1 className="  text-white uppercase text-3xl md:text-4xl font-bold  text-center">
              {head}
            </h1>
            <div className="text-xl  text-center font-light  text-white mt-4">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [text],
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
