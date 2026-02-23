import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import doctorScreenshot1 from '../assets/projects/doctor/doctor-1-dashboard.png'
import doctorScreenshot2 from '../assets/projects/doctor/doctor-2-doctors.png'
import doctorScreenshot3 from '../assets/projects/doctor/doctor-3-duties.png'
import doctorScreenshot4 from '../assets/projects/doctor/doctor-4-schedule.png'
import doctorScreenshot5 from '../assets/projects/doctor/doctor-5-leaves.png'
import salaryScreenshot1 from '../assets/projects/salary-expense/salary-1.png'
import salaryScreenshot2 from '../assets/projects/salary-expense/salary-2.png'
import salaryScreenshot3 from '../assets/projects/salary-expense/salary-3.png'
import salaryScreenshot4 from '../assets/projects/salary-expense/salary-4.png'

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)

  const projects = [
    {
      title: 'Safargo – Integrated Real-Time Ticket Booking System',
      description: 'Developed a cross-platform real-time ticket booking platform integrating flights, trains, and buses into a unified system. Implemented scalable backend APIs, real-time availability tracking, multilingual support, and optimized database queries for concurrent bookings.',
      tech: ['React Native', 'Node.js', 'SQL Server'],
      highlights: [
        'Designed secure authentication system',
        'Implemented real-time seat availability updates',
        'Built RESTful API architecture',
        'Optimized SQL queries for performance',
        'Secure backend integration',
      ],
      image: '✈️',
      github: 'https://github.com/bushraa09/SafarGoo',
      demo: null,
      video: 'https://res.cloudinary.com/du6tfdazy/video/upload/v1771588161/Screen_Recording_2026-02-17_212154_loggyj.mp4',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Doctor Scheduling System',
      description: 'Developed a full-stack doctor scheduling platform with automated duty management, leave handling, and secure session-based authentication.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      highlights: [
        'Role-based authentication',
        'Leave management system',
        'Automated schedule generation',
        'Email notifications',
        'Secure backend integration',
      ],
      image: '🏥',
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
    },
    {
      title: 'Salary & Expense Manager',
      description: 'A full-stack MERN application to track income, manage categorized expenses, and visualize real-time balance trends. Features secure JWT authentication, protected REST APIs, responsive dark/light UI, and interactive Recharts dashboards. Built with production-ready architecture including Express MVC, validation, error handling, rate limiting, and PWA support. Optimized with Vite code-splitting for performance and deployed on AWS EC2 using Node.js, PM2, and Nginx.',
      tech: ['React', 'React Router', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Axios', 'Recharts', 'PM2', 'Nginx', 'AWS EC2'],
      highlights: [
        'JWT authentication with protected APIs',
        'Categorized expense tracking and income management',
        'Interactive Recharts dashboards for balance trends',
        'Production-ready Express MVC with validation and rate limiting',
        'Deployed on AWS EC2 with PM2 and Nginx',
      ],
      image: '💰',
      github: 'https://github.com/bushaa-sss/Salary-Expense-Management',
      demo: 'http://13.60.219.19/',
      screenshots: [
        salaryScreenshot4,
        salaryScreenshot3,
        salaryScreenshot1,
        salaryScreenshot2,
      ],
      color: 'from-emerald-600 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
      title="Featured Projects"
      dark={true}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image Section - Enhanced with glow and overlay */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="md:col-span-1 relative overflow-hidden min-h-64 md:min-h-auto group"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />

                  {/* Animated glow */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-full bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-2xl"
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="text-7xl md:text-6xl drop-shadow-lg"
                    >
                      {project.image}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section - Premium Layout */}
                <div className="md:col-span-2 flex flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-semibold border border-primary/40 backdrop-blur-md hover:border-primary/70 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="text-text-secondary text-sm flex items-start gap-3"
                          >
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Buttons */}
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
