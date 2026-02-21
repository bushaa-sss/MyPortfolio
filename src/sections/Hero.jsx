import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen bg-dark-bg flex items-center justify-center pt-20 pb-10 md:pt-0 md:pb-0 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent"
            >
              Full-Stack MERN Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl bg-gradient-primary bg-clip-text text-transparent font-bold mb-6"
            >
              Real-Time Systems Builder | Scalable Web & Mobile Applications
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary mb-8 max-w-xl leading-relaxed"
            >
              I am a passionate Full-Stack Developer specializing in building scalable, real-time applications using modern web technologies. I focus on clean architecture, performance optimization, and secure backend systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <Button size="lg" variant="primary">
                  View Projects
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                href="/assets/resume.pdf"
                download="Bushra Saleh.pdf"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-md relative"
            >
              {/* Outer glow */}
              <motion.div
                animate={{ boxShadow: ['0 0 40px rgba(0, 212, 255, 0.3)', '0 0 80px rgba(0, 212, 255, 0.6)', '0 0 40px rgba(0, 212, 255, 0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"
              />

              {/* Main card */}
              <div className="relative w-full h-96 bg-dark-card/40 backdrop-blur-2xl rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden shadow-premium-lg">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl"
                  >
                    💻
                  </motion.div>
                  <div className="text-center">
                    <p className="text-center text-text-secondary text-sm leading-relaxed">
                      Building <span className="text-primary font-semibold">scalable solutions</span> with React, Node.js & MongoDB
                    </p>
                  </div>

                  {/* Tech badges */}
                  <div className="flex gap-2 flex-wrap justify-center">
                    {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <div className="p-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
            <HiArrowDown className="text-2xl text-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
