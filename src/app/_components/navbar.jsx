"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Button from "./Button";

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact ", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between bg- py-4  md:px-10 px-7 h-[5rem] border-b-">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold text-blue-950">Sitawa</h1>
          <span className="font-bold text-blue-950 text-xs translate-y- uppercase">
            Investments
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <IoMdClose color="[#000818]" />
          ) : (
            <IoMdMenu color="[#000818]" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static text-[#000818] bg-white w-full mx-auto   x-[-1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open
            ? "top-20 opacity-100 border-r-4 border-blue-800  border-l-4 "
            : "top-[-490px]"
        } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
              <a
                href={link.link}
                className="text-[#000818]  hover:text-blue-900 duration-400"
              >
                {link.name}
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:grid">
          <Button name={"Get Quote"} onClick={""} link={"/contact"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
