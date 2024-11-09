import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import ModelsShowcase from '@/components/sections/ModelsShowcase'
import About from '@/components/sections/About'
import Navbar from '@/components/ui/navbar'
import Container from '@/components/ui/container'
import CubeScene from '@/components/scenes/CubeScene'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Container className="pt-16">
        <Hero />
        <CubeScene /> {/* Añade el cubo interactivo aquí */}
        <Introduction />
        <ModelsShowcase />
        <About />
      </Container>
    </main>
  )
}
