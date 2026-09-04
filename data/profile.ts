export interface ProfileData {
  name: string;
  shortName: string;
  title: string;
  roleTagline: string;
  location: string;
  availability: string;
  bioHeadline: string;
  bioParagraphs: string[];
  focusAreas: string[];
  buildVersion: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
  currentlyBuilding: {
    title: string;
    category: string;
    active: boolean;
  }[];
}

export const profileData: ProfileData = {
  name: "RAGHUNATH N",
  shortName: "RAGHUNATH.N",
  title: "AI Engineer • Full-Stack Developer • Creative Technologist",
  roleTagline: "I BUILD INTELLIGENT THINGS.",
  location: "INDIA",
  availability: "AVAILABLE FOR HIGH-IMPACT AI & FULL-STACK ROLES",
  bioHeadline: "I’m interested in the space where AI, software and human creativity collide.",
  bioParagraphs: [
    "Computer Science & Engineering student focused on building production-grade intelligent systems, deep learning visualizers, and resilient full-stack applications.",
    "From training multi-modal lunar image correspondence pipelines to architecting smart grid EV tracking networks, I bridge complex theoretical AI research with clean, high-performance software engineering.",
    "Active technical lead, hackathon competitor, and creative producer who believes technology is best experienced when it feels responsive, intuitive, and alive."
  ],
  focusAreas: ["AI / ML", "Computer Vision", "LLM Systems", "Full-Stack Architecture", "Technical Leadership"],
  buildVersion: "v2.0.26",
  stats: [
    { label: "EVENTS MANAGED", value: "20+", subtext: "Technical workshops & leadership" },
    { label: "HACKATHONS", value: "8+", subtext: "Smart India & national hackathons" },
    { label: "PROJECTS BUILT", value: "15+", subtext: "AI systems, full-stack apps & IoT" },
    { label: "ROLE LEADERSHIP", value: "YUVA'26", subtext: "Technical Lead & Coordinator" }
  ],
  socials: {
    github: "https://github.com/raghunath-n",
    linkedin: "https://linkedin.com/in/raghunath-n",
    email: "raghunath.n.official@gmail.com"
  },
  currentlyBuilding: [
    { title: "Multi-Modal Lunar Surface Alignment", category: "Geospatial AI / CV", active: true },
    { title: "Autonomous RAG & Agentic Pipelines", category: "LLM Engineering", active: true },
    { title: "Real-Time Telemetry & Smart Grid Monitors", category: "IoT / Full-Stack", active: true },
    { title: "Experimental Spatial Audio & Music Production", category: "Creative Tech", active: true }
  ]
};
