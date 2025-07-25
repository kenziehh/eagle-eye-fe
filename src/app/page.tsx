import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import AboutUs from "@/features/home/containers/about-us";
import Demo from "@/features/home/containers/demo";
import FAQ from "@/features/home/containers/faq";
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
      <FAQ />
      <Demo />
      <Footer />
    </>

  );
}
