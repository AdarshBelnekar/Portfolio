// components/Skills.jsx
// Animated skill cards with level bars that fill on scroll-reveal.

import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './About'
import { skills } from '../data'

export default function Skills() {
  const [ref, inView] = useScrollReveal(0.1)

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02. skills" title="What I Work With" />

        <div
          ref={ref}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Individual skill card ────────────────────────────────────────────────── */
function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card p-6 group cursor-default transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(56,189,248,0.08)]"
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
      >
        {skill.icon}
      </div>

      {/* Skill name */}
      <h3 className="font-display font-semibold text-text-primary text-sm mb-3">
        {skill.name}
      </h3>

      {/* Level bar */}
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.07 + 0.3 }}
        />
      </div>

      {/* Percentage label */}
      <p className="font-mono text-xs text-text-muted mt-2 text-right">
        {skill.level}%
      </p>
    </motion.div>
  )
}
