import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Link from "next/link";
import WhatsappButton from "./_components/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sitawa Investments",
  description:
    "Explore Sitawa, located at No. 22 Robert Mugabe Way, Rusape. We specialize in solar installations, sales, satellite solutions, and cellphone services, providing sustainable energy solutions and seamless connectivity. Discover our innovative products and expert services to power your home and business efficiently. Contact Sitawa today to transform your energy and communication needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
