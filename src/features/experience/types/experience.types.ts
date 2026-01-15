export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string; // Kept for compatibility, though currently empty in data
  points: string[];
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  description: string;
  items: ExperienceItem[];
}
