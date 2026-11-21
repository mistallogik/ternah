import { Carousel } from "@/components/Carousel";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Realities } from "@/components/Realities";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Realities />
        <Features />
        <Carousel />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
