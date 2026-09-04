export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  filterCategory: "AI / ML" | "SYSTEMS" | "QUANTUM" | "OPEN SOURCE" | "CREATIVE" | "FULL-STACK";
  featured: boolean;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architectureSteps: {
    title: string;
    description: string;
    type: "input" | "process" | "ai" | "storage" | "output";
  }[];
  aiPipeline?: {
    stage: string;
    details: string;
  }[];
  features: string[];
  result: string;
  lessons: string;
  githubUrl?: string;
  liveUrl?: string;
  imageAccent: string;
}

export const projectsData: Project[] = [
  {
    id: "r-os",
    title: "RAGHUNATH_OS",
    subtitle: "CUSTOM KERNEL & OPERATING SYSTEM SIMULATION",
    year: "2026",
    category: "OPERATING SYSTEMS / SYSTEMS PROGRAMMING",
    filterCategory: "SYSTEMS",
    featured: true,
    tagline: "A custom kernel and operating-system simulation exploring core OS concepts: process management, memory allocation, scheduling, & file systems.",
    description: "Raghunath_OS is an exploratory systems engineering project designed to study low-level operating system architectures, kernel initialization, process scheduling algorithms (Round Robin / Priority), virtual memory paging, and shell command interpretation.",
    problem: "Understanding high-level software abstractions requires deep visibility into lower-level OS primitives like interrupt handling, memory allocation, and CPU context switching.",
    solution: "Architected a custom kernel simulation featuring process management, paging tables, file system inode operations, and an interactive CLI shell environment.",
    technologies: ["C", "C++", "Assembly concepts", "Operating Systems", "Low-Level Programming", "Systems Architecture"],
    architectureSteps: [
      { title: "Hardware Boot Loader", description: "BIOS/UEFI stage handoff & kernel image loading", type: "input" },
      { title: "Shell & CLI Interface", description: "Command parser, process invocation & standard I/O redirection", type: "process" },
      { title: "Kernel Core", description: "Interrupt vector table, trap handling & syscall router", type: "process" },
      { title: "Process & Scheduler", description: "PCB management, context switching & Round Robin scheduler", type: "ai" },
      { title: "Memory & File System", description: "Virtual memory paging tables & block inode storage manager", type: "storage" },
      { title: "System Ready Console", description: "Telemetry readout displaying CPU usage, active processes & memory allocation", type: "output" }
    ],
    features: [
      "Process Control Block (PCB) state management & scheduling simulation",
      "Paged memory allocation model with virtual page table mapping",
      "Custom shell command interpreter supporting file operations",
      "Kernel telemetry dashboard displaying active processes & system status"
    ],
    result: "Successfully implemented core operating system primitives in code, deepening structural understanding of memory safety and kernel execution paths.",
    lessons: "Low-level kernel programming emphasizes strict memory alignment, register preservation, and deterministic state transitions.",
    githubUrl: "https://github.com/raghunath-n/raghunath_os",
    imageAccent: "#CCFF00"
  },
  {
    id: "brain-tumor",
    title: "BRAIN TUMOR DETECTION SYSTEM",
    subtitle: "AI-ASSISTED MRI MEDICAL IMAGING PIPELINE",
    year: "2025",
    category: "AI / COMPUTER VISION / HEALTHCARE",
    filterCategory: "AI / ML",
    featured: true,
    tagline: "An AI-assisted medical imaging platform designed to analyze MRI scans for brain tumor region identification and patient record management.",
    description: "An exploratory deep learning and software platform engineered to ingest brain MRI DICOM/PNG slices, perform spatial preprocessing and region filtering, and generate bounding regions of interest alongside patient record management tools.",
    problem: "Manual review of multi-slice brain MRI scans is time-intensive and requires structured record management tools to streamline radiologist workflows.",
    solution: "Engineered an AI-assisted computer vision workflow using Convolutional Neural Networks (CNN) for region identification paired with a full-stack patient management UI.",
    technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch", "React", "Next.js", "FastAPI", "PostgreSQL"],
    architectureSteps: [
      { title: "MRI Scan Ingestion", description: "DICOM / PNG brain MRI slice loading", type: "input" },
      { title: "Spatial Preprocessing", description: "Contrast enhancement, skull stripping & normalization", type: "process" },
      { title: "Deep Feature Model", description: "CNN backbone analyzing slice feature maps", type: "ai" },
      { title: "Region Inference", description: "Generating candidate region bounding boxes & feature maps", type: "ai" },
      { title: "Record Management Hub", description: "Patient record database & structured radiologist UI", type: "storage" },
      { title: "Detection Visualizer", description: "Interactive slice visualizer highlighting regions of interest", type: "output" }
    ],
    aiPipeline: [
      { stage: "Preprocessing", details: "Histogram equalization, intensity normalization & spatial resizing" },
      { stage: "Feature Extraction", details: "Deep Convolutional layers extracting texture & intensity anomalies" },
      { stage: "Bounding Region Generation", details: "Locating region boundaries & candidate slice overlays" },
      { stage: "Record Sync", details: "Linking scan inferences with patient record IDs" }
    ],
    features: [
      "Automated slice contrast enhancement & brain region isolation",
      "Bounding region visualizer highlighting spatial areas of interest",
      "Structured patient record management dashboard for scan records",
      "High-throughput batch DICOM image processing API endpoint"
    ],
    result: "Delivered a responsive full-stack medical imaging interface demonstrating rapid scan processing and clean record organization.",
    lessons: "Medical imaging pipelines require meticulous spatial normalization and zero clinical over-claiming, prioritizing software utility and clear visualization.",
    githubUrl: "https://github.com/raghunath-n/brain-tumor-detection",
    imageAccent: "#00E5FF"
  },
  {
    id: "qforge",
    title: "QFORGE",
    subtitle: "AI-POWERED QUANTUM COMPUTING LABORATORY",
    year: "2025",
    category: "QUANTUM COMPUTING / AI / EDUCATION",
    filterCategory: "QUANTUM",
    featured: true,
    tagline: "An interactive AI-powered quantum computing laboratory for visual experimentations, circuit simulations, and quantum concepts.",
    description: "QForge is a forward-looking quantum simulation environment engineered to demystify complex quantum mechanics concepts—such as superposition (|Ψ⟩ = α|0⟩ + β|1⟩), quantum entanglement, and gate operations—through visual circuit building and intelligent assistance.",
    problem: "Quantum computing algorithms are abstract and mathematically intensive, making state transformations difficult to visualize for students and researchers.",
    solution: "Created an interactive web laboratory featuring visual quantum gate drag-and-drop circuit builders, Bloch sphere state rendering, and quantum circuit probability simulators.",
    technologies: ["Python", "Qiskit concepts", "TypeScript", "React", "Next.js", "Three.js / Canvas", "Tailwind CSS"],
    architectureSteps: [
      { title: "User Circuit Canvas", description: "Drag-and-drop quantum gate wire composition (|0⟩, |1⟩)", type: "input" },
      { title: "Quantum Gate Matrix", description: "Hadamard (H), CNOT, Pauli-X, Y, Z gate matrix operations", type: "process" },
      { title: "Quantum Simulator Engine", description: "State vector matrix multiplication & superposition computation", type: "ai" },
      { title: "Measurement Sampler", description: "Simulated probabilistic measurement outcomes & collapse sampling", type: "process" },
      { title: "Interactive Visualizer", description: "Bloch sphere state vector & probability distribution render", type: "output" }
    ],
    features: [
      "Visual quantum circuit builder for Single-Qubit & Two-Qubit gates",
      "Bloch Sphere state vector representation (|0⟩ and |1⟩ superposition)",
      "Probabilistic measurement histogram generator across N-shots",
      "AI Assistant explaining quantum state transformations in real-time"
    ],
    result: "Created a visually stunning educational quantum lab environment that simplifies state vector math into intuitive visual experiments.",
    lessons: "Simulating matrix transformations for multi-qubit systems in browser environments requires optimized state calculations to maintain 60fps UI updates.",
    githubUrl: "https://github.com/raghunath-n/qforge",
    imageAccent: "#00FF88"
  },
  {
    id: "music-community",
    title: "OPEN SOURCE MUSIC COMMUNITY",
    subtitle: "COLLABORATIVE PLATFORM FOR CREATORS & PRODUCERS",
    year: "2025",
    category: "OPEN SOURCE / MUSIC / COMMUNITY",
    filterCategory: "CREATIVE",
    featured: true,
    tagline: "An open-source community platform bringing musicians, producers, and creators together to share stems, collaborate, & build open music tools.",
    description: "An open-source community concept and collaborative web space designed for electronic producers, sound designers, and musicians. It provides stem sharing repositories, collaborative project boards, audio waveform previews, and open-source creative technology tools.",
    problem: "Independent creators lack open-source spaces dedicated to sharing raw audio stems, collaborative sample packs, and sound design code without commercial paywalls.",
    solution: "Architected a decentralized creator hub with integrated audio visualizer components, stem repository tagging, and open-source project discussion rooms.",
    technologies: ["TypeScript", "React", "Next.js", "Web Audio API", "Node.js", "PostgreSQL", "Tailwind CSS"],
    architectureSteps: [
      { title: "Creator Audio Upload", description: "Raw stems, sample packs & project code ingest", type: "input" },
      { title: "Audio Waveform Processor", description: "Peak extraction & Web Audio API spectrum analysis", type: "process" },
      { title: "Collaboration Board", description: "Stem version control & peer feedback comments", type: "storage" },
      { title: "Open Source Directory", description: "Categorized creative tech projects & sample sharing", type: "output" }
    ],
    features: [
      "Interactive audio waveform previewer with spatial frequency visualization",
      "Open-source stem repository directory organized by key & BPM",
      "Collaborative project discovery boards for producer pairings",
      "Integrated audio player for community showcase tracks"
    ],
    result: "Designed an engaging creative platform bridging software engineering with open-source audio production.",
    lessons: "Web Audio API node pipelines enable smooth, browser-native audio waveform visualization without external plugins.",
    githubUrl: "https://github.com/raghunath-n/open-source-music-community",
    imageAccent: "#FF9900"
  },
  {
    id: "lunaalign",
    title: "LUNAALIGN",
    subtitle: "MULTI-MODAL LUNAR IMAGE CORRESPONDENCE",
    year: "2025",
    category: "Computer Vision / Deep Learning / Geospatial AI",
    filterCategory: "AI / ML",
    featured: true,
    tagline: "Precision deep-learning alignment for multi-spectral & SAR lunar orbiter imagery.",
    description: "LunaAlign is an advanced computer vision system engineered to perform automated feature correspondence and spatial alignment across multi-modal lunar orbiter datasets (optical surface imagery, synthetic aperture radar, and elevation maps).",
    problem: "Orbiter images taken at different sun angles, shadows, and sensor modalities exhibit high geometric distortion and texture variations, making standard visual stitching fail during crater mapping.",
    solution: "Developed a hybrid feature extractor combining robust deep learning keypoint descriptors with RANSAC-refined homography algorithms to achieve sub-pixel image alignment.",
    technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow", "FastAPI", "React", "Next.js", "Tailwind CSS"],
    architectureSteps: [
      { title: "Multi-Spectral Inputs", description: "Optical & SAR satellite frames loaded into pre-processor", type: "input" },
      { title: "Deep Feature Extractor", description: "ResNet-backbone keypoint and descriptor generator", type: "ai" },
      { title: "Correspondence Filtering", description: "RANSAC geometric constraint filtering & outlier rejection", type: "process" },
      { title: "Homography Matrix Computation", description: "Warping matrix calculation for sub-pixel accuracy", type: "process" },
      { title: "Composite Mosaic Render", description: "High-resolution seamless surface orthomosaic output", type: "output" }
    ],
    aiPipeline: [
      { stage: "Preprocessing", details: "Histogram equalization, noise suppression, & spatial re-projection" },
      { stage: "Keypoint Detection", details: "Multi-scale CNN feature detector locating invariant visual anchors" },
      { stage: "Feature Matching", details: "Cross-attention match network mapping corresponding features across light variations" },
      { stage: "Inference Optimization", details: "Quantized PyTorch model running under 120ms per pair" }
    ],
    features: [
      "Sub-pixel spatial correspondence accuracy across extreme shadow variations",
      "Interactive image overlay visualizer with side-by-side split comparison",
      "Automated outlier filtering for noisy SAR telemetry",
      "High-throughput batch API processing pipeline"
    ],
    result: "Achieved 94.8% feature match precision across low-light lunar polar regions, reducing manual GIS alignment time from hours to seconds.",
    lessons: "Deep feature matching models require robust geometric verification steps like RANSAC when handling extreme domain shifts between optical and radar imagery.",
    githubUrl: "https://github.com/raghunath-n/lunaalign",
    imageAccent: "#00FF88"
  },
  {
    id: "fitex",
    title: "FITEX",
    subtitle: "FITNESS & WORKOUT ECOSYSTEM",
    year: "2025",
    category: "Full-Stack / Real-Time Systems / Health Tech",
    filterCategory: "FULL-STACK",
    featured: true,
    tagline: "Comprehensive workout intelligence & telemetry platform for athletes.",
    description: "FITEX is a modern full-stack workout ecosystem engineered for athletes and trainers. It combines customizable exercise tracking, workout volume analytics, real-time sync, and intelligent progress recommendations.",
    problem: "Existing fitness apps are either overly bloated or lack real-time synchronization between custom exercise plans, recovery metrics, and volume progression.",
    solution: "Architected a responsive single-page web app backed by scalable real-time database endpoints, dynamic chart visualization, and automated progressive overload calculations.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Recharts"],
    architectureSteps: [
      { title: "User & Device Inputs", description: "Workout sessions, rep/weight logs, biometrics", type: "input" },
      { title: "API Gateway & Auth", description: "JWT session authentication & schema validation", type: "process" },
      { title: "Analytics Engine", description: "Volume loading, PR calculations & recovery index", type: "ai" },
      { title: "Document Database", description: "MongoDB clusters for fast exercise logs & metrics", type: "storage" },
      { title: "Interactive Dashboard", description: "Real-time dynamic UI displaying velocity charts", type: "output" }
    ],
    features: [
      "Real-time workout volume & personal record (PR) calculation engine",
      "Customizable movement library with target muscle group breakdowns",
      "Progressive overload trajectory charts with trend forecasting",
      "Offline-first session caching with instant background sync"
    ],
    result: "Delivered a lightning-fast <100ms dashboard response time, enabling seamless workout tracking during high-intensity training sessions.",
    lessons: "Optimizing state updates during live timer events is crucial for maintaining fluid 60fps UI performance on mobile screens.",
    githubUrl: "https://github.com/raghunath-n/fitex",
    imageAccent: "#CCFF00"
  },
  {
    id: "studin",
    title: "STUDIN",
    subtitle: "STUDENT COMMUNITY & ACADEMIC WORKSPACE",
    year: "2024",
    category: "Full-Stack / Collaborative Systems / Web App",
    filterCategory: "FULL-STACK",
    featured: true,
    tagline: "Centralized academic collaboration platform & peer skill network.",
    description: "STUDIN is a full-stack student platform designed to streamline campus peer collaboration, project partner matching, study group organization, and academic resource distribution.",
    problem: "Campus communication happens across scattered chat groups, leading to missed hackathon team opportunities and lost study resources.",
    solution: "Created an all-in-one verified student hub with categorized project boards, real-time study rooms, skill matching, and campus event notifications.",
    technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Firebase", "WebSockets"],
    architectureSteps: [
      { title: "Student Client", description: "Interactive desktop & mobile React interface", type: "input" },
      { title: "WebSocket Router", description: "Real-time messaging & study room state synchronization", type: "process" },
      { title: "PostgreSQL Database", description: "Relational student profiles, skills, & team rosters", type: "storage" },
      { title: "Feed & Search Index", description: "Filtered student skill discovery & event updates", type: "output" }
    ],
    features: [
      "Peer skill matching algorithm for hackathons and group assignments",
      "Live collaborative virtual study rooms with integrated timers",
      "Verified course resource sharing directory with tag filtering",
      "Instant campus event bulletin and RSVP tracker"
    ],
    result: "Successfully deployed across peer student groups, facilitating over 50+ project team formations and study sessions.",
    lessons: "Designing clean relational database schemas upfront prevents data duplication when connecting students, projects, and messaging channels.",
    githubUrl: "https://github.com/raghunath-n/studin",
    imageAccent: "#00E5FF"
  },
  {
    id: "ev-charging",
    title: "EV CHARGING MONITOR",
    subtitle: "SMART GRID EV CHARGING STATION MONITORING SYSTEM",
    year: "2024",
    category: "IoT / AI Predictor / Smart Grid Systems",
    filterCategory: "SYSTEMS",
    featured: true,
    tagline: "Real-time telemetry & predictive queue monitoring for electric vehicle charging grids.",
    description: "An IoT and web-based monitoring system built to track EV charger availability, power delivery rates, station queue times, and fault alerts across a distributed charging station network.",
    problem: "EV drivers frequently arrive at occupied or out-of-service charging hubs due to stale telemetry data and lack of predictive wait-time estimates.",
    solution: "Built a real-time IoT dashboard that streams live charger telemetry via MQTT/WebSockets and uses historical usage patterns to estimate queue wait times.",
    technologies: ["Python", "React", "Node.js", "MQTT", "MongoDB", "Express", "Tailwind CSS", "Chart.js"],
    architectureSteps: [
      { title: "Station IoT Sensors", description: "Telemetry sensors transmitting voltage, current & plug status", type: "input" },
      { title: "MQTT Broker", description: "High-frequency pub/sub message broker", type: "process" },
      { title: "Predictive Queue Engine", description: "Usage pattern regression model calculating wait times", type: "ai" },
      { title: "TimeSeries Storage", description: "MongoDB logs storing station performance history", type: "storage" },
      { title: "Operator Dashboard", description: "Live interactive map & station management portal", type: "output" }
    ],
    features: [
      "Live telemetry stream monitoring power usage, temperature, & port status",
      "Predictive station queue wait-time calculator based on charging curves",
      "Automated anomaly alerts for power spikes or offline chargers",
      "Interactive map interface with distance filtering and status filters"
    ],
    result: "Demonstrated accurate real-time telemetry streaming under 200ms latency, providing actionable charger status for smart grid management.",
    lessons: "Combining lightweight IoT communication protocols like MQTT with WebSocket web bridges produces seamless live dashboards without polling overhead.",
    githubUrl: "https://github.com/raghunath-n/ev-charging-monitor",
    imageAccent: "#FFB700"
  }
];
