import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FiCheckCircle } from 'react-icons/fi'
import doctorScreenshot1 from '../assets/projects/doctor/doctor-1-dashboard.png'
import doctorScreenshot2 from '../assets/projects/doctor/doctor-2-doctors.png'
import doctorScreenshot3 from '../assets/projects/doctor/doctor-3-duties.png'
import doctorScreenshot4 from '../assets/projects/doctor/doctor-4-schedule.png'
import doctorScreenshot5 from '../assets/projects/doctor/doctor-5-leaves.png'
import salaryScreenshot1 from '../assets/projects/salary-expense/salary-1.png'
import salaryScreenshot2 from '../assets/projects/salary-expense/salary-2.png'
import salaryScreenshot3 from '../assets/projects/salary-expense/salary-3.png'
import salaryScreenshot4 from '../assets/projects/salary-expense/salary-4.png'
import meditrackScreenshot1 from '../assets/projects/meditrack/meditrack-1.png'
import meditrackScreenshot2 from '../assets/projects/meditrack/meditrack-2.png'
import meditrackScreenshot3 from '../assets/projects/meditrack/meditrack-3.png'
import meditrackScreenshot4 from '../assets/projects/meditrack/meditrack-4.png'
import meditrackScreenshot5 from '../assets/projects/meditrack/meditrack-5.png'
import meditrackScreenshot6 from '../assets/projects/meditrack/meditrack-6.png'

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)

  const projects = [
    {
      code: 'SF',
      title: 'Safargo - Integrated Real-Time Ticket Booking',
      tagline: 'Cross-platform booking engine for flights, trains, and buses with synchronized availability.',
      description: 'Built a unified booking flow with real-time seat availability, secure authentication, and backend APIs tuned for concurrent requests.',
      tech: ['React Native', 'Node.js', 'SQL Server'],
      highlights: [
        'Implemented secure auth and protected booking actions',
        'Designed real-time seat update flow for faster user decisions',
        'Structured REST APIs for scalable booking operations',
        'Optimized SQL query paths for concurrent transactions',
      ],
      github: 'https://github.com/bushraa09/SafarGoo',
      demo: null,
      video: 'https://res.cloudinary.com/du6tfdazy/video/upload/v1771588161/Screen_Recording_2026-02-17_212154_loggyj.mp4',
      color: 'from-blue-600 to-cyan-500',
      track: 'Realtime + Transactional Logic',
    },
    {
      code: 'DOC',
      title: 'Doctor Scheduling System',
      tagline: 'Operational scheduling tool for doctor duty and leave management.',
      description: 'Developed a full-stack scheduling platform that reduces manual planning through role-based workflows and automated shift handling.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      highlights: [
        'Built role-based authentication for secured access control',
        'Added leave approval flow with schedule adjustments',
        'Automated duty generation logic for operational consistency',
        'Integrated notification touchpoints for staff awareness',
      ],
      github: 'https://github.com/bushaa-sss/doctor-scheduling-system',
      demo: 'https://doctor-scheduling-system-pied.vercel.app/',
      screenshots: [
        doctorScreenshot2,
        doctorScreenshot1,
        doctorScreenshot3,
        doctorScreenshot4,
        doctorScreenshot5,
      ],
      color: 'from-purple-600 to-pink-500',
      track: 'Workflow Automation',
    },
    {
      code: 'SEM',
      title: 'Salary and Expense Manager',
      tagline: 'Personal finance dashboard with secure APIs, charts, and deploy-ready architecture.',
      description: 'Delivered a complete MERN product for income and expense management with JWT security, analytics dashboards, and production deployment on AWS.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts', 'PM2', 'Nginx', 'AWS EC2'],
      highlights: [
        'Secured all private routes with JWT middleware and protected APIs',
        'Implemented categorized income and expense workflows',
        'Built interactive balance trend visualization using Recharts',
        'Shipped production stack with PM2 process handling and Nginx proxy',
      ],
      github: 'https://github.com/bushaa-sss/Salary-Expense-Management',
      demo: 'http://13.60.219.19/',
      screenshots: [
        salaryScreenshot4,
        salaryScreenshot3,
        salaryScreenshot1,
        salaryScreenshot2,
      ],
      color: 'from-emerald-600 to-cyan-500',
      track: 'MERN + DevOps',
    },
    {
      code: 'MED',
      title: 'MediTrack - Doctor-Patient Management Portal',
      tagline: 'Healthcare workflow suite for consultations, reports, and follow-up automation.',
      description: 'Engineered a healthcare portal with secure doctor authentication, patient records, reminders, and production deployment across Vercel and AWS.',
      tech: [
        'React 19',
        'Vite',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'Firebase Cloud Messaging',
        'Multer',
        'Helmet + Rate Limit',
        'Nginx + PM2',
      ],
      highlights: [
        'Implemented doctor auth with username and clinic-email login options',
        'Designed patient and prescription workflows with clean CRUD structure',
        'Built reminder scheduling with timezone-aware cron execution',
        'Integrated push notification flow using Firebase messaging services',
      ],
      github: 'https://github.com/bushaa-sss/MediTrack',
      demo: 'https://medi-track-lovat.vercel.app/',
      screenshots: [
        meditrackScreenshot1,
        meditrackScreenshot2,
        meditrackScreenshot3,
        meditrackScreenshot4,
        meditrackScreenshot5,
        meditrackScreenshot6,
      ],
      color: 'from-sky-600 to-teal-500',
      track: 'Healthcare Workflow Platform',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
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

  useEffect(() => {
    if (!activeVideo && !activeImage) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeVideo, activeImage])

  const openVideo = (project) => {
    setActiveVideo({
      src: project.video,
      title: project.title,
    })
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  const openImageDemo = (project) => {
    if (!project.screenshots?.length) return
    setActiveImage({
      title: `${project.title} - Live Demo`,
      images: project.screenshots,
      currentIndex: 0,
      demoUrl: project.demo || null,
    })
  }

  const closeImage = () => {
    setActiveImage(null)
  }

  const showNextImage = () => {
    setActiveImage((previous) => {
      if (!previous) return previous
      return {
        ...previous,
        currentIndex: (previous.currentIndex + 1) % previous.images.length,
      }
    })
  }

  const showPreviousImage = () => {
    setActiveImage((previous) => {
      if (!previous) return previous
      return {
        ...previous,
        currentIndex: (previous.currentIndex - 1 + previous.images.length) % previous.images.length,
      }
    })
  }

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected builds where I shaped the UI, API behavior, and production delivery pipeline."
      dark={true}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="overflow-hidden p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="md:col-span-1 relative overflow-hidden min-h-64 md:min-h-auto"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-85`} />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-2xl"
                  />

                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    <span />
                    <div>
                      <p className="text-6xl font-bold text-white/95 leading-none">{project.code}</p>
                      <p className="mono mt-3 text-xs text-white/85">{project.track}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="md:col-span-2 flex flex-col justify-between p-7 md:p-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                      {project.title}
                    </h3>
                    <p className="mono mt-2 text-xs uppercase tracking-[0.08em] text-primary">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.06 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-cyan-100 rounded-full text-xs font-medium border border-primary/35 backdrop-blur-md hover:border-primary/70 transition-all mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-[0.1em] mb-3 mono">
                        Build Notes
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            viewport={{ once: true }}
                            className="text-text-secondary text-sm flex items-start gap-3"
                          >
                            <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-primary/20">
                    <Button variant="primary" size="md" href={project.github}>
                      <HiCode className="text-lg" />
                      View Code
                    </Button>
                    {project.video ? (
                      <Button variant="secondary" size="md" onClick={() => openVideo(project)}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : project.screenshots?.length ? (
                      <Button variant="secondary" size="md" onClick={() => openImageDemo(project)}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : project.demo ? (
                      <Button variant="secondary" size="md" href={project.demo}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-4xl rounded-2xl bg-slate-950/95 p-4 md:p-6 border border-white/10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                {activeVideo.title}
              </h4>
              <button
                type="button"
                className="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 rounded-lg transition"
                onClick={closeVideo}
              >
                Close
              </button>
            </div>
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
              <video
                src={activeVideo.src}
                className="h-full w-full"
                controls
                autoPlay
                playsInline
              />
            </div>
          </motion.div>
        </div>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl rounded-2xl bg-slate-950/95 p-4 md:p-6 border border-white/10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                {activeImage.title}
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/80">
                  {activeImage.currentIndex + 1} / {activeImage.images.length}
                </span>
                <button
                  type="button"
                  className="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 rounded-lg transition"
                  onClick={closeImage}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="w-full max-h-[80vh] rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.images[activeImage.currentIndex]}
                alt={`${activeImage.title} ${activeImage.currentIndex + 1}`}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 items-center gap-3">
              <button
                type="button"
                className="justify-self-start text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition"
                onClick={showPreviousImage}
              >
                Previous
              </button>
              {activeImage.demoUrl ? (
                <a
                  href={activeImage.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-self-center text-sm font-semibold text-primary hover:text-white border border-primary/40 hover:border-primary/70 px-4 py-2 rounded-lg transition bg-primary/10 hover:bg-primary/20"
                >
                  Open Live Site
                </a>
              ) : <span />}
              <button
                type="button"
                className="justify-self-end text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition"
                onClick={showNextImage}
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  )
}

export default Projects
