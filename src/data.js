// ─────────────────────────────────────────────────────────────────────────────
// data.js  –  Edit this file to personalise your entire portfolio in one place
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: 'Adarsh Belnekar',
  tagline: 'Building digital experiences that matter.',
  // Roles cycled through the typing animation
  roles: [
    'Full Stack Developer',
    'React Enthusiast',
    'Problem Solver',
    'Open Source Contributor',
    'B.Tech CS Graduate',
  ],
  bio: `I'm a Computer Science graduate passionate about crafting clean, performant,
and accessible web experiences. I love turning complex problems into elegant,
simple designs — and I'm always learning something new.`,
  goal: `My goal is to join an innovative team where I can contribute meaningful
products while growing as an engineer. I'm especially excited about AI-driven
applications and scalable full-stack systems.`,
  email: 'bussinessa144@gmail.com',
  github: 'https://github.com/AdarshBelnekar',
  linkedin: 'https://www.linkedin.com/in/adarshbelnekar/',
  resumeUrl: 'https://www.linkedin.com/in/adarshbelnekar/',           // ← replace with your actual resume PDF link
}

export const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Sharad Institute of Technology',
    year: '2021– 2025',
    
  },
  {
    degree: 'Higher Secondary (PCM + CS)',
    institution: 'Rajarm  College',
    year: '2019 – 2021',
    
  },
]

export const skills = [
  { name: 'React',       icon: '⚛️',  level: 88, color: '#38BDF8' },
  { name: 'JavaScript',  icon: '𝙅𝙎', level: 85, color: '#F7DF1E' },
  { name: 'Python',      icon: '🐍',  level: 80, color: '#34D399' },
  { name: 'Java',        icon: '☕',  level: 75, color: '#F97316' },
  { name: 'Node.js',     icon: '🟢',  level: 78, color: '#86EFAC' },
  { name: 'SQL',         icon: '🗄️',  level: 72, color: '#A78BFA' },
  { name: 'Git / GitHub',icon: '🔀',  level: 85, color: '#F472B6' },
  { name: 'Tailwind CSS',icon: '🎨',  level: 90, color: '#38BDF8' },
]

export const projects = [
  {
    title: 'Food Delivery App',
    description:
      'A modern food delivery platform with real-time order tracking, restaurant listings, cart management, and secure online payments. Built with a clean UI for smooth user experience across devices.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/AdarshBelnekar/Tomato-Food-Del',
    live: 'https://tomato-food-del-front-end.onrender.com/',
    featured: true,
  },
  {
    title: 'Medical Chatbot using RAG',
    description:
      'An AI-powered medical chatbot built using Retrieval-Augmented Generation (RAG). It provides accurate healthcare responses by retrieving information from medical documents and generating context-aware answers using LLMs.',
    image:
  'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
    tech: ['React', 'Python', 'LangChain', 'Groq API', 'Vector DB'],
    github: 'https://github.com/AdarshBelnekar/Medical_ChatBot',
    live: 'https://github.com/AdarshBelnekar/Medical_ChatBot',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website with responsive design, smooth animations, and modern UI to showcase projects, skills, and achievements professionally.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/AdarshBelnekar/portfolio',
    live: '#',
    featured: false,
  },
]
