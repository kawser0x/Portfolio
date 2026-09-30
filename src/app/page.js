import Hero from "./hero/page";
import Approach from "@/component/Approach";
import Skills from "@/component/Skills";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Approach />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
