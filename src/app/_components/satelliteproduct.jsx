import React from "react";
import FillButton from "./fillbutton";

function SatelliteProduct({ title, desc }) {
  return (
    <div className="w-96 h-80 border bg-cover bg-[url('/dish.jpg')] rounded-tl-2xl rounded-br-2xl">
      <div className="w-96 h-80 border bg-black opacity-90 rounded-tl-2xl rounded-br-2xl p-8 text-white">
        <h1 className="font-semibold text-2xl ">{title}</h1>
        <p className="my-4 ">{desc}</p>
        <div className="z-20">
          <FillButton name={"More Info"} onClick={""} link={"/"} />
        </div>
      </div>
    </div>
  );
}

export default SatelliteProduct;
