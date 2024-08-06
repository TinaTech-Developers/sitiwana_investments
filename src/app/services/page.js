import React from "react";
import PagesHero from "../_components/pageshero";
import About from "../_components/about";

function page() {
  return (
    <div>
      <PagesHero
        head={"Our Services"}
        subtitle={"Home / Services"}
        text={"Allow us to present our range of services to you."}
      />
      <About />
    </div>
  );
}

export default page;
