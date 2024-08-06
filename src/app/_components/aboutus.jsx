"use client";
import React from "react";
import { motion } from "framer-motion";

import FillButton from "./fillbutton";
import Image from "next/image";

function About() {
  return (
    <div className="bg-gray-100 pb-10 ">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="md:text-3xl font-semibold my-10">
          Who Are We?
          {/* <span class="block max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[120px] -translate-y-1"></span>
          <span class="block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[180px] -translate-y-2"></span> */}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[95%] mx-auto mb-10">
        <div className="col-span-2 bg-white text-blue-950 h-full flex flex-col items-center justify-center ">
          <motion.div
            initial={{ x: 0, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
            }}
            className=""
          >
            <Image
              src={"/solar1.jpg"}
              alt="sitiwana"
              height={300}
              width={500}
            />
          </motion.div>
        </div>
        <div className="col-span-1 md:col-span-2 p-10 border border-white">
          <motion.h1
            initial={{ x: 0, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="pb-"
          >
            {
              " At Sitawa Investments, we are dedicated to empowering individuals and communities through innovative and sustainable solutions. Our mission is to provide top-notch products and services in the realms of renewable energy and satellite technology. We specialize in the sale and installation of high-quality solar systems, including a wide range of solar panels and solar batteries, designed to meet the unique needs of our clients. Additionally, we offer expert satellite services, encompassing the sale and installation of satellite decoders, as well as subscription management. With a commitment to excellence and customer satisfaction, Sitawa Investments is poised to be a leader in the industry, fostering a greener and more connected future for all."
            }
          </motion.h1>
          <div className="w-20 md:w-[200px] mt-4">
            <FillButton name={"View More"} link={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
