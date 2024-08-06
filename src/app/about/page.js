import React from "react";
import PagesHero from "../_components/pageshero";
import About from "../_components/aboutus";

function page() {
  return (
    <div>
      <PagesHero
        head={"About Us"}
        subtitle={"Home / About Us"}
        text={"Let us Explore About Sitiwana Investiments"}
      />
      <About />
    </div>
  );
}

export default page;
