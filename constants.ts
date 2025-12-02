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
  // Year 1: Foundation & Launch (2025-2026)
  { phase: "Year 1: Concept", task: "Market Research & MVP Scope", start: "2025-11-01", end: "2026-01-31", duration: 90 },
  { phase: "Year 1: Dev", task: "Core AI & App Development", start: "2026-02-01", end: "2026-06-30", duration: 150 },
  { phase: "Year 1: Launch", task: "Beta Testing & Public Launch", start: "2026-07-01", end: "2026-09-30", duration: 90 },
  { phase: "Year 1: Growth", task: "Initial User Acquisition", start: "2026-10-01", end: "2026-12-31", duration: 90 },

  // Year 2: Expansion & Retention (2027)
  { phase: "Year 2: Product", task: "iOS & Android Native Apps", start: "2027-01-01", end: "2027-04-30", duration: 120 },
  { phase: "Year 2: Growth", task: "Influencer Marketing Campaign", start: "2027-05-01", end: "2027-08-31", duration: 120 },
  { phase: "Year 2: Feature", task: "Wearable Integrations (Whoop/Apple)", start: "2027-09-01", end: "2027-12-31", duration: 120 },

  // Year 3: Scale & B2B (2028)
  { phase: "Year 3: B2B", task: "Corporate Wellness Pilot", start: "2028-01-01", end: "2028-04-30", duration: 120 },
  { phase: "Year 3: Scale", task: "International Localization", start: "2028-05-01", end: "2028-08-31", duration: 120 },
  { phase: "Year 3: R&D", task: "Advanced Biometric AI Models", start: "2028-09-01", end: "2028-12-31", duration: 120 },
];

export const FUNDING_BREAKDOWN = [
  { year: "Year 1", amount: 120000, use: "Product Development (MVP), Initial Marketing, Legal Setup" },
  { year: "Year 2", amount: 400000, use: "Server Scaling, Native App Dev, User Acquisition Campaigns" },
  { year: "Year 3", amount: 900000, use: "Global Expansion, Enterprise Sales Team, R&D" },
];

export const FINANCIALS: FinancialMetric[] = [
  { year: "Year 1", revenue: 150000, users: 5000, cost: 120000, profit: 30000 },
  { year: "Year 2", revenue: 850000, users: 25000, cost: 400000, profit: 450000 },
  { year: "Year 3", revenue: 2500000, users: 85000, cost: 900000, profit: 1600000 },
];

export const PROBLEM_STATEMENT = `Most fitness apps separate workouts, nutrition, and recovery tracking into disconnected tools that demand constant manual input. Users lose consistency because tracking feels tedious and feedback is generic. Current systems fail to connect daily choices such as sleep, stress, and diet to real performance or recovery outcomes. Individuals in different phases—training, maintenance, or rehabilitation—lack adaptive guidance that evolves with their condition.`;

export const SOLUTION_STATEMENT = `The solution is a conversational, data-driven wellness app that interprets user input, images, and health metrics automatically, delivering real-time coaching and holistic optimization with minimal effort from the user.`;
