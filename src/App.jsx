import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import { About, Contact, Marquee, Services } from './components/Sections.jsx'

export default function App() {
  return (
    // reducedMotion="user" coupe les transformations si l'utilisateur l'a demandé au système.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#projets">Aller aux projets</a>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--a" aria-hidden="true" />
      <div className="bg-glow bg-glow--b" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
    </MotionConfig>
  )
}
