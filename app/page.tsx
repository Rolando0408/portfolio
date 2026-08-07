import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsTicker } from "@/components/SkillsTicker";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { PageScrollReset } from "@/components/PageScrollReset";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PageScrollReset />
      <Navbar />
      <Hero />
      <SkillsTicker />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
