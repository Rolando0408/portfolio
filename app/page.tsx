import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsTicker } from "@/components/SkillsTicker";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SkillsTicker />
      
      {/* Espacio para la siguiente sección (Work) */}
      <section id="work" className="min-h-screen bg-foreground/[0.02]">
        
      </section>
    </main>
  );
}
