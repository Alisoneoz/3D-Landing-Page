'use client';

import Container from '@/components/ui/container'
import InteractiveCubeSection from '@/components/sections/InteractiveCubeSection'
import SecondSection from '@/components/sections/SecondSection'
import Hero from '@/components/sections/Hero';
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@/lib/gtag'
import Navbar from '@/components/ui/navbar'

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    pageview(pathname)
  }, [pathname])

  return (
    <main>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Container>
        <section id="tech-stack">
          <SecondSection/>
        </section>
        <section id="interactive">
          <InteractiveCubeSection />
        </section>
      </Container>
    </main>
  )
}
