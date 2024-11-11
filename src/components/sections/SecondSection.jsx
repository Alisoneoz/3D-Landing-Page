'use client';
import { motion } from "framer-motion";
import IcosahedronModel from "../models/IcosahedronModel";
import ModelScene from "../scenes/ModelScene";
import { Code2, Move3d, Waves, Bot, Sparkles, ExternalLink } from 'lucide-react';

const SecondSection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen items-center py-10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-30" />
      
      {/* Content Side */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 px-4 lg:px-8 space-y-6 relative z-10"
      >
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 border border-white/10"
          >
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span className="text-xs text-gray-300">Tech Stack</span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Powered by Modern Technology
          </h2>
          
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg">
           Exploring different libraries and tools to create 3D scenes.
          </p>
        </div>

        {/* Feature Cards - Ahora con 4 tecnologías */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all"
          >
            <Code2 className="w-4 h-4 text-purple-500 mb-2" />
            <h3 className="text-sm font-semibold text-white">Three.js</h3>
            <p className="text-xs text-gray-400">Animation of 3D models and scenes.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
          >
             <Move3d className="w-4 h-4 text-cyan-500 mb-2" /> 
            <h3 className="text-sm font-semibold text-white">Blender</h3>
            <p className="text-xs text-gray-400">3D modeling</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all"
          >
            <Waves className="w-4 h-4 text-purple-500 mb-2" />
            <h3 className="text-sm font-semibold text-white">Framer Motion</h3>
            <p className="text-xs text-gray-400">Smooth animations and transitions</p>
          </motion.div>

          <motion.a 
            href="https://trypear.ai/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <Bot className="w-4 h-4 text-cyan-500 mb-2" />
              <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
              Pear AI
            </h3>
            <p className="text-xs text-gray-400">
              AI-powered Development
            </p>
          </motion.a>
        </div>
      </motion.div>
      
      {/* Model Side */}
      <motion.div 
        className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-600/60 via-transparent to-transparent" />
        
        <ModelScene 
          environmentPreset="sunset" 
          className="h-full relative z-10"
        >
          <IcosahedronModel />
        </ModelScene>
      </motion.div>
    </section>
  );
};

export default SecondSection;
