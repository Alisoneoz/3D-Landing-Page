"use client";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import ModelsShowcase from "@/components/sections/ModelsShowcase";
import About from "@/components/sections/About";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen  bg-slate-900">
      <div className="max-w-7xl mx-auto p-8 space-y-28">
        <Hero />
        <Introduction />
        <ModelsShowcase />
        <About />
      </div>
      <Footer />
    </main>
  );
}
