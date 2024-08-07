"use client";
import React from "react";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Button from "./Button";
import { motion } from "framer-motion";
import ServiceCard from "./servicecard";

function Service() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold text-center mb-3">Our Services</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5  p-10 mx-auto ">
        <div className=" col-span-1 bottom-0  md:w-64 h-96 w-80  border mx-auto mb-5 md:ml-0 p-5 bg-white">
          <h1 className="text-xl font-bold mb-">Get in touch</h1>
          <hr className="w-10 h-1 bg-blue-900" />
          <div className="grid grid-cols-4 mt-4 ">
            <div className="flex items-center justify-start">
              <FaLocationDot size={24} color="blue" />
            </div>
            <p className="col-span-3 flex items-center justify-start text-sm">
              No. 22 Robert Mugabe Rusape, Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-4 mt-4 ">
            <div className="flex items-center justify-start">
              <IoMdMail size={24} color="blue" />
            </div>
            <p className="col-span-3 flex items-center justify-start text-sm font-semibold">
              sitawainvestments2
              <br />
              @gmail.com
            </p>
          </div>
          <div className="grid grid-cols-4 mt-4 ">
            <div className="flex items-center justify-start">
              <FaPhone size={24} color="blue" />
            </div>
            <p className="col-span-3 flex items-center justify-start text-sm">
              +263 77 707 3400 <br /> +263 77 791 0129 <br /> +263 71 259 4937
            </p>
          </div>
          <div className="grid grid-cols-4 mt-4 ">
            <div className="flex items-center justify-start">
              <FaClock size={24} color="blue" />
            </div>
            <p className="col-span-3 flex items-center justify-start text-sm">
              Mon - Fri 08:00 -1700
            </p>
          </div>
        </div>
        <div className=" col-span-4 gap-10">
          <motion.div
            // initial={{ x: 0, scale: 0 }}
            // whileInView={{ x: 0, scale: 1 }}
            // transition={{
            //   duration: 0.8,
            // }}
            className="flex flex-wrap items-center justify-center gap-5 "
          >
            <ServiceCard
              image={"/solar.png"}
              title={"Solar Panel Installation"}
              desc={
                " Transform your energy usage with our expert solar panel installation services, delivering efficient, reliable, and sustainable power solutions tailored to your needs."
              }
            />
            <ServiceCard
              image={
                "https://4.imimg.com/data4/AM/IA/MY-10863881/service_04-500x500.jpg"
              }
              title={"System Design and Consultation"}
              desc={
                "Get tailored solutions and expert guidance with our system design and consultation services, optimizing your energy strategy for peak performance."
              }
            />
            <ServiceCard
              image={
                "https://images.prismic.io/palmettoblog/b9023faf-333f-4794-991c-fc1e996fd2b4_solar-inverter-maintenance-repair-service-guide.jpg?auto=compress,format&rect=0,0,1200,800&w=1200&h=800"
              }
              title={"Inverter Installation and Maintenance"}
              desc={
                "Ensure peak performance and reliability with our expert inverter installation and maintenance services, designed to keep your solar system running efficiently."
              }
            />
            <ServiceCard
              image={
                "https://satellite-dish-for-sale.com/wp-content/uploads/2015/08/satellite-dish-for-sale.jpg"
              }
              title={"Satellite Dish Installation"}
              desc={
                "Achieve seamless and reliable connectivity with our expert satellite dish installation services, tailored to ensure optimal performance and signal strength."
              }
            />
            <ServiceCard
              image={
                "https://www.express-installers.co.uk/blog/wp-content/uploads/2024/03/Sky-No-Satellite-Signal-1024x605.jpg"
              }
              title={" Troubleshooting and Support"}
              desc={
                "Receive prompt and effective troubleshooting and support to resolve any issues with your systems and ensure continuous, smooth operation."
              }
            />
            <ServiceCard
              image={
                "https://m.media-amazon.com/images/I/61SgwXCmOoL._AC_UF1000,1000_QL80_.jpg"
              }
              title={"Satellite Dish Sales"}
              desc={
                "Explore our wide range of high-quality satellite dishes for sale, designed to deliver exceptional performance and reliability for all your connectivity needs"
              }
            />
            <ServiceCard
              image={
                "https://img2.tradewheel.com/uploads/images/products/7/1/china-best-sale-pv-solar-panel-risen-solar-jinkotrina-panels-330-watt-poly-solar-modules-in-stock1-0376169001591005845.jpg.webp"
              }
              title={"Solar System Sales"}
              desc={
                "Discover top-tier solar systems for sale, offering advanced technology and efficiency to meet all your renewable energy needs."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Service;
