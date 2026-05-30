// components/Contact.jsx
// Contact info cards + a simple client-side contact form.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './About'
import { personal } from '../data'

/* ── Contact info items ───────────────────────────────────── */
const contactItems = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: <MailIcon />,
    color: '#38BDF8',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adarshbelnekar/',
    href: personal.linkedin,
    icon: <LinkedInIcon />,
    color: '#818CF8',
  },
  {
    label: 'GitHub',
    value: 'github.com/AdarshBelnekar',
    href: personal.github,
    icon: <GithubIcon />,
    color: '#34D399',
  },
]

export default function Contact() {
  const [ref, inView] = useScrollReveal()
  const [form, setForm]         = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Handle controlled inputs
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Demo submit handler — wire to your backend or Formspree as needed
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: replace with actual API call, e.g. Formspree or EmailJS
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="04. contact" title="Let's Work Together" />

        <div ref={ref} className="mt-14 grid md:grid-cols-2 gap-10">

          {/* ── Left: Info ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="font-body text-text-secondary leading-relaxed text-sm">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hello — my inbox is always open!
            </p>

            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 p-4 group hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                {/* Icon circle */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>

                <div>
                  <p className="font-mono text-xs text-text-muted">{item.label}</p>
                  <p className="font-body text-sm text-text-primary">{item.value}</p>
                </div>

                <ExternalIcon className="ml-auto w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>

          {/* ── Right: Form ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="glass-card p-8"
          >
            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <span className="text-5xl mb-4">🎉</span>
                <h3 className="font-display font-bold text-text-primary text-xl mb-2">Message Sent!</h3>
                <p className="font-body text-text-secondary text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              /* Contact form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField
                  label="Your Name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Johnson"
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                />

                {/* Message textarea */}
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3
                               font-body text-sm text-text-primary placeholder-text-muted
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3.5">
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Reusable form field ──────────────────────────────────────────────────── */
function FormField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block font-mono text-xs text-text-muted mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3
                   font-body text-sm text-text-primary placeholder-text-muted
                   focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                   transition-colors"
      />
    </div>
  )
}

/* ── SVG icons ────────────────────────────────────────────────────────────── */
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  )
}
