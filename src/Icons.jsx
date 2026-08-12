// Minimal inline SVG icon set (24x24, stroke-based)
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  sun: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  moon: (p) => (
    <svg {...base} {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  ),
  download: (p) => (
    <svg {...base} {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  linkedin: (p) => (
    <svg {...base} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg {...base} {...p}>
      <path d="M3 21l1.4-4.1A8.5 8.5 0 1 1 8 19.6L3 21Z" />
      <path d="M9 9.5c.5 2.5 3 5 5.5 5.5l1-1.5 2 1c-.5 1.5-1.5 2-3 2-3.5-.5-6.5-3.5-7-7 0-1.5.5-2.5 2-3l1 2-1.5 1Z" strokeWidth="0" fill="currentColor" />
    </svg>
  ),
  message: (p) => (
    <svg {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  ),
  arrowUp: (p) => (
    <svg {...base} {...p}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  arrow: (p) => (
    <svg {...base} width="16" height="16" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  code: (p) => (
    <svg {...base} {...p}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  cart: (p) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="21" r="1.5" />
      <circle cx="19" cy="21" r="1.5" />
      <path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.5L22 7H6" />
    </svg>
  ),
  gauge: (p) => (
    <svg {...base} {...p}>
      <path d="M12 15 8.5 9.5" />
      <path d="M3 17a9 9 0 1 1 18 0" />
    </svg>
  ),
  chart: (p) => (
    <svg {...base} {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </svg>
  ),
  server: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  globe: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  ),
  target: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  briefcase: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 13h20" />
    </svg>
  ),
}
