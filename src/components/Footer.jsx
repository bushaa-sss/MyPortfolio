import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-section/80 border-t border-primary/15 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl px-5 py-5 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-text-primary font-semibold">Bushra Saleh</p>
              <p className="text-sm text-text-secondary">
                Full MERN Stack Developer building modern web and mobile products.
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="mono text-xs uppercase tracking-[0.08em] text-primary">
                Build Stack
              </p>
              <p className="text-sm text-text-secondary">React | Node.js | Express | MongoDB</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/20 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-text-secondary">
            <p>© {year} Bushra Saleh. All rights reserved.</p>
            <p className="mono">Designed and shipped with React + Tailwind + Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
