import { useEffect, useRef, useState } from 'react'

/** Light/dark theme with localStorage persistence; dark by default */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

/** Adds .visible to elements with .reveal when they enter the viewport */
export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Typewriter cycling through a list of phrases */
export function useTypewriter(phrases, typeMs = 70, eraseMs = 35, holdMs = 1600) {
  const [text, setText] = useState('')
  const state = useRef({ phrase: 0, char: 0, deleting: false })

  useEffect(() => {
    let timer
    const tick = () => {
      const s = state.current
      const current = phrases[s.phrase]
      if (!s.deleting) {
        s.char++
        setText(current.slice(0, s.char))
        if (s.char === current.length) {
          s.deleting = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeMs)
      } else {
        s.char--
        setText(current.slice(0, s.char))
        if (s.char === 0) {
          s.deleting = false
          s.phrase = (s.phrase + 1) % phrases.length
        }
        timer = setTimeout(tick, eraseMs)
      }
    }
    timer = setTimeout(tick, typeMs)
    return () => clearTimeout(timer)
  }, [phrases, typeMs, eraseMs, holdMs])

  return text
}

/** Animated counter that starts when `start` becomes true */
export function useCounter(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return value
}

/** Returns true once the ref'd element has been visible */
export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/** Scroll progress 0..1 and "scrolled past 10px" flag */
export function useScroll() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return { progress, scrolled }
}

/** Tracks which section id is currently active for nav highlighting */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}
