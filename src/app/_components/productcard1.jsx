import React from "react";
import FillButton from "./fillbutton";

function ProductCard1() {
  return (
    <div className="w-80 h-96 border bg-cover bg-[url('/solar2.jpg')] rounded-tr-2xl rounded-bl-2xl">
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
    </div>
  );
}

export default ProductCard1;
