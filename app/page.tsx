import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Espacio para la siguiente sección (Work) */}
      <section id="work" className="min-h-screen bg-foreground/[0.02]">
        
      </section>
    </main>
  );
}
