'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h4 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Three.js Magic
            </h4>
            <p className="text-sm text-gray-400 max-w-md">
              Exploring the boundless possibilities of 3D web graphics with Three.js and React
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Models
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-white">Connect</h5>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 hover:text-purple-500 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:your@email.com"
                className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 hover:text-purple-500 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://yourportfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-500 transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Three.js Magic. Built with 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mx-1">
              ❤️
            </span> 
            by Alison Estephany, with the help of <a href='https://trypear.ai/' className='font-bold'>PearAI🍐 The Best Code Editor</a> 
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
