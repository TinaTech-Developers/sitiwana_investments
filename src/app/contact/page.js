import React from "react";
import PagesLayout from "../_components/pageslayout";
import PagesHero from "../_components/pageshero";

function page() {
  return (
    <div>
      <PagesHero
        head={"Contact Us"}
        subtitle={"Home / Contact Us"}
        text={
          "Get in touch with us to learn more about how our services can benefit you."
        }
      />
    </div>
  );
}

export default page;
