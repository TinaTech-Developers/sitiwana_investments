import React from "react";
import Image from "next/image";
function Testimonial() {
  return (
    <div className="flex flex-col md:w-[60%] h-full p-4 md:px-32 items-center justify-center mx-auto gap-4">
      <p>
        Working with Sitiwana Investments has been a game-changer for us. Their
        advanced satellite technology has transformed our connectivity, ensuring
        we stay connected seamlessly, no matter where we are. Highly recommended
        for their expertise and reliable solutions!
      </p>
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={"/solar.jpg"}
          height={50}
          width={50}
          alt="testimonials"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="text-blue-950 uppercase font-semibold">Tinashe Phiri</p>
          <p className="text-gray-500 uppercase text-xs">
            SOFTWARE DEVELOPER - TinaSoft NEXUS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
