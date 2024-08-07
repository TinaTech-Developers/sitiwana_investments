import Image from "next/image";
import React from "react";
import FillButton from "./fillbutton";
import { motion } from "framer-motion";

function ServiceCard({ image, title, desc }) {
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
      className="w-80 h-96 border bg-blue-950"
    >
      <Image
        src={image}
        alt=""
        width={300}
        height={400}
        className="w-80 h-48 object-cover"
      />
      <div className="p-2">
        <h1 className="text-white font-semibold">{title}</h1>
        <p className="text-white text-sm my-2 mb-4">{desc}</p>
        <FillButton name={"View More"} link={"/services"} onClick={""} />
      </div>
    </motion.div>
  );
}

export default ServiceCard;
