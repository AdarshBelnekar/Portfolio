// App.jsx
// Root component — assembles all sections in order.

import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text-primary">
      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </div>
  )
}
