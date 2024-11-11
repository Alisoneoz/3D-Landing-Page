'use client'
import { motion } from 'framer-motion'
import Container from './container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-20 border-t border-white/10 bg-black/20 backdrop-blur-sm"
    >
      <Container>
        <p className="pt-20 text-center text-gray-400">
          © {currentYear} Playing with ThreeJS. Built with 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mx-1">
            ❤️
          </span> 
          by Alison Estephany, with the help of <a href='https://trypear.ai/' className='font-bold'>PearAI🍐 The Best Code Editor</a> 
        </p>
      </Container>
    </motion.footer>
  )
}

export default Footer
