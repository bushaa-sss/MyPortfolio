import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { FiCode, FiLayers, FiServer } from 'react-icons/fi'

const About = () => {
  const operatingMode = [
    { label: 'Build Focus', value: 'Product features that ship and scale' },
    { label: 'Stack Zone', value: 'React, Node.js, Express, MongoDB' },
    { label: 'Workflow', value: 'Design, develop, test, deploy, iterate' },
  ]

  const highlights = [
    {
      icon: FiLayers,
      title: 'Product-Driven Frontend',
      description: 'I turn requirements into clean, reusable UI systems with responsive behavior and intuitive user flow.',
      color: 'from-cyan-500 to-primary',
      badge: 'UI Architecture',
    },
    {
      icon: FiServer,
      title: 'Reliable Backend Thinking',
      description: 'I design API layers with clear contracts, secure authentication, and maintainable service structure.',
      color: 'from-indigo-500 to-secondary',
      badge: 'API + Security',
    },
    {
      icon: FiCode,
      title: 'Tool-Play Execution',
      description: 'I enjoy exploring tooling deeply, from local dev speed to production deployment and performance tuning.',
      color: 'from-emerald-500 to-cyan-500',
      badge: 'Delivery Engine',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <Section
      id="about"
      title="How I Build"
      subtitle="Creative full-stack execution with a practical engineering mindset."
      dark={true}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-text-secondary text-lg md:text-xl max-w-4xl mx-auto text-center mb-10 leading-relaxed"
      >
        I am a Full MERN Stack Developer who enjoys building complete product flows, from polished interfaces
        to production-ready APIs. My style blends creative UI craft with structured backend engineering so each
        feature feels good for users and stays robust in real use.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        {operatingMode.map((item) => (
          <motion.div key={item.label} variants={itemVariants}>
            <div className="glass-panel rounded-xl px-4 py-4 border border-primary/20 h-full">
              <p className="mono text-xs uppercase tracking-[0.08em] text-primary">{item.label}</p>
              <p className="mt-2 text-sm text-text-primary leading-relaxed">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map((item) => {
          const IconComponent = item.icon
          return (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="h-full flex flex-col p-7 hover:border-primary/60">
                <div className="flex items-center justify-between gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                    className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl shadow-glow`}
                  >
                    <IconComponent className="text-3xl text-white" />
                  </motion.div>
                  <span className="mono text-[11px] uppercase tracking-[0.08em] px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mt-5 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="w-full mt-6 pt-5 border-t border-primary/20">
                  <div className={`h-1.5 bg-gradient-to-r ${item.color} rounded-full`} />
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default About
