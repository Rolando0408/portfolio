import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsTicker } from "@/components/SkillsTicker";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SkillsTicker />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
