import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiSettings,
  FiShield,
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Frontend Craft',
      level: 92,
      summary: 'I create responsive interfaces that stay smooth under real data and user interaction.',
      tools: ['React.js', 'React Native', 'JavaScript (ES6+)', 'Tailwind CSS', 'PWA'],
      strength: 'Reusable components, motion-rich UI, and performance-focused rendering.',
      accent: 'from-cyan-500/25 to-blue-500/20',
    },
    {
      icon: FiServer,
      title: 'Backend Systems',
      level: 90,
      summary: 'I build APIs and services designed for maintainability, auth security, and scale.',
      tools: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Multer'],
      strength: 'Clean API contracts, middleware layering, and predictable error handling.',
      accent: 'from-indigo-500/25 to-violet-500/20',
    },
    {
      icon: FiDatabase,
      title: 'Data Architecture',
      level: 86,
      summary: 'I model data carefully so products stay fast, accurate, and easy to evolve.',
      tools: ['MongoDB', 'Mongoose', 'SQL Server', 'Aggregation Pipelines'],
      strength: 'Schema planning, index strategy, and query optimization for real workloads.',
      accent: 'from-emerald-500/25 to-cyan-500/20',
    },
    {
      icon: FiSettings,
      title: 'Deployment + Tooling',
      level: 84,
      summary: 'I move features from local to production with confidence and observability.',
      tools: ['AWS EC2', 'Nginx', 'PM2', 'Vercel', 'Postman'],
      strength: 'Environment setup, process management, reverse proxy, and rollout checks.',
      accent: 'from-amber-400/25 to-orange-500/20',
    },
  ]

  const practiceGrid = [
    { icon: FiLayers, label: 'Design to Code', detail: 'Convert UI ideas into component systems quickly.' },
    { icon: FiShield, label: 'Secure by Default', detail: 'Auth, rate limits, and validation are part of the baseline.' },
    { icon: FiGitBranch, label: 'Ship in Iterations', detail: 'Feature branches, testing, and deployment feedback loops.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      title="Tool Mastery"
      subtitle="A creative full-stack workflow across interface, APIs, data, and production tooling."
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full p-0 overflow-hidden hover:border-primary/60">
                <div className={`h-1 w-full bg-gradient-to-r ${category.accent}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/12 p-3 border border-primary/25">
                        <Icon className="text-primary text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
                    </div>
                    <span className="mono text-xs rounded-full border border-primary/30 px-3 py-1 text-primary bg-primary/10">
                      {category.level}% fluency
                    </span>
                  </div>

                  <p className="mt-4 text-text-secondary text-sm leading-relaxed">{category.summary}</p>

                  <div className="mt-5">
                    <div className="h-2 rounded-full bg-dark-bg/80 border border-primary/15 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="mono px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-xs text-cyan-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-text-secondary border-t border-primary/15 pt-4">
                    <span className="text-primary font-semibold">How I play with these tools:</span> {category.strength}
                  </p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
      >
        {practiceGrid.map((practice) => {
          const Icon = practice.icon
          return (
            <motion.div key={practice.label} variants={itemVariants}>
              <div className="glass-panel rounded-2xl px-5 py-4 border border-primary/20 h-full">
                <div className="flex items-center gap-2">
                  <Icon className="text-primary text-lg" />
                  <p className="font-semibold text-text-primary">{practice.label}</p>
                </div>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{practice.detail}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default Skills
