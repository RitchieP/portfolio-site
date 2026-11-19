import { RiFlutterFill } from "react-icons/ri";
import {
  SiDart,
  SiGooglemaps,
  SiPython,
  SiHuggingface,
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiElectron,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiGraphql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiLinux,
  SiAndroid,
  SiApple,
  SiSwift,
  SiKotlin,
  SiCplusplus,
  SiC,
  SiFastapi,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { TbBrandOpenai, TbBrandCSharp } from "react-icons/tb";

// Raw mapping for direct lookups
export const techIconMap = {
  // Mobile & Cross-platform
  Flutter: RiFlutterFill,
  Dart: SiDart,
  Android: SiAndroid,
  iOS: SiApple,
  Apple: SiApple,
  Swift: SiSwift,
  Kotlin: SiKotlin,

  // Languages
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C++": SiCplusplus,
  C: SiC,
  "C#": TbBrandCSharp,

  // Frontend & Styling
  React: SiReact,
  ReactJS: SiReact,
  "Next.js": SiNextdotjs,
  NextJS: SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,

  // Backend & Databases
  NodeJS: SiNodedotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Postgres: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  GraphQL: SiGraphql,
  Prisma: SiPrisma,

  // AI & Data Science
  Huggingface: SiHuggingface,
  "Hugging Face": SiHuggingface,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  OpenCV: SiOpencv,
  OpenAI: TbBrandOpenai,

  // APIs, Tools & Platforms
  "Google Maps": SiGooglemaps,
  "Google Maps API": SiGooglemaps,
  Docker: SiDocker,
  Electron: SiElectron,
  ElectronJS: SiElectron,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Postman: SiPostman,
  Figma: SiFigma,
  Vercel: SiVercel,
};

// Normalized lookup for case-insensitive and flexible matching
const normalizedMap = Object.entries(techIconMap).reduce((acc, [key, icon]) => {
  const normalized = key.toLowerCase().replace(/[^a-z0-9]/g, "");
  acc[normalized] = icon;
  return acc;
}, {});

// Specific aliases for common variations
normalizedMap["dart"] = SiDart;
normalizedMap["flutter"] = RiFlutterFill;
normalizedMap["googlemaps"] = SiGooglemaps;
normalizedMap["googlemapsapi"] = SiGooglemaps;
normalizedMap["maps"] = SiGooglemaps;
normalizedMap["gmaps"] = SiGooglemaps;
normalizedMap["next"] = SiNextdotjs;
normalizedMap["nextjs"] = SiNextdotjs;
normalizedMap["react"] = SiReact;
normalizedMap["reactjs"] = SiReact;
normalizedMap["tailwind"] = SiTailwindcss;
normalizedMap["tailwindcss"] = SiTailwindcss;
normalizedMap["node"] = SiNodedotjs;
normalizedMap["nodejs"] = SiNodedotjs;
normalizedMap["mongo"] = SiMongodb;
normalizedMap["mongodb"] = SiMongodb;
normalizedMap["express"] = SiExpress;
normalizedMap["expressjs"] = SiExpress;
normalizedMap["electron"] = SiElectron;
normalizedMap["electronjs"] = SiElectron;
normalizedMap["hf"] = SiHuggingface;
normalizedMap["huggingface"] = SiHuggingface;
normalizedMap["postgres"] = SiPostgresql;
normalizedMap["postgresql"] = SiPostgresql;
normalizedMap["cpp"] = SiCplusplus;
normalizedMap["cplusplus"] = SiCplusplus;
normalizedMap["csharp"] = TbBrandCSharp;
normalizedMap["cs"] = TbBrandCSharp;
normalizedMap["ts"] = SiTypescript;
normalizedMap["js"] = SiJavascript;
normalizedMap["py"] = SiPython;

/**
 * Returns the corresponding React Icon component for a given technology name.
 * Uses case-insensitive, punctuation-stripped matching.
 */
export function getTechIcon(techName) {
  if (!techName || typeof techName !== "string") return null;
  if (techIconMap[techName]) return techIconMap[techName];
  const cleaned = techName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalizedMap[cleaned] || null;
}

export const fallbackExperiences = [
  {
    _id: "fallback-1",
    jobTitle: "Software Engineer",
    company: "MES Innovation Sdn Bhd",
    employmentType: "Full-time",
    startDate: "July 2025",
    endDate: "May 2026",
    isCurrent: false,
    bulletPoints: [
      "Debug and resolve software issues in a fast-paced development environment.",
      "Implement new features and improvements to existing software applications.",
      "Manages CI/CD pipelines for automated testing and deployment.",
    ],
  },
  {
    _id: "fallback-2",
    jobTitle: "Research and Development Engineer",
    company: "Assassins Robotics",
    employmentType: "Part-time",
    startDate: "January 2019",
    endDate: null,
    isCurrent: true,
    bulletPoints: [
      "Research and develop advanced robotics toolkits and algorithms with Python.",
      "Teaches students aged 7 to 15 about concepts in robotics and programming.",
      "Prepares students for tournaments, this includes brainstorming ideas, extensive testing on the robot, preparing test logs, and presentation practices.",
    ],
  },
  {
    _id: "fallback-3",
    jobTitle: "Software Engineer Intern",
    company: "CodeTrace Sdn Bhd",
    employmentType: "Internship",
    startDate: "March 2023",
    endDate: "August 2023",
    isCurrent: false,
    bulletPoints: [
      "Developed and shipped an automated PDF data extraction software using ReactJS and Python. Wrapped into a desktop application using ElectronJS.",
      "Built and hosted an inventory management system with ReactJS combined with Tailwind CSS connected to a Firebase backend.",
    ],
  },
];

export const fallbackProjects = [
  {
    _id: "fallback-p1",
    title: "VerbaLex",
    description: "Text-to-speech application to help transcribe accented speech.",
    projectUrl: "https://github.com/RitchieP/VerbaLex",
    thumbnailSrc: "/verbalex.png",
    technologies: ["Flutter", "Huggingface", "Python"],
  },
  {
    _id: "fallback-p2",
    title: "MyRescue",
    description: "Resource management system during a natural disaster.",
    projectUrl: "https://github.com/RitchieP/my_rescue",
    thumbnailSrc: "/myrescue.png",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
  },
  {
    _id: "fallback-p3",
    title: "MyUSM",
    description: "Centralized information system for all individuals associated with Universiti Sains Malaysia.",
    projectUrl: "https://github.com/GDSC-USM/MyUSM",
    thumbnailSrc: "/myusm.png",
    technologies: ["Flutter", "Firebase"],
  },
];

export const fallbackSkillCategories = [
  {
    _id: "fallback-s1",
    title: "Frontend",
    skills: ["ReactJS", "Tailwind CSS", "Flutter"],
  },
  {
    _id: "fallback-s2",
    title: "Backend",
    skills: ["NodeJS", "MongoDB", "Express", "Firebase"],
  },
  {
    _id: "fallback-s3",
    title: "Soft Skills",
    skills: ["Collaboration", "Effective Communication", "Leadership", "Analytical Thinking"],
  },
  {
    _id: "fallback-s4",
    title: "Others",
    skills: ["Python", "ElectronJS", "Google Cloud Services"],
  },
];
