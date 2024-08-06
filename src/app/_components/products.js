"use client";
import React from "react";
import FillButton from "./fillbutton";
import { motion } from "framer-motion";
import ProductCard from "./productcard";
import ProductCard1 from "./productcard1";
import ProductCard2 from "./poductcard2";
import SatelliteProduct from "./satelliteproduct";

function Products() {
  return (
    <div className="m-4 py-10">
      <h1 className="mt-10 text-3xl font-bold text-center my-6 ">
        Power Up with Solar
      </h1>
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
        whileHover={
          {
            // scale: 1.1,
            // backgroundColor: "#00001C",
            // color: "white",
          }
        }
        transition={{ duration: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-10 "
      >
        <ProductCard />
        <ProductCard1 />
        <ProductCard2 />
      </motion.div>

      <h1 className="mt-16 text-3xl font-bold text-center my-6 ">
        Satellite Dish Solutions
      </h1>
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
        whileHover={
          {
            // scale: 1.1,
            // backgroundColor: "#00001C",
            // color: "white",
          }
        }
        transition={{ duration: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-10 "
      >
        <SatelliteProduct
          title={"HD Satellite Dishes"}
          desc={
            "HD Satellite Dishes provide crystal-clear high-definition TV signals, ensuring sharp picture quality and reliable connection. Easy to install and perfect for enhancing your viewing experience with vibrant visuals and uninterrupted access to your favorite channels."
          }
        />
        <SatelliteProduct
          title={"Signal Amplifiers"}
          desc={
            "Signal Amplifiers boost and enhance satellite signals for clearer reception and better picture quality. Strengthen weak signals to ensure uninterrupted access to your favorite channels. Easy to install for an optimized viewing experience."
          }
        />
        <SatelliteProduct
          title={"LNBs (Low Noise Block Converters)"}
          desc={
            "They capture and convert satellite signals with minimal noise for superior reception. Essential for high-quality satellite TV, they ensure clear and consistent signal performance. Easy to install and crucial for optimal viewing."
          }
        />
      </motion.div>
    </div>
  );
}

export default Products;
