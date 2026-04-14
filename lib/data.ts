export const bio =
  "Health Data Science graduate student at UCSF with a background in Microbial Biology. I build AI-powered healthcare solutions combining clinical research expertise with technical analysis — from analyzing biomarker data for neurodegenerative disease to creating mobile health apps and machine learning systems.";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/nikita-gounder" },
  // { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  // { label: "Email", href: "mailto:you@example.com" },
];

export interface Education {
  school: string;
  degree: string;
  note?: string;
}

export const education: Education[] = [
  {
    school: "University of California, San Francisco",
    degree: "Master of Science in Health Data Science",
  },
  {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science in Microbial Biology",
  },
];

export const coursework = [
  "Python & R for Data Science",
  "Machine Learning Theory & Application",
  "Biostatistics for Clinical Research",
  "SQL",
  "STATA Statistical Modeling",
];

export interface Experience {
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    org: "Micromole Inc.",
    role: "Lab Assistant",
    period: "March 2025 – Present",
    bullets: [
      "Execute microfluidics protocols and maintain experimental databases to ensure data traceability for research reproducibility and quality control.",
    ],
  },
  {
    org: "University of California, San Francisco",
    role: "Graduate Teaching Assistant",
    period: "July 2025 – Sept 2025",
    bullets: [
      "Guided graduate students through data wrangling and visualization, statistical analysis, coding support, and debugging techniques in R.",
    ],
  },
  {
    org: "Impact Food",
    role: "Research and Development Intern",
    period: "Oct 2024 – Dec 2024",
    bullets: [
      "Developed plant-based seafood prototypes using sensory data analysis to optimize texture and flavor profiles at lab scale.",
    ],
  },
  {
    org: "University of California, Berkeley — Firestone Lab",
    role: "Student Researcher",
    period: "Sept 2022 – Dec 2023",
    bullets: [
      "Analyzed microbial community seasonal dynamics using R for statistical analysis and visualization.",
      "Built custom Python pipelines to parse and clean biogeochemical CO₂ data.",
    ],
  },
  {
    org: "University of California, Berkeley — Banfield Lab",
    role: "Lab Technician",
    period: "Jan 2024 – Sept 2024",
    bullets: [
      "Conducted DNA and RNA extractions to optimize protocols across sample types.",
      "Managed laboratory operations including hazardous waste disposal and inventory.",
    ],
  },
  {
    org: "Lawrence Berkeley National Laboratory — Mortimer Lab",
    role: "Student Researcher",
    period: "Feb 2022 – May 2022",
    bullets: [
      "Developed quantitative root analysis protocols using EVOS M7000 imaging and ImageJ software.",
    ],
  },
];

export interface Project {
  order: number; // display order in the projects grid (1 = first)
  name: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  // Each slide is either a single image path or an array of paths shown side-by-side
  // e.g. slides: ["/projects/img1.png", ["/projects/img2.png", "/projects/img3.png"]]
  slides?: (string | string[])[];
}

export const projects: Project[] = [
  {
    order: 2,
    name: "SchoolKit",
    org: "Stanford Biodesign",
    period: "January 2026 – March 2026",
    slides: [
      "/projects/schoolkit-1.png",
      ["/projects/schoolkit-2.png", "/projects/schoolkit-3.png", "/projects/schoolkit-4.png"],
    ],
    description:
      "Full-stack mobile and web application with multimedia educational content to support childhood cancer patients during hospital-to-school transition after diagnosis and treatment. Developed with Stanford Medicine — code is not publicly shareable.",
    tags: ["React Native", "Expo", "Supabase", "ElevenLabs", "Figma"],
    links: [
      // { label: "GitHub", href: "https://github.com/nikita-gounder/schoolkit" },
      // { label: "Live", href: "https://..." },
    ],
  },
  {
    order: 3,
    name: "AI Clinical Trial Recruitment Platform",
    org: "CalHacks 12.0",
    period: "Oct 2025",
    description:
      "Interactive AI voice agent for patient medical prescreening and a dashboard to generate plain-language informed consent forms from eligibility criteria.",
    tags: ["Python", "LLMs", "VAPI", "NLP", "Prompt Engineering"],
    links: [
      // { label: "GitHub", href: "https://github.com/nikita-gounder/..." },
      // { label: "Devpost", href: "https://devpost.com/..." },
    ],
  },
  {
    order: 1,
    name: "CSF Biomarker Analysis for Frontotemporal Dementia",
    org: "UCSF",
    period: "April 2025 – Present",
    description:
      "Analyzed cerebrospinal fluid proteomic data to evaluate diagnostic accuracy of neurodegeneration biomarkers (NfL, GFAP, NPTX2) for FTD disease severity using ROC curves, correlation analyses, and mixed-model longitudinal analyses.",
    tags: ["R", "Biostatistics", "Proteomics", "Clinical Research"],
    links: [
      // { label: "Paper", href: "https://..." },
    ],
  },
  {
    order: 5,
    name: "Heart Failure Readmission Risk Analysis",
    org: "UCSF — Epi 231: Clinical Data Science",
    period: "2025",
    description:
      "Identified patient characteristics most strongly associated with 30-day readmission among heart failure patients using UCSF Epic EHR data. Produced stratified descriptive statistics (Table 1), logistic regression results (Table 2), and visualizations. Data is de-identified and not publicly shareable.",
    tags: ["T-SQL", "R", "tidyverse", "ggplot2", "Logistic Regression", "EHR", "Clinical Data"],
    links: [],
  },
  {
    order: 4,
    name: "Scientific Literature Research Platform",
    org: "Next.Bio AI Hackathon",
    period: "Oct 2025",
    description:
      "Built a Retrieval-Augmented Generation system to query scientific papers with context-aware responses, with a Streamlit interface displaying AI-generated summaries and abstracts.",
    tags: ["Python", "Streamlit", "RAG", "LLMs", "Prompt Engineering", "PubMed/NCBI"],
    links: [
      // { label: "GitHub", href: "https://github.com/nikita-gounder/..." },
    ],
  },
];
