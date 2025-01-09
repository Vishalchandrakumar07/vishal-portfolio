'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'Design.jpeg',
  },
  
  {
    title: 'Meals Generater App',
    description: 'A responsive task management application built with Next.js and GraphQL.',
    image: 'Designer.jpeg',
  },
  {
    title: 'Expense Tracker',
    description: 'A real-time weather dashboard using React and a weather API.',
    image: 'Designers.jpeg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

