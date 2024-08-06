import React from "react";
import FillButton from "./fillbutton";

function ProductCard({ image, title, desc }) {
  return (
    <div className="w-96 h-80 border bg-cover bg-[url('/solar2.jpg')] rounded-tr-2xl rounded-bl-2xl">
      <div className="w-96 h-80 border bg-black opacity-90 rounded-tr-2xl rounded-bl-2xl p-8 text-white">
        <h1 className="font-semibold text-2xl ">Solar Panels</h1>
        <p className="my-4 ">
          At Sitiwana Imvestiments, we provide high-performance solar panels
          that offer reliable, efficient power while reducing your carbon
          footprint. With a range of options to fit various needs and budgets,
          we deliver the perfect solar solution for your home or business.
        </p>
        <div className="z-20">
          <FillButton name={"More Info"} onClick={""} link={"/"} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
