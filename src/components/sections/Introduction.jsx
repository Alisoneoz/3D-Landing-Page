'use client';
import { motion } from "framer-motion";
import ModelScene from "@/components/scenes/ModelScene";
import CubeModel from "@/components/models/CubeModel";

const Introduction = () => {
  return (
    <section className="flex items-center gap-8 mb-16">
      <motion.div 
        className="w-3/5"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white">
          Fusion of art and technology through interactive 3D models
        </h2>
        <p className="text-neutral-400 mt-4">
          Exploring the intersection of creative design and technical innovation through
          immersive 3D experiences.
        </p>
      </motion.div>
      
      <motion.div 
        className="w-2/5 h-full bg-white"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ModelScene environmentPreset="sunset">
          <CubeModel />
        </ModelScene>
      </motion.div>
    </section>
  );
};

export default Introduction;
