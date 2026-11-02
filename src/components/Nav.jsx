import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data.js'

const links = [
  ['projets', 'Projets'],
  ['services', 'Services'],
  ['parcours', 'Parcours'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)

  // Surligne la section visible dans la navigation.
  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    for (const section of sections) io.observe(section)
    return () => io.disconnect()
  }, [])

  const pillOn = hovered ?? active

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
      <motion.header
        className="nav-wrap"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <nav className="nav" aria-label="Navigation principale">
          <a href="#top" className="brand" aria-label="Talhah Ally, retour en haut">
            <span className="brand__mark" aria-hidden="true">TA</span>
            <span>Talhah Ally</span>
          </a>
          <div className="nav__links" onPointerLeave={() => setHovered(null)}>
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav__link ${active === id ? 'is-active' : ''}`}
                aria-current={active === id ? 'true' : undefined}
                onPointerEnter={() => setHovered(id)}
              >
                {pillOn === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav__pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {label}
              </a>
            ))}
          </div>
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            Me contacter <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </motion.header>
    </>
  )
}
