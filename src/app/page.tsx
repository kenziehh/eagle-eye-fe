import Navbar from "@/components/shared/navbar";
import AboutUs from "@/sections/home/about-us";
import Hero from "@/sections/home/hero";
import HowItWorksTimeline from "@/sections/home/how-it-works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      {/* <HowItWorksTimeline/> */}
      <main>

      </main>
    </>

  );
}
