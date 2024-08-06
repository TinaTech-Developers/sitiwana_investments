import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Products from "./_components/products";
import AboutUs from "./_components/aboutus";
import Promotion from "./_components/promotion";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <AboutUs />
      <Products />
      <Promotion />
      <Testimonials />
    </main>
  );
}
