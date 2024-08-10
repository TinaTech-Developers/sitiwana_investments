"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/+263777073400",
      "Good Day Sitawa Investments, can I know more about your business"
    );
  };

  return (
    <div className="flex items-center fixed bottom-4 right-4 ">
      <span className="z bg-green-500 p-1 pr-4 text-sm rounded-l-full text-white translate-x-4">
        Chat with Us
      </span>
      <button
        onClick={handleClick}
        className=" z-20 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={28} />
        {/* <Image
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        height={10}
        width={10}
        className="w-8 h-8"
      /> */}
      </button>
    </div>
  );
};

export default WhatsappButton;
