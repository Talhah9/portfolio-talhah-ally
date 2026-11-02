import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export const ease = [0.22, 0.61, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

// Révèle ses enfants au scroll, une seule fois.
export function Reveal({ as = 'div', children, gap = 0.08, delay = 0, amount = 0.2, ...props }) {
  const Tag = motion[as]
  return (
    <Tag
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function Item({ as = 'div', children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag variants={fadeUp} {...props}>
      {children}
    </Tag>
  )
}

// Bouton/lien qui suit légèrement le pointeur.
export function Magnetic({ children, strength = 0.25, className, ...props }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18 })
  const sy = useSpring(y, { stiffness: 250, damping: 18 })

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

// Carte avec inclinaison 3D et halo qui suit la souris.
export function TiltCard({ children, className = '', accent = '#2dd4bf', ...props }) {
  const reduce = useReducedMotion()
  const rx = useSpring(0, { stiffness: 200, damping: 20 })
  const ry = useSpring(0, { stiffness: 200, damping: 20 })
  const gx = useMotionValue('50%')
  const gy = useMotionValue('50%')

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    gx.set(`${px * 100}%`)
    gy.set(`${py * 100}%`)
    if (reduce) return
    rx.set((0.5 - py) * 6)
    ry.set((px - 0.5) * 8)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.article
      className={`card ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      variants={fadeUp}
      {...props}
    >
      <motion.div
        className="card__glow"
        aria-hidden="true"
        style={{
          background: `radial-gradient(360px circle at var(--x) var(--y), ${accent}22, transparent 70%)`,
          '--x': gx,
          '--y': gy,
        }}
      />
      {children}
    </motion.article>
  )
}

export function Phone({ src, alt, glow, className = '', children, ...props }) {
  return (
    <motion.div className={`phone ${className}`} style={{ '--phone-glow': glow }} {...props}>
      <div className="phone__screen">
        {children ?? <img src={src} alt={alt} width="560" height="1217" loading="lazy" decoding="async" />}
      </div>
    </motion.div>
  )
}
