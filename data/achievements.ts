export interface Achievement {
  id: string;
  title: string;
  category: "Leadership" | "Hackathon" | "Technical" | "Workshop";
  organization: string;
  year: string;
  description: string;
  impact: string;
  accentColor: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "yuva-26",
    title: "TECHNICAL LEAD & COORDINATOR — YUVA'26",
    category: "Leadership",
    organization: "YUVA'26 National Flagship Event",
    year: "2026",
    description: "Led technical operations, event coordination, digital platform infrastructure, and student execution teams for the YUVA'26 flagship conference.",
    impact: "Coordinated technical execution across 20+ event tracks and managed student tech leadership teams.",
    accentColor: "#CCFF00"
  },
  {
    id: "sih",
    title: "SMART INDIA HACKATHON",
    category: "Hackathon",
    organization: "Ministry of Education / AICTE",
    year: "2024–2025",
    description: "Engineered innovative AI/IoT software prototypes under tight time constraints, solving real-world national problems.",
    impact: "Built working end-to-end telemetry and AI pipeline prototypes within 36-hour hackathon sprints.",
    accentColor: "#00FF88"
  },
  {
    id: "hackathons-national",
    title: "8+ NATIONAL HACKATHONS & SHOWCASES",
    category: "Hackathon",
    organization: "Various Tech Competitions",
    year: "2024–2026",
    description: "Consistently built and presented full-stack AI and smart software solutions at competitive hackathons.",
    impact: "Developed 15+ rapid prototypes across Computer Vision, IoT, and Web Development.",
    accentColor: "#00E5FF"
  },
  {
    id: "workshops-leadership",
    title: "TECHNICAL WORKSHOPS & PEER MENTORSHIP",
    category: "Workshop",
    organization: "Computer Science Dept / Tech Clubs",
    year: "2024–2026",
    description: "Conducted hands-on technical sessions covering web development, Python programming, and foundational machine learning concepts for junior peers.",
    impact: "Empowered 100+ students with foundational web & AI development skills.",
    accentColor: "#FFB700"
  }
];

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  details: string;
  tags: string[];
}

export const timelineData: TimelineItem[] = [
  {
    year: "2026",
    role: "Technical Lead & AI Engineering Focus",
    organization: "YUVA'26 & Advanced Project Labs",
    details: "Directing technical execution for YUVA'26, developing deep learning image alignment models (LunaAlign), and building autonomous RAG pipelines.",
    tags: ["Leadership", "Computer Vision", "RAG", "Next.js"]
  },
  {
    year: "2025",
    role: "Full-Stack & ML System Developer",
    organization: "Project Development & Hackathons",
    details: "Built FITEX workout ecosystem, participated in national hackathons (SIH), and engineered scalable React/Node.js web systems.",
    tags: ["FITEX", "SIH Hackathon", "Full-Stack", "Python"]
  },
  {
    year: "2024",
    role: "Engineering Foundation & IoT Systems",
    organization: "Computer Science Department",
    details: "Architected EV Charging Station Monitoring system, STUDIN platform, and mastered core algorithms, C/C++, Java, and SQL data modeling.",
    tags: ["STUDIN", "EV Monitor", "C/C++", "Database Design"]
  }
];
