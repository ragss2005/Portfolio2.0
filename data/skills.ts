export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    connections: string[]; // Connected skill IDs/names for ecosystem node graph
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & MACHINE LEARNING",
    description: "Deep Learning, Computer Vision, Retrieval-Augmented Generation & Autonomous Agents.",
    skills: [
      { name: "Python", connections: ["TensorFlow", "PyTorch", "OpenCV", "FastAPI"] },
      { name: "TensorFlow", connections: ["Python", "Computer Vision", "Deep Learning"] },
      { name: "PyTorch", connections: ["Python", "Deep Learning", "Computer Vision"] },
      { name: "OpenCV", connections: ["Python", "Computer Vision", "Image Alignment"] },
      { name: "RAG & LLMs", connections: ["Python", "LangChain", "Vector DBs", "Agents"] },
      { name: "Computer Vision", connections: ["PyTorch", "OpenCV", "LunaAlign"] }
    ]
  },
  {
    id: "full-stack",
    title: "FULL-STACK DEVELOPMENT",
    description: "Modern web applications, reactive user interfaces, and resilient backend architecture.",
    skills: [
      { name: "TypeScript", connections: ["React", "Next.js", "Node.js"] },
      { name: "JavaScript", connections: ["TypeScript", "React", "Node.js"] },
      { name: "React", connections: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Next.js", connections: ["React", "TypeScript", "Full-Stack"] },
      { name: "Tailwind CSS", connections: ["React", "UI/UX", "Design Systems"] },
      { name: "Node.js", connections: ["Express", "TypeScript", "APIs"] }
    ]
  },
  {
    id: "data-backend",
    title: "DATA & SYSTEMS ARCHITECTURE",
    description: "Database modeling, cloud telemetry, real-time messaging, and system optimization.",
    skills: [
      { name: "PostgreSQL", connections: ["Relational DB", "Node.js", "SQL"] },
      { name: "MongoDB", connections: ["NoSQL DB", "Node.js", "Express"] },
      { name: "Firebase", connections: ["Real-time DB", "Auth", "React"] },
      { name: "C / C++", connections: ["Data Structures", "System Programming"] },
      { name: "Java", connections: ["OOP", "Backend Systems"] },
      { name: "Git & Linux", connections: ["DevOps", "Version Control", "CI/CD"] }
    ]
  }
];
