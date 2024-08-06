import React from "react";
import FillButton from "./fillbutton";

function ProductCard2() {
  return (
    <div className="w-96 h-80 border bg-cover bg-[url('/solar2.jpg')] rounded-tr-2xl rounded-bl-2xl">
      <div className="w-96 h-80 border bg-black opacity-90 rounded-tr-2xl rounded-bl-2xl p-8 text-white">
        <h1 className="font-semibold text-2xl ">Solar Invertors</h1>
        <p className="my-4 ">
          {
            "Our solar inverters convert sunlight into usable electricity, ensuring efficient performance and maximum energy savings. Reliable and easy to integrate, they’re essential for a seamless solar power system."
          }
        </p>
        <div className="z-20">
          <FillButton name={"More Info"} onClick={""} link={"/"} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard2;
