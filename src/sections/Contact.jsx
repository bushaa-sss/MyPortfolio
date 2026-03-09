import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Form submitted:', formData)
      setTimeout(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 3000)
        setIsSubmitting(false)
      }, 900)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/bushaa-sss?tab=repositories',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bushra-saleh-239b36146/',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/923349048577',
    },
  ]

  const operatingSignals = [
    { label: 'Availability', value: 'Open to freelance and full-time opportunities' },
    { label: 'Core Domain', value: 'MERN products, API systems, and deployment workflows' },
    { label: 'Response', value: 'Usually within 24 hours' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      id="contact"
      title="Let's Build Together"
      subtitle="Tell me what you are building and I will help shape it from interface to backend delivery."
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/35 bg-primary/12 text-primary hover:bg-primary/20 hover:border-primary/60 transition-all"
                >
                  <IconComponent className="text-base" />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {operatingSignals.map((item) => (
            <div key={item.label} className="glass-panel rounded-xl px-4 py-4 border border-primary/20">
              <p className="mono text-xs uppercase tracking-[0.08em] text-primary">{item.label}</p>
              <p className="mt-2 text-sm text-text-primary leading-relaxed">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <Card className="h-full p-7">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary/15 border border-primary/25 p-3">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Email</p>
                  <a
                    href="mailto:bushra.saleh123@gmail.com"
                    className="text-text-primary hover:text-primary transition-colors font-medium break-all"
                  >
                    bushra.saleh123@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="h-full p-7">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary/15 border border-primary/25 p-3">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-primary">Phone</p>
                  <a
                    href="tel:+923349048577"
                    className="text-text-primary hover:text-primary transition-colors font-medium"
                  >
                    +92 334 9048577
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Card className="p-7 md:p-8 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                Share Your Project Brief
              </h3>
              <p className="text-sm text-text-secondary mb-7 leading-relaxed">
                Include your idea, tech preference, and timeline. I can help from MVP planning to production launch.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 bg-dark-card/60 border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/45 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 bg-dark-card/60 border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/45 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                    Project Details
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 bg-dark-card/60 border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/45 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                    placeholder="What are you building? What stack or timeline do you have in mind?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="inline-flex items-center gap-2 p-3 bg-emerald-500/15 border border-emerald-400/35 rounded-xl text-emerald-300 text-sm font-medium"
                  >
                    <FiCheckCircle className="text-base" />
                    Message sent successfully. I will get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="p-3 bg-rose-500/15 border border-rose-400/35 rounded-xl text-rose-300 text-sm font-medium"
                  >
                    Could not send your message right now. Please try again.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                      <FiSend className="text-base" />
                    </motion.span>
                  ) : (
                    <FiSend className="text-base" />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Contact
