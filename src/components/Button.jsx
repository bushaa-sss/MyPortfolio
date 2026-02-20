import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden backdrop-blur-sm'

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-premium hover:shadow-premium-lg hover:scale-105 active:scale-95 border border-primary/30 hover:border-primary/60',
    secondary: 'border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary shadow-glow backdrop-blur-md',
    outline: 'border-2 border-border-dark text-text-primary hover:border-primary hover:bg-primary/10 hover:shadow-glow transition-all',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
