'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      // Detectar qué sección está en vista
      const sections = ['hero', 'second', 'interactive']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si la sección está en el viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/30 backdrop-blur-md ' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 bg-[#030014]/80 backdrop-blur-sm z-50">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="font-orbitron text-xl text-white hover:text-purple-400 transition-colors">
            Playing with ThreeJS
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero" isActive={activeSection === 'hero'}>Home</NavLink>
            <NavLink href="#tech-stack" isActive={activeSection === 'second'}>Tech stack</NavLink>
            <NavLink href="#interactive" isActive={activeSection === 'interactive'}>Play with the Cube</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-purple-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const NavLink = ({ href, children, isActive }) => (
  <Link 
    href={href}
    className={`text-sm font-poppins ${
      isActive 
        ? 'text-white' 
        : 'text-gray-300 hover:text-white'
    } transition-colors duration-200 relative group`}
  >
    {children}
    <span 
      className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-200 ${
        isActive 
          ? 'w-full' 
          : 'w-0 group-hover:w-full'
      }`}
    />
  </Link>
)

export default Navbar
