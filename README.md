# 🚀 Alex Chen — Portfolio

A modern, animated dark-theme portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg              # App favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with scroll-spy
│   │   ├── Hero.jsx             # Typing animation + CTA
│   │   ├── About.jsx            # Bio + education timeline
│   │   ├── Skills.jsx           # Animated skill cards
│   │   ├── Projects.jsx         # Project cards with links
│   │   ├── Contact.jsx          # Contact info + form
│   │   ├── Footer.jsx           # Minimal footer
│   │   └── BackToTop.jsx        # Floating scroll-up button
│   ├── hooks/
│   │   ├── useTypingEffect.js   # Typewriter cycle hook
│   │   └── useScrollReveal.js   # IntersectionObserver hook
│   ├── App.jsx                  # Root layout
│   ├── data.js                  # ← EDIT THIS to personalise
│   ├── index.css                # Tailwind + custom styles
│   └── main.jsx                 # React entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚡ Install & Run

```bash
# 1. Enter the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

> Requires **Node.js ≥ 18**

---

## 🌐 Deploy to Vercel (free)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel          # follow the prompts
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project**.
3. Import your GitHub repo.
4. Vercel auto-detects Vite — click **Deploy**.
5. Done! Your site is live at `your-project.vercel.app`.

### Option C — Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com/drop
```

---

## ✏️ How to Customise

**All content lives in `src/data.js`** — open it and update:

| Field            | What to change                                 |
|------------------|------------------------------------------------|
| `personal.name`  | Your full name                                 |
| `personal.roles` | Array of roles for the typing animation        |
| `personal.bio`   | Your bio paragraph                             |
| `personal.email` | Your email address                             |
| `personal.github`| Your GitHub profile URL                        |
| `personal.linkedin` | Your LinkedIn URL                           |
| `personal.resumeUrl` | Link to your resume PDF (or a Google Drive share link) |
| `education`      | Update degree, institution, year, grade        |
| `skills`         | Add/remove skills, change level (0–100)        |
| `projects`       | Add your real projects with image, links, tech |

### Swap the profile image

In `src/components/Hero.jsx`, replace:
```jsx
<span className="text-7xl select-none" role="img" aria-label="profile">🧑‍💻</span>
```
with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```
Place `your-photo.jpg` in the `public/` folder.

### Connect the contact form

In `src/components/Contact.jsx`, replace the `handleSubmit` body with:
```js
// Formspree — free tier available at formspree.io
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Change colours

Edit `tailwind.config.js` → `theme.extend.colors`:
- `accent`   → primary cyan highlight
- `violet`   → secondary purple
- `emerald`  → tertiary green

---

## 🛠 Tech Stack

| Tool           | Purpose                    |
|----------------|----------------------------|
| React 18       | UI library                 |
| Vite 5         | Build tool                 |
| Tailwind CSS 3 | Utility-first styling      |
| Framer Motion  | Animations                 |
| Syne           | Display font               |
| DM Sans        | Body font                  |
| JetBrains Mono | Code / label font          |

---

## 📄 License

MIT — free to use, modify, and deploy.
