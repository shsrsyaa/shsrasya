import itsSidePhoto from './assets/images/foto_samping_its_1791082807812.jpg';
import rasyaHeadshot from './assets/images/rasya_headshot_1791083407317.jpg';

export const MY_PROFILE = {
  fullName: 'I P. G. Divy Sahasrasya',
  name: 'Rasya',
  callName: 'Rasya',
  title: 'Information System - Digital Innovation',
  role: 'Frontend Engineering, Rapid Prototyping & Operations',
  institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
  location: 'Surabaya, Indonesia',
  origin: 'Bali, Indonesia',
  email: 'tuddechnnel07@gmail.com',
  bio: 'Information Systems undergraduate at Institut Teknologi Sepuluh Nopember (ITS) leading tech venture prototyping, modern frontend architectures, and digital product strategy. Dedicated to engineering fast, accessible web applications and translating user discovery into market ready ventures.',
  extendedBio: 'Combining semantic web standards (HTML5/CSS3/JavaScript) with hands on agile event operations, functional logistics leadership, and creative digital media. Operating at the intersection of technical execution and venture building to deliver impact digital solutions.',
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
    subtitle: 'Frontend Architecture & High Performance Web',
    description: 'Building fast, accessible, and responsive web applications using modern HTML5, CSS3, and JavaScript with clean code and quick load times.',
    deliverables: [
      'Semantic & Accessible HTML5 / CSS3 Architectures',
      'Modern Client Side JavaScript UI Components',
      'Lighthouse Optimization & Sub-Second Latency'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    badge: 'Core Service'
  },
  {
    id: 'uiux-prototyping',
    title: 'UI/UX Prototyping',
    subtitle: 'User Research, Wireframing & Rapid Validation',
    description: 'Turning product concepts into wireframes and clickable prototypes, backed by user research and usability testing.',
    deliverables: [
      'Qualitative User Research & Persona Mapping',
      'Low & High Fidelity Interactive Wireframing',
      'Design System Foundations',
      'Usability Audits & User Friction Elimination'
    ],
    technologies: ['User Research', 'Rapid Prototyping', 'Wireframing', 'UX Audits'],
    badge: 'Discovery'
  },
  {
    id: 'startup-advisory',
    title: 'Startup Advisory',
    subtitle: 'Product Scoping & Market Execution',
    description: 'Helping turn early concepts into working. Focusing on core feature prioritization, practical sprint planning, and realistic launch steps.',
    deliverables: [
      'Value Proposition & Lean Canvas Definition',
      'Minimum Viable Product Scope Definition',
      'Sprint Planning & Agile Delivery Cadence',
      'Market Launch Strategy & Operations'
    ],
    technologies: ['Product Management', 'GTM Strategy', 'Agile Operations', 'KPI Systems'],
    badge: 'Strategy'
  },
  {
    id: 'video-production',
    title: 'Creative Video Production',
    subtitle: 'Visual Content, Motion Storytelling & Media Assets',
    description: 'End to end creative video production and editing for high engagement product launches, investor reels, event documentaries, and social media brand communication.',
    deliverables: [
      'Short Form Video Editing (Reels, TikTok, Shorts)',
      'Promotional Launch Trailers & Product Overviews',
      'Audio Synchronization, Sound Design & Color Grading',
      'Motion Visual Graphics & Social Branding'
    ],
    technologies: ['Adobe Premiere Pro', 'CapCut', 'Alight Motion', 'Canva', 'VSCode'],
    badge: 'Creative'
  }
];

export const MY_CASE_STUDIES = [
  {
    id: 'banjar-youth',
    title: 'Multi Term Traditional Festival Logistics & Resource Command',
    organization: 'Banjar Youth Organization (STT)',
    role: 'Event Logistics & Operations Lead',
    period: '2024 & 2025',
    location: 'Semarapura, Bali',
    category: 'Operations & Logistics',
    problem: 'Managing multi day traditional community events required coordinating local vendor supplies, temporary power setups, physical staging, and valuable communal equipment without any downtime.',
    solution: 'Designed a clear logistics checklist and daily schedule. Coordinated teams across electrical setups, stage assembly, and safety checks to ensure everything ran smoothly from start to finish.',
    techStack: ['Operations Manifesting', 'Resource Logistics', 'Safety Protocols', 'Audio Visual Staging', 'Cross Functional Leadership'],
    metrics: [
      { label: 'Operational Downtime', value: '12 Hours' },
      { label: 'Event Delivery Rate', value: '90% On-Time' },
      { label: 'Field Crew Supervised', value: '40+ Members' }
    ],
    impact: 'Achieved 100% on-time milestone delivery across two consecutive annual terms. Zero equipment failures or power blackouts during peak ceremonial events, earning sustained community leadership trust.',
    fullCase: `As the Logistics & Operations Lead for Banjar Youth Organization (STT) during both the 2024 and 2025 event terms in Semarapura, Bali, I took full operational accountability for multi-day traditional cultural celebrations. 
    
Key challenges involved managing scarce temporary power distribution, safely coordinating elevated staging structures, and cataloging heavy inventory across multiple venues. By implementing a disciplined supply tracking manifest and proactive pre-event equipment inspections, we eliminated vendor delays and ensured uninterrupted power delivery throughout peak ceremonial rites.`
  },
  {
    id: 'owl-fest',
    title: 'Campus Festival Security & Perimeter Architecture',
    organization: 'OWL FEST V (SWARA)',
    role: 'Security & Crowd Control Division',
    period: '2024',
    location: 'Semarapura, Bali',
    category: 'Crowd & Safety Operations',
    problem: 'Handling over 900 festivalgoers, guest artists, and school officials in a single enclosed venue, requiring careful crowd control and bottleneck prevention.',
    solution: 'Set up clear entry and exit lanes, streamlined ticket checks, and used radio communication to keep security teams aligned and maintain an orderly, safe environment.',
    techStack: ['Crowd Flow Modeling', 'Perimeter Architecture', 'Emergency Evacuation Plans', 'Risk Triage Protocols', 'Real-Time Radio Relays'],
    metrics: [
      { label: 'Attendees Managed', value: '900+ People' },
      { label: 'SWARA Security Crew', value: '25+ Members' }
    ],
    impact: 'Delivered an incident-free high-density festival. Ticket verification throughput accelerated by 35%, preventing street congestion, while artists and VIP delegations completed all appearances without schedule deviation.',
    fullCase: `OWL FEST V brought together high energy musical acts and a crowd exceeding 900 people. Operating on the frontlines of crowd control and perimeter defense required decisive situational awareness. 

We mapped the entire venue perimeter to eliminate blind spots, designed one-way pedestrian lanes that prevented counter-flow blockages, and coordinated closely with institutional leaders to ensure immediate medical access corridors.`
  },
  {
    id: 'ceketer',
    title: 'Cohort Community Field Direction & Media Pipeline',
    organization: 'CEKETER (Cohort Community)',
    role: 'Field Operations & Event Coordinator',
    period: '2024 – 2026',
    location: 'Bali, Indonesia',
    category: 'Community Leadership',
    problem: 'Coordinating gatherings across multiyear cohort members in School, often dealing with schedule mismatches and scattered communication.',
    solution: 'Established simple shared schedules, handled on ground coordination, and managed a media team to capture and curate photo and video highlights for community archives.',
    techStack: ['Field Coordination', 'Agile Timeline Enforcement', 'Media Production Direction', 'Conflict Mediation', 'Community Engagement'],
    metrics: [
      { label: 'Active Program Cycle', value: '2+ Years' },
      { label: 'Timeline Adherence', value: '98%' },
      { label: 'Media Deliverables', value: '50+ Assets' }
    ],
    impact: 'Strengthened cross-cohort retention and collaboration, maintaining a 98% on schedule operational track record across multiple community programs and delivering polished social visual assets.',
    fullCase: `At CEKETER, bridging generational cohorts requires balancing operational structure with an open, engaging atmosphere. As Field Operations & Event Coordinator from 2024 to 2026, I managed logistical schedules and led live conflict resolution at site. 

Additionally, I directed the documentation squad, translating raw event footage into compelling highlight reels using Premiere Pro and CapCut to drive community engagement.`
  }
];

export const MY_PROCESS_STEPS = [
  {'
    number: '01',
    step: 'Discovery & Research',
    tagline: 'Uncovering Core Friction & Strategic Targets',
    description: 'We start by listening: understanding the core problem, talking with users or stakeholders, looking at existing alternatives, and setting clear goals.',
    outputs: ['User Pain Point Audit', 'Persona & Journey Mapping', 'KPI & Success Metrics']
  },
  {
    number: '02',
    step: 'UI/UX Prototyping',
    tagline: 'Translating Insights into Interactive Prototypes',
    description: 'Turning ideas into quick wireframes and interactive prototypes to test usability, user flow, and design layout early on.',
    outputs: ['Clickable Wireframes', 'Component Design System', 'Usability Verification']
  },
  {
    number: '03',
    step: 'Clean Code Development',
    tagline: 'Semantic, High-Performance Frontend Execution',
    description: 'Writing clean, responsive code using semantic HTML, modern CSS, and JavaScript for a smooth and fast user experience.',
    outputs: ['Semantic HTML5/CSS3/JS', 'Clean Layouts', 'Cross Browser Verification']
  },
  {
    number: '04',
    step: 'Go To Market & Deployment',
    tagline: 'Venture Launch & Iterative Optimization',
    description: 'Preparing the product for launch, testing performance, putting together launch videos or trailers, and gathering feedback for improvements.',
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
    focusTags: ['Parts Compatibility', 'Custom', 'Spec Sheets', 'Automotive Space'],
    status: 'In Validation at ITS'
  },
  {
    id: 'campus-venture-flow',
    title: 'Campus Venture Flow',
    tagline: 'Agile Product Discovery Portal for Student Founders',
    institution: 'Department of Information Systems, ITS',
    stage: 'Research & Prototyping',
    description: 'A simple web dashboard to help student product teams move from validating ideas to testing prototypes and gathering feedback.',
    domain: 'EdTech & Venture Building',
    focusTags: ['Roadmapping', 'User Interview Log', 'Feature Prioritization', 'ITS Founders'],
    status: 'Active Prototyping'
  },
  {
    id: 'eventops-logix',
    title: 'EventOps Logix',
    tagline: 'Real-Time Field Logistics & Incident Command Engine',
    institution: 'Field Experience Initiative',
    stage: 'Architecture Phase',
    description: 'Turning world field management experience (from STT Banjar Youth and OWL FEST) into a digital tool for checklists, radio assignments, and incident tracking during campus events.',
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
  { language: 'Indonesian', proficiency: 'Native / Fluent', level: 90 },
  { language: 'English', proficiency: 'Working Professional Proficiency', level: 75 }
];

export const MY_ORGANIZATIONS = [
  {
    role: 'Event Logistics & Operations Lead',
    organization: 'Banjar Youth Organization (STT)',
    location: 'Semarapura, Bali',
    period: '2024 & 2025',
    description: 'Managed logistical planning and operations for multiday traditional community celebrations. Supervised teams handling equipment procurement, electrical layouts, staging, and sound systems to ensure events ran smoothly and on schedule.'
  },
  {
    role: 'Security & Crowd Control Division',
    organization: 'OWL FEST V (SWARA)',
    location: 'Semarapura, Bali',
    period: '2024',
    description: 'Managed crowd flow, venue safety, and security protocols for over 900 attendees and guest performers. Designed efficient entry/exit routes and worked with local security teams to keep the event safe and orderly.'
  },
  {
    role: 'Field Operations & Event Coordinator',
    organization: 'CEKETER (Cohort Community)',
    location: 'Bali, Indonesia',
    period: '2024 – 2026',
    description: 'Directed field operations, schedule planning, and site management for community gatherings. Coordinated documentation teams across photo and video workflows to produce promotional assets and event highlights.'
  },
];
