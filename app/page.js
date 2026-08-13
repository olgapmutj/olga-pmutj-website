import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Gallery from "./components/Gallery";
import AboutOlga from "./components/AboutOlga";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      <Navbar />

      <main className="w-full">

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

    </div>
  );
}