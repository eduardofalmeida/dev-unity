import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Specialists from "@/app/components/Specialists";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import Technologies from "@/app/components/Technologies";
import Advantages from "@/app/components/Advantages";
import About from "@/app/components/About";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialists />
        <Services />
        <Process />
        <Technologies />
        <Advantages />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
