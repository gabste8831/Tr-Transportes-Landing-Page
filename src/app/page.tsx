import Header from "@/components/sections/header/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import Coverage from "@/components/sections/coverage/Coverage";
import Differentiators from "@/components/sections/differentiators/Differentiators";
import Team from "@/components/sections/team/Team";
import Clients from "@/components/sections/clients/Clients";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Differentiators />
        <Team />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
