export enum SectionId {
  TITLE = 'title',
  COMPANY = 'company',
  MARKET = 'market',
  MARKETING = 'marketing',
  OPERATIONS = 'operations',
  FINANCIALS = 'financials',
  DEMO = 'demo'
}

export interface Persona {
  segment: string;
  personaName: string;
  profile: string;
  goals: string;
  icon: string;
}

export interface GanttTask {
  phase: string;
  task: string;
  start: string;
  end: string;
  duration: number;
}

export interface FinancialMetric {
  year: string;
  revenue: number;
  users: number;
  cost: number;
  profit: number;
}
