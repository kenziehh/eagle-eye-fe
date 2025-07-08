import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import AboutUs from "@/features/home/about-us";
import Hero from "@/features/home/hero";
import HowItWorks from "@/features/home/how-it-works";
import Pricing from "@/features/home/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>

  );
}
