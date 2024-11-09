'use client'
import React from 'react'
import InteractiveCubeScene from '../scenes/InteractiveCubeScene'
import { motion } from 'framer-motion'
import { Gamepad2, MousePointerClick, Settings2 } from 'lucide-react'

const InteractiveCubeSection = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-12'>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500'
            >
                Let&apos;s Play with the cube!
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
            >
                <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                    <MousePointerClick className="w-8 h-8 text-purple-500" />
                    <p className="text-center text-sm">Click on the cube to interact with it!</p>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all">
                    <Gamepad2 className="w-8 h-8 text-cyan-500" />
                    <p className="text-center text-sm">Move the mouse to rotate the cube</p>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                    <Settings2 className="w-8 h-8 text-purple-500" />
                    <p className="text-center text-sm">Experiment with settings to transform the cube</p>
                </div>
            </motion.div>
           
            <InteractiveCubeScene />
        </div>
    )
}

export default InteractiveCubeSection
