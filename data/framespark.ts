export interface FrameSparkPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  accentColor: string;
}

export interface FrameSparkStage {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface FrameSparkAIStage {
  id: string;
  title: string;
  sub: string;
  description: string;
}

export interface FrameSparkProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  services: string[];
  technology: string[];
  status: string;
  imageAccent: string;
}

export const framesparkData = {
  sectionLabel: "04 / FRAMESPARK",
  mainHeadline: "BUILDING BEYOND CODE.",
  subHeadline: "IDEAS INTO EXPERIENCES.",
  supportingStatement: "FrameSpark is where technology, creativity, and business strategy come together to turn ideas into digital experiences.",
  statusIndicator: "BUILDING DIGITAL EXPERIENCES",
  founderQuote: "FrameSpark isn't just a creative studio. It's built from an engineering mindset.",
  founderBio: "Founded by Raghunath N, FrameSpark combines rigorous software architecture, AI integration, and digital content creation to help ambitious ideas move forward.",

  pillars: [
    {
      id: "digital-products",
      number: "01",
      title: "DIGITAL PRODUCTS",
      description: "Designing and developing modern websites, web applications, platforms, and scalable digital products.",
      capabilities: [
        "Web Development",
        "Full-Stack Applications",
        "UI/UX Design",
        "Interactive Experiences",
        "Web Applications",
        "Product Development"
      ],
      accentColor: "#CCFF00"
    },
    {
      id: "content-creation",
      number: "02",
      title: "CONTENT CREATION",
      description: "Creating visual and digital content that gives brands and ideas a stronger, more authentic presence.",
      capabilities: [
        "Creative Content",
        "Visual Design",
        "Social Media Content",
        "Video & Motion",
        "Branding Experiences",
        "Digital Storytelling"
      ],
      accentColor: "#00E5FF"
    },
    {
      id: "strategy-growth",
      number: "03",
      title: "STRATEGY & GROWTH",
      description: "Connecting technology and creativity with practical business thinking and product strategy.",
      capabilities: [
        "Digital Strategy",
        "Product Thinking",
        "Business Ideas",
        "Brand Positioning",
        "Growth Concepts",
        "Digital Transformation"
      ],
      accentColor: "#FF9900"
    }
  ] as FrameSparkPillar[],

  processStages: [
    { step: "01", title: "IDEA", description: "Formulating core vision", detail: "Deep dive into problem space & opportunity mapping" },
    { step: "02", title: "DISCOVER", description: "Market & user insight", detail: "Target audience research & technical feasibility check" },
    { step: "03", title: "DESIGN", description: "UI/UX & brand identity", detail: "Prototyping, visual design system & interactive mockups" },
    { step: "04", title: "BUILD", description: "Full-stack engineering", detail: "High-performance code, API integration & AI pipelines" },
    { step: "05", title: "LAUNCH", description: "Deployment & QA", detail: "Production deployment, performance optimization & SEO" },
    { step: "06", title: "GROW", description: "Iteration & scaling", detail: "Analytics monitoring, feature scaling & audience growth" }
  ] as FrameSparkStage[],

  aiBusinessPipeline: [
    { id: "idea", title: "BUSINESS IDEA", sub: "Input Vision", description: "Formulating core market thesis & business goals" },
    { id: "ai-analysis", title: "AI ANALYSIS", sub: "LLM & Data", description: "Automated feasibility, competitor & data pattern modeling" },
    { id: "market-insight", title: "MARKET INSIGHT", sub: "User Validation", description: "Extracting actionable target audience intelligence" },
    { id: "strategy", title: "PRODUCT STRATEGY", sub: "Roadmap", description: "Architecting product feature prioritization & tech stack" },
    { id: "design", title: "UX / UI", sub: "Design System", description: "Crafting fluid interactive interfaces & visual identity" },
    { id: "dev", title: "DEVELOPMENT", sub: "Engineering", description: "Building scalable web apps, APIs & database clusters" },
    { id: "content", title: "CONTENT", sub: "Media & Brand", description: "Creating high-impact digital storytelling & motion assets" },
    { id: "deploy", title: "DEPLOYMENT", sub: "Go-to-Market", description: "Production release, telemetry analytics & growth loops" }
  ] as FrameSparkAIStage[],

  projects: [
    {
      id: "fs-proj-1",
      title: "FRAMESPARK DIGITAL LABS",
      subtitle: "CREATIVE & DIGITAL PRODUCT ENGINE",
      category: "Digital Agency / Full-Stack Platform",
      description: "FrameSpark's internal platform engine for rapid digital product development, interactive visual experiences, and client strategy.",
      services: ["Web Development", "UI/UX", "Brand Strategy", "Content Creation"],
      technology: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "ACTIVE INITIATIVE",
      imageAccent: "#CCFF00"
    },
    {
      id: "fs-proj-2",
      title: "PROJECT 02",
      subtitle: "UPCOMING CLIENT CASE STUDY",
      category: "Digital Product / Web Experience",
      description: "Custom full-stack web application & digital brand launch currently under development.",
      services: ["Product Design", "Web Development", "Digital Strategy"],
      technology: ["React", "Node.js", "PostgreSQL"],
      status: "IN DEVELOPMENT // COMING SOON",
      imageAccent: "#00E5FF"
    }
  ] as FrameSparkProject[],

  founderMatrix: [
    { label: "ENGINEERING", desc: "Software Systems & Code Discipline", color: "#CCFF00" },
    { label: "AI & ML", desc: "Intelligent Algorithms & RAG Pipelines", color: "#00E5FF" },
    { label: "SOFTWARE", desc: "Scalable Full-Stack Architecture", color: "#00FF88" },
    { label: "DESIGN", desc: "Editorial UI/UX & Motion Language", color: "#FF9900" },
    { label: "CONTENT", desc: "Digital Media & Brand Storytelling", color: "#FF0055" },
    { label: "BUSINESS", desc: "Growth Concepts & Product Strategy", color: "#CCFF00" }
  ]
};
