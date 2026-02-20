import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { HiCode, HiSparkles, HiLightBulb } from 'react-icons/hi'

const About = () => {
  const highlights = [
    {
      icon: HiCode,
      title: 'Clean & Maintainable Code',
      description: 'Writing code that is easy to understand, maintain, and scale for long-term success.',
      color: 'from-cyan-500 to-primary',
    },
    {
      icon: HiSparkles,
      title: 'Real-Time System Architecture',
      description: 'Designing systems that handle real-time data synchronization and live updates efficiently.',
      color: 'from-purple-500 to-secondary',
    },
    {
      icon: HiLightBulb,
      title: 'Scalable Backend Development',
      description: 'Building robust backend systems that grow with your application\'s demands.',
      color: 'from-secondary to-pink-500',
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
      id="about"
      title="About Me"
      dark={true}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-text-secondary text-xl max-w-3xl mx-auto text-center mb-16 leading-relaxed"
      >
        I am a dedicated MERN Stack Developer with hands-on experience in developing full-stack web and mobile applications. My expertise includes designing RESTful APIs, managing databases efficiently, and implementing real-time features for scalable systems. I have strong problem-solving skills and a deep interest in distributed systems and system design.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:border-primary/60">
                {/* Icon Container with Gradient Glow */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className={`p-5 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-glow relative`}
                >
                  <IconComponent className="text-4xl text-white relative z-10" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-base leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Bottom Border Accent */}
                <div className="w-full mt-6 pt-6 border-t border-primary/20">
                  <motion.div
                    whileHover={{ width: '100%' }}
                    initial={{ width: '0%' }}
                    className={`h-1 bg-gradient-to-r ${item.color} rounded-full mx-auto`}
                  />
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default About
