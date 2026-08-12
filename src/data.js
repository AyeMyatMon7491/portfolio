// ============================================================
//  EDIT THIS FILE to update all personal info on the site.
//  No other file needs to change for content updates.
// ============================================================

export const profile = {
  name: 'Aye Myat Mon',
  firstName: 'Aye Myat Mon',
  initials: 'AM',
  headline: 'Lead Business Analyst · Product Owner',
  // Rotating titles in the hero section
  roles: [
    'Lead Business Analyst',
    'Agile Product Owner',
    'BI & Analytics Lead',
    'Data Storyteller',
  ],
  pitch:
    'I turn complex telecom data into decisions executives can act on — building production-grade BI frameworks in SQL, Power BI and Python, and aligning engineering teams with C-level strategy as an Agile Product Owner. 8+ years across four major telecom operators.',
  availability: 'Open to new opportunities — Bangkok · remote-friendly',
  location: 'Bangkok, Thailand',
  timezoneNote: 'GMT+7 · Indochina Time',

  email: 'ayemyatmon.ans@gmail.com',
  phoneDisplay: '+66 9 598 29703',
  whatsapp: 'https://wa.me/66959829703',
  linkedin: 'https://www.linkedin.com/in/amm74/',
  website: null,
  // File must exist in /public
  resumeFile: 'Aye_Myat_Mon_Resume.pdf',
}

export const stats = [
  { value: 8, suffix: '+', label: 'Years in telecom analytics' },
  { value: 4, suffix: '', label: 'Major telecom operators' },
  { value: 20, suffix: '/35', label: 'VIP townships raised to Rank 1' },
  { value: 5, suffix: '', label: 'Flagship projects delivered' },
]

export const about = [
  `I'm a results-driven Senior Business Analyst and Agile Product Owner with over 8 years in the telecom industry. My specialty is transforming complex, multi-regional technical requirements into actionable business logic — and backing every recommendation with production-grade analytics built in SQL, Power BI and Python.`,
  `My career spans four major operators — Mytel, MPT-KSGM, ATOM (formerly Telenor) and Huawei Thailand — covering everything from nationwide 2G/3G/4G optimization to 5G network consolidation, GIS-driven geo-marketing and revenue ROI modeling for infrastructure investment.`,
  `What sets me apart is the bridge role I play: I speak the language of network engineers, commercial planners and C-level executives alike. I run alignment workshops, author BRDs and FRDs, and turn boardroom strategy into prioritized, deliverable backlogs.`,
]

export const skillGroups = [
  {
    icon: 'chart',
    title: 'BI & Data Visualization',
    skills: ['Power BI', 'SQL', 'Advanced Excel', 'Dashboard design', 'Executive reporting'],
  },
  {
    icon: 'gauge',
    title: 'Forecasting & Data Science',
    skills: ['Python', 'Data modeling', 'Predictive analytics', 'Trend tracking (MoM/YoY)', 'Anomaly detection'],
  },
  {
    icon: 'pin',
    title: 'Geospatial & Market Analysis',
    skills: ['GIS tools', 'Demographics analysis', 'Consumer behavior', 'Geo-marketing', 'Competitor footprint'],
  },
  {
    icon: 'spark',
    title: 'Process Automation',
    skills: ['VBA', 'RPA frameworks', 'Automated ETL pipelines', 'KPI streaming', 'Report automation'],
  },
  {
    icon: 'target',
    title: 'Product & Agile',
    skills: ['Agile & Scrum', 'Product ownership', 'BRD · FRD · SRS', 'Backlog prioritization', 'Workflow mapping'],
  },
  {
    icon: 'briefcase',
    title: 'Business & Strategy',
    skills: ['ROI modeling', 'Financial analytics', 'Stakeholder management', 'Strategic blueprinting', 'Vendor alignment'],
  },
]

export const experience = [
  {
    period: '2025 — Present',
    role: 'Senior Business Analyst & BI Lead',
    company: 'Huawei Thailand',
    companyUrl: null,
    location: 'Bangkok, Thailand',
    points: [
      'Translated complex multi-regional technical requirements into actionable business logic for a high-profile 5G Network Consolidation project, optimizing regional resource utilization.',
      'Prioritized investments in top-tier commercial zones using data-driven modeling for the In-Building Coverage project to maximize localized corporate ROI.',
      'Designed production-grade Power BI dashboards and SQL analytics frameworks streaming real-time network capacity, coverage and traffic metrics for executive decisions.',
      'Used Python and SQL for network performance forecasting, trend tracking and anomaly detection to guide infrastructure investment.',
      'Facilitated alignment workshops across Network Engineering, Commercial Planning and C-level stakeholders to steer regional transformation roadmaps.',
    ],
    tags: ['Power BI', 'SQL', 'Python', '5G', 'ROI modeling'],
  },
  {
    period: '2024 — 2025',
    role: 'GEO Marketing Analytics Manager',
    company: 'ATOM Myanmar (formerly Telenor)',
    companyUrl: null,
    location: 'Myanmar',
    points: [
      'Leveraged advanced GIS tools to analyze geographic, demographic and consumer-behavior datasets, defining strategic blueprints for new network coverage rollouts.',
      'Pioneered performance monitoring frameworks to identify underperforming localized sites, collaborating with Sales and Network teams on data-backed corrective interventions.',
      'Orchestrated targeted geo-marketing campaigns with predictive analysis of regional festivals, competitor footprint shifts and cultural seasonality trends.',
      'Delivered analytical support for Go-To-Market schemes, using traffic patterns to design customer promotions that accelerated acquisition in newly covered areas.',
    ],
    tags: ['GIS', 'Geo-marketing', 'Predictive analytics', 'GTM'],
  },
  {
    period: '2020 — 2024',
    role: 'Service Performance Analytics Deputy Manager',
    company: 'KDDI Summit Global Myanmar (MPT-KSGM)',
    companyUrl: null,
    location: 'Myanmar',
    points: [
      'Executed detailed revenue ROI calculations for network expansion projects and spearheaded localized radio network expansion plans ahead of high-traffic regional events.',
      'Designed and executed the high-priority "BTS Tower Recovery & Revenue Relocation" project, identifying field bottlenecks to salvage critical corporate revenue.',
      'Built automated KPI dashboards and predictive models using trend analysis (MoM/YoY) to forecast and prevent network degradation.',
      'Elevated 20 of 35 top-revenue VIP townships to Rank-1 performance status through user traffic and customer behavior analysis.',
      'Led a departmental transformation replacing manual reporting with Advanced Excel, VBA and RPA frameworks.',
    ],
    tags: ['ROI', 'KPI dashboards', 'VBA', 'RPA', 'Forecasting'],
  },
  {
    period: '2017 — 2020',
    role: 'E2E Mobile Service Quality Lead & Senior Business Analyst',
    company: 'Telecom International Myanmar (Mytel)',
    companyUrl: null,
    location: 'Myanmar',
    points: [
      'Acted as the primary strategic connector between C-level business units, internal technical teams and global cloud vendors to map service delivery workflows.',
      'Authored comprehensive Business Requirement Documents (BRD) and Functional Requirement Documents (FRD) driving digital transformation and network quality initiatives.',
      'Orchestrated the end-to-end project lifecycle for nationwide 2G/3G/4G optimization and automated capacity forecasting under tight timelines and budgets.',
      'Engineered scalable database logic and automated ETL pipelines streaming real-time KPIs, drastically reducing manual reporting overhead.',
    ],
    tags: ['BRD/FRD', 'ETL', 'KPI', 'Project lifecycle'],
  },
]

export const projects = [
  {
    title: '5G Network Consolidation',
    description:
      'High-profile multi-regional consolidation program at Huawei Thailand. Turned intricate technical requirements into business logic, built real-time Power BI and SQL dashboards for executives, and applied Python forecasting to steer infrastructure investment.',
    link: null,
    tags: ['Power BI', 'SQL', 'Python', 'Executive BI'],
    featured: true,
  },
  {
    title: 'BTS Tower Recovery & Revenue Relocation',
    description:
      'Designed and led a high-priority recovery program at MPT-KSGM: identified field bottlenecks, relocated at-risk revenue and protected critical income streams with automated KPI tracking and predictive degradation models.',
    link: null,
    tags: ['ROI', 'KPI dashboards', 'Predictive models'],
  },
  {
    title: 'VIP Township Performance Upgrade',
    description:
      'Elevated 20 of 35 top-revenue VIP townships to Rank-1 performance by analyzing user traffic patterns and customer behavior, and pairing findings with targeted marketing campaigns.',
    link: null,
    tags: ['Analytics', 'Customer behavior', 'Marketing'],
  },
  {
    title: 'Nationwide 2G/3G/4G Service Quality Program',
    description:
      'End-to-end project lifecycle at Mytel: nationwide optimization, automated capacity forecasting, scalable ETL pipelines for real-time KPIs — delivered under tight timelines and budget constraints.',
    link: null,
    tags: ['ETL', 'BRD/FRD', 'Automation', 'Capacity planning'],
  },
]

export const education = [
  { degree: 'Master of Business Management', school: 'Yangon University of Economics', period: '2022 — 2024' },
  { degree: 'B.E. Electronic & Communication', school: 'Technical University Hmawbi', period: '2007 — 2012' },
]

export const languages = [
  { name: 'Burmese', level: 'Native' },
  { name: 'English', level: 'Fluent, daily working language' },
  { name: 'Thai', level: 'Basic' },
  { name: 'German', level: 'Basic' },
]
