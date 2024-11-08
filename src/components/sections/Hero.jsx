'use client';
import { motion } from "framer-motion";
import IcosahedronModel from "../models/IcosahedronModel";
import ModelScene from "../scenes/ModelScene";

const Hero = () => {
  return (
    <section className="flex min-h-screen"> {/* Aseguramos altura mínima del contenedor padre */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-20 lg:py-40 gap-6 mb-16 w-2/5"
      >
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Exploring Three.js Magic
        </h1>
        
        <p className="text-xl text-neutral-400 text-center">
          A journey through 3D web graphics, showcasing the power and beauty of Three.js
        </p>
      </motion.div>
    
      <motion.div 
        className="w-3/5 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 via-slate-900 to-slate-900" // Quitamos my-auto ya que queremos que ocupe todo el alto
        style={{ height: '100vh' }} // Aseguramos altura específica
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ModelScene environmentPreset="sunset" className="h-full"> {/* Aseguramos que ModelScene ocupe todo el alto */}
        <IcosahedronModel 
     
    />
        </ModelScene>
      </motion.div>
    </section>
  );
};

export default Hero;
