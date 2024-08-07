import Image from "next/image";
import React from "react";
import FillButton from "./fillbutton";

function ServiceCard({ image, title, desc }) {
  return (
    <div className="w-80 h-96 border bg-blue-950">
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
        <FillButton name={"View More"} link={""} onClick={""} />
      </div>
    </div>
  );
}

export default ServiceCard;
