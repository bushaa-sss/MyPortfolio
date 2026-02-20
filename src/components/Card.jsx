import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  const content = (
    <div
      className={`bg-dark-card/50 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 shadow-premium-card hover:border-primary/30 transition-all duration-300 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
      }}
      {...props}
    >
      {children}
    </div>
  )

  if (hover) {
    return (
      <motion.div
        whileHover={{ translateY: -12, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export default Card
