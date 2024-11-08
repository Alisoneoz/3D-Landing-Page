'use client';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 mt-20 border-t border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">About This Project</h3>
            <p className="text-neutral-400 text-sm">
              An exploration of 3D graphics on the web using Three.js, React Three Fiber, and modern web technologies.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Technologies Used</h3>
            <ul className="text-neutral-400 text-sm space-y-2">
              <li>• Three.js</li>
              <li>• React Three Fiber</li>
              <li>• Next.js</li>
              <li>• Framer Motion</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="text-neutral-400 text-sm space-y-2">
              <li>
                <a 
                  href="https://threejs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Three.js Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.pmnd.rs/react-three-fiber/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  React Three Fiber Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Alison Estephany. Made with passion and React Three Fiber, using with the help of PearAI, The Best Code Editor.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
