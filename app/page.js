import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutOlga from "./components/AboutOlga";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutOlga />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}