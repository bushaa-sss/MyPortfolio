import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import CurrentlyBuilding from '../sections/CurrentlyBuilding'
import About from '../sections/About'
import Skills from '../sections/Skills'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'
import GithubActivity from '../sections/GithubActivity'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
