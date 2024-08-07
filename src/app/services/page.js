import React from "react";
import PagesHero from "../_components/pageshero";
import About from "../_components/about";
import Service from "../_components/service";
import Testimonials from "../_components/testimonials";
import Promotion from "../_components/promotion";

function Page() {
  return (
    <div>
      <PagesHero
        head={"Our Services"}
        subtitle={"Home / Services"}
        text={"Allow us to present our range of services to you."}
      />
      <About />
      <Service />
      <Promotion />
      <Testimonials />
    </div>
  );
}

export default Page;
