
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Settings, 
  Cpu, 
  Trophy, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Github, 
  Smartphone,
  BookOpen
} from 'lucide-react';
import { Project, Skill, Achievement, Certification, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Orbit-XOS",
    description: "Advanced satellite collision avoidance system with 3D orbital visualizations and real-time data processing.",
    tech: ["React", "Three.js", "Satellite.js", "Python"],
    github: "#",
    image: "https://picsum.photos/seed/orbit/600/400"
  },
  {
    id: 2,
    title: "Green House Gas – Fuse Net",
    description: "AI-powered emissions dashboard providing ESG reports and CO2 visualization for sustainable industrial growth.",
    tech: ["React", "Node.js", "Python", "D3.js"],
    github: "#",
    image: "https://picsum.photos/seed/gas/600/400"
  },
  {
    id: 3,
    title: "Employee Payroll Management",
    description: "Comprehensive HR solution for automated payroll, attendance tracking, and salary calculation.",
    tech: ["Java", "AWT", "MySQL"],
    github: "#",
    image: "https://picsum.photos/seed/payroll/600/400"
  },
  {
    id: 4,
    title: "Retail Management System",
    description: "Full-stack inventory and order management system with a structured relational database.",
    tech: ["Node.js", "MySQL", "JavaScript", "HTML/CSS"],
    github: "#",
    image: "https://picsum.photos/seed/retail/600/400"
  }
];

export const SKILLS: Record<string, Skill[]> = {
  "Languages": [
    { name: "Java", level: 90, icon: "Terminal" },
    { name: "JavaScript", level: 85, icon: "Code2" },
    { name: "C", level: 75, icon: "Settings" },
    { name: "SQL", level: 80, icon: "Database" }
  ],
  "Web & Frameworks": [
    { name: "React.js", level: 88, icon: "Layout" },
    { name: "Node.js", level: 82, icon: "Settings" },
    { name: "HTML/CSS", level: 95, icon: "Layout" },
    { name: "MySQL", level: 80, icon: "Database" }
  ],
  "Tools": [
    { name: "Git", level: 85, icon: "Code2" },
    { name: "GitHub", level: 90, icon: "Github" },
    { name: "VS Code", level: 95, icon: "Terminal" },
    { name: "Linux", level: 70, icon: "Cpu" }
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "2nd Prize – Paper Presentation",
    description: "Awarded for the paper 'Reducing Poverty Using Blockchain' at National Level.",
    icon: "Trophy"
  },
  {
    title: "Finalist – U & Me Hackathon",
    description: "State-level finalist for an innovative healthcare solution.",
    icon: "Trophy"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Fundamentals of AI", issuer: "EDUNET", date: "May 2025" },
  { name: "Java Programming", issuer: "NPTEL", date: "Apr 2024" },
  { name: "Web Development Bootcamp", issuer: "Udemy", date: "In Progress" }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E Computer Science",
    institution: "M Kumarasamy College of Engineering",
    period: "2023 – 2027",
    score: "CGPA: 7.5"
  },
  {
    degree: "12th CBSE",
    institution: "Secondary Education",
    period: "2023",
    score: "84%"
  },
  {
    degree: "10th CBSE",
    institution: "Secondary Education",
    period: "2021",
    score: "87.2%"
  }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "#", icon: <Linkedin size={20} /> },
  { name: "GitHub", url: "#", icon: <Github size={20} /> },
  { name: "Email", url: "mailto:rohith.b@example.com", icon: <Mail size={20} /> },
  { name: "Phone", url: "tel:+910000000000", icon: <Smartphone size={20} /> }
];
