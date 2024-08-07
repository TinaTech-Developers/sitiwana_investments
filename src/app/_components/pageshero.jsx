"use client";
import React from "react";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

function PagesHero({ text, text1, head, subtitle }) {
  //   let text = "Welcome To Our Luxury Villas";
  //   let text1 = "Click The Button Below for Bookings";

  return (
    <div className="bg-scroll bg-[url('/solar.png')] bg-cover bg-no-repeat w-sreen  h-full">
      <div className="bg-scroll bg-black bg-opacity-70 h-[500px]">
        <div className="px-6 translate-y-80 md:pl-36  ">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=" text-white     "
          >
            <h1 className="text-3xl md:text-5xl font-bold my-6">{head}</h1>
            <p className="text-xl">{subtitle}</p>
          </motion.div>
          <div>
            <span className="w-10 h-56 bg-orange-900"></span>
          </div>
          <div className="text-xl md:text-xl text-start font-light md:pr-96 text-white mt-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [text, text1],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesHero;
