'use client';
import { motion } from "framer-motion";
import { Heart, Bot, Code2, MoveRight, Github } from 'lucide-react';
import ModelScene from "@/components/scenes/ModelScene";
import DodecahedronModel from "@/components/models/DodecahedronModel";

const CreditsSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Content Side - Ocupa 3 columnas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                <Heart className="w-3 h-3 text-purple-300" />
                <span className="text-xs text-gray-300">Special Thanks</span>
              </div>
            </motion.div>

            {/* Credits Cards */}
            <div className="space-y-6">
              {/* PearAI Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg">
                    <Bot className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                    PearAI Magic
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                Shoutout to PearAI as the code editor that made this project possible. It was key in helping me debug all the package version conflicts I had at the beginning. It also helped me realize that my initial mesh files from Spline were wrong (which led me to learn the basics of Blender to create the right media files). PearAI also helped me to explore more functionalities including enhanced orbit controls, further animations controls with Leva, Float, and more. Big shoutout to Pan for their outstanding customer support at PearAI!
                </p>

              </motion.div>

              {/* Tutorial Inspiration Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                    Tutorial Inspiration
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  And to Oliver Larose's Blog Tutorial, which inspired and guided the core features of this project.
                </p>
              </motion.div>
            </div>

            {/* Bottom Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex space-x-6"
            >
              <a
                href="https://pearai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                <span>Visit PearAI</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/oliver-larose"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                <span>Tutorial Source</span>
                <Github className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Model Side - Ocupa 2 columnas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 h-[400px] lg:h-full relative"
          >
            <div className="sticky top-20 h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 rounded-2xl opacity-60" />
              <ModelScene
                environmentPreset="night"
                className="w-full h-full"
              >
                <DodecahedronModel />
              </ModelScene>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreditsSection;
