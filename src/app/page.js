'use client';
import Introduction from '@/components/sections/Introduction'
import ModelsShowcase from '@/components/sections/ModelsShowcase'
import Container from '@/components/ui/container'
import InteractiveCubeSection from '@/components/sections/InteractiveCubeSection'
import SecondSection from '@/components/sections/SecondSection'
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero /> {/* Sin Container */}
      <Container>
        <SecondSection/>
        <InteractiveCubeSection />
        <Introduction />
        <ModelsShowcase />
      </Container>
    </main>
  )
}
