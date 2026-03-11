
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import Button from '../components/Button'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FiActivity, FiArrowRight, FiCheckCircle, FiShield, FiTarget } from 'react-icons/fi'
import doctorScreenshot1 from '../assets/projects/doctor/doctor-1-dashboard.png'
import doctorScreenshot2 from '../assets/projects/doctor/doctor-2-doctors.png'
import doctorScreenshot3 from '../assets/projects/doctor/doctor-3-duties.png'
import doctorScreenshot4 from '../assets/projects/doctor/doctor-4-schedule.png'
import doctorScreenshot5 from '../assets/projects/doctor/doctor-5-leaves.png'
import salaryDashboard from '../assets/projects/salary-expense/salary-dashboard.png'
import salaryLogin from '../assets/projects/salary-expense/salary-login.png'
import salaryAddIncome from '../assets/projects/salary-expense/salary-add-income.png'
import salaryExpenseRecords from '../assets/projects/salary-expense/salary-expense-records.png'
import salaryAddExpense from '../assets/projects/salary-expense/salary-add-expense.png'
import meditrackScreenshot1 from '../assets/projects/meditrack/meditrack-1.png'
import meditrackScreenshot2 from '../assets/projects/meditrack/meditrack-2.png'
import meditrackScreenshot3 from '../assets/projects/meditrack/meditrack-3.png'
import meditrackScreenshot4 from '../assets/projects/meditrack/meditrack-4.png'
import meditrackScreenshot5 from '../assets/projects/meditrack/meditrack-5.png'
import meditrackScreenshot6 from '../assets/projects/meditrack/meditrack-6.png'

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  const projects = [
    {
      code: 'SF',
      title: 'Safargo - Integrated Real-Time Ticket Booking',
      tagline: 'Cross-platform booking engine for flights, trains, and buses with synchronized availability.',
      description: 'Built a unified booking flow with real-time seat availability, secure authentication, and backend APIs tuned for concurrent requests.',
      problem: 'Travel bookings were fragmented across providers, leading to inconsistent availability and manual reconciliation.',
      architecture: 'React Native app -> Node.js API -> SQL Server (transactional booking)',
      architectureFlow: ['React Native App', 'Node.js API', 'SQL Server'],
      auth: 'JWT-based authentication with role-aware booking permissions.',
      tech: ['React Native', 'Node.js', 'SQL Server'],
      features: [
        'Real-time seat availability sync across transport modes',
        'Booking confirmation workflow with transactional safeguards',
        'Secure payment flow simulation and receipt generation',
        'Role-based access for booking actions and admin overrides',
      ],
      challenges: [
        'Preventing double-booking during concurrent seat requests',
        'Keeping mobile UI responsive during live availability updates',
        'Designing API contracts that map multiple transport types',
      ],
      metrics: [
        'Simulated concurrent booking flows to validate transaction safety',
        'Optimized seat lookup queries for low-latency responses',
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
      problem: 'Manual scheduling caused conflicts, delayed approvals, and inconsistent coverage.',
      architecture: 'React UI -> Node.js API -> MongoDB',
      architectureFlow: ['React UI', 'Node.js API', 'MongoDB'],
      auth: 'Role-based access for admin, staff, and doctor workflows.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      features: [
        'Automated duty roster generation with conflict checks',
        'Leave approval workflow with schedule adjustments',
        'Notification touchpoints for staff awareness',
        'Audit-friendly scheduling history and visibility',
      ],
      challenges: [
        'Balancing shift fairness with availability constraints',
        'Handling leave overlaps without breaking rotations',
        'Maintaining schedule consistency across updates',
      ],
      metrics: [
        'Conflict checks on every schedule update',
        'Simulated scheduling scenarios to validate edge cases',
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
      problem: 'Personal finance tracking lacked a secure, intuitive workflow with actionable insights.',
      architecture: 'React + Vite UI -> Node.js API -> MongoDB -> AWS EC2 + Nginx',
      architectureFlow: ['React UI', 'Node.js API', 'MongoDB', 'AWS EC2'],
      auth: 'JWT-protected routes with secure token handling.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts', 'PM2', 'Nginx', 'AWS EC2'],
      features: [
        'JWT-secured private routes and protected APIs',
        'Categorized income and expense workflows',
        'Interactive balance trend visualization using Recharts',
        'Production deployment with PM2 process handling and Nginx proxy',
      ],
      challenges: [
        'Maintaining secure auth across client and server',
        'Keeping analytics dashboards responsive under larger datasets',
        'Shipping a stable production pipeline on AWS',
      ],
      metrics: [
        'Optimized aggregation queries for fast summaries',
        'Memoized chart data to reduce re-render overhead',
      ],
      github: 'https://github.com/bushaa-sss/Salary-Expense-Management',
      demo: 'http://13.60.219.19/',
      screenshots: [
        salaryDashboard,
        salaryLogin,
        salaryAddIncome,
        salaryAddExpense,
        salaryExpenseRecords,
      ],
      color: 'from-emerald-600 to-cyan-500',
      track: 'MERN + DevOps',
    },
    {
      code: 'MED',
      title: 'MediTrack - Doctor-Patient Management Portal',
      tagline: 'Healthcare workflow suite for consultations, reports, and follow-up automation.',
      description: 'Engineered a healthcare portal with secure doctor authentication, patient records, reminders, and production deployment across Vercel and AWS.',
      problem: 'Clinical workflows needed a secure, centralized system for patients, reminders, and records.',
      architecture: 'React UI -> Node.js API -> MongoDB Atlas -> Firebase FCM',
      architectureFlow: ['React UI', 'Node.js API', 'MongoDB Atlas', 'Firebase FCM'],
      auth: 'Doctor authentication with secure credentials and rate-limited endpoints.',
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
      features: [
        'Doctor auth with username and clinic-email login options',
        'Patient and prescription workflows with clean CRUD structure',
        'Reminder scheduling with timezone-aware cron execution',
        'Push notification delivery using Firebase messaging services',
      ],
      challenges: [
        'Building timezone-aware reminder automation',
        'Securing file uploads and patient data workflows',
        'Maintaining data integrity across clinics and visits',
      ],
      metrics: [
        'Scheduled reminders executed with timezone-safe cron rules',
        'Security headers and rate limits enforced on critical routes',
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
    if (!activeVideo && !activeImage && !activeCaseStudy) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeVideo, activeImage, activeCaseStudy])

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

  const openCaseStudy = (project) => {
    setActiveCaseStudy(project)
  }

  const closeCaseStudy = () => {
    setActiveCaseStudy(null)
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

  const ArchitectureFlow = ({ steps }) => (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="mono text-[11px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-cyan-100">
            {step}
          </span>
          {index < steps.length - 1 && (
            <FiArrowRight className="text-primary/70 text-sm" />
          )}
        </div>
      ))}
    </div>
  )

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
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
      >
        {projects.map((project) => {
          const previewImage = project.screenshots?.[0] || null
          const techLine = project.tech.slice(0, 4).join(' • ')
          const features = project.features.slice(0, 2)

          return (
            <motion.div key={project.title} variants={itemVariants}>
              <div className="group h-full aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0f172a] to-[#020617] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="h-[180px] w-full overflow-hidden rounded-t-xl border-b border-white/10">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center px-4 bg-dark-bg/70">
                      <p className="text-sm font-semibold text-white/90">Preview coming soon</p>
                      <p className="mono text-[10px] text-white/70 mt-2">{project.track}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col h-[calc(100%-180px)] p-5">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-text-primary leading-snug max-h-[3.2rem] overflow-hidden">
                      {project.title}
                    </h3>
                    <p className="mono mt-2 text-[11px] uppercase tracking-[0.08em] text-primary/80">
                      {techLine}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-text-secondary">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => openCaseStudy(project)}>
                      View Details
                    </Button>
                    {project.video ? (
                      <Button variant="secondary" size="sm" onClick={() => openVideo(project)}>
                        Live Demo
                      </Button>
                    ) : project.screenshots?.length ? (
                      <Button variant="secondary" size="sm" onClick={() => openImageDemo(project)}>
                        Live Demo
                      </Button>
                    ) : project.demo ? (
                      <Button variant="secondary" size="sm" href={project.demo}>
                        Live Demo
                      </Button>
                    ) : null}
                    <Button variant="primary" size="sm" href={project.github}>
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={closeCaseStudy}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-950/95 p-5 md:p-7 border border-white/10 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.12em] text-primary">Project Case Study</p>
                  <h4 className="text-xl md:text-2xl font-semibold text-white">
                    {activeCaseStudy.title}
                  </h4>
                </div>
                <button
                  type="button"
                  className="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1 rounded-lg transition"
                  onClick={closeCaseStudy}
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Problem Statement</p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {activeCaseStudy.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">System Architecture</p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {activeCaseStudy.architecture}
                  </p>
                  <div className="mt-3">
                    <ArchitectureFlow steps={activeCaseStudy.architectureFlow} />
                  </div>
                  <div className="mt-3">
                    <p className="mono text-[11px] uppercase tracking-[0.08em] text-primary">Authentication</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{activeCaseStudy.auth}</p>
                  </div>
                  <pre className="mt-3 mono text-[11px] text-cyan-200 bg-dark-bg/70 border border-primary/20 rounded-lg p-3 overflow-auto">
                    {activeCaseStudy.architectureFlow.join(' -> ')}
                  </pre>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Key Challenges Solved</p>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    {activeCaseStudy.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2">
                        <FiCheckCircle className="text-primary mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Technology Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeCaseStudy.tech.map((tool) => (
                      <span
                        key={tool}
                        className="mono text-[11px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Feature Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    {activeCaseStudy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <FiCheckCircle className="text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-primary/20 bg-dark-bg/70 p-4">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Engineering Metrics</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeCaseStudy.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="mono text-[11px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {activeCaseStudy.screenshots?.length ? (
                <div className="mt-6">
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-3">Screenshots</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {activeCaseStudy.screenshots.slice(0, 6).map((image, index) => (
                      <img
                        key={`${activeCaseStudy.title}-shot-${index}`}
                        src={image}
                        alt={`${activeCaseStudy.title} screenshot ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-28 md:h-32 w-full object-cover rounded-xl border border-primary/15"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" size="md" href={activeCaseStudy.github}>
                  <HiCode className="text-lg" />
                  GitHub Repository
                </Button>
                {activeCaseStudy.demo ? (
                  <Button variant="secondary" size="md" href={activeCaseStudy.demo}>
                    <HiExternalLink className="text-lg" />
                    Live Demo
                  </Button>
                ) : activeCaseStudy.video ? (
                  <Button variant="secondary" size="md" href={activeCaseStudy.video}>
                    <HiExternalLink className="text-lg" />
                    Video Walkthrough
                  </Button>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
      </AnimatePresence>

      <AnimatePresence>
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
                  loading="lazy"
                  decoding="async"
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
      </AnimatePresence>
    </Section>
  )
}

export default Projects
