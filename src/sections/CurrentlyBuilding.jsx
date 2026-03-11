import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiMessageSquare, FiLayers, FiZap } from 'react-icons/fi'
import Section from '../components/Section'
import Card from '../components/Card'

const CurrentlyBuilding = () => {
  const builds = [
    {
      icon: FiCpu,
      title: 'AI-Powered Developer Tool',
      description: 'Building a workflow assistant that embeds AI APIs into day-to-day developer tasks.',
      tech: ['AI APIs', 'Node.js', 'React', 'Auth'],
      status: 'Active build',
      accent: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: FiMessageSquare,
      title: 'Realtime Chat Application',
      description: 'Shipping a low-latency chat experience with presence, typing indicators, and message delivery states.',
      tech: ['React', 'Node.js', 'WebSockets', 'Redis'],
      status: 'Prototype',
      accent: 'from-indigo-500/20 to-violet-500/20',
    },
    {
      icon: FiLayers,
      title: 'Microservices Learning Project',
      description: 'Decomposing a monolith into small services with clear contracts and deployment pipelines.',
      tech: ['Docker', 'Node.js', 'REST APIs', 'CI/CD'],
      status: 'In progress',
      accent: 'from-emerald-500/20 to-cyan-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
      id="building"
      title="Currently Building"
      subtitle="Active projects that keep my skills sharp and my engineering instincts tuned."
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {builds.map((build) => {
          const Icon = build.icon
          return (
            <motion.div key={build.title} variants={itemVariants}>
              <Card className="h-full p-0 overflow-hidden">
                <div className={`h-1 w-full bg-gradient-to-r ${build.accent}`} />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/15 border border-primary/25 p-3">
                        <Icon className="text-primary text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary">{build.title}</h3>
                    </div>
                    <span className="mono text-[11px] uppercase tracking-[0.08em] px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10">
                      {build.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-text-secondary leading-relaxed flex-grow">
                    {build.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {build.tech.map((item) => (
                      <span
                        key={item}
                        className="mono px-3 py-1 rounded-lg border border-primary/30 bg-primary/10 text-[11px] text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-semibold"
                  >
                    <FiZap className="text-base" />
                    Iterating weekly
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default CurrentlyBuilding
