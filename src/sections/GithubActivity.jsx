import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiTrendingUp, FiStar } from 'react-icons/fi'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

const GithubActivity = () => {
  const username = 'bushaa-sss'
  const [stats, setStats] = useState({
    repos: null,
    followers: null,
    following: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    const loadStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal,
        })
        if (!response.ok) return
        const data = await response.json()
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStats((previous) => ({ ...previous }))
        }
      }
    }

    loadStats()
    return () => controller.abort()
  }, [username])

  const pinnedProjects = [
    {
      name: 'MediTrack',
      description: 'Healthcare portal with role-based auth, scheduling, and notifications.',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/bushaa-sss/MediTrack',
    },
    {
      name: 'Salary Expense Manager',
      description: 'MERN dashboard with JWT security, analytics, and AWS deployment.',
      tags: ['MERN', 'JWT', 'AWS'],
      url: 'https://github.com/bushaa-sss/Salary-Expense-Management',
    },
    {
      name: 'Doctor Scheduling System',
      description: 'Workflow automation for duty rosters and leave management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/bushaa-sss/doctor-scheduling-system',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <Section
      id="github"
      title="Open Source & GitHub Activity"
      subtitle="Evidence of consistent shipping, exploration, and code-first collaboration."
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="p-6 h-full">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Contribution Graph</p>
                <p className="text-lg font-semibold text-text-primary">Recent GitHub activity</p>
              </div>
              <FiTrendingUp className="text-primary text-xl" />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-dark-bg/70 p-4">
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt={`${username} GitHub contribution graph`}
                loading="lazy"
                decoding="async"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Public Repos</p>
                <p className="text-2xl font-bold text-text-primary">
                  {stats.repos ?? '—'}
                </p>
              </div>
              <FiGithub className="text-primary text-2xl" />
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Followers</p>
                <p className="text-2xl font-bold text-text-primary">
                  {stats.followers ?? '—'}
                </p>
              </div>
              <FiStar className="text-primary text-2xl" />
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Following</p>
                <p className="text-2xl font-bold text-text-primary">
                  {stats.following ?? '—'}
                </p>
              </div>
              <FiGithub className="text-primary text-2xl" />
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
      >
        {pinnedProjects.map((project) => (
          <motion.div key={project.name} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <p className="text-lg font-semibold text-text-primary">{project.name}</p>
              <p className="mt-2 text-sm text-text-secondary flex-grow">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-[11px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm font-semibold text-primary hover:text-white transition-colors"
              >
                View Repository
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10">
        <Button variant="primary" size="lg" href={`https://github.com/${username}`}>
          <FiGithub className="text-lg" />
          Explore My GitHub
        </Button>
      </div>
    </Section>
  )
}

export default GithubActivity
