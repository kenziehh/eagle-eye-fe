import Navbar from "@/components/shared/navbar";
import AboutUs from "@/sections/home/about-us";
import Hero from "@/sections/home/hero";
import HowItWorks from "@/sections/home/how-it-works";
import Pricing from "@/sections/home/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Pricing /> 
      <main>

      </main>
    </>

  );
}
