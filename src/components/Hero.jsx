import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { contact, heroWords, stats } from '../data.js'
import { Magnetic, Phone, ease } from './motion.jsx'

function RotatingWord() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % heroWords.length)
    }, 2400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <span className="rotator">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={heroWords[index]}
          className="gradient-text"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const line = {
  hidden: { y: '110%' },
  show: (i) => ({ y: '0%', transition: { duration: 0.9, ease, delay: 0.15 + i * 0.12 } }),
}

export default function Hero() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(45, 212, 191, 0.10), transparent 70%)`

  const { scrollY } = useScroll()
  const yFront = useSpring(useTransform(scrollY, [0, 700], [0, reduce ? 0 : -90]), { stiffness: 80, damping: 20 })
  const yBack = useSpring(useTransform(scrollY, [0, 700], [0, reduce ? 0 : 60]), { stiffness: 80, damping: 20 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section className="hero" id="top" onPointerMove={onMove}>
      <motion.div className="hero__spot" style={{ background: spotlight }} aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="dot" aria-hidden="true" />
            Disponible pour de nouveaux projets
          </motion.span>

          <h1 className="hero__title">
            <span className="line">
              <motion.span className="word" custom={0} variants={line} initial="hidden" animate="show">
                Je crée des
              </motion.span>
            </span>
            <span className="line">
              <motion.span className="word" custom={1} variants={line} initial="hidden" animate="show">
                <RotatingWord />
              </motion.span>
            </span>
            <span className="line">
              <motion.span className="word" custom={2} variants={line} initial="hidden" animate="show">
                de A à Z.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            Créateur d’applications web et mobiles. J’imagine le produit, je le design, je le code et je le mets
            en ligne. Une app pour explorer La Réunion, un outil de caisse pour les commerçants, un SaaS IA pour
            les freelances : voilà ce que je construis.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            <Magnetic className="btn btn--primary btn--lg" href="#projets">
              Voir mes projets <ArrowDown size={18} aria-hidden="true" />
            </Magnetic>
            <Magnetic className="btn btn--ghost btn--lg" href={`mailto:${contact.email}`}>
              Parler de ton projet <ArrowUpRight size={18} aria-hidden="true" />
            </Magnetic>
          </motion.div>

          <motion.dl
            className="hero__stats"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } } }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <dt className="stat__label" style={{ order: 2 }}>{s.label}</dt>
                <dd className="stat__value" style={{ margin: 0 }}>{s.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <motion.div className="hero__phone hero__phone--back" style={{ y: yBack }}>
            <Phone
              src="/projects/caissepilot-dashboard.webp"
              alt=""
              glow="rgba(34, 197, 94, 0.18)"
              initial={{ opacity: 0, x: 60, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 1, ease, delay: 0.45 }}
            />
          </motion.div>
          <motion.div className="hero__phone hero__phone--front" style={{ y: yFront }}>
            <Phone
              src="/projects/noutpei-accueil.webp"
              alt=""
              initial={{ opacity: 0, y: 80, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--a"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: reduce ? 0 : [0, -8, 0] }}
            transition={{ opacity: { delay: 1 }, scale: { delay: 1 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <img src="/projects/noutpei-icon.webp" alt="" width="32" height="32" />
            <span>Nout Péi<small>App iOS & Android</small></span>
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--b"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: reduce ? 0 : [0, 8, 0] }}
            transition={{ opacity: { delay: 1.15 }, scale: { delay: 1.15 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <img src="/projects/caissepilot-icon.webp" alt="" width="32" height="32" />
            <span>CaissePilot<small>Lecture IA de la caisse</small></span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
