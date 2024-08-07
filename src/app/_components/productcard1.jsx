import React from "react";
import FillButton from "./fillbutton";
import { motion } from "framer-motion";

function ProductCard1() {
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
      className="w-80 h-96 border bg-cover bg-[url('/solar2.jpg')] rounded-tr-2xl rounded-bl-2xl"
    >
      <div className="w-80 h-96 border bg-black opacity-90 rounded-tr-2xl rounded-bl-2xl p-8 text-white">
        <h1 className="font-semibold text-2xl ">Solar Batteries</h1>
        <p className="my-4 ">
          {
            "Our solar batteries store excess energy for reliable power when the sun isn’t shining, ensuring greater energy independence and efficiency. Designed for durability and high performance, they provide a sustainable solution for uninterrupted energy supply."
          }
        </p>
        <div className="z-20">
          <FillButton name={"More Info"} onClick={""} link={"/"} />
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard1;
