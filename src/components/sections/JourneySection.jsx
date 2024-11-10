'use client';
import { motion } from "framer-motion";
import ModelScene from "@/components/scenes/ModelScene";
import IcosahedronModel from "@/components/models/IcosahedronModel";
import { Sparkles, Rocket, Stars } from 'lucide-react';
import CubeModel from "../models/CubeModel";

const JourneySection = () => {
  return (
    <section className="min-h-[80vh] relative flex items-center py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-30" />

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 px-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1 border border-white/10"
          >
            <Stars className="w-3 h-3 text-purple-300" />
            <span className="text-xs text-gray-300">Begin Your Journey</span>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Ready to dive into the world of 3D?
            </h2>
            
            {/* Journey Steps */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg mt-1">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Start with a Dream</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Every great project begins with imagination. Let your creativity flow and watch as ideas take shape in three dimensions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg mt-1">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Transform Reality</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Watch as your ideas materialize before your eyes. Each shape, each movement tells a part of your story.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start Creating
            </motion.button>
          </div>
        </motion.div>

        {/* 3D Model Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] lg:h-[600px]"
        >
          {/* Gradient overlay for model */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-cyan-500/10 rounded-2xl" />
          
          <ModelScene
            environmentPreset="night"
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <CubeModel />
          </ModelScene>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
