import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import AboutUs from "@/features/home/containers/about-us";
import Hero from "@/features/home/containers/hero";
import HowItWorks from "@/features/home/containers/how-it-works";
import Pricing from "@/features/home/containers/pricing";

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
