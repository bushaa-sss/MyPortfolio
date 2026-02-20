import React from 'react'
import { motion } from 'framer-motion'

const Section = ({
  id,
  title,
  subtitle,
  children,
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`py-section ${dark ? 'bg-dark-section' : 'bg-dark-bg'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
