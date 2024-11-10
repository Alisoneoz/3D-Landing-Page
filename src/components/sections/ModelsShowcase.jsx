'use client';
import { motion } from "framer-motion";
import ModelScene from "@/components/scenes/ModelScene";
import dynamic from 'next/dynamic';
import { Code2, Sparkles, Box } from 'lucide-react';

const CubeModel = dynamic(() => import("@/components/models/CubeModel"), {
  ssr: false,
  loading: () => null
});

const DodecahedronModel = dynamic(() => import("@/components/models/DodecahedronModel"), {
  ssr: false,
  loading: () => null
});

const ModelCard = ({ title, description, children, icon: Icon, gradient }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative group"
  >
    {/* Gradient overlay that appears on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-xl" />
    
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      {/* Model Display */}
      <div className="h-[300px] relative">
        <ModelScene environmentPreset="sunset" className="w-full h-full">
          {children}
        </ModelScene>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${gradient}`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  </motion.div>
);

const ModelsShowcase = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 opacity-30" />
      
      {/* Section Header */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-16 relative z-10"
      >
        <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
          <Sparkles className="w-3 h-3 text-purple-300" />
          <span className="text-xs text-gray-300">Interactive Models</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Explore Our 3D Showcase
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Discover our collection of interactive 3D models, each crafted to demonstrate different aspects of Three.js capabilities.
        </p>
      </motion.div>

      {/* Models Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <ModelCard
          title="Geometric Harmony"
          description="A mesmerizing cube showcasing advanced material properties and smooth animations."
          icon={Box}
          gradient="bg-gradient-to-r from-purple-500 to-purple-600"
        >
          <CubeModel />
        </ModelCard>

        <ModelCard
          title="Dynamic Forms"
          description="Experience the beauty of geometric transformations and interactive lighting."
          icon={Code2}
          gradient="bg-gradient-to-r from-cyan-500 to-cyan-600"
        >
          <DodecahedronModel />
        </ModelCard>
      </div>
    </section>
  );
};

export default ModelsShowcase;
