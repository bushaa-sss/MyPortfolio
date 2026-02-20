import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Form submitted:', formData)
      setTimeout(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 3000)
        setIsSubmitting(false)
      }, 1000)
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
      color: 'hover:text-primary',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bushra-saleh-239b36146/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEuGCqnfKQmOLj0KDJId%2FCA%3D%3D',
      color: 'hover:text-primary',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/03349048577',
      color: 'hover:text-primary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Section
      id="contact"
      title="Contact Me"
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full flex flex-col items-center justify-center p-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4"
              >
                <HiMail className="text-5xl text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Email
              </h3>
              <a
                href="bushra.saleh123@gmail.com"
                className="text-text-secondary hover:text-primary hover:underline transition-colors text-lg font-medium"
              >
                bushra.saleh123@gmail.com
              </a>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="text-center h-full flex flex-col items-center justify-center p-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4"
              >
                <HiPhone className="text-5xl text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Phone
              </h3>
              <a
                href="tel:+03349048577"
                className="text-text-secondary hover:text-primary hover:underline transition-colors text-lg font-medium"
              >
                +03349048577
              </a>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <Card className="p-10">
            <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-semibold mb-3">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-6 py-3.5 bg-dark-card/50 backdrop-blur-md border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-3">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-6 py-3.5 bg-dark-card/50 backdrop-blur-md border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-semibold mb-3">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-6 py-3.5 bg-dark-card/50 backdrop-blur-md border border-primary/20 rounded-xl text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-semibold backdrop-blur-md"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/50 rounded-xl text-red-400 text-center font-semibold backdrop-blur-md"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    ⚙️
                  </motion.span>
                ) : (
                  '✉️'
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-text-secondary mb-8 text-lg font-medium">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-dark-card/50 backdrop-blur-md border border-primary/20 text-text-secondary hover:text-primary hover:border-primary/60 hover:shadow-glow transition-all"
                  aria-label={social.label}
                >
                  <IconComponent className="text-3xl" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default Contact
