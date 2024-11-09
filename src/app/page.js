import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import ModelsShowcase from '@/components/sections/ModelsShowcase'
import About from '@/components/sections/About'
import Navbar from '@/components/ui/navbar'
import Container from '@/components/ui/container'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Container className="pt-16"> {/* pt-16 para compensar el navbar fixed */}
        <Hero />
        <Introduction />
        <ModelsShowcase />
        <About />
      </Container>
    </main>
  )
}
