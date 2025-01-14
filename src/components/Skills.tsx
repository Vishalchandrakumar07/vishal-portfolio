import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
  'GraphQL', 'MongoDB', 'PostgreSQL', 'Git', 'AWS', 'Docker'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-4 text-center"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

