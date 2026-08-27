
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../components/Section'
import Button from '../components/Button'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FiActivity, FiArrowRight, FiCheckCircle, FiShield, FiTarget, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import safarGooScreenshot1 from  '../assets/projects/safarGoo/safarGoo-1.png'
import safarGooScreenshot2 from  '../assets/projects/safarGoo/safargo about.png'
import safarGooScreenshot3 from  '../assets/projects/safarGoo/safargo contact.png'
import safarGooScreenshot4 from  '../assets/projects/safarGoo/safargo dashboard.png'
import safarGooScreenshot5 from  '../assets/projects/safarGoo/safargo train.png'

import doctorScreenshot1 from '../assets/projects/doctor/doctor-1-dashboard.png'
import doctorScreenshot2 from '../assets/projects/doctor/doctor-2-doctors.png'
import doctorScreenshot3 from '../assets/projects/doctor/doctor-3-duties.png'
import doctorScreenshot4 from '../assets/projects/doctor/doctor-4-schedule.png'
import doctorScreenshot5 from '../assets/projects/doctor/doctor-5-leaves.png'
import doctorScreenshot6 from '../assets/projects/doctor/doctor-6-notifications.png'
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
import meditrackScreenshot7 from '../assets/projects/meditrack/meditrack-7.png'
import meditrackScreenshot8 from '../assets/projects/meditrack/meditrack-8.png'
import meditrackScreenshot9 from '../assets/projects/meditrack/meditrack-9.png'
import meditrackScreenshot10 from '../assets/projects/meditrack/meditrack-10.png'
import maixsCover from '../assets/projects/maixs/maixs-main.png'
import maixsScreenshot1 from '../assets/projects/maixs/maixs-1.png'
import maixsScreenshot2 from '../assets/projects/maixs/maixs-2.png'
import maixsScreenshot3 from '../assets/projects/maixs/maixs-3.png'
import maixsScreenshot4 from '../assets/projects/maixs/maixs-4.png'
import maixsScreenshot5 from '../assets/projects/maixs/maixs-5.png'
import maixsScreenshot6 from '../assets/projects/maixs/maixs-6.png'
import maixsScreenshot7 from '../assets/projects/maixs/maixs-7.png'


const Projects = () => {
  const navigate = useNavigate()
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projects = [
    {
      code: 'MAX',
      title: 'Maxis Energy - Solar Company Website & Admin Platform',
      tagline: 'Full-stack marketing site and admin panel for a Pakistani solar energy company — my first real client project.',
      description: 'Designed, built, and deployed a production full-stack web platform for Maxis Energy, a solar installation company serving residential, commercial, and industrial clients across Pakistan. The platform includes a public marketing website and a custom admin panel for managing projects, testimonials, events, and certificates without touching code.',
      problem: 'The client needed a professional, trust-building web presence to showcase solar installation projects and client testimonials, plus a way to manage that content themselves without touching code.',
      architecture: 'React + TanStack Router → Node.js/Express REST API → Mongoose → Self-hosted MongoDB',
      architectureFlow: ['React + TanStack Router', 'Express REST API', 'Mongoose', 'MongoDB'],
      deployment: "Deployment: Hostinger VPS + Nginx + PM2 + Let's Encrypt",
      auth: 'JWT-authenticated admin panel with protected content-management access.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'TanStack Router',
        'Tailwind CSS',
        'shadcn/ui',
        'Node.js',
        'Express.js',
        'REST API',
        'JWT',
        'Multer',
        'MongoDB',
        'Mongoose',
        'Ubuntu',
        'Hostinger VPS',
        'Nginx',
        'PM2',
        "Let's Encrypt",
        'mongodump',
        'Cron',
        'Automated off-server backups',
      ],
      features: [
        'Public marketing site with project showcase, testimonials, and solar savings calculator',
        'Custom admin panel with CRUD for projects, testimonials, events, and certificates',
        'Image and video upload handling via Multer',
        'Self-hosted MongoDB with automated cron backups and off-server tarball copies',
        'Nginx reverse proxy with PM2 process management and Let\'s Encrypt SSL',
      ],
      challenges: [
        'Setting up and hardening a self-hosted VPS deployment from scratch (Ubuntu, Nginx, SSL, subdomains)',
        'Designing an admin panel non-technical staff could use to manage content directly',
        'Building a reliable backup pipeline (mongodump cron jobs, tarballs pulled to the client\'s machine)',
      ],
      metricsLabel: 'Deployment & Reliability',
      metrics: [
        "Deployed and maintained on a self-managed Hostinger VPS with SSL across multiple subdomains.",
        'Automated backup pipeline using cron, MongoDB dumps, and off-server copies.',
      ],
      github: 'https://github.com/bushaa-sss/maxis',
      demo: 'https://www.maxisenergy.com.pk/',
      screenshots: [
        maixsCover,
        maixsScreenshot1,
        maixsScreenshot2,
        maixsScreenshot3,
        maixsScreenshot4,
        maixsScreenshot5,
        maixsScreenshot6,
        maixsScreenshot7,
      ],
      color: 'from-amber-500 to-orange-600',
      track: 'Client Project - Full-Stack Delivery',
    },
    {
      code: 'SF',
      title: 'SafarGoo',
      tagline: 'Travel & Tourism Platform',
      description: 'A cross-platform flight and train booking app for Pakistan, with live Amadeus flight search, a custom itinerary reliability score, and a full booking lifecycle backed by a role-based admin console.',
      problem: 'Travel search results rarely show which option is actually a safe, low-risk choice — SafarGoo scores every itinerary and tracks bookings through a full, auditable lifecycle.',
      architecture: 'React Native (Expo) app -> Node.js/Express REST API -> SQL Server',
      architectureFlow: ['React Native App', 'Express API', 'SQL Server'],
      auth: 'JWT-based traveler authentication (email/password + email OTP), with a separate role-based JWT flow protecting the admin console.',
      tech: ['React Native', 'Node.js', 'Express', 'SQL Server', 'JWT'],
      caseStudyPath: '/projects/safargoo',
      features: [
        'Live flight search via the Amadeus API merged with a separate train dataset',
        'Custom "Trip Guardian" reliability scoring for every itinerary',
        'Two-phase booking flow with a full audit trail and auto-abandon sweep',
        'Role-based admin console with bookings, analytics, and a support ticket system',
      ],
      challenges: [
        'Preventing stale, abandoned bookings from piling up in the database',
        'Surfacing itinerary risk (tight layovers, red-eye timing) that raw results hide',
        'Running a full demo/dev flow without depending on live Amadeus API credits',
      ],
      metrics: [
        'Custom reliability scoring computed for every flight and train offer',
        'Automated sweep job clears stale booking intents on a timer',
      ],
      github: 'https://github.com/bushraa09/SafarGoo',
      demo: null,
      screenshots: [
        safarGooScreenshot1,
        safarGooScreenshot2,
        safarGooScreenshot3,
        safarGooScreenshot4,
        safarGooScreenshot5,

      ],
      color: 'from-blue-600 to-cyan-500',
      track: 'Travel & Tourism Platform',
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
        'Push notification delivery validated in production FCM logs',
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
        meditrackScreenshot7,
        meditrackScreenshot8,
        meditrackScreenshot9,
        meditrackScreenshot10,
      ],
      color: 'from-sky-600 to-teal-500',
      track: 'Healthcare Workflow Platform',
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
        doctorScreenshot6,
        
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

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentProjectIndex(index)
  }

  const currentProject = projects[currentProjectIndex]
  const previewImage = currentProject.screenshots?.[0] || null
  const techLine = currentProject.tech.slice(0, 4).join(' • ')

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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Featured Project Showcase */}
        <div className="w-full border border-white/10 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/50 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`project-${currentProjectIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-6 md:p-8 lg:p-10">
                {/* Left Side - Project Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Project Number and Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="mono text-xs uppercase tracking-[0.12em] text-primary font-semibold">
                        {currentProjectIndex + 1} / {projects.length}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <p className="mono text-xs uppercase tracking-[0.08em] text-primary/70 mb-3">
                      {currentProject.track}
                    </p>

                    {/* Project Title */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5">
                      {currentProject.title}
                    </h2>

                    {/* Project Description */}
                    <p className="text-base text-text-secondary leading-relaxed mb-6">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="mono text-xs uppercase tracking-[0.08em] text-primary/70 mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tech.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="mono text-[11px] px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {currentProject.caseStudyPath ? (
                      <Button variant="outline" size="md" onClick={() => navigate(currentProject.caseStudyPath)}>
                        View Case Study
                        <FiArrowRight className="text-lg" />
                      </Button>
                    ) : (
                      <Button variant="outline" size="md" onClick={() => openCaseStudy(currentProject)}>
                        View Details
                      </Button>
                    )}
                    {currentProject.caseStudyPath ? null : currentProject.video ? (
                      <Button variant="secondary" size="md" onClick={() => openVideo(currentProject)}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : currentProject.screenshots?.length ? (
                      <Button variant="secondary" size="md" onClick={() => openImageDemo(currentProject)}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : currentProject.demo ? (
                      <Button variant="secondary" size="md" href={currentProject.demo}>
                        <HiExternalLink className="text-lg" />
                        Live Demo
                      </Button>
                    ) : null}
                    <Button variant="primary" size="md" href={currentProject.github}>
                      <HiCode className="text-lg" />
                      View Code
                    </Button>
                  </div>
                </div>

                {/* Right Side - Large Screenshot */}
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square lg:aspect-auto lg:h-full max-lg:max-h-96 rounded-xl overflow-hidden border border-primary/20 bg-black/40 flex items-center justify-center">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt={`${currentProject.title} preview`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <p className="text-sm font-semibold text-white/90">Preview coming soon</p>
                        <p className="mono text-[10px] text-white/70 mt-2">{currentProject.track}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="border-t border-white/10 px-6 md:px-8 lg:px-10 py-6 md:py-7 flex items-center justify-between">
            {/* Previous Button */}
            <motion.button
              type="button"
              onClick={goToPreviousProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Previous project"
            >
              <FiChevronLeft className="text-lg" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => goToProject(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={index === currentProjectIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              type="button"
              onClick={goToNextProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Next project"
            >
              <FiChevronRight className="text-lg" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
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

              <div className="space-y-5">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-2">Problem Statement</p>
                  <p className="text-text-secondary leading-relaxed">
                    {activeCaseStudy.problem}
                  </p>
                </div>

                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-2">Architecture</p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    {activeCaseStudy.architecture}
                  </p>
                  <ArchitectureFlow steps={activeCaseStudy.architectureFlow} />
                  {activeCaseStudy.deployment ? (
                    <p className="text-text-secondary leading-relaxed mt-3">
                      {activeCaseStudy.deployment}
                    </p>
                  ) : null}
                </div>

                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-2">Authentication & Security</p>
                  <p className="text-text-secondary leading-relaxed">
                    {activeCaseStudy.auth}
                  </p>
                </div>

                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {activeCaseStudy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-3">Challenges & Solutions</p>
                  <ul className="space-y-2">
                    {activeCaseStudy.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3">
                        <FiShield className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary mb-3">{activeCaseStudy.metricsLabel || 'Performance & Metrics'}</p>
                  <div className="space-y-2">
                    {activeCaseStudy.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-block mono text-[11px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-cyan-100 mr-2 mb-2"
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

      {/* Video Modal */}
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

      {/* Image Gallery Modal */}
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
