import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Phone as PhoneIcon } from 'lucide-react'
import { contact, education, experiences, process, services, skills, stack } from '../data.js'
import { Item, Magnetic, Reveal } from './motion.jsx'

export function Marquee() {
  const reduce = useReducedMotion()
  const items = [...stack, ...stack]
  return (
    <div className="marquee" aria-label="Technologies utilisées">
      <motion.div
        className="marquee__track"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {items.map((t, i) => (
          <span className="marquee__item" key={`${t}-${i}`} aria-hidden={i >= stack.length ? 'true' : undefined}>
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const reduce = useReducedMotion()
  const scaleX = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1])

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section__head">
          <Item as="span" className="kicker">Services</Item>
          <Item as="h2" className="h2">Ce que je peux construire pour toi.</Item>
          <Item as="p" className="section__lead">
            De l’app mobile au site vitrine, je prends le projet en entier : un seul interlocuteur, de l’idée à la
            mise en production.
          </Item>
        </Reveal>

        <Reveal className="services" gap={0.06} amount={0.15}>
          {services.map(([title, text], i) => (
            <Item className="service" key={title}>
              <div className="service__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="service__title">{title}</h3>
              <p className="service__text">{text}</p>
            </Item>
          ))}
        </Reveal>

        <div className="process-wrap" ref={ref}>
          <div className="process__line" aria-hidden="true">
            <motion.span style={{ scaleX }} />
          </div>
          <Reveal as="ol" className="process" gap={0.12} amount={0.3}>
            {process.map(([title, text], i) => (
              <Item as="li" key={title}>
                <div className="step__num">{i + 1}</div>
                <h3 className="step__title">{title}</h3>
                <p className="step__text">{text}</p>
              </Item>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section" id="parcours">
      <div className="container about">
        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="portrait__img"
            src="/uploads/portrait.webp"
            alt="Portrait de Talhah Ally"
            width="800"
            height="800"
            loading="lazy"
          />
          <div className="portrait__card">
            <strong>Talhah Ally</strong>
            <span>Créateur d’applications · originaire de La Réunion</span>
          </div>
        </motion.div>

        <div>
          <Reveal className="about__story">
            <Item as="span" className="kicker">Parcours</Item>
            <Item as="h2" className="h2" style={{ marginBottom: 28 }}>Du pilotage de projet à la création de produits.</Item>
            <Item as="p">
              J’ai grandi à La Réunion. Après deux ans d’études d’ostéopathie à Bruxelles, j’ai changé de cap pour
              le web et le marketing à Paris, avec un bachelor puis un <strong>MBA à My Digital School</strong>.
            </Item>
            <Item as="p">
              En parallèle, j’ai géré des projets web pour <strong>La Poste</strong>, le <strong>Musée Maillol</strong>{' '}
              et le <strong>groupe Ravate</strong>. À force de piloter des produits, j’ai voulu les construire
              moi-même. J’ai appris à coder pour de bon.
            </Item>
            <Item as="p">
              Aujourd’hui je crée des applications complètes, seul, de la première maquette jusqu’à la mise en
              ligne : Savvly, CaissePilot, et Nout Péi, une app pour faire découvrir mon île.
            </Item>
          </Reveal>

          <Reveal as="ol" className="timeline" gap={0.1}>
            {experiences.map((e) => (
              <Item as="li" className="tl" key={e.role + e.period}>
                <div className="tl__period">{e.period}</div>
                <h3 className="tl__role">{e.role}</h3>
                <div className="tl__org">{e.org}</div>
                <p className="tl__text">{e.text}</p>
              </Item>
            ))}
          </Reveal>

          <Reveal>
            <Item as="h3" className="subhead">Compétences</Item>
            <div className="skills">
              {skills.map(([title, list]) => (
                <Item className="skill-group" key={title}>
                  <h4>{title}</h4>
                  <div>{list.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                </Item>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Item as="h3" className="subhead">Formations</Item>
            <div className="edu">
              {education.map(([period, title, school]) => (
                <Item className="edu__item" key={title}>
                  <div className="edu__period">{period}</div>
                  <div>
                    <div className="edu__title">{title}</div>
                    <div className="edu__school">{school}</div>
                  </div>
                </Item>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section section--tight" id="contact">
      <div className="container">
        <Reveal className="contact" amount={0.3}>
          <Item as="span" className="kicker">Contact</Item>
          <Item as="h2" className="h2">
            Une idée d’app ? <span className="gradient-text">On la construit.</span>
          </Item>
          <Item as="p" className="contact__lead">
            Raconte-moi ton projet, même s’il n’est encore qu’une idée. Je réponds sous 24 h.
          </Item>
          <Item className="contact__actions">
            <Magnetic className="btn btn--primary btn--lg" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" /> {contact.email}
            </Magnetic>
            <Magnetic className="btn btn--ghost btn--lg" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
            </Magnetic>
          </Item>
          <Item className="contact__links">
            <a href={`tel:${contact.phoneHref}`}><PhoneIcon size={16} aria-hidden="true" /> {contact.phone}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> Talhah Ally</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> Talhah9</a>
          </Item>
        </Reveal>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Talhah Ally · Créateur d’applications web & mobiles</span>
          <a href="#top">Retour en haut ↑</a>
        </footer>
      </div>
    </section>
  )
}
