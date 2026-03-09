import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiCode, FiCloud, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi'
import { Link } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.18,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  }

  const craftSignals = [
    { title: 'API-First Thinking', detail: 'Secure, scalable backend contracts' },
    { title: 'UI Systems', detail: 'Reusable and responsive frontend blocks' },
    { title: 'Shipping Mindset', detail: 'Deploy-ready features, not demos' },
  ]

  const toolTracks = [
    {
      icon: FiCode,
      label: 'Frontend Craft',
      stack: 'React | Tailwind | Framer Motion',
    },
    {
      icon: FiServer,
      label: 'Backend Engine',
      stack: 'Node.js | Express | REST APIs',
    },
    {
      icon: FiDatabase,
      label: 'Data Layer',
      stack: 'MongoDB | SQL Server',
    },
    {
      icon: FiCloud,
      label: 'Deploy + Ops',
      stack: 'AWS EC2 | Nginx | PM2 | Vercel',
    },
    {
      icon: FiSmartphone,
      label: 'Cross Platform',
      stack: 'React Native | PWA',
    },
  ]

  const commandLog = [
    '$ git checkout feature/prod-ready-dashboard',
    '$ npm run build && npm run test',
    '$ pm2 restart api --update-env',
    '> release passed health checks',
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-dark-bg pt-24 pb-14 md:pt-28 md:pb-12 section-grain"
    >
      <div className="hero-grid-mask absolute inset-0 pointer-events-none" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-36 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -right-20 h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.span
              variants={itemVariants}
              className="signal-pill inline-flex w-fit items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase mono"
            >
              Full MERN Stack Developer
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text-primary"
            >
              Bushra Saleh engineers products from polished UI to production APIs.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed"
            >
              I design and ship full-stack web and mobile apps with React, Node.js, Express, and MongoDB.
              My focus is practical architecture, clean deployment workflows, and real-world performance.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {craftSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="glass-panel rounded-xl px-4 py-3 border border-primary/20"
                >
                  <p className="text-sm font-semibold text-text-primary">{signal.title}</p>
                  <p className="mt-1 text-xs text-text-secondary">{signal.detail}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="projects" smooth={true} duration={450} className="cursor-pointer w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
              <Button
                size="lg"
                variant="secondary"
                href="/assets/Bushra Saleh (Full MERN Stack Developer).pdf"
                download="Bushra_Saleh_Resume.pdf"
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
            className="relative"
          >
            <div className="glass-panel rounded-3xl border border-primary/20 p-6 shadow-premium-lg">
              <div className="flex items-center justify-between gap-4 border-b border-primary/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <span className="mono text-xs text-primary/90">dev-console.bushra</span>
              </div>

              <div className="mt-5 rounded-2xl border border-primary/15 bg-dark-bg/70 p-4">
                {commandLog.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.18, duration: 0.35 }}
                    className={`mono text-xs sm:text-sm ${line.startsWith('>') ? 'text-emerald-300' : 'text-cyan-200'} mb-2 last:mb-0`}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {toolTracks.map((track, index) => {
                  const Icon = track.icon
                  return (
                    <motion.div
                      key={track.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                      className="rounded-xl border border-primary/15 bg-dark-card/70 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="text-primary text-lg" />
                        <p className="text-sm font-semibold text-text-primary">{track.label}</p>
                      </div>
                      <p className="mono mt-1 text-[11px] leading-relaxed text-text-secondary">{track.stack}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mt-8"
        >
          <div className="p-3 rounded-full border border-primary/35 bg-primary/10 backdrop-blur-md">
            <HiArrowDown className="text-2xl text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
