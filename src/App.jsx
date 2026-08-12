import { useState } from 'react'
import { profile, stats, about, skillGroups, experience, projects, education, languages } from './data.js'
import { Icon } from './Icons.jsx'
import {
  useTheme,
  useRevealOnScroll,
  useTypewriter,
  useCounter,
  useInView,
  useScroll,
  useActiveSection,
} from './hooks.js'

const NAV_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
const NAV_LABELS = { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' }
const RESUME_URL = `${import.meta.env.BASE_URL}${profile.resumeFile}`

function Nav({ theme, toggleTheme }) {
  const { scrolled } = useScroll()
  const active = useActiveSection(NAV_IDS)
  const [open, setOpen] = useState(false)

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-badge">{profile.initials}</span>
          {profile.name}
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
                {NAV_LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">
            {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
          </button>
          <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const typed = useTypewriter(profile.roles)
  return (
    <header className="hero" id="home">
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="container hero-inner">
        <div className="badge">
          <span className="dot" />
          {profile.availability}
        </div>
        <h1>
          Hi, I'm <span className="grad">{profile.firstName}</span>.
        </h1>
        <div className="typewriter">
          {typed}
          <span className="caret" />
        </div>
        <p className="hero-pitch">{profile.pitch}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={RESUME_URL} download>
            <Icon.download /> Download Resume
          </a>
          <a className="btn btn-ghost" href="#contact">
            <Icon.message /> Contact Me
          </a>
        </div>
        <div className="hero-socials">
          <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Icon.linkedin />
          </a>
          <a className="social-link" href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
            <Icon.whatsapp />
          </a>
          <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email" title="Email">
            <Icon.mail />
          </a>
          {profile.website && (
            <a className="social-link" href={profile.website} target="_blank" rel="noreferrer" aria-label="Website" title="Website">
              <Icon.globe />
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

function StatCard({ value, suffix, label }) {
  const [ref, inView] = useInView()
  const n = useCounter(value, inView)
  return (
    <div className="stat-card reveal" ref={ref}>
      <div className="stat-value">
        {n}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">About</div>
          <h2 className="section-title">From raw data to boardroom decisions</h2>
        </div>
        <div className="stats" style={{ marginBottom: 56 }}>
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-side reveal">
            <div className="info-card">
              <h4>Location</h4>
              <p>
                {profile.location}
                <span>{profile.timezoneNote}</span>
              </p>
            </div>
            <div className="info-card">
              <h4>Languages</h4>
              {languages.map((l) => (
                <p key={l.name}>
                  {l.name}
                  <span>{l.level}</span>
                </p>
              ))}
            </div>
            <div className="info-card">
              <h4>Education</h4>
              {education.map((e) => (
                <p key={e.degree}>
                  {e.degree}
                  <span>
                    {e.school} · {e.period}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">Skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            From SQL queries and Python models to the executive dashboards and product decisions they power.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g) => {
            const GroupIcon = Icon[g.icon]
            return (
              <div className="skill-card reveal" key={g.title}>
                <div className="skill-icon">
                  <GroupIcon />
                </div>
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Where I've made an impact</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item reveal" key={job.company}>
              <div className="timeline-period">{job.period}</div>
              <h3>{job.role}</h3>
              <div className="timeline-company">
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}{' '}
                · {job.location}
              </div>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className="chips">
                {job.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Flagship projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`card reveal ${p.featured ? 'featured' : ''}`} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.linkLabel || 'View project'} <Icon.arrow />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap reveal">
          <div className="contact-inner">
            <div className="section-kicker">Contact</div>
            <h2>Let's turn data into decisions</h2>
            <p>
              I'm open to new opportunities in business analytics, BI and product ownership. Reach out through any
              channel — I usually reply within a few hours (GMT+7 business time).
            </p>
            <div className="contact-cards">
              <a className="contact-card" href={`mailto:${profile.email}`}>
                <span className="icon">
                  <Icon.mail />
                </span>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </a>
              <a className="contact-card" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <span className="icon">
                  <Icon.whatsapp />
                </span>
                <strong>WhatsApp</strong>
                <span>{profile.phoneDisplay}</span>
              </a>
              <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="icon">
                  <Icon.linkedin />
                </span>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </a>
            </div>
            <a className="btn btn-primary" href={RESUME_URL} download>
              <Icon.download /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ToTop() {
  const { scrolled } = useScroll()
  return (
    <button
      className={`to-top ${scrolled ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <Icon.arrowUp />
    </button>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useRevealOnScroll()

  return (
    <>
      <ScrollProgress />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · Built with <span className="heart">React</span>
        </div>
      </footer>
      <ToTop />
    </>
  )
}

function ScrollProgress() {
  const { progress } = useScroll()
  return <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
}
