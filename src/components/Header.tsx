import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold text-purple-500">Vishal</a>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-purple-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-2"
        >
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-500"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

