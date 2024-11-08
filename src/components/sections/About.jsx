'use client';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="text-center space-y-6"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-white">About This Project</h2>
      <p className="text-neutral-400 max-w-2xl mx-auto">
        This showcase explores the capabilities of Three.js in creating interactive 3D experiences on the web.
        Each model demonstrates different aspects of 3D rendering, from material properties to lighting and environment mapping.
      </p>
    </motion.section>
  );
};

export default About;
