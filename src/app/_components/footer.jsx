import Link from "next/link";
import React from "react";
// import Button from "./Button";
import { FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  let links = [
    { name: "Solar Panel Installation", link: "/services" },
    { name: "System Design and Consultation ", link: "/services" },
    { name: "Energy Efficiency Audits", link: "/services" },
    { name: "Maintenance and Repair", link: "/services" },

    { name: "Dstv Payments", link: "/services " },
  ];

  let mylinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services " },
    { name: "About", link: "/about" },
    { name: "Contact ", link: "/contact" },
    { name: "Products", link: "/services " },
    { name: "Get Quote", link: "/contact " },
  ];

  let dslinks = [
    { name: "Premium", link: "/services" },
    { name: "Compact Plus", link: "/services " },
    { name: "Compact", link: "/services" },
    { name: "Family ", link: "/services" },
    { name: "Access", link: "/services" },
    { name: "Lite ", link: "/services" },
  ];

  return (
    <div className="w-full flex flex-col gap-10 bg-[#07070c]">
      <div className="grid grid-cols-1 md:grid-cols-5 mx-auto  text-gray-500 items-center gap-5">
        <div className="col-span-1 flex flex-col items-start justify-center px-10 gap-1">
          <h1 className="text-start text-xl font-bold uppercase mt-5">
            Services
          </h1>
          <div className="flex flex-col gap-1 text-sm hove:text-blue-600 mt-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="hover:text-blue-600 focus:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-1 px-10">
          <h1 className="text-start text-xl font-bold uppercase ">
            Quick Links
          </h1>
          <div className="flex flex-col gap-1 text-sm hove:text-blue-600">
            {mylinks.map((lk) => (
              <Link
                key={lk.name}
                href={lk.link}
                className="hover:text-blue-600 focus:text-blue-600"
              >
                {lk.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-1 p-10">
          <h1 className="text-start text-xl font-bold uppercase ">
            Dstv Packages
          </h1>
          <div className="flex flex-col gap-1 text-sm hove:text-blue-600 ">
            {dslinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="hover:text-blue-600 focus:text-blue-600 "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-center p-10">
          <h1 className="text-start text-xl font-bold uppercase ">
            Contact Details
          </h1>
          <div className="grid md:flex  items-center justify-between gap-2 z-10">
            {/* <input
              type="text"
              name="subscription"
              className="p-2 bg-white w-[70%]"
            /> */}
            <div className="w-20 md:w-[104px]">
              {/* <Button name={"Subscribe"} link={""} /> */}
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 mt-2">
            <Link href={""}>
              <FaSquareWhatsapp size={25} color="green" />
            </Link>
            <Link href={""}>
              <IoLogoFacebook size={25} color="blue" />
            </Link>
            <Link href={""}>
              <FaLinkedin size={25} color="blue" />
            </Link>
            <Link href={""}>
              <FaXTwitter size={25} color="white" />
            </Link>
          </div>
          <p>Mobile: +263 77 707 3400 | +263 77 791 1029 | +263 71 259 4937</p>
          <p>Email: tawandavurawa@gmail.com</p>
        </div>
      </div>
      <hr className="w-[80%] bg-white mx-auto " />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          {/* <Image
            src={"/logo.jpg"}
            alt="tinasoftlogo"
            height={100}
            width={200}
          /> */}
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
      <div className="bg-blue-950 h-16 flex items-center justify-center">
        <p className="text-xs">
          Copyright © 2024 Sitiwana Investments. Design by{" "}
          <Link href={""} className="text-blue-500">
            TinaSoft Nexus
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
