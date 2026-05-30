// components/Footer.jsx
// Minimal footer with copyright and social links.

import { personal } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted">
          © {year} <span className="text-text-secondary">{personal.name}</span>. Built with React + Vite + Tailwind.
        </p>
        <p className="font-mono text-xs text-text-muted flex items-center gap-1">
          Made with <span className="text-red-400">♥</span> and too much coffee.
        </p>
      </div>
    </footer>
  )
}
