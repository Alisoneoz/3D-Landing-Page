'use client';
import { motion } from "framer-motion";
import { Code2, Shapes, Palette, Brain } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl`} />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 ${gradient} rounded-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const GalleryFinale = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Exploring the Boundaries
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through the intersection of code, creativity, and 3D visualization
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Code2}
            title="Technical Excellence"
            description="Built with Next.js, Three.js, and React, showcasing modern web development practices and 3D rendering capabilities."
            gradient="bg-gradient-to-r from-purple-500 to-violet-500"
          />
          
          <FeatureCard
            icon={Shapes}
            title="3D Innovation"
            description="Leveraging advanced Three.js features like custom shaders, dynamic lighting, and interactive controls."
            gradient="bg-gradient-to-r from-cyan-500 to-blue-500"
          />
          
          <FeatureCard
            icon={Palette}
            title="Creative Design"
            description="Blending aesthetic appeal with technical functionality through carefully crafted UI/UX elements."
            gradient="bg-gradient-to-r from-pink-500 to-purple-500"
          />
          
          <FeatureCard
            icon={Brain}
            title="Learning Journey"
            description="Each component represents a step in mastering 3D web development and creative coding."
            gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-lg text-gray-400 italic">
            "The beauty of Three.js lies in its ability to transform imagination into interactive reality"
          </blockquote>
          <div className="mt-4 text-sm text-gray-500">
            Built with passion and curiosity
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryFinale;
