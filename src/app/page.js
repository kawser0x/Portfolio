import AboutPage from "./about/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
