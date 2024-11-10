'use client';
import Introduction from '@/components/sections/Introduction'
import ModelsShowcase from '@/components/sections/ModelsShowcase'
import Container from '@/components/ui/container'
import InteractiveCubeSection from '@/components/sections/InteractiveCubeSection'
import SecondSection from '@/components/sections/SecondSection'
import Hero from '@/components/sections/Hero';
import JourneySection from '@/components/sections/JourneySection';
import CreditsSection from '@/components/sections/CreditsSection';
import GalleryFinale from '@/components/sections/GalleryFinale';

export default function Home() {
  return (
    <main>
      <Hero /> {/* Sin Container */}
      <Container>
        <SecondSection/>
        <InteractiveCubeSection />


      
      </Container>
    </main>
  )
}
