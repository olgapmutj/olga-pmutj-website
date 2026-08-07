import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutOlga from "./components/AboutOlga";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Instagram from "./components/Instagram";
import BeforeAfter from "./components/BeforeAfter";
import Map from "./components/Map";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <AboutOlga />
        <Testimonials />
        <Instagram />
        <Contact />
        <Map />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}