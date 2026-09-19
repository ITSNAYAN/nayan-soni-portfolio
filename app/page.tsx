import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { CursorSpotlight } from "@/components/shared/CursorSpotlight";
import { Preloader } from "@/components/shared/Preloader";
import { ScrollFrame } from "@/components/shared/ScrollFrame";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <CursorSpotlight />
      <Nav />
      <main className="relative">
        <Hero />
        <ScrollFrame outer="coral">
          <About />
        </ScrollFrame>
        <ScrollFrame outer="dark">
          <Stack />
        </ScrollFrame>
        <ScrollFrame outer="coral">
          <Experience />
        </ScrollFrame>
        <Projects />
        <ScrollFrame outer="coral">
          <Contact />
        </ScrollFrame>
      </main>
      <Footer />
    </>
  );
}
