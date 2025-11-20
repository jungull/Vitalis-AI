import { GanttTask, Persona, FinancialMetric } from './types';

export const APP_NAME = "Vitalis AI";
export const SLOGAN = "Your Conversational Path to Holistic Wellness";

export const PERSONAS: Persona[] = [
  {
    segment: "Beginner Fitness Seekers",
    personaName: "Alex, 28",
    profile: "Works a desk job, wants to get active again. Has limited exercise experience.",
    goals: "Learn fitness basics, stay motivated, and build consistent habits.",
    icon: "🌱"
  },
  {
    segment: "Wellness Enthusiasts",
    personaName: "Taylor, 35",
    profile: "Practices yoga and mindfulness. Seeks balance between body and mind.",
    goals: "Integrate physical, mental, and nutritional wellness in one place.",
    icon: "🧘"
  },
  {
    segment: "Busy Professionals",
    personaName: "Jordan, 40",
    profile: "Limited time for workouts. Balances work, family, and health.",
    goals: "Quick personalized routines, smart reminders, and stress management.",
    icon: "💼"
  },
  {
    segment: "Community-Oriented",
    personaName: "Sam, 24",
    profile: "Loves social challenges. Finds motivation through engagement.",
    goals: "Join group challenges, share progress, and maintain accountability.",
    icon: "🤝"
  },
  {
    segment: "Goal Trackers",
    personaName: "Morgan, 32",
    profile: "Training for a 5K or physique goal. Data-driven and performance-focused.",
    goals: "Track progress with analytics, adaptive plans, and milestone tracking.",
    icon: "📊"
  },
  {
    segment: "Health Optimizers",
    personaName: "Marcus, 32",
    profile: "Software Engineer. Deeply engaged in bio-optimization and performance data.",
    goals: "Centralized data insights, AI-driven optimization, recovery tracking.",
    icon: "🚀"
  },
  {
    segment: "Recovery Rebuilders",
    personaName: "Sofia, 41",
    profile: "Nurse Practitioner recovering from injury. Rebuilding strength and confidence.",
    goals: "Adaptive rehab guidance, pain tracking, and recovery milestones.",
    icon: "❤️‍🩹"
  }
];

export const GANTT_DATA: GanttTask[] = [
  { phase: "Concept", task: "Draft Idea", start: "2025-11-15", end: "2025-11-22", duration: 8 },
  { phase: "Concept", task: "Draft Concept", start: "2025-11-18", end: "2025-12-02", duration: 15 },
  { phase: "Concept", task: "Draft Features", start: "2025-11-25", end: "2025-12-09", duration: 15 },
  { phase: "Concept", task: "Define MVP", start: "2025-12-02", end: "2025-12-16", duration: 15 },
  { phase: "Concept", task: "Tech Stack", start: "2025-12-16", end: "2025-12-30", duration: 15 },
  { phase: "Research", task: "Competitor Analysis", start: "2025-12-30", end: "2026-01-13", duration: 15 },
  { phase: "Research", task: "User Research", start: "2026-01-06", end: "2026-01-27", duration: 22 },
  { phase: "Design", task: "Create Mockups", start: "2026-01-20", end: "2026-02-10", duration: 22 },
  { phase: "Design", task: "Build Prototypes", start: "2026-02-10", end: "2026-03-03", duration: 22 },
  { phase: "Development", task: "Backend Setup", start: "2026-02-17", end: "2026-03-24", duration: 36 },
  { phase: "Development", task: "Frontend Dev", start: "2026-02-24", end: "2026-04-21", duration: 57 },
  { phase: "Development", task: "AI Integration", start: "2026-03-10", end: "2026-04-21", duration: 43 },
  { phase: "Launch Prep", task: "Public Launch", start: "2026-05-19", end: "2026-05-26", duration: 8 },
  { phase: "Growth", task: "Feature Expansion", start: "2026-05-19", end: "2026-06-16", duration: 29 },
];

export const FINANCIALS: FinancialMetric[] = [
  { year: "Year 1", revenue: 150000, users: 5000, cost: 120000, profit: 30000 },
  { year: "Year 2", revenue: 850000, users: 25000, cost: 400000, profit: 450000 },
  { year: "Year 3", revenue: 2500000, users: 85000, cost: 900000, profit: 1600000 },
];

export const PROBLEM_STATEMENT = `Most fitness apps separate workouts, nutrition, and recovery tracking into disconnected tools that demand constant manual input. Users lose consistency because tracking feels tedious and feedback is generic. Current systems fail to connect daily choices such as sleep, stress, and diet to real performance or recovery outcomes. Individuals in different phases—training, maintenance, or rehabilitation—lack adaptive guidance that evolves with their condition.`;

export const SOLUTION_STATEMENT = `The solution is a conversational, data-driven wellness app that interprets user input, images, and health metrics automatically, delivering real-time coaching and holistic optimization with minimal effort from the user.`;
