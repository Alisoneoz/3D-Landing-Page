'use client';
import { motion } from 'framer-motion';

const ModelLoader = () => {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-white font-orbitron">Loading 3D Model...</p>
      </div>
    </motion.div>
  );
};

export default ModelLoader;
