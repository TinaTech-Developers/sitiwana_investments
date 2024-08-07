"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center m-4 p-10 md:w-[70%]">
        <h1 className="text-2xl md:text-3xl font-bold my-4">
          Solar Energy & Satellite Technology
        </h1>

        <p className="">
          {
            "As we stand at a pivotal moment in history, it's crucial to unite our efforts in preserving the natural world that sustains us. By embracing innovative technologies and sustainable practices, we can make a significant impact. Two powerful tools in this mission are solar power and satellite technology."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <motion.div
          initial={{ x: 0, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="col-span-1 p-4 px-10 m-4 bg-blue-950 border text-white "
        >
          <h1 className="text-2xl font-semibold my-3">
            Discover Top Entertainment & Edutainment with Satellite
          </h1>
          <p>
            {
              "Unlock a world of entertainment and edutainment with Sitawa Investments premium satellite dish services. Enjoy top-tier movies, TV shows, live sports, and global news in stunning HD, along with an extensive range of educational channels featuring documentaries, interactive learning programs, and more. Our flexible packages cater to all interests and budgets, delivering reliable service and exceptional viewing quality. Transform your home entertainment experience—contact us today to explore our offerings and start your journey with endless content at your fingertips."
            }
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 0, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="col-span-1 p-4 px-10 m-4 border border-blue-950 "
        >
          <h1 className="text-2xl font-semibold my-3">
            Harness the Power of the Sun
          </h1>
          <p>
            {
              "At Sitiwana Investiments, we're dedicated to transforming the way we power our world. By choosing solar energy, you're not just making an eco-friendly choice—you're investing in a sustainable future. Our state-of-the-art solar panels are designed to capture the sun’s abundant energy and convert it into clean, renewable power for your home or business. Enjoy significant savings on your energy bills while contributing to a healthier planet."
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
