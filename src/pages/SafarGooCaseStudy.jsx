import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowLeft,
  FiArrowRight,
  FiSearch,
  FiShield,
  FiRepeat,
  FiLayers,
  FiLock,
  FiUsers,
  FiSettings,
  FiZap,
  FiCheckCircle,
  FiX,
  FiSmartphone,
  FiServer,
  FiDatabase,
} from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

import heroShot from '../assets/projects/safarGoo/safarGoo-1.png'
import dashboardShot from '../assets/projects/safarGoo/safargo dashboard.png'
import aboutShot from '../assets/projects/safarGoo/safargo about.png'
import contactShot from '../assets/projects/safarGoo/safargo contact.png'
import trainShot from '../assets/projects/safarGoo/safargo train.png'

const VIDEO_URL =
  'https://res.cloudinary.com/du6tfdazy/video/upload/v1771588161/Screen_Recording_2026-02-17_212154_loggyj.mp4'
const GITHUB_URL = 'https://github.com/bushraa09/SafarGoo'

const techStack = [
  { name: 'React Native (Expo)', role: 'Cross-platform client — iOS, Android, and web from one codebase' },
  { name: 'Node.js', role: 'JavaScript runtime for the API layer' },
  { name: 'Express', role: 'REST API framework routing every domain (bookings, auth, admin...)' },
  { name: 'SQL Server', role: 'Relational database for users, bookings, and audit events' },
  { name: 'JWT', role: 'Session tokens for both traveler and admin auth' },
]

const secondaryTools = ['Zustand', 'bcryptjs', 'mssql', 'Amadeus API', 'i18next', 'Expo Router']

const features = [
  {
    icon: FiSearch,
    title: 'Live Flight & Train Search',
    description:
      'Real flight offers pulled from the Amadeus API via an OAuth2 client-credentials flow, merged with a separate live train dataset, both fully sortable and filterable by price, duration, and stops.',
  },
  {
    icon: FiShield,
    title: 'Trip Guardian Reliability Scoring',
    description:
      'A custom scoring algorithm rates every itinerary from 0–100 based on layover risk, trip duration, and red-eye timing, then surfaces plain-language risk flags and safer fallback options.',
  },
  {
    icon: FiRepeat,
    title: 'Two-Phase Booking Flow',
    description:
      'Bookings move through an intent-then-confirm flow with a full event audit trail, and a background sweep job automatically marks stale, abandoned bookings after a timeout.',
  },
  {
    icon: FiLayers,
    title: 'Compare & Save Flights',
    description:
      'A side-by-side comparison modal for weighing two flights at once, plus a saved-flights system so travelers can revisit options later.',
  },
  {
    icon: FiLock,
    title: 'Secure Dual Authentication',
    description:
      'Email/password login with bcrypt hashing and an email-OTP flow for travelers, backed by JWT sessions — completely separate from the role-based JWT that protects the admin console.',
  },
  {
    icon: FiUsers,
    title: 'Encrypted Traveler Profiles',
    description:
      'Saved traveler details are protected with field-level AES-256-GCM encryption before they ever reach the database, instead of being stored as plain text.',
  },
  {
    icon: FiSettings,
    title: 'Role-Based Admin Console',
    description:
      'An internal dashboard for managing bookings, redirect analytics, and a threaded support-ticket system — gated behind superadmin / admin / analyst / support roles.',
  },
  {
    icon: FiZap,
    title: 'Built-In Demo Mode',
    description:
      'A DEMO_MODE flag serves realistic, deterministic flight and train data through the exact same code path as production, so the full search-to-booking flow works without live API credits.',
  },
]

const architectureLayers = [
  {
    icon: FiSmartphone,
    label: 'React Native (Expo) Client',
    detail: 'Cross-platform UI for search, booking, and the traveler account area — runs on iOS, Android, and web.',
  },
  {
    icon: FiServer,
    label: 'Node.js / Express REST API',
    detail: 'Resource-based routers per domain, JWT-guarded middleware, and integrations with Amadeus and the train dataset.',
  },
  {
    icon: FiDatabase,
    label: 'SQL Server',
    detail: 'Parameterized queries via mssql for users, bookings, booking events, OTP codes, and cached offers.',
  },
]

const implementation = [
  {
    title: 'Authentication & Authorization',
    points: [
      'Traveler auth: bcrypt-hashed passwords plus an email-OTP flow, issuing a 7-day JWT session token.',
      'Admin auth: a completely separate JWT secret and payload carrying a role claim (superadmin, admin, analyst, support), checked by dedicated middleware.',
      'An optional admin-email allowlist adds a second layer of restriction on top of the role check.',
    ],
  },
  {
    title: 'REST API Design',
    points: [
      'Express routers split by domain — bookings, favorites, history, offers, travelers, profile, admin, revenue — each mounted independently.',
      'Consistent JSON response shape (ok, data/error) and status codes across routes.',
      'CORS-enabled API consumed by the same Expo client across native and web builds.',
    ],
  },
  {
    title: 'Database Layer',
    points: [
      'SQL Server via the mssql driver, with every query built from parameterized inputs — no string-concatenated SQL.',
      'MERGE-based upserts for idempotent writes (offer cache, OTP codes, user records).',
      'Relational structure connecting users, flight_bookings, booking_events, and offer_cache, with a booking_ref used as the shareable public identifier.',
    ],
  },
  {
    title: 'Protected Routes & Validation',
    points: [
      'Bearer-token middleware (requireAuth / requireAdmin) guards traveler, revenue, and admin endpoints.',
      'Every write route validates input server-side — email format, minimum password length, required fields — rather than trusting the client.',
    ],
  },
  {
    title: 'Data Protection',
    points: [
      'Traveler PII is encrypted field-by-field with AES-256-GCM before it is written to the database.',
      'Passwords are hashed with bcrypt (cost factor 12); raw passwords are never stored or logged.',
    ],
  },
  {
    title: 'Cross-Platform State',
    points: [
      'A Zustand store holds the auth session, backed by a small storage adapter that swaps AsyncStorage (native) for localStorage (web) automatically.',
      'The same store and API client run unmodified across the Expo native and web targets.',
    ],
  },
]

const challenges = [
  {
    challenge: 'Abandoned bookings left the database full of stale, half-finished intents.',
    solution:
      'Split booking into an "intent" record and a final "confirm" step, then run a periodic sweep job that auto-marks intents older than a threshold as ABANDONED.',
  },
  {
    challenge: 'Risky itineraries (tight layovers, red-eye timing) looked identical to safe ones in raw results.',
    solution:
      'Built the Trip Guardian scoring function to compute a 0–100 reliability score and human-readable risk flags for every offer, then used it to power a fallback/rescue suggestion endpoint.',
  },
  {
    challenge: 'Developing and demoing the booking flow without burning paid Amadeus API quota.',
    solution:
      'Added a DEMO_MODE environment flag that serves realistic, deterministic offers through the exact same code path used in production.',
  },
  {
    challenge: 'Traveler passport and contact details needed to be stored safely, not as plain text.',
    solution:
      'Implemented field-level AES-256-GCM encryption for traveler PII before it is written to SQL Server.',
  },
  {
    challenge: 'One codebase had to serve two very different audiences — travelers and internal staff.',
    solution:
      'Kept a separate JWT secret and role claim for the admin console, checked by dedicated middleware independent of the traveler auth flow.',
  },
  {
    challenge: 'The Expo app needed to behave identically on iOS, Android, and web, but each platform stores session data differently.',
    solution:
      'Wrote a thin storage adapter inside the Zustand auth store that transparently swaps AsyncStorage for localStorage on web.',
  },
]

const screenshots = [
  { src: heroShot, caption: 'Train search results — mobile and tablet views' },
  { src: dashboardShot, caption: 'Home screen — flight/train search entry point' },
  { src: trainShot, caption: 'Train results with price, class, and duration filters' },
  { src: aboutShot, caption: 'About page — mission, workflow, and trust signals' },
  { src: contactShot, caption: 'Support — ticket submission routed to the admin console' },
]

const ArchitectureFlow = () => (
  <div className="flex flex-col md:flex-row items-stretch gap-4">
    {architectureLayers.map((layer, index) => (
      <React.Fragment key={layer.label}>
        <div className="flex-1 glass-panel rounded-2xl p-5 flex flex-col gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xl">
            <layer.icon />
          </div>
          <p className="font-semibold text-text-primary">{layer.label}</p>
          <p className="text-sm text-text-secondary leading-relaxed">{layer.detail}</p>
        </div>
        {index < architectureLayers.length - 1 && (
          <div className="hidden md:flex items-center justify-center text-primary/60 text-2xl">
            <FiArrowRight />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
)

const SafarGooCaseStudy = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightboxIndex])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      {/* Minimal case-study header */}
      <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-2xl border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Bushra Saleh
          </Link>
          <Link
            to="/"
            className="mono text-xs md:text-sm uppercase tracking-[0.08em] text-text-secondary hover:text-primary transition-colors flex items-center gap-2"
          >
            <FiArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden hero-particles bg-dark-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="signal-pill inline-flex items-center px-3 py-1 rounded-full text-xs mono uppercase tracking-[0.1em] mb-5">
              Case Study — Travel &amp; Tourism Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              SafarGoo
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-xl">
              A cross-platform flight and train booking app for Pakistan, built to make
              searching, comparing, and booking a trip feel fast, transparent, and low-risk —
              with a built-in reliability score for every itinerary.
            </p>
            <p className="text-sm text-text-secondary/80 mb-8 max-w-xl">
              This build runs from a local/demo environment rather than a public production
              deployment — the walkthrough video and screenshots below show the app running end to end.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="mono text-[11px] px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#how-it-works">
                <Button variant="primary" size="md">
                  Watch Walkthrough
                </Button>
              </a>
              <Button variant="secondary" size="md" href={GITHUB_URL}>
                <HiCode className="text-lg" />
                View Code
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden border border-primary/20 bg-black/40 shadow-premium-lg"
          >
            <img
              src={heroShot}
              alt="SafarGoo train search results shown on tablet and mobile"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <Section id="overview" title="Project Overview" dark={false}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-text-secondary text-lg leading-relaxed">
            SafarGoo is a cross-platform travel app that lets users search, compare, and book
            flights and trains across Pakistan from a single interface. It pulls live flight
            offers from the Amadeus API and merges them with a separate train dataset, so
            travelers can compare both modes of transport side by side.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mt-4">
            The problem it addresses is decision fatigue: raw search results don't tell you
            which option is actually a safe bet. SafarGoo scores every itinerary for reliability,
            tracks bookings through a full lifecycle with an audit trail, and backs it all with
            an internal admin console for support and operations — built as a real full-stack
            product, not just a UI prototype.
          </p>
        </motion.div>
      </Section>

      {/* How It Works — Video */}
      <Section id="how-it-works" title="How It Works" subtitle="A walkthrough of the app running end to end — search, compare, and book." dark={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-premium-lg bg-black">
            <video
              src={VIDEO_URL}
              controls
              playsInline
              className="w-full aspect-video"
              poster={dashboardShot}
            />
          </div>
          <p className="text-text-secondary text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            This recording demonstrates a full session: searching flights and trains, comparing
            results with the reliability score visible, moving through the booking flow, and
            reviewing a confirmed booking — all running against the live app.
          </p>
        </motion.div>
      </Section>

      {/* Key Features */}
      <Section id="features" title="Key Features" subtitle="What's actually built and working in the app." dark={false}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} className="h-full">
              <Card className="h-full min-h-[325px]">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xl mb-4">
                  <feature.icon />
                </div>
                <p className="font-semibold text-text-primary mb-2">{feature.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Application Screens */}
      <Section id="screens" title="Application Screens" subtitle="A closer look at the interface." dark={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {screenshots.map((shot, index) => (
            <motion.button
              key={shot.caption}
              type="button"
              variants={fadeUp}
              onClick={() => setLightboxIndex(index)}
              className="group text-left rounded-2xl overflow-hidden border border-primary/15 bg-black/30 hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-text-secondary px-4 py-3">{shot.caption}</p>
            </motion.button>
          ))}
        </motion.div>
      </Section>

      {/* Technical Architecture */}
      <Section id="architecture" title="Technical Architecture" dark={false}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <ArchitectureFlow />
        </motion.div>
      </Section>

      {/* Technical Implementation */}
      <Section id="implementation" title="Technical Implementation" subtitle="The engineering underneath the UI." dark={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {implementation.map((block) => (
            <motion.div key={block.title} variants={fadeUp} className="h-full">
              <Card className="h-full min-h-[270px]">
                <p className="font-semibold text-text-primary mb-3">{block.title}</p>
                <ul className="space-y-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Challenges & Solutions */}
      <Section id="challenges" title="Challenges & Solutions" dark={false}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {challenges.map((item) => (
            <motion.div key={item.challenge} variants={fadeUp} className="h-full">
              <Card className="h-full min-h-[280px]">
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary/70 mb-2">Challenge</p>
                <p className="text-text-primary mb-4 leading-relaxed">{item.challenge}</p>
                <p className="mono text-xs uppercase tracking-[0.08em] text-primary/70 mb-2">Solution</p>
                <p className="text-text-secondary leading-relaxed">{item.solution}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Tech Stack */}
      <Section id="tech-stack" title="Tech Stack" dark={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="mono text-sm px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-cyan-100"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {secondaryTools.map((tool) => (
              <span
                key={tool}
                className="mono text-[11px] px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Project Links */}
      <Section id="links" dark={false}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="flex flex-col items-center gap-5 text-center"
        >
          <p className="text-text-secondary max-w-md">
            SafarGoo isn't publicly deployed, so this case study — and the code itself — is the
            best way to see how it works.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="md" href={GITHUB_URL}>
              <HiCode className="text-lg" />
              GitHub Repository
            </Button>
            <Link to="/">
              <Button variant="outline" size="md">
                <FiArrowLeft />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightboxIndex(null)}
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
                <p className="text-white/90 font-medium">{screenshots[lightboxIndex].caption}</p>
                <button
                  type="button"
                  className="text-white/70 hover:text-white border border-white/20 hover:border-white/40 p-2 rounded-lg transition"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>
              <div className="w-full max-h-[75vh] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={screenshots[lightboxIndex].src}
                  alt={screenshots[lightboxIndex].caption}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
                  }
                >
                  Previous
                </button>
                <span className="text-sm text-white/60">
                  {lightboxIndex + 1} / {screenshots.length}
                </span>
                <button
                  type="button"
                  className="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition"
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % screenshots.length)}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SafarGooCaseStudy
