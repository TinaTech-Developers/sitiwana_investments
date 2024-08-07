import React from "react";
import Link from "next/link";
function Button({ name, link, onClick }) {
  return (
    <Link
      type="submit"
      onClick={onClick}
      href={link}
      className=" border border-blue-900 relative py-2 px-6 z-20 bg-transparent text-gray-blue transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
    >
      {name}
    </Link>
  );
}

export default Button;
