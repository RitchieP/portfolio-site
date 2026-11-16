import { RiFlutterFill } from "react-icons/ri";
import {
  SiHuggingface,
  SiPython,
  SiFirebase,
  SiGooglemaps,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiElectron,
} from "react-icons/si";

export const techIconMap = {
  Flutter: RiFlutterFill,
  Huggingface: SiHuggingface,
  Python: SiPython,
  Firebase: SiFirebase,
  "Google Maps API": SiGooglemaps,
  React: SiReact,
  ReactJS: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  NodeJS: SiNodedotjs,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  ElectronJS: SiElectron,
};

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
