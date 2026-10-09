import itsSidePhoto from './assets/images/foto_samping_its_1791082807812.jpg';
import rasyaHeadshot from './assets/images/rasya_headshot_1791083407317.jpg';

/**
 * Portfolio Data for I P. G. Divy Sahasrasya (Rasya)
 * Corporate Tech Venture & Digital Studio Lead
 */

export const MY_PROFILE = {
  fullName: 'I P. G. Divy Sahasrasya',
  name: 'Sahasrasya',
  callName: 'Rasya',
  title: 'Digital Innovation & Venture Studio Lead',
  role: 'Frontend Engineering, Rapid Prototyping & Startup Operations',
  institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
  location: 'Surabaya, Indonesia',
  origin: 'Bali, Indonesia',
  email: 'tuddechnnel07@gmail.com',
  bio: `Information Systems undergraduate at Institut Teknologi Sepuluh Nopember (ITS) leading tech venture prototyping, modern frontend architectures, and digital product strategy. Dedicated to engineering fast, accessible web applications and translating user discovery into market-ready ventures.`,
  extendedBio: `Combining semantic web standards (HTML5/CSS3/JavaScript) with hands-on agile event operations, cross-functional logistics leadership, and creative digital media. Operating at the intersection of technical execution and venture building to deliver high-impact digital solutions.`,
  avatar: rasyaHeadshot,
  itsPhoto: itsSidePhoto,
  socials: {
    instagram: 'https://www.instagram.com/shsrsyaa/',
    instagramHandle: '@shsrsyaa',
    linkedin: 'https://www.linkedin.com/in/i-p-g-divy-sahasrasya-391390434/',
    email: 'tuddechnnel07@gmail.com'
  }
};

export const MY_SERVICES = [
  {
    id: 'webapp-dev',
    title: 'Web App Development',
    subtitle: 'Frontend Architecture & High-Performance Web',
    description: 'Engineering semantic, accessible, and ultra-responsive web applications built with modern HTML5, CSS3, JavaScript, and modern tooling with sub-second initial load speeds.',
    deliverables: [
      'Semantic & Accessible HTML5 / CSS3 Architectures',
      'Modern Client-Side JavaScript UI Components',
      'Fluid Cross-Device Responsive Layouts',
      'Lighthouse Optimization & Sub-Second Latency'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'],
    badge: 'Core Service'
  },
  {
    id: 'uiux-prototyping',
    title: 'UI/UX Prototyping',
    subtitle: 'User Research, Wireframing & Rapid Validation',
    description: 'De-risking product hypotheses through structured user discovery interviews, low-fidelity wireframes, high-fidelity clickable prototypes, and usability stress-testing.',
    deliverables: [
      'Qualitative User Research & Persona Mapping',
      'Low & High-Fidelity Interactive Wireframing',
      'Design System Foundations & Style Tokens',
      'Usability Audits & User Friction Elimination'
    ],
    technologies: ['User Research', 'Rapid Prototyping', 'Wireframing', 'UX Audits'],
    badge: 'Discovery'
  },
  {
    id: 'startup-advisory',
    title: 'Startup MVP Advisory',
    subtitle: 'Product Scoping & Go-To-Market Execution',
    description: 'Translating early-stage concepts into lean, market-ready MVPs. Structuring feature prioritization, agile development sprints, and tactical go-to-market operational roadmaps.',
    deliverables: [
      'Value Proposition & Lean Canvas Definition',
      'Minimum Viable Product (MVP) Scope Definition',
      'Sprint Planning & Agile Delivery Cadence',
      'Go-To-Market Launch Strategy & Operations'
    ],
    technologies: ['Product Management', 'GTM Strategy', 'Agile Operations', 'KPI Systems'],
    badge: 'Strategy'
  },
  {
    id: 'video-production',
    title: 'Creative Video Production',
    subtitle: 'Visual Content, Motion Storytelling & Media Assets',
    description: 'End-to-end creative video production and editing for high-engagement product launches, investor reels, event documentaries, and social media brand communication.',
    deliverables: [
      'Short-Form Video Editing (Reels, TikTok, Shorts)',
      'Promotional Launch Trailers & Product Overviews',
      'Audio Synchronization, Sound Design & Color Grading',
      'Motion Visual Graphics & Social Branding Packs'
    ],
    technologies: ['Adobe Premiere Pro', 'CapCut', 'Alight Motion', 'Canva'],
    badge: 'Creative'
  }
];

export const MY_CASE_STUDIES = [
  {
    id: 'banjar-youth',
    title: 'Multi-Term Traditional Festival Logistics & Resource Command',
    organization: 'Banjar Youth Organization (STT)',
    role: 'Event Logistics & Operations Lead',
    period: '2024 & 2025',
    location: 'Semarapura, Bali',
    category: 'Operations & Logistics',
    problem: 'Multi-day traditional and community festivities demanded synchronization of distributed local vendor supplies, volatile temporary electrical grids, physical staging, and multi-thousand-dollar communal asset inventories with zero tolerance for blackout or operational downtime.',
    solution: 'Designed a standardized logistics manifest and physical supply pipeline. Deployed specialized sub-teams across electrical infrastructure, acoustic staging, and security checkpoints with morning daily stand-ups and active contingency protocols.',
    techStack: ['Operations Manifesting', 'Resource Logistics', 'Safety Protocols', 'Audio-Visual Staging', 'Cross-Functional Leadership'],
    metrics: [
      { label: 'Operational Downtime', value: '0 Hours' },
      { label: 'Event Delivery Rate', value: '100% On-Time' },
      { label: 'Field Crew Supervised', value: '40+ Members' }
    ],
    impact: 'Achieved 100% on-time milestone delivery across two consecutive annual terms. Zero equipment failures or power blackouts during peak ceremonial events, earning sustained community leadership trust.',
    fullCase: `As the Logistics & Operations Lead for Banjar Youth Organization (STT) during both the 2024 and 2025 event terms in Semarapura, Bali, I took full operational accountability for multi-day traditional cultural celebrations. 
    
Key challenges involved managing scarce temporary power distribution, safely coordinating elevated staging structures, and cataloging heavy inventory across multiple venues. By implementing a disciplined supply tracking manifest and proactive pre-event equipment inspections, we eliminated vendor delays and ensured uninterrupted power delivery throughout peak ceremonial rites.`
  },
  {
    id: 'owl-fest',
    title: 'High-Density Campus Festival Security & Perimeter Architecture',
    organization: 'OWL FEST V (SWARA)',
    role: 'Security & Crowd Control Division',
    period: '2024',
    location: 'Semarapura, Bali',
    category: 'Crowd & Safety Operations',
    problem: 'Over 900+ festival attendees, VIP musical artists, and institutional guests converged at a single enclosed festival ground, creating dangerous entry bottlenecks, perimeter breach vulnerabilities, and high risk of crowd surges.',
    solution: 'Engineered single-flow pedestrian ingress/egress corridors, instituted a multi-tier ticket scanning checkpoint, and deployed radio communication relays across perimeter outposts. Established discrete VIP security escort paths and emergency evacuation lanes.',
    techStack: ['Crowd Flow Modeling', 'Perimeter Architecture', 'Emergency Evacuation Plans', 'Risk Triage Protocols', 'Real-Time Radio Relays'],
    metrics: [
      { label: 'Attendees Managed', value: '900+ People' },
      { label: 'Critical Incidents', value: '0 Reported' },
      { label: 'Ingress Bottleneck Cut', value: '-35% Wait Time' }
    ],
    impact: 'Delivered an incident-free high-density festival. Ticket verification throughput accelerated by 35%, preventing street congestion, while artists and VIP delegations completed all appearances without schedule deviation.',
    fullCase: `OWL FEST V brought together high-energy musical acts and a crowd exceeding 900 people. Operating on the frontlines of crowd control and perimeter defense required decisive situational awareness. 

We mapped the entire venue perimeter to eliminate blind spots, designed one-way pedestrian lanes that prevented counter-flow blockages, and coordinated closely with institutional leaders to ensure immediate medical access corridors.`
  },
  {
    id: 'ceketer',
    title: 'Multi-Cohort Community Field Direction & Media Pipeline',
    organization: 'CEKETER (Cohort Community)',
    role: 'Field Operations & Event Coordinator',
    period: '2024 – 2026',
    location: 'Bali, Indonesia',
    category: 'Community Leadership',
    problem: 'Managing decentralized gatherings across multi-year cohort members in Bali suffered from conflicting schedule expectations, fragmented communication channels, and uncoordinated on-ground documentation.',
    solution: 'Instituted unified digital schedules, led on-site field orchestration, resolved live logistical conflicts, and coordinated a dedicated mobile media squad to capture high-definition promotional photo/video assets for community archives.',
    techStack: ['Field Coordination', 'Agile Timeline Enforcement', 'Media Production Direction', 'Conflict Mediation', 'Community Engagement'],
    metrics: [
      { label: 'Active Program Cycle', value: '2+ Years' },
      { label: 'Timeline Adherence', value: '98%' },
      { label: 'Media Deliverables', value: '50+ Assets' }
    ],
    impact: 'Strengthened cross-cohort retention and collaboration, maintaining a 98% on-schedule operational track record across multiple community programs and delivering polished social visual assets.',
    fullCase: `At CEKETER, bridging generational cohorts requires balancing operational structure with an open, engaging atmosphere. As Field Operations & Event Coordinator from 2024 to 2026, I managed logistical schedules and led live conflict resolution on-site. 

Additionally, I directed the documentation squad, translating raw event footage into compelling highlight reels using Premiere Pro and CapCut to drive community engagement.`
  }
];

export const MY_PROCESS_STEPS = [
  {
    number: '01',
    step: 'Discovery & Research',
    tagline: 'Uncovering Core Friction & Strategic Targets',
    description: 'We initiate by listening deeply: auditing the problem space, conducting stakeholder and user discovery interviews, analyzing competitive alternatives, and establishing concrete quantitative milestones.',
    outputs: ['User Pain Point Audit', 'Persona & Journey Mapping', 'KPI & Success Metrics']
  },
  {
    number: '02',
    step: 'UI/UX Prototyping',
    tagline: 'Translating Insights into Interactive Prototypes',
    description: 'Hypotheses are tested rapidly through structured wireframes and high-fidelity clickable UI prototypes. Design ergonomics, cognitive load, and accessibility standards are rigorously evaluated.',
    outputs: ['Clickable Wireframes', 'Component Design System', 'Usability Verification']
  },
  {
    number: '03',
    step: 'Clean Code Development',
    tagline: 'Semantic, High-Performance Frontend Execution',
    description: 'Transforming prototypes into production-grade, responsive code. Leveraging semantic HTML5, modern CSS3 layouts, and optimized JavaScript with zero-bloat architecture and smooth interactions.',
    outputs: ['Semantic HTML5/CSS3/JS', '100% Responsive Layouts', 'Cross-Browser Verification']
  },
  {
    number: '04',
    step: 'Go-To-Market & Deployment',
    tagline: 'Venture Launch & Iterative Optimization',
    description: 'Preparing the digital product for market entry. We test deployment resilience, align promotional launch media (trailers and video reels), and monitor initial user adoption for iterative enhancement.',
    outputs: ['Production Deployment', 'Promotional Video Launch Pack', 'User Feedback Loop']
  }
];

export const MY_VENTURES = [
  {
    id: 'motomod-hub',
    title: 'MotoMod Precision Hub',
    tagline: 'Automotive Tech & Motorcycle Mod Spec Platform',
    institution: 'ITS Innovation Project',
    stage: 'Concept Prototype',
    description: 'A digital engineering and aesthetic platform for motorcycle enthusiasts and customizers. Features parts compatibility mapping, dimensional fit calculations, and community build spec sheets.',
    domain: 'Automotive Tech & Smart Mobility',
    focusTags: ['Parts Compatibility', 'Custom Aesthetics', 'Spec Sheets', 'Automotive Space'],
    status: 'In Validation at ITS'
  },
  {
    id: 'campus-venture-flow',
    title: 'Campus Venture Flow',
    tagline: 'Agile Product Discovery Portal for Student Founders',
    institution: 'Department of Information Systems, ITS',
    stage: 'Research & Prototyping',
    description: 'A streamlined web dashboard guiding student product teams from problem validation to clickable prototype testing and rapid peer cohort feedback loops.',
    domain: 'EdTech & Venture Building',
    focusTags: ['MVP Roadmapping', 'User Interview Log', 'Feature Prioritization', 'ITS Founders'],
    status: 'Active Prototyping'
  },
  {
    id: 'eventops-logix',
    title: 'EventOps Logix',
    tagline: 'Real-Time Field Logistics & Incident Command Engine',
    institution: 'Field Experience Initiative',
    stage: 'Architecture Phase',
    description: 'Codifying real-world field operations (derived from STT Banjar Youth and OWL FEST) into an automated checklist, radio-channel assignment, and incident reporting system for campus festivals.',
    domain: 'Event Management & Operations',
    focusTags: ['Checklist Automation', 'Crowd Safety', 'Incident Triage', 'Resource Tracking'],
    status: 'Architecture Phase'
  }
];

export const MY_EDUCATION = [
  {
    institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
    location: 'Surabaya, Indonesia',
    degree: 'B.Sc. in Information Systems, Digital Innovation',
    period: '2026 – Present',
    description: 'Undergraduate study focused on information systems architecture, digital product development, rapid prototyping, technology entrepreneurship, and user-centered design.'
  },
  {
    institution: 'SMAN 1 Semarapura (EKASMA)',
    location: 'Bali, Indonesia',
    degree: 'High School — Informatics & Natural Sciences (Kurikulum Merdeka)',
    period: 'Alumni',
    description: 'Built foundational excellence in computational thinking, advanced mathematics, natural sciences, logic, and early web technology exploration.'
  }
];

export const MY_SKILLS_CATEGORIES = [
  {
    category: 'Frontend Web Engineering',
    items: ['HTML5 (Semantic)', 'CSS3 (Modern Layouts)', 'JavaScript (Vanilla ES6+)', 'Responsive Web Design', 'Web Accessibility (WCAG)', 'Tailwind CSS']
  },
  {
    category: 'Product Design & Prototyping',
    items: ['User Research', 'Wireframing', 'Rapid Clickable Prototyping', 'UX/UI Ergonomics', 'Design Systems', 'Usability Testing']
  },
  {
    category: 'Venture Management & GTM',
    items: ['Product Management', 'Go-To-Market (GTM) Strategy', 'Lean MVP Scoping', 'Agile Sprint Execution', 'Field Operations Logistics']
  },
  {
    category: 'Creative Video & Visual Media',
    items: ['Adobe Premiere Pro', 'CapCut', 'Alight Motion', 'Canva', 'Motion Graphics', 'Visual Storytelling']
  }
];

export const MY_LANGUAGES = [
  { language: 'Indonesian', proficiency: 'Native / Fluent', level: 100 },
  { language: 'English', proficiency: 'Working Professional Proficiency', level: 75 }
];

export const MY_ORGANIZATIONS = [
  {
    role: 'Event Logistics & Operations Lead',
    organization: 'Banjar Youth Organization (STT)',
    location: 'Semarapura, Bali',
    period: '2024 & 2025',
    description: 'Spearheaded end-to-end logistical planning and operational resource management for multi-day traditional and community celebrations. Supervised operational crews across procurement, electrical layout, staging, sound installations, and inventory management, ensuring zero operational downtime and 100% on-time event delivery across successive terms.'
  },
  {
    role: 'Security & Crowd Control Division',
    organization: 'OWL FEST V (SWARA)',
    location: 'Semarapura, Bali',
    period: '2024',
    description: 'Orchestrated crowd management, perimeter surveillance, and emergency protocols for over 900+ festival attendees, VIP guest performers, and school officials. Designed single-flow entrance and exit corridors, performed proactive risk triage, and collaborated with local security teams to maintain an orderly, safe, and incident-free festival environment.'
  },
  {
    role: 'Field Operations & Event Coordinator',
    organization: 'CEKETER (Cohort Community)',
    location: 'Bali, Indonesia',
    period: '2024 – 2026',
    description: 'Directed field operations, timeline enforcement, and site management for multi-cohort gatherings and community development initiatives. Coordinated documentation teams across videography and photography workflows, curating promotional assets while leading live on-ground coordination and conflict resolution.'
  }
];

