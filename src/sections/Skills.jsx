import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS','Responsive Design','PWA (Service Workers, Web App Manifest, Offline Caching'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
      icon: '⚙️',
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'SQL Server','SQl Server Management Studio'],
      icon: '💾',
    },
    // {
    //   category: 'Concepts',
    //   skills: ['Data Structures & Algorithms', 'Distributed Systems'],
    //   icon: '🧠',
    // },
    {
      category: 'Cloud & Tools',
      skills: ['Git & GitHub', 'CI/CD (GitHub Actions) ','AWS','Postman', 'Railway', 'Vercel', 'Docker (Basic)'],
      icon: '🛠️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.05 },
    }),
  }

  return (
    <Section
      id="skills"
      title="Technical Skills"
      dark={false}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((categoryItem, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full hover:border-primary/60">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
                <div className="text-3xl">{categoryItem.icon}</div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {categoryItem.category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {categoryItem.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    custom={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="px-4 py-2.5 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-xl text-sm font-semibold border border-primary/40 hover:border-primary/80 backdrop-blur-md transition-all shadow-glow hover:shadow-glow"
                  >
                    <span className="inline-flex items-center gap-1">
                      {skill}
                    </span>
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Skills
