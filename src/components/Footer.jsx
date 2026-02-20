import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-section border-t border-border-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary"
        >
          <p className="mb-2">
            © {year} Bushra Saleh. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
