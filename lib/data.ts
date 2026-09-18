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
    org: "Corcept Therapeutics",
    role: "Biometrics Intern",
    period: "June 2026 – August 2026",
    bullets: [
      "Optimized Medidata patient profiles by creating derived variables and datasets, cortisol flags, and restructuring clinical data to improve data review, patient monitoring, and data visualization.",
      "Evaluated propensity score matching methodologies for external control studies by reviewing FDA and EMA guidance, comparing matching strategies, and developing recommendations for cohort construction.",
      "Collaborated on a cross-functional strategic assessment of MASH diagnostic partnerships, evaluating screening technologies and clinical trial integration to present recommendations to company leadership.",
    ],
  },
  {
    org: "UCSF Memory and Aging Center",
    role: "Graduate Student Researcher",
    period: "April 2025 – July 2026",
    bullets: [
      "Analyzed longitudinal cerebrospinal fluid proteomic datasets (NfL, GFAP, NPTX2) using R to evaluate biomarker performance in frontotemporal dementia progression across genotype and symptom-status cohorts.",
      "Conducted ROC analysis, correlation testing, and mixed-effects longitudinal modeling to quantify biomarker associations with disease severity and diagnostic classification performance.",
      "Cleaned, organized, and validated clinical datasets to support reproducible statistical analyses and interpretation of neurodegenerative disease biomarkers.",
    ],
  },
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
    org: "University of California, Berkeley — Banfield Lab",
    role: "Lab Technician",
    period: "Jan 2024 – Sept 2024",
    bullets: [
      "Conducted DNA and RNA extractions to optimize protocols across sample types.",
      "Managed laboratory operations including hazardous waste disposal and inventory.",
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
    order: 5,
    name: "AuData: Biomedical Research-Integrity Auditor",
    org: "UC Berkeley AI Hackathon '26",
    period: "June 2026",
    slides: [
      "/projects/audata-1.png","/projects/audata-2.png", "/projects/audata-3.png"],
    description:
      "Human-in-the-loop research-integrity auditing platform that reviews scientific papers for statistical errors, numerical inconsistencies, figure manipulation, methods-to-claim mismatches, and citation issues, surfacing calibrated, evidence-linked flags for expert review.",
    tags: ["Browserbase", "React", "TypeScript", "FastAPI", "LLMs", "Redis"],
    links: [
      { label: "GitHub", href: "https://github.com/haile-teshome/AuData" },
    ],
  },
    {
    order: 6,
    name: "Auttune",
    org: "YC x Medplum Hackathon",
    period: "August 2026",
    slides: [
      "/projects/auttune-1.png","/projects/auttune-2.png", "/projects/auttune-3.png"],
    description:
      "A FHIR-native AI agent that streamlines post-discharge care with voice symptom check-ins, evidence-based triage, clinician notifications, and insurance-aware follow-up.",
    tags: ["Medplum", "Moss", "Deepgram", "Stedi", "Typescript", "React"],
    links: [
      { label: "GitHub", href: "https://github.com/shwe-kandhalu/Attune" },
    ],
  },
  {
    order: 4,
    name: "Scribe",
    org: "Handshake",
    period: "April 2026",
    slides: ["/projects/scribe.png"],
    description:
      "Instantly turns data outputs into polished written narratives. Upload CSV tables, figures, or model summaries, choose your tone/format, and get publication-ready text in seconds. Refine and incorporate new data via chat. Built out of frustration with staring at model outputs. For researchers, analysts, and consultants who have the numbers but need the words.",
    tags: ["Claude Code", "Gemini", "Codex"],
    links: [
      { label: "Live", href: "https://scribe-ai-fawn.vercel.app" },
    ],
  },
  {
    order: 3,
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
    order: 7,
    name: "AI Clinical Trial Recruitment Platform",
    org: "CalHacks 12.0",
    period: "Oct 2025",
    slides: ["/projects/mify.png"],
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
    period: "April 2025 – July 2026",
    slides: [
      "/projects/ftd-1.png","/projects/ftd-2.png", "/projects/ftd-3.png"],
    description:
      "Analyzed cerebrospinal fluid proteomic data to evaluate diagnostic accuracy of neurodegeneration biomarkers (NfL, GFAP, NPTX2) for FTD disease severity using ROC curves, correlation analyses, and mixed-model longitudinal analyses.",
    tags: ["R", "Biostatistics", "Proteomics", "Clinical Research"],
    links: [
      // { label: "Paper", href: "https://..." },
    ],
  },
  {
    order: 2,
    name: "Heart Failure Readmission Risk Analysis",
    org: "UCSF — Epi 231: Clinical EHR Data Science",
    period: "2025",
    slides: ["/projects/heart-failure.png"],
    description:
      "Identified patient characteristics most strongly associated with 30-day readmission among heart failure patients using UCSF Epic EHR data. Produced stratified descriptive statistics (Table 1), logistic regression results (Table 2), and visualizations. Data is de-identified and not publicly shareable.",
    tags: ["T-SQL", "R", "tidyverse", "ggplot2", "Logistic Regression", "EHR", "Clinical Data"],
    links: [],
  },
  {
    order: 8,
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
