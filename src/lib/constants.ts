/**
 * ==========================================================
 * Portfolio Constants
 * Single Source of Truth
 * ==========================================================
 */

export const SITE_CONFIG = {
  name: "Abdul Rafay",

  shortName: "AR",

  title: "Abdul Rafay | Full Stack MERN Developer",

  description:
    "Full Stack MERN Developer specializing in React, Next.js, Node.js, Express.js, MongoDB and modern web applications.",

  url: "https://abdulrafay-developer.vercel.app",

  author: "Abdul Rafay",

  location: "Karachi, Pakistan",

  email: "abdulrafay0608@gmail.com",

  phone: "+92 316 0025 477",

  keywords: [
    "Abdul Rafay",
    "Portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "JavaScript",
    "TypeScript",
  ],
} as const;

export const NAV_LINKS = [
  { id: 1, title: "Home", href: "/" },

  { id: 2, title: "About", href: "#about" },

  { id: 3, title: "Experience", href: "#experience" },

  { id: 4, title: "Skills", href: "#skills" },

  { id: 5, title: "Projects", href: "#projects" },

  { id: 6, title: "Testimonials", href: "#testimonials" },

  { id: 7, title: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/abdulrafay0608",

  linkedin: "https://linkedin.com/in/abdulrafay0608",

  twitter: "",

  instagram: "",

  email: "mailto:abdulrafay0608@gmail.com",
} as const;

export const THEME = {
  defaultTheme: "dark",

  enableSystem: true,
} as const;

export const ANIMATION = {
  duration: 0.5,

  delay: 0.2,

  stagger: 0.15,

  ease: "easeInOut",
} as const;

export const LAYOUT = {
  maxWidth: "1440px",

  container: "max-w-7xl",

  sectionSpacing: "py-28",
} as const;

export const BUTTON_VARIANTS = {
  primary: "primary",

  secondary: "secondary",

  outline: "outline",

  ghost: "ghost",
} as const;

export const SKILL_CATEGORIES = [
  "Frontend",

  "Backend",

  "Database",

  "Tools",

  "Deployment",
] as const;

export const CONTACT = {
  availability: "Available for Freelance",

  responseTime: "Usually replies within 24 hours",
} as const;
