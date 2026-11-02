import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { featured, more } from '../data.js'
import { Item, Phone, Reveal, TiltCard, ease } from './motion.jsx'

function CaseText({ project }) {
  return (
    <Reveal gap={0.06}>
      <Item className="case__top">
        {project.icon ? (
          <img className="case__icon" src={project.icon} alt="" width="52" height="52" loading="lazy" />
        ) : (
          <span className="case__icon case__icon--text" aria-hidden="true">{project.name[0]}</span>
        )}
        <div>
          <h3 className="case__name">{project.name}</h3>
          <div className="case__meta">{project.kind} · {project.year}</div>
        </div>
      </Item>
      <Item style={{ marginTop: 16 }}>
        <span className="chip chip--accent">{project.status}</span>
      </Item>
      <Item as="p" className="case__tagline">{project.tagline}</Item>
      <Item as="p" className="case__pitch">{project.pitch}</Item>
      <Reveal as="ul" className="features" gap={0.05}>
        {project.features.map(([title, text]) => (
          <Item as="li" className="feature" key={title}>
            <span className="feature__check" aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
            <span>
              <strong>{title}</strong>
              <span>{text}</span>
            </span>
          </Item>
        ))}
      </Reveal>
      <Item className="tech">
        {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
      </Item>
      {project.link && (
        <Item className="case__actions">
          <a className="btn btn--primary" href={project.link.href} target="_blank" rel="noreferrer">
            Visiter {project.link.label} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Item>
      )}
    </Reveal>
  )
}

// Téléphone avec onglets pour faire défiler les écrans de l'app.
function ScreenSwitcher({ project }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })
  const screen = project.screens[index]

  useEffect(() => {
    if (reduce || paused || !inView) return
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % project.screens.length)
    }, 3200)
    return () => clearInterval(id)
  }, [reduce, paused, inView, project.screens.length])

  return (
    <div className="case__media" ref={ref} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <Phone className="case__phone" glow={`${project.accent}33`}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={screen.src}
            src={screen.src}
            alt={`${project.name}, écran ${screen.label}`}
            width="560"
            height="1217"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          />
        </AnimatePresence>
      </Phone>
      <div className="tabs" role="tablist" aria-label={`Écrans de ${project.name}`}>
        {project.screens.map((s, i) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            className="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {i === index && (
              <motion.span
                layoutId={`tab-${project.id}`}
                className="tab__pill"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function DuoPhones({ project }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-20, 50])

  return (
    <div className="case__media" ref={ref}>
      <div className="phones-duo">
        {project.screens.map((s, i) => (
          <Phone
            key={s.src}
            src={s.src}
            alt={`${project.name}, écran ${s.label}`}
            glow={`${project.accent}33`}
            style={{ y: i === 0 ? y1 : y2, rotate: i === 0 ? -3 : 4 }}
          />
        ))}
      </div>
    </div>
  )
}

// Démo animée des outils Savvly : un texte s'écrit tout seul.
const demo = 'Rédige un post LinkedIn pour annoncer le lancement de mon offre de coaching, ton chaleureux…'

function ToolCloud({ project }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setCount(demo.length)
      return
    }
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= demo.length) {
          clearInterval(id)
          return c
        }
        return c + 1
      })
    }, 35)
    return () => clearInterval(id)
  }, [inView, reduce])

  return (
    <div className="case__media" ref={ref}>
      <div className="tool-cloud">
        <div className="tool-cloud__head">
          <span className="tool-cloud__dots" aria-hidden="true"><i /><i /><i /></span>
          <span>savvly.co</span>
        </div>
        <Reveal className="tool-cloud__grid" gap={0.05} amount={0.4}>
          {project.tools.map((tool) => (
            <motion.span
              key={tool}
              className="tool"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              whileHover={{ y: -3, borderColor: project.accent }}
            >
              {tool}
            </motion.span>
          ))}
        </Reveal>
        <p className="typing" aria-label={demo}>
          <span aria-hidden="true">{demo.slice(0, count)}</span>
          <span className="caret" aria-hidden="true" />
        </p>
      </div>
    </div>
  )
}

// Capture d'un site dans une fenêtre de navigateur, avec un léger parallaxe.
function BrowserShot({ project }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30])

  return (
    <div className="case__media" ref={ref}>
      <motion.div className="browser" style={{ y }} whileHover={{ rotate: -1, scale: 1.02 }}>
        <div className="browser__bar">
          <span className="tool-cloud__dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="browser__url">{project.site.url}</span>
        </div>
        <img
          src={project.site.src}
          alt={`Page d’accueil du site ${project.name}`}
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}

function CaseStudy({ project, flip }) {
  const media =
    project.id === 'noutpei' ? <ScreenSwitcher project={project} /> :
    project.site ? <BrowserShot project={project} /> :
    project.screens ? <DuoPhones project={project} /> :
    <ToolCloud project={project} />

  return (
    <motion.article
      className={`case ${flip ? 'case--flip' : ''}`}
      style={{ '--accent': project.accent, '--gx': flip ? '20%' : '80%' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease }}
      aria-label={project.name}
    >
      <CaseText project={project} />
      {media}
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projets">
      <div className="container">
        <Reveal className="section__head">
          <Item as="span" className="kicker">Projets</Item>
          <Item as="h2" className="h2">Des produits complets, pensés pour de vrais usages.</Item>
          <Item as="p" className="section__lead">
            Chaque projet est imaginé, designé, développé et mis en ligne par mes soins. Voici les plus récents.
          </Item>
        </Reveal>

        {featured.map((project, i) => (
          <CaseStudy key={project.id} project={project} flip={i % 2 === 1} />
        ))}

        <Reveal className="section__head" style={{ marginTop: 100, marginBottom: 0 }}>
          <Item as="h3" className="h2" style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}>
            Et aussi dans l’atelier
          </Item>
        </Reveal>
        <Reveal className="more-grid" gap={0.08} amount={0.1}>
          {more.map((p) => (
            <TiltCard key={p.name}>
              <div className="card__kind">{p.kind}</div>
              <h4 className="card__title">{p.name}</h4>
              <p className="card__text">{p.text}</p>
              <div className="tech">
                {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
