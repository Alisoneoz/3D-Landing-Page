import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import ModelsShowcase from '@/components/sections/ModelsShowcase'
import About from '@/components/sections/About'
import Navbar from '@/components/ui/navbar'
import Container from '@/components/ui/container'
import InteractiveCubeSection from '@/components/sections/InteractiveCubeSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Container className="pt-16">
        <Hero />
  
        <InteractiveCubeSection />


        
        <Introduction />
        <ModelsShowcase />
        <About />
      </Container>
    </main>
  )
}
