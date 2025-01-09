'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="text-purple-500">Vishal</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          A passionate web developer crafting digital experiences
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300"
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  )
}

