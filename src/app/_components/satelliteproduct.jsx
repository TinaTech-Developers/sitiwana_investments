import React from "react";
import FillButton from "./fillbutton";
import { motion } from "framer-motion";

function SatelliteProduct({ title, desc }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      whileHover={{
        // scale: 1.1,
        backgroundColor: "#00001C",
        color: "white",
      }}
      transition={{ duration: 0.9 }}
      className="w-80 h-96 border bg-cover bg-[url('/dish.jpg')] rounded-tl-2xl rounded-br-2xl"
    >
      <div className="w-80 h-96 border bg-black opacity-90 rounded-tl-2xl rounded-br-2xl p-8 text-white">
        <h1 className="font-semibold text-2xl ">{title}</h1>
        <p className="my-4 ">{desc}</p>
        <div className="z-20">
          <FillButton name={"More Info"} onClick={""} link={"/"} />
        </div>
      </div>
    </motion.div>
  );
}

export default SatelliteProduct;
