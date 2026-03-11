import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si'
import Section from '../components/Section'
import Card from '../components/Card'

const TechStack = () => {
  const stack = [
    {
      name: 'React',
      description: 'Component-driven UI systems with hooks and state patterns.',
      icon: SiReact,
      accent: 'text-cyan-300',
    },
    {
      name: 'Next.js',
      description: 'Server-side rendering, routing, and production-ready builds.',
      icon: SiNextdotjs,
      accent: 'text-slate-200',
    },
    {
      name: 'Node.js',
      description: 'API backends, background jobs, and real-time services.',
      icon: SiNodedotjs,
      accent: 'text-emerald-300',
    },
    {
      name: 'TypeScript',
      description: 'Typed codebases for safer refactors and stable APIs.',
      icon: SiTypescript,
      accent: 'text-blue-300',
    },
    {
      name: 'MongoDB',
      description: 'Flexible document models with index planning.',
      icon: SiMongodb,
      accent: 'text-emerald-300',
    },
    {
      name: 'PostgreSQL',
      description: 'Relational data with constraints and reliable transactions.',
      icon: SiPostgresql,
      accent: 'text-sky-300',
    },
    {
      name: 'Tailwind CSS',
      description: 'Token-based styling with fast UI iteration.',
      icon: SiTailwindcss,
      accent: 'text-cyan-300',
    },
    {
      name: 'Docker',
      description: 'Containerized services and reproducible environments.',
      icon: SiDocker,
      accent: 'text-blue-300',
    },
    {
      name: 'Git',
      description: 'Branch-based workflows with clean delivery cycles.',
      icon: SiGit,
      accent: 'text-orange-300',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <Section
      id="tech"
      title="Tech Stack I Work With"
      subtitle="Core technologies I use to ship fast, reliable, and scalable software."
      dark={true}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {stack.map((tool) => {
          const Icon = tool.icon
          return (
            <motion.div key={tool.name} variants={itemVariants}>
              <Card className="h-full group">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-primary/25 bg-primary/10 p-4">
                    <Icon className={`text-2xl ${tool.accent}`} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-text-primary">{tool.name}</p>
                    <p className="text-sm text-text-secondary leading-relaxed transition-all duration-300 group-hover:text-text-primary group-hover:opacity-100 opacity-80">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 to-secondary/40 opacity-60 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default TechStack
