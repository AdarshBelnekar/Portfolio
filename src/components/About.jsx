// components/About.jsx
// Bio, career goal, and education timeline cards.

import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal, education } from '../data'

export default function About() {
  const [ref, inView] = useScrollReveal()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <SectionHeader label="01. about me" title="Who I Am" />

        {/* ── Two-column layout ──────────────────────────────── */}
        <div
          ref={ref}
          className="mt-14 grid md:grid-cols-2 gap-10"
        >
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                A little about me
              </h3>
              <p className="font-body text-text-secondary leading-relaxed text-sm">
                {personal.bio}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                Career Goals
              </h3>
              <p className="font-body text-text-secondary leading-relaxed text-sm">
                {personal.goal}
              </p>
            </div>

            {/* Fun facts */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Coffee ☕', 'Open Source 🌍', 'DSA 🧩', 'Music 🎧', ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-lg font-semibold text-text-primary mb-8">
              Education
            </h3>

            <div className="relative pl-6 space-y-8">
              {/* Vertical timeline line */}
              <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-violet to-transparent" />

              {education.map((edu, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-bg border-2 border-accent shadow-[0_0_8px_#38BDF8]" />

                  <p className="font-mono text-xs text-accent mb-1">{edu.year}</p>
                  <h4 className="font-display font-semibold text-text-primary text-sm leading-tight mb-1">
                    {edu.degree}
                  </h4>
                  <p className="font-body text-text-secondary text-xs">{edu.institution}</p>
                  <span className="inline-block mt-2 font-mono text-xs px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Reusable section header ──────────────────────────────────────────────── */
export function SectionHeader({ label, title }) {
  return (
    <div>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {/* Decorative accent line */}
      <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-accent via-violet to-emerald" />
    </div>
  )
}
